import { Document } from "langchain/document";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export const splitDocuments = <T extends Document<Record<string, unknown>>[]>(
  document: T,
) => {
  return new RecursiveCharacterTextSplitter().splitDocuments(document);
};
