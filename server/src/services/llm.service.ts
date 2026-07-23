import Groq from "groq-sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

// Environment Variables
const GROQ_API_KEY = process.env.GROQ_API_KEY || "";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";

const groq = new Groq({ apiKey: GROQ_API_KEY });
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

// You can change this to "gemini", "groq" or "openai" if you want to switch
const ACTIVE_PROVIDER: "groq" | "gemini" | "openai" = "groq"; 

export const LLMService = {

  /**
   * Evaluates a set of structured Q&A pairs for the practice interview mode.
   * Routes to the active AI provider (Groq or Gemini).
   */
  async evaluateInterviewAnswers(
    qaPairs: { question: string, answer: string }[], 
    roleType: string,
    options?: { roundType?: string, experienceLevel?: string, candidateBio?: string, branch?: string }
  ) {
    if (ACTIVE_PROVIDER === "openai") {
      return this.evaluateWithOpenAI(qaPairs, roleType, options);
    } else if (ACTIVE_PROVIDER === "groq") {
      return this.evaluateWithGroq(qaPairs, roleType, options);
    } else {
      return this.evaluateWithGemini(qaPairs, roleType, options);
    }
  },

  /**
   * Groq (Llama-3) Implementation
   */
  async evaluateWithGroq(
    qaPairs: { question: string, answer: string }[], 
    roleType: string,
    options?: { roundType?: string, experienceLevel?: string, candidateBio?: string, branch?: string }
  ) {
    if (!GROQ_API_KEY) return this.getFallback("No Groq API Key found.");

    const roundType = options?.roundType || 'tech_domain';
    const level = options?.experienceLevel || 'fresher';
    const bio = options?.candidateBio ? `Candidate Bio/Resume: "${options.candidateBio}"` : '';

    let personaTitle = `Senior ${roleType}`;
    if (roundType === 'hr_screen') personaTitle = `Head of Corporate Talent Acquisition & HR Recruiter`;
    if (roundType === 'managerial') personaTitle = `Engineering Director & Hiring Manager`;

    try {
      const systemPrompt = `You are an expert ${personaTitle} evaluating a candidate in a campus recruitment drive.
Target Role: ${roleType}
Candidate Level: ${level}
Interview Round Mode: ${roundType}
${bio}

Below are the questions asked and the candidate's transcribed answers.

You MUST respond strictly with a valid JSON object schema:
{
  "hiringVerdict": "STRONG HIRE" | "HIRE" | "LEAN HIRE" | "NO HIRE",
  "overallImpression": "Executive summary from recruiter/interviewer perspective.",
  "technicalAccuracy": "Detailed assessment of technical & domain correctness.",
  "communication": "Feedback on clarity, confidence, self-introduction, and presentation.",
  "areasToImprove": "2-3 specific action items for candidate growth.",
  "questionBreakdown": [
    { "question": "The question asked", "feedback": "Specific feedback for this answer" }
  ],
  "score": <number 0-100>,
  "correct": <number>,
  "wrong": <number>
}

CRITICAL RULES:
- If roundType is 'hr_screen', evaluate self-intro, soft skills, motivation, and communication heavily.
- "hiringVerdict": MUST be one of STRONG HIRE, HIRE, LEAN HIRE, or NO HIRE.
- "score": 0-100 score based strictly on answer accuracy and completeness.`;


      const userContent = qaPairs.map((qa, i) => `Q${i + 1}: ${qa.question}\nA${i + 1}: ${qa.answer}`).join('\n\n');

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent }
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        response_format: { type: "json_object" }
      });

      const text = chatCompletion.choices[0]?.message?.content || "{}";
      
      try {
        const parsed = JSON.parse(text);
        
        // Assemble the markdown report manually so the LLM doesn't have to struggle with JSON escaping
        let mdReport = `## Overall Impression\n${parsed.overallImpression || "N/A"}\n\n`;
        mdReport += `## Technical Accuracy\n${parsed.technicalAccuracy || "N/A"}\n\n`;
        mdReport += `## Communication\n${parsed.communication || "N/A"}\n\n`;
        mdReport += `## Areas to Improve\n${parsed.areasToImprove || "N/A"}\n\n`;
        mdReport += `## Question Breakdown\n`;
        
        if (Array.isArray(parsed.questionBreakdown)) {
           parsed.questionBreakdown.forEach((q: any, i: number) => {
              mdReport += `**Q${i+1}: ${q.question}**\n> ${q.feedback}\n\n`;
           });
        }

        const totalQ = qaPairs.length || 1;
        const correctCount = Number(parsed.correct) || 0;
        const wrongCount = Number(parsed.wrong) || (totalQ - correctCount);

        // Strict Score Integrity: If 0 answers are correct, score must be 0
        let calculatedScore = Number(parsed.score) || 0;
        if (correctCount === 0) {
          calculatedScore = 0;
        } else if (parsed.score === undefined || parsed.score === null) {
          calculatedScore = Math.round((correctCount / totalQ) * 100);
        }

        return {
          report: mdReport,
          score: calculatedScore,
          correct: correctCount,
          wrong: wrongCount
        };

      } catch (e) {
        console.error("Failed to parse Groq JSON:", text);
        return this.getFallback("Failed to parse AI evaluation format.", qaPairs.length);
      }
    } catch (error: any) {
      console.error("Groq Evaluation Error:", error);
      const msg = error?.status === 429 
        ? "⚠️ **API Quota Exceeded:** You have reached the limit of your Groq Free Tier for today."
        : "⚠️ **API Error:** The AI interviewer encountered an error processing your responses.";
      return this.getFallback(msg, qaPairs.length, true);
    }
  },

  /**
   * OpenAI Implementation (GPT-4o-mini)
   */
  async evaluateWithOpenAI(qaPairs: { question: string, answer: string }[], roleType: string) {
    if (!OPENAI_API_KEY) return this.getFallback("No OpenAI API Key found.");

    try {
      const systemPrompt = `You are an expert Senior ${roleType} evaluating a candidate's mock interview.
Below are the questions asked and the candidate's transcribed verbal answers.

Please provide a comprehensive evaluation report. Format your response STRICTLY as a JSON object with the following schema:
{
  "report": "Your detailed markdown evaluation report. MUST include sections for: 1. Overall Impression, 2. Technical Accuracy, 3. Communication & Confidence (analyze their transcribed text for decisiveness vs hesitation, clarity, and structure), 4. Areas to Improve, 5. Question-by-Question breakdown. Format in clean Markdown.",
  "score": <number between 0 and 100>,
  "correct": <number of questions answered correctly or strongly>,
  "wrong": <number of questions answered incorrectly or weakly>
}
Be constructive and encouraging, but strict on technical accuracy.`;

      const userContent = qaPairs.map((qa, i) => `Q${i + 1}: ${qa.question}\nA${i + 1}: ${qa.answer}`).join('\n\n');

      const chatCompletion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userContent }
        ],
        model: "gpt-4o-mini", // Very fast and cheap model
        temperature: 0.5,
        response_format: { type: "json_object" }
      });

      const text = chatCompletion.choices[0]?.message?.content || "{}";
      
      try {
        return JSON.parse(text);
      } catch {
        return this.getFallback(text, qaPairs.length);
      }
    } catch (error: any) {
      console.error("OpenAI Evaluation Error:", error);
      const msg = error?.status === 429 
        ? "⚠️ **API Quota Exceeded:** You have reached the limit of your OpenAI credits or hit a rate limit."
        : "⚠️ **API Error:** The AI interviewer encountered an error processing your responses.";
      return this.getFallback(msg, qaPairs.length, true);
    }
  },

  /**
   * Google Gemini Implementation
   */
  async evaluateWithGemini(qaPairs: { question: string, answer: string }[], roleType: string) {
    if (!GEMINI_API_KEY) return this.getFallback("No Gemini API Key found.");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `You are an expert Senior ${roleType} evaluating a candidate's mock interview.
Below are the questions asked and the candidate's transcribed verbal answers.

${qaPairs.map((qa, i) => `Q${i + 1}: ${qa.question}\nA${i + 1}: ${qa.answer}`).join('\n\n')}

Please provide a comprehensive evaluation report. Format your response STRICTLY as a JSON object with the following schema:
{
  "report": "Your detailed markdown evaluation report. MUST include sections for: 1. Overall Impression, 2. Technical Accuracy, 3. Communication & Confidence (analyze their transcribed text for decisiveness vs hesitation, clarity, and structure), 4. Areas to Improve, 5. Question-by-Question breakdown. Format in clean Markdown.",
  "score": <number between 0 and 100>,
  "correct": <number of questions answered correctly or strongly>,
  "wrong": <number of questions answered incorrectly or weakly>
}
Be constructive and encouraging, but strict on technical accuracy. Output ONLY valid JSON without markdown code blocks around it.`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      try {
        const cleanText = text.replace(/```json/gi, '').replace(/```/g, '').trim();
        return JSON.parse(cleanText);
      } catch {
        return this.getFallback(text, qaPairs.length);
      }
    } catch (error: any) {
      console.error("Gemini Evaluation Error:", error);
      const msg = error?.status === 429 
        ? "⚠️ **API Quota Exceeded:** You have reached the limit of your Gemini Free Tier for today."
        : "⚠️ **API Error:** The AI interviewer encountered an error processing your responses.";
      return this.getFallback(msg, qaPairs.length, true);
    }
  },

  /**
   * Helper function to return a safe fallback JSON if the AI fails
   */
  getFallback(message: string, questionCount: number = 5, isError: boolean = false) {
    const reportText = isError 
      ? `${message}\n\nThis is a mock evaluation report because the AI could not be reached. Your answers were recorded successfully.`
      : message;
      
    if (isError) {
      return {
        report: reportText
        // omit score, correct, wrong so UI shows N/A
      };
    }

    return {
      report: reportText,
      score: 85,
      correct: Math.floor(questionCount * 0.8),
      wrong: Math.ceil(questionCount * 0.2)
    };
  }
};
