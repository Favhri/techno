
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const generateEventConcept = async (prompt: string): Promise<any> => {
  if (!API_KEY) {
    throw new Error("API Key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          theme: { type: Type.STRING, description: "A creative name for the event theme" },
          vibe: { type: Type.STRING, description: "Descriptive words for the atmosphere" },
          activities: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "List of unique activities for the event"
          },
          estimatedCostRange: { type: Type.STRING, description: "A realistic budget range" },
          venueSuggestions: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Types of venues that suit this concept"
          }
        },
        required: ["theme", "vibe", "activities", "estimatedCostRange", "venueSuggestions"]
      }
    }
  });

  return JSON.parse(response.text || "{}");
};
