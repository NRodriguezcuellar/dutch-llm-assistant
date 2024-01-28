import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { BaseChatModel } from "langchain/chat_models/base";
import { geitjeChatModel, openAIChatModel } from "./models";

export const dutchLanguageExpertPrompt = ChatPromptTemplate.fromMessages([
  [
    "assistant",
    "Jij bent een assistent bedoeld om te helpen met het begrijpen van geschreven taal.",
  ],
  ["user", "{input}"],
]);

export const createDutchLanguageAssistant = <T extends BaseChatModel>(
  model: T,
) => dutchLanguageExpertPrompt.pipe(model).pipe(new StringOutputParser());

export const dutchLanguageAssistantGeitje =
  createDutchLanguageAssistant(geitjeChatModel);

export const dutchLanguageAssistantOpenAI =
  createDutchLanguageAssistant(openAIChatModel);
