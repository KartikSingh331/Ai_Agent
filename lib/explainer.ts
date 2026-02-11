import OpenAI from "openai"
import { explainerPrompt } from "./prompts"

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! })

export async function runExplainer(
  plan: any,
  newCode: string,
  oldCode?: string
) {
  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.2,
    messages: [
      { role: "system", content: explainerPrompt },
      {
        role: "user",
        content: `
Plan: ${JSON.stringify(plan)}
Old Code: ${oldCode || "none"}
New Code: ${newCode}
`
      }
    ]
  })

  return response.choices[0].message.content!
}
