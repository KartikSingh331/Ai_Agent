"use client"

import Editor from "@monaco-editor/react"

export default function CodePanel({ code }: { code: string }) {
  return (
    <div style={{ height: "50%" }}>
      <Editor
        height="100%"
        defaultLanguage="typescript"
        value={code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false }
        }}
      />
    </div>
  )
}
