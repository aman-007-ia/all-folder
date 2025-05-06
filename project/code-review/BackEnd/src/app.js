import express from "express";
import dotenv from "dotenv";
import aiRoutes from "../src/routes/ai.routes.js"; // adjust path if needed
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

// ✅ MIDDLEWARE TO PARSE JSON
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

// ✅ ROUTES
app.use("/ai", aiRoutes);

export default app;
