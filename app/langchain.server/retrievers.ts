import { DocumentInterface } from "@langchain/core/documents";
import { EmbeddingsInterface } from "@langchain/core/embeddings";
import { simpleVectorStore } from "./stores";

export const simpleVectorStoreRetriever = async <
  T extends DocumentInterface<Record<string, unknown>>[],
>(
  document: T,
  embeddings: EmbeddingsInterface,
) => {
  const store = await simpleVectorStore(document, embeddings);

  return store.asRetriever();
};
