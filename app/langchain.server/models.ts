import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatOpenAI } from "@langchain/openai";
import { environment } from "~/environment";

export const geitjeChatModel = new ChatOllama({
  baseUrl: environment.OLLAMA_BASE_URL, // Default value
  model: "geitje-v2",
});

export const openAIChatModel = new ChatOpenAI();
