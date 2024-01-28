import { ActionFunctionArgs } from "@remix-run/node";
import { dutchLanguageAssistantGeitje } from "~/langchain.server/dutch-assistant";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const question = formData.get("question");

  if (!question) {
    return "No question was provided";
  }

  return dutchLanguageAssistantGeitje.invoke({
    input: question,
  });
};
