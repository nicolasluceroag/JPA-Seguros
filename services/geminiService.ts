
import { GoogleGenAI } from "@google/genai";
import { QuoteRequest } from "../types";

// Always use const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartAdvice = async (quote: QuoteRequest): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analiza esta solicitud de cotización de seguro y ofrece 3 consejos rápidos y personalizados en español.
      Nombre: ${quote.fullName}
      Tipo de Seguro: ${quote.insuranceType}
      Detalles: ${quote.details}
      
      Formato de respuesta: Markdown limpio con viñetas.`,
      config: {
        systemInstruction: "Eres un experto asesor de seguros senior con 20 años de experiencia. Tu tono es profesional, empático y servicial. No uses lenguaje técnico innecesario.",
      },
    });

    // response.text is a property, not a method.
    return response.text || "No pudimos generar consejos en este momento, pero un asesor se pondrá en contacto pronto.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error al conectar con nuestro asesor inteligente. Por favor, intenta de nuevo.";
  }
};
