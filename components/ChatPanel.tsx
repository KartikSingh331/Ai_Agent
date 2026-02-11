"use client"

import { useState } from "react"

export default function ChatPanel({
  setCode,
  setExplanation
}: {
  setCode: (code: string) => void
  setExplanation: (exp: string) => void
}) {
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    if (!message) return
    setLoading(true)

    const res = await fetch("/api/agent", {
      method: "POST",
      body: JSON.stringify({ message })
    })

    const data = await res.json()

    if (!data.error) {
      setCode(data.code)
      setExplanation(data.explanation)
    } else {
      alert(data.error)
    }

    setLoading(false)
    setMessage("")
  }

  return (
    <div style={{ width: 350, padding: 20, borderRight: "1px solid #ddd" }}>
      <h3>AI Chat</h3>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Describe your UI..."
        style={{ width: "100%", height: 120 }}
      />

      <button onClick={handleSend} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  )
}
