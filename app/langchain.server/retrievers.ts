import { DocumentInterface } from "@langchain/core/documents";
import { EmbeddingsInterface } from "@langchain/core/embeddings";
import { VectorStore } from "@langchain/core/vectorstores";

export const simpleRetriever = async <
  T extends DocumentInterface<Record<string, unknown>>[],
>(
  document: T,
  embeddings: EmbeddingsInterface,
) => {
  const store = await VectorStore.fromDocuments(document, embeddings, {});

  return store.asRetriever();
};
