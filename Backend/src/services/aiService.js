class AIService {
    constructor({ apiKey }) {
        this.fallbackKey = apiKey;
        console.log("DEBUG: AIService instantiated");
    }

    /**
     * Helper to get the Key at runtime
     */
    getKey() {
        const key = this.fallbackKey ||
            process.env.GROK_API_KEY ||
            process.env.AI_API_KEY ||
            process.env.GEMINI_API_KEY ||
            process.env.OPENAI_API_KEY ||
            process.env.GOOGLE_API_KEY;
        return key;
    }

    /**
     * Menilai tingkat keparahan luka dari gambar Base64 menggunakan Grok via RAW FETCH.
     * @param {object} base64ImageData - Objek yang berisi { data: base64String, mimeType: string }
     * @returns {Promise<number|null>} Skor keparahan 0-100, atau null jika gagal.
     */
    async scoreWound(base64ImageData) {
        try {
            console.log("DEBUG: Preparing RAW request to Grok (xAI)...");

            const apiKey = this.getKey();
            if (!apiKey) {
                throw new Error("Missing API Key (Checked all env vars)");
            }

            // Construct standard OpenAI-compatible payload
            const dataUrl = `data:${base64ImageData.mimeType};base64,${base64ImageData.data}`;

            const payload = {
                model: "grok-2-vision-1212",
                messages: [
                    {
                        role: "user",
                        content: [
                            {
                                type: "text",
                                text: "Analisis gambar luka ini. Berikan skor keparahan (severity_score) dalam rentang 0-100. Jawab HANYA dengan JSON format: { \"severity_score\": number, \"reasoning\": string }"
                            },
                            {
                                type: "image_url",
                                image_url: {
                                    url: dataUrl
                                }
                            }
                        ]
                    }
                ],
                temperature: 0.1,
                stream: false
            };

            // Execute Request
            const response = await fetch("https://api.x.ai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify(payload)
            });

            // Handle Non-200 Responses
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Grok API Error ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            console.log("DEBUG: Grok Raw Response:", JSON.stringify(data, null, 2));

            // Extract Content
            const content = data.choices && data.choices[0] && data.choices[0].message ? data.choices[0].message.content : "";

            if (!content) {
                throw new Error("Grok response body was empty or malformed");
            }

            // Manual JSON Parsing
            const cleanedText = content.replace(/```json/g, '').replace(/```/g, '').trim();
            const jsonResult = JSON.parse(cleanedText);

            return jsonResult.severity_score;

        } catch (err) {
            console.error("Grok AI Error:", err.message);

            const keyUsed = this.getKey() || "undefined";
            const suffix = keyUsed.length > 4 ? keyUsed.slice(-4) : keyUsed;

            throw new Error(`AI Service Failed (Grok Raw): ${err.message}. Key Suffix: ${suffix}`);
        }
    }
}

module.exports = AIService;
