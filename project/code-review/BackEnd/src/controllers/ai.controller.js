import { generateContent } from "../services/ai.service.js";

export async function getReview(req, res) {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const result = await generateContent(code);
    res.send(result);
  } catch (error) {
    console.error("AI service error:", error);
    res.status(500).json({ error: "AI processing failed" });
  }
}
