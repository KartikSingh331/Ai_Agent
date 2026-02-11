"use client"

import { useEffect, useRef } from "react"

export default function PreviewPanel({ code }: { code: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!iframeRef.current) return

    const doc = iframeRef.current.contentDocument
    if (!doc) return

    doc.open()
    doc.write(`
      <html>
        <body>
          <div id="root"></div>
          <script type="module">
            import React from "https://esm.sh/react"
            import ReactDOM from "https://esm.sh/react-dom/client"

            ${code}

            const root = ReactDOM.createRoot(document.getElementById("root"))
            root.render(React.createElement(GeneratedUI))
          </script>
