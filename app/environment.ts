import { z } from "zod";

const environmentSchema = z.object({
  OPENAI_API_KEY: z.string().nullable(),
  OLLAMA_BASE_URL: z.string(),
});

export type Environment = z.infer<typeof environmentSchema>;

export const environment = environmentSchema.parse(process.env);
