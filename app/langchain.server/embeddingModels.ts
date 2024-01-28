import { OpenAIEmbeddings } from "@langchain/openai";
import { OllamaEmbeddings } from "langchain/embeddings/ollama";
import { environment } from "~/environment";

export const ollamaEmbeddingModel = new OllamaEmbeddings({
  model: "llama2",
  baseUrl: environment.OLLAMA_BASE_URL,
});

export const openAIEmbeddingModel = new OpenAIEmbeddings();
