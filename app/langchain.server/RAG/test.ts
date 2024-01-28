/*
Follow the RAG (Retrieval Augmented Generation) process to provide LLMs with external data

*/

import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import {
  RunnablePassthrough,
  RunnableSequence,
} from "@langchain/core/runnables";
import { formatDocumentsAsString } from "langchain/util/document";
import { openAIEmbeddingModel } from "../embeddingModels";
import { pdfLoader } from "../loaders";
import { openAIChatModel } from "../models";
import { simpleVectorStore } from "../stores";

const chatModel = openAIChatModel;
const embeddingModel = openAIEmbeddingModel;

export const getRAGChain = async () => {
  const document = await pdfLoader(
    "./app/assets/test-data/play-book-overheid-open-source-software.pdf",
  ).load();

  console.log("Document loaded");

  console.log("Creating vector store");
  const vectorStore = await simpleVectorStore(document, embeddingModel);

  console.log("Vector store created");
  const retriever = vectorStore.asRetriever();

  const prompt =
    PromptTemplate.fromTemplate(`Beantwoord de vraag mede met volgende context:
{context}

vraag: {question}`);

  console.log("returning runnable sequence");

  return RunnableSequence.from([
    {
      context: retriever.pipe(formatDocumentsAsString),
      question: new RunnablePassthrough(),
    },
    prompt,
    chatModel,
    new StringOutputParser(),
  ]);
};
