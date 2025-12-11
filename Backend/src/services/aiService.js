const { createOpenAI } = require('@ai-sdk/openai');
const { generateText } = require('ai');
const { z } = require('zod');

class AIService {
    constructor({ apiKey }) {
        // Just store the constructor argument, don't read env yet
        this.fallbackKey = apiKey;
        console.log("DEBUG: AIService instantiated");
    }

    /**
     * Helper to get the provider at runtime
     */
    getProvider() {
        // Runtime check for Env Vars (Safest for Vercel)
        // Check ALL possible names including the old GEMINI one and standard OPENAI
        const key = this.fallbackKey ||
            process.env.GROK_API_KEY ||
            process.env.AI_API_KEY ||
            process.env.GEMINI_API_KEY ||
            process.env.OPENAI_API_KEY ||
            process.env.GOOGLE_API_KEY;

        if (!key) {
            console.error("CRITICAL: No API Key found in any known variable.");
            return null;
        }

        return createOpenAI({
            name: 'xai',
            baseURL: 'https://api.x.ai/v1',
            apiKey: key,
        });
    }

    /**
     * Menilai tingkat keparahan luka dari gambar Base64 menggunakan Grok.
     * @param {object} base64ImageData - Objek yang berisi { data: base64String, mimeType: string }
     * @returns {Promise<number|null>} Skor keparahan 0-100, atau null jika gagal.
     */
    async scoreWound(base64ImageData) {
        try {
            console.log("DEBUG: Preparing request to Grok (xAI)...");

            // Get Provider at Runtime (Lazy Init)
            const grokProvider = this.getProvider();
            if (!grokProvider) {
                throw new Error("Missing API Key (Checked GROK_API_KEY, AI_API_KEY, GEMINI_API_KEY, OPENAI_API_KEY)");
            }

            // Convert base64 to data URL format
            const dataUrl = `data:${base64ImageData.mimeType};base64,${base64ImageData.data}`;

            // Use generateText for max compatibility (Structured Output is strict)
            const result = await generateText({
                model: grokProvider('grok-2-vision-1212'),
                messages: [
                    {
                        role: 'user',
                        content: [
                            { type: 'text', text: "Analisis gambar luka ini. Berikan skor keparahan (severity_score) dalam rentang 0-100. IMPORTANT: Reply ONLY with JSON code block: ```json { \"severity_score\": number, \"reasoning\": string } ```" },
                            { type: 'image', image: dataUrl }
                        ]
                    }
                ]
            });

            console.log("DEBUG: Grok Raw Response:", result.text);

            // Manual JSON Parsing (Robust fallback)
            // Remove markdown code blocks if any
            const cleanedText = result.text.replace(/```json/g, '').replace(/```/g, '').trim();
            // Parse strictly
            const jsonResult = JSON.parse(cleanedText);

            return jsonResult.severity_score;

        } catch (err) {
            console.error("Grok AI Error:", err.message);

            // Safe Key Logging
            const runtimeKey = process.env.GROK_API_KEY || process.env.AI_API_KEY || "undefined";
            const suffix = runtimeKey.slice(-4);

            throw new Error(`AI Service Failed (Grok): ${err.message}. Key Suffix: ${suffix}`);
        }
    }
}

module.exports = AIService;
