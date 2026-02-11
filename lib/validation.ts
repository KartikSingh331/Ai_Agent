export const COMPONENT_WHITELIST = [
  "Button",
  "Card",
  "Input",
  "Table",
  "Modal",
  "Sidebar",
  "Navbar",
  "Chart"
]

export function validateGeneratedCode(code: string) {
  for (const component of extractJSXComponents(code)) {
    if (!COMPONENT_WHITELIST.includes(component)) {
      throw new Error(`Unauthorized component: ${component}`)
    }
  }

  if (code.includes("style={{")) {
    throw new Error("Inline styles are not allowed")
  }
}

function extractJSXComponents(code: string): string[] {
  const matches = code.match(/<([A-Z][A-Za-z0-9]*)/g) || []
  return matches.map(m => m.replace("<", ""))
}
