// src/services/reportService.js
class ReportService {
    constructor({ reportRepository, aiService, imageUtil }) {
        this.reportRepository = reportRepository;
        this.aiService = aiService;
        this.imageUtil = imageUtil;
    }

    // Fungsi utama: Membuat dan menyimpan laporan 
    async createReport(payload, files) {
        const imageUrl = files.image?.[0]?.path || null;
        const woundFile = files.wound?.[0] || null;
        const woundImageUrl = woundFile?.path || null;

        let woundScore = null;

        if (payload.wound_score) {
            woundScore = parseInt(payload.wound_score, 10);
        }
        else if (woundImageUrl) {
            try {
                woundScore = await this.scoreOnly(woundFile);
            } catch (error) {
                console.error(`Error during AI scoring during report creation:`, error.message);
                throw error;
            }
        }

        const report = {
            name: payload.nama,
            phone: payload.nomorHp,
            email: payload.email,
            facility: payload.lokasi_puskesmas || payload.lokasi,
            gender: payload.jenis_kelamin || payload.gender,
            description: payload.deskripsi,
            date: payload.tanggal,
            imageUrl: imageUrl,
            woundImageUrl: woundImageUrl,
            woundScore: woundScore,
        };

        const created = await this.reportRepository.create(report);
        return created;
    }

    async scoreOnly(woundFile) {
        if (!woundFile || !woundFile.path) {
            throw new Error("File gambar luka tidak ditemukan.");
        }

        try {
            const mimeType = woundFile.mimetype || 'image/jpeg';

            const base64Data = this.imageUtil.convertImageToBase64(woundFile.path, mimeType);
            const woundScore = await this.aiService.scoreWound(base64Data);

            return woundScore;
        } catch (error) {
            console.error(`Error during AI scoring:`, error.message);
            throw error;
        }
    }

    async generateReportImage(report, options = { width: 1080, height: 1920 }) {
        return this.imageUtil.generateReportImage(report, options);
    }
}

module.exports = ReportService;