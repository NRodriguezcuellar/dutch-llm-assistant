import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

export const geitjeChatModel = new ChatOllama({
  baseUrl: "http://localhost:11434", // Default value
  model: "geitje-v2",
});

export const languageExpertPrompt = ChatPromptTemplate.fromMessages([
  ["assistant", "Jij bent een assistent bedoeld om te helpen met het begrijpen van geschreven taal."],
  ["user", "{input}"]
])


export const languageAssistant = languageExpertPrompt.pipe(geitjeChatModel).pipe(new StringOutputParser());
