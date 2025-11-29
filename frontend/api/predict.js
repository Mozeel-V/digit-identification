import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body;

    const { imageBase64, mimeType } = body || {};

    if (!imageBase64 || !mimeType) {
      return res
        .status(400)
        .json({ error: "Missing imageBase64 or mimeType in request body" });
    }

    const base64Data = imageBase64.includes("base64,")
      ? imageBase64.split("base64,")[1]
      : imageBase64;

    const image = {
      inlineData: {
        data: base64Data,
        mimeType,
      },
    };

    const prompt =
      "This image contains a single handwritten digit between 0 and 9. " +
      "Respond with ONLY the digit, no extra text.";

    const result = await model.generateContent([prompt, image]);
    const text = result.response.text().trim();

    const match = text.match(/[0-9]/);
    if (!match) {
      return res.status(500).json({
        error: "Could not find a digit in model response",
        rawResponse: text,
      });
    }

    const digit = parseInt(match[0], 10);
    return res.status(200).json({ digit, rawResponse: text });
  } catch (err) {
    console.error("Vercel predict error:", err);
    return res.status(500).json({
      error: "Error processing image",
      details: err.message || String(err),
    });
  }
}
