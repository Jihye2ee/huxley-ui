"use client"

import type { Spec } from "@json-render/react"
import { CopyIcon } from "@phosphor-icons/react"

import { PanelTabs } from "./panel-tabs"

const TABS = ["json"] as const

interface SpecPanelProps {
  spec: Spec | null
}

export function SpecPanel({ spec }: SpecPanelProps) {
  const hasSpec = spec !== null

  function handleCopy() {
    if (spec) {
      navigator.clipboard.writeText(JSON.stringify(spec, null, 2))
    }
  }

  return (
    <div className="flex w-1/3 flex-col border-r border-subtle">
      <PanelTabs
        tabs={TABS}
        active="json"
        onTabChange={() => {}}
        trailing={
          hasSpec ? (
            <button
              type="button"
              onClick={handleCopy}
              className="text-subtlest transition-colors hover:text-subtle"
              title="Copy JSON"
            >
              <CopyIcon size={14} />
            </button>
          ) : undefined
        }
      />

      <div className="flex-1 overflow-auto p-4">
        <pre className="body-12-regular leading-relaxed text-subtle">
          {hasSpec ? JSON.stringify(spec, null, 2) : "// waiting..."}
        </pre>
      </div>
    </div>
  )
}
