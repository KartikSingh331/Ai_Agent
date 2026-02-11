import { runPlanner } from "./planner"
import { runGenerator } from "./generator"
import { runExplainer } from "./explainer"
import { validateGeneratedCode } from "./validation"
import { saveVersion, getLatestVersion } from "./versionStore"

export async function runAgent(userMessage: string) {
  const previous = getLatestVersion()

  const plan = await runPlanner(userMessage, previous?.plan)
  const code = await runGenerator(plan, previous?.code)

  validateGeneratedCode(code)

  const explanation = await runExplainer(plan, code, previous?.code)

  saveVersion({ plan, code, explanation })

  return { plan, code, explanation }
}
