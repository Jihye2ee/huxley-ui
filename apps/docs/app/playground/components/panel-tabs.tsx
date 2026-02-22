"use client"

import type { ReactNode } from "react"

interface PanelTabsProps<T extends string> {
  tabs: readonly T[]
  active: T
  onTabChange: (tab: T) => void
  trailing?: ReactNode
}

export function PanelTabs<T extends string>({
  tabs,
  active,
  onTabChange,
  trailing,
}: PanelTabsProps<T>) {
  return (
    <div className="flex h-10 shrink-0 items-center justify-between border-b border-subtle px-4">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={
              "body-12-medium transition-colors " +
              (active === tab
                ? "text-default"
                : "text-subtlest hover:text-subtle")
            }
          >
            {tab}
          </button>
        ))}
      </div>
      {trailing}
    </div>
  )
}
