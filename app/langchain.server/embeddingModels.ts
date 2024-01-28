import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";
import { OpenAIEmbeddings } from "@langchain/openai";
import { environment } from "~/environment";

export const ollamaEmbeddingModel = new OllamaEmbeddings({
  model: "stablelm2",
  baseUrl: environment.OLLAMA_BASE_URL,
});

export const openAIEmbeddingModel = new OpenAIEmbeddings();
