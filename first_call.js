import OpenAI from "openai";
import dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const client = new OpenAI({
  organization: process.env.OPENAI_ORGANIZATION,
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conversationHistory = [
  {
    role: "system",
    content:
      "You are a helpful assistant called Virtual Tathagat AI who can answer questions.",
  },
];

async function chatWithAI() {
  try {
    const userInput = await new Promise((resolve) => {
      rl.question("\nYou: ", resolve);
    });

    if (userInput.toLowerCase() === "exit") {
      console.log("\nGoodbye! Have a great day!");
      rl.close();
      return;
    }

    conversationHistory.push({
      role: "user",
      content: userInput,
    });

    const response = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: conversationHistory,
      temperature: 0.7,
      max_tokens: 10,
      stop: ["Decode"],
    });

    const aiResponse = response.choices[0].message.content;

    conversationHistory.push({
      role: "assistant",
      content: aiResponse,
    });

    console.log(
      "\nVirtual Tathagat(AI):",
      aiResponse,
      "\n",
      "Total token used:",
      response.usage.total_tokens
    );

    chatWithAI();
  } catch (error) {
    console.error("\nError:", error.message);
    rl.close();
  }
}

console.log("Welcome to the AI Chat CLI! Type 'exit' to end the conversation.");
chatWithAI();
