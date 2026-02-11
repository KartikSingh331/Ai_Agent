"use client"

import { useState } from "react"
import ChatPanel from "@/components/ChatPanel"
import CodePanel from "@/components/CodePanel"
import PreviewPanel from "@/components/PreviewPanel"

export default function Home() {
  const [code, setCode] = useState("")
  const [explanation, setExplanation] = useState("")

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <ChatPanel setCode={setCode} setExplanation={setExplanation} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <CodePanel code={code} />
        <PreviewPanel code={code} />
      </div>
    </div>
  )
}
