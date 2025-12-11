const express = require('express');
const bodyParser = require('express').json;
// Force Vercel Rebuild with new Env Vars
const dotenv = require('dotenv');
const cors = require('cors'); // --- TAMBAH INI ---
const path = require('path'); // Import path module
dotenv.config();

const ReportRepository = require('./repositories/reportRepository');
const AIService = require('./services/aiService');
const ReportService = require('./services/reportService');
const { makeReportController } = require('./controllers/reportController');
const reportRoutesFactory = require('./routes/reportRoutes');
const imageUtil = require('./utils/imageUtil');
const db = require('./config/db');

function createApp() {
  const app = express();

  // --- TAMBAH MIDDLEWARE CORS ---
  // Mengizinkan request dari semua origin (hanya untuk pengembangan)
  app.use(cors());

  // Ensure database table exists
  db.initializeDatabase();
  // ------------------------------

  // --- DEBUG ROUTE (Active Probe - GROK) ---
  app.get('/api/debug-key', async (req, res) => {
    try {
      const aiService = new AIService({ apiKey: process.env.GROK_API_KEY });

      // Minimal test payload (1x1 transparent pixel) just to test auth
      const testImage = {
        data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
        mimeType: "image/png"
      };

      // We'll try to score this dummy image
      const score = await aiService.scoreWound(testImage);

      return res.json({
        status: 'success',
        provider: 'grok-xai',
        score: score,
        keySuffix: aiService.apiKey ? aiService.apiKey.slice(-4) : 'none',
        note: "If this works, your Key and Backend are perfect."
      });

    } catch (error) {
      return res.json({
        status: 'failed',
        provider: 'grok-xai',
        error: error.message,
        stack: error.stack,
        keySuffix: (process.env.GROK_API_KEY || "none").slice(-4),
        tip: "If 401: Your 'vck' key might not work with api.x.ai directly.",
        keyType: (process.env.GROK_API_KEY || "").startsWith('vck') ? "Vercel Key (vck)" : "Standard Key"
      });
    }
  });
  // ------------------------------------

  // Serve static files
  // In Vercel, files are in /tmp. locally in ../uploads
  const uploadDir = process.env.VERCEL ? '/tmp' : path.join(__dirname, '../uploads');

  // Mount at /api/uploads so it matches the URL structure we will use in frontend
  app.use('/api/uploads', express.static(uploadDir));
  // Also keep /uploads for backward compatibility/local if needed, but /api/uploads is safer for Vercel rewrites
  app.use('/uploads', express.static(uploadDir));

  app.use(bodyParser({ limit: '10mb' }));

  const reportRepo = new ReportRepository(db);
  const aiService = new AIService({ apiUrl: process.env.AI_API_URL, apiKey: process.env.AI_API_KEY });
  const reportService = new ReportService({ reportRepository: reportRepo, aiService, imageUtil });

  const controller = makeReportController({ reportService });

  // Mount at /api/reports to match Vercel rewrite structure
  app.use('/api/reports', reportRoutesFactory(controller));

  // error handler
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: err.message || 'Internal Server Error' });
  });

  return app;
}

module.exports = createApp;