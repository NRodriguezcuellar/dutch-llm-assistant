import { ActionFunctionArgs } from "@remix-run/node";
import { testRAGChain } from "~/langchain.server/RAG/test";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const question = formData.get("question");

  if (!question) {
    return "Geen vraag gesteld";
  }

  return testRAGChain.invoke(question);
};
