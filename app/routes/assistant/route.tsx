import { ActionFunctionArgs } from "@remix-run/node";
import { dutchLanguageAssistant } from "~/langchain.server/dutch-assistant";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const question = formData.get("question");

  if (!question) {
    throw new Response("no question provided", { status: 400 });
  }

  return dutchLanguageAssistant.invoke({
    input: question,
  });
};
