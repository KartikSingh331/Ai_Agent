import OpenAI from "openai"
import { plannerPrompt } from "./prompts"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function runPlanner(userMessage: string, previousPlan?: any) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: plannerPrompt },
      { role: "user", content: `User request: ${userMessage}` },
      { role: "user", content: `Previous plan: ${JSON.stringify(previousPlan || {})}` }
    ],
    temperature: 0
  })

  return JSON.parse(response.choices[0].message.content!)
}
