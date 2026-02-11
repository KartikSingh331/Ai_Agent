import OpenAI from "openai"
import { generatorPrompt } from "./prompts"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function runGenerator(plan: any, previousCode?: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [
      { role: "system", content: generatorPrompt },
      {
        role: "user",
        content: `Plan: ${JSON.stringify(plan)}`
      },
      {
        role: "user",
        content: `Previous code: ${previousCode || "none"}`
      }
    ]
  })

  return response.choices[0].message.content!
}
