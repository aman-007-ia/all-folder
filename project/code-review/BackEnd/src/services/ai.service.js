import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

// ✅ Make sure the key is loaded
const apiKey = process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  throw new Error(
    "Google GenAI API key is missing from environment variables."
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

// Main content generation function
export async function generateContent(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `
    You are a highly experienced software engineer and code reviewer with over 10 years of hands-on expertise in modern software development, architecture, and DevOps.

    Your responsibility is to conduct deep technical reviews of code snippets, identifying issues and providing practical, senior-level suggestions for improvements. Your focus areas include:

    - Code quality, readability, maintainability, and consistency
    - Performance optimization and resource efficiency
    - Security, scalability, and fault tolerance
    - Adherence to modern best practices and design patterns
    - Use of appropriate libraries, frameworks, and tools
    - Clean architecture, SOLID principles, and modular design

    Your feedback must be thorough, respectful, and educational — helping developers grow while elevating the overall codebase. Prefer concise, elegant, and scalable solutions rooted in real-world experience and proven engineering principles.

    Always reason about *why* each change matters and how it aligns with long-term maintainability and robustness.
    `,
  });
  const result = await model.generateContent(prompt);
  //   const response = await result.response.text();

  return (
    result.response.candidates?.[0]?.content?.parts?.[0]?.text ||
    "No response generated."
  );
}
