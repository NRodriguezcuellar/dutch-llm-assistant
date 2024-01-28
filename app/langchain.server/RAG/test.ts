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
import testDocument from "~/assets/test-data/play-book-overheid-open-source-software.pdf";
import { ollamaEmbeddingModel } from "../embeddingModels";
import { pdfLoader } from "../loaders";
import { geitjeChatModel } from "../models";
import { simpleVectorStore } from "../stores";

const LLMModel = geitjeChatModel;

const document = await pdfLoader(testDocument).load();
const vectorStore = await simpleVectorStore(document, ollamaEmbeddingModel);

const retriever = vectorStore.asRetriever();

const prompt =
  PromptTemplate.fromTemplate(`Answer the question based only on the following context:
{context}

Question: {question}`);

export const testRAGChain = RunnableSequence.from([
  {
    context: retriever.pipe(formatDocumentsAsString),
    question: new RunnablePassthrough(),
  },
  prompt,
  LLMModel,
  new StringOutputParser(),
]);
