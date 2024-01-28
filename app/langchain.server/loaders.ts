import { PDFLoader } from "langchain/document_loaders/fs/pdf";

export const pdfLoader = (path: string) => new PDFLoader(path);
