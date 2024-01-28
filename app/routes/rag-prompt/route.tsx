import { ActionFunctionArgs } from "@remix-run/node";
import { getRAGChain } from "~/langchain.server/RAG/test";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const question = formData.get("question");

  if (!question) {
    return "Geen vraag gesteld";
  }

  const testRAGChain = await getRAGChain();

  return testRAGChain.invoke(question);
};
