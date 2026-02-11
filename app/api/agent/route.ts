import { NextResponse } from "next/server"
import { runAgent } from "@/lib/agent"

export async function POST(req: Request) {
  const { message } = await req.json()

  try {
    const result = await runAgent(message)
    return NextResponse.json(result)
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 400 })
  }
}
