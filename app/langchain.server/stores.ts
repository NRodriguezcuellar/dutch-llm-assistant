import { DocumentInterface } from "@langchain/core/documents";
import { EmbeddingsInterface } from "@langchain/core/embeddings";
import { VectorStore } from "@langchain/core/vectorstores";

export const simpleVectorStore = async <
  T extends DocumentInterface<Record<string, unknown>>[],
>(
  document: T,
  embeddings: EmbeddingsInterface,
) => {
  return VectorStore.fromDocuments(document, embeddings, {});
};
