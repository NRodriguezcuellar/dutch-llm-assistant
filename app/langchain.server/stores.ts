import { DocumentInterface } from "@langchain/core/documents";
import { EmbeddingsInterface } from "@langchain/core/embeddings";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

export const simpleVectorStore = async <
  T extends DocumentInterface<Record<string, unknown>>[],
>(
  document: T,
  embeddings: EmbeddingsInterface,
) => {
  return MemoryVectorStore.fromDocuments(document, embeddings);
};
