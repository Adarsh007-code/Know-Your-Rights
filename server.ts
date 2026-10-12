import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { generateLocalCaseAnalysis } from "./src/data/legalIndex";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Telemetry & initialization for Gemini SDK
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// Health endpoint
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({
    status: "ok",
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString()
  });
});

// Legal Problem Analysis Endpoint
app.post("/api/analyze", async (req: Request, res: Response) => {
  const { problemText, location, category, dateOccurred } = req.body || {};

  if (!problemText || typeof problemText !== "string" || problemText.trim().length === 0) {
    return res.status(400).json({ error: "Please provide a description of the problem." });
  }

  const ai = getGeminiClient();
  const caseId = `KYR-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (ai) {
    try {
      const systemInstruction = `You are an Indian legal awareness and citizen empowerment advisor for the platform "KNOW YOUR RIGHTS".
Your task is to analyze the user's situation and return structured educational information under Indian Law.
RULES:
1. You must NOT fabricate laws, sections, court judgments, or false deadlines. Cite only real Indian statutes (e.g., Bharatiya Nyaya Sanhita 2023, Indian Penal Code, Information Technology Act 2000, Consumer Protection Act 2019, Code on Wages, etc.).
2. You are NOT a replacement for an advocate or court. Maintain an objective, educational tone.
3. Clearly specify the first steps, evidence preservation checklist, relevant Indian acts, official redressal portals/helplines, and warnings.
Return strictly valid JSON matching the requested schema.`;

      const prompt = `User's Problem Description:
"${problemText}"
Location: ${location || "India"}
Category: ${category || "General"}
Date: ${dateOccurred || "Recent"}

Analyze this problem under Indian legal principles and return a structured JSON response.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              situationSummary: {
                type: Type.STRING,
                description: "Concise objective summary of the user's situation.",
              },
              possibleLegalAreas: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of legal domains (e.g., CONSUMER, CYBER, PROPERTY, LABOUR).",
              },
              firstSteps: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stepNumber: { type: Type.STRING },
                    title: { type: Type.STRING },
                    description: { type: Type.STRING },
                    actionItem: { type: Type.STRING },
                    urgent: { type: Type.BOOLEAN },
                  },
                  required: ["stepNumber", "title", "description"],
                },
              },
              evidenceToPreserve: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    label: { type: Type.STRING },
                    description: { type: Type.STRING },
                    checked: { type: Type.BOOLEAN },
                    required: { type: Type.BOOLEAN },
                  },
                  required: ["id", "label", "checked"],
                },
              },
              relevantLaws: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    actName: { type: Type.STRING },
                    provision: { type: Type.STRING },
                    shortExplanation: { type: Type.STRING },
                    officialRecourse: { type: Type.STRING },
                    status: { type: Type.STRING },
                    keyRights: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                  },
                  required: ["actName", "provision", "shortExplanation", "officialRecourse", "status", "keyRights"],
                },
              },
              warnings: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              whenToSeekProfessionalHelp: {
                type: Type.STRING,
              },
              authoritiesToApproach: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    type: { type: Type.STRING },
                    contact: { type: Type.STRING },
                    portal: { type: Type.STRING },
                  },
                  required: ["name", "type"],
                },
              },
            },
            required: [
              "situationSummary",
              "possibleLegalAreas",
              "firstSteps",
              "evidenceToPreserve",
              "relevantLaws",
              "warnings",
              "whenToSeekProfessionalHelp",
            ],
          },
        },
      });

      const parsed = JSON.parse(response.text || "{}");
      return res.json({
        caseId,
        timestamp: now,
        problemText,
        location: location || "India",
        category: category || "General",
        dateOccurred: dateOccurred || "Recent",
        source: "AI_ANALYSIS",
        ...parsed,
      });
    } catch (err: any) {
      console.warn("Gemini API call failed, falling back to local legal database:", err?.message);
    }
  }

  // Fallback to verified local legal database
  const fallbackResult = generateLocalCaseAnalysis(problemText, location, category, dateOccurred);
  return res.json(fallbackResult);
});

async function startServer() {
  // Serve static files from public directory
  app.use(express.static(path.join(process.cwd(), "public")));

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Know Your Rights server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
