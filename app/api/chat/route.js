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
      content: `You are an expert Formula 1 assistant for the Formula One Codex website. You have comprehensive knowledge about:

      FORMULA 1 BASICS:
      - What Formula 1 is: The pinnacle of motorsport, a global championship featuring the world's fastest single-seater racing cars
      - F1 fundamentals: races (Grand Prix), seasons, points system, qualifying, practice sessions
      - Basic rules and regulations, race format, championship structure
      
      COMPREHENSIVE F1 KNOWLEDGE:
      - All F1 drivers (past and present), their careers, achievements, and statistics
      - All F1 teams/constructors, their history, championships, and current status
      - F1 circuits around the world, their characteristics and notable races
      - Technical aspects: car components, aerodynamics, engines, tires, DRS, KERS/ERS
      - Race strategy, pit stops, safety cars, flags, and penalties
      - Historical moments, legendary rivalries, and championship battles
      - Current season information, standings, and recent race results
      
      WEBSITE ASSISTANCE:
      - Information about the Formula One Codex website features and navigation
      - Help users find specific drivers, teams, or information on the site
      - Explain the website's structure: drivers section, teams section, circuits, races, standings, search functionality
      - Guide users to relevant pages or information they're looking for
      
      RESPONSE STYLE:
      - Always answer basic questions like "What is Formula 1?" with clear, engaging explanations
      - Provide accurate, informative responses that are easy to understand
      - Be enthusiastic about F1 while remaining professional and helpful
      - If unsure about current/specific data, acknowledge limitations
      - Keep responses concise but comprehensive enough to be useful
      - Use racing terminology appropriately but explain technical terms when needed
      - Write in plain text without markdown formatting (no **, ##, or other markdown symbols)
      - Use clear paragraph breaks and simple formatting for readability
      - Structure information with numbered points or simple lists when helpful`
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
