import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
dotenv.config();

async function run() {
  try {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("No API key");
    
    let pageToken = "";
    do {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}${pageToken ? '&pageToken=' + pageToken : ''}`);
      const data = await response.json();
      if (data.models) {
        data.models.forEach((m: any) => console.log(m.name));
      }
      pageToken = data.nextPageToken || "";
    } while (pageToken);
  } catch(e) {
    console.error(e);
  }
}
run();
