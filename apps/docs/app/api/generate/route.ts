import { gateway } from "@ai-sdk/gateway"
import { catalog } from "@huxley-ui/json-render/catalog"
import { buildUserPrompt } from "@json-render/core"
import { streamText } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = catalog.prompt()

export async function POST(req: Request) {
  const { prompt, context } = await req.json()

  const userPrompt = buildUserPrompt({
    prompt,
    state: context?.state,
  })

  const result = streamText({
    model: gateway("anthropic/claude-haiku-4.5"),
    system: SYSTEM_PROMPT,
    prompt: userPrompt,
    temperature: 0.7,
  })

  return result.toTextStreamResponse()
}
