"use client"

import { ArrowRightIcon } from "@phosphor-icons/react"

const EXAMPLES = [
  "Create a login form",
  "Build a pricing page",
  "Design a user profile card",
  "Make a contact form",
]

interface PromptPanelProps {
  input: string
  isStreaming: boolean
  onInputChange: (value: string) => void
  onSubmit: () => void
  onExample: (example: string) => void
}

export function PromptPanel({
  input,
  isStreaming,
  onInputChange,
  onSubmit,
  onExample,
}: PromptPanelProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="flex w-1/3 flex-col border-r border-subtle">
      <div className="flex flex-1 flex-col overflow-y-auto p-5">
        <div className="mt-auto">
          <p className="body-14-regular text-subtlest mb-4">
            Describe what you want to build, then iterate on it.
          </p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => onExample(example)}
                disabled={isStreaming}
                className="body-12-medium rounded-md border border-default px-3 py-1.5 text-subtle transition-colors hover:border-strong hover:bg-interaction-hovered hover:text-default disabled:cursor-not-allowed disabled:opacity-50"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-subtle p-3">
        <div className="flex items-center gap-2">
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Describe changes..."
            className="body-14-regular bg-input-default border-input flex-1 rounded-md border p-3 text-default outline-none placeholder:text-placeholder focus:border-focused"
            disabled={isStreaming}
            rows={3}
          />
          <button
            type="submit"
            disabled={!input.trim() || isStreaming}
            className="bg-neutral-default flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-subtle transition-colors hover:bg-neutral-hovered disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRightIcon size={16} className="fill-subtle" />
          </button>
        </div>
      </form>
    </div>
  )
}
