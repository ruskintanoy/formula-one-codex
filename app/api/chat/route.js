import { AzureOpenAI } from "openai";

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const apiVersion = process.env.AZURE_OPENAI_API_VERSION;
const deployment = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;
const modelName = process.env.AZURE_OPENAI_MODEL_NAME;

const options = { endpoint, apiKey, deployment, apiVersion };
const client = new AzureOpenAI(options);

export async function POST(request) {
  try {
    const { messages } = await request.json();

    // System message to make the AI a Formula 1 expert
    const systemMessage = {
      role: "system",
      content: `You are an expert Formula 1 assistant for the Formula One Codex application. You have comprehensive knowledge about:
      - Formula 1 history, drivers, teams, and circuits
      - Current and past seasons, race results, and championships
      - Technical aspects of F1 cars and regulations
      - Driver statistics, team standings, and race analysis
      - Formula 1 news and developments
      
      Provide accurate, engaging, and informative responses about Formula 1. Keep responses concise but informative. If you're unsure about specific current data, acknowledge that and provide the best information you can based on your knowledge.
      
      Always maintain enthusiasm for Formula 1 while being helpful and professional.`
    };

    const response = await client.chat.completions.create({
      messages: [systemMessage, ...messages],
      model: modelName,
      max_tokens: 800,
      temperature: 0.7,
      top_p: 0.95,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (response?.error !== undefined) {
      throw new Error(response.error);
    }

    return Response.json({
      message: response.choices[0].message.content,
      success: true
    });

  } catch (error) {
    console.error("Error in chat API:", error);
    return Response.json(
      { 
        error: "Failed to process chat request",
        success: false 
      },
      { status: 500 }
    );
  }
}
