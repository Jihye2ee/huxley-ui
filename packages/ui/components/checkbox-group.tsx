"use client"

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

export type CheckboxGroupProps = Omit<
  ComponentProps<typeof BaseCheckboxGroup>,
  "className"
> & {
  title?: ReactNode
  columns?: number
  className?: string
}

export function CheckboxGroup({
  title,
  columns,
  className,
  children,
  ...props
}: CheckboxGroupProps) {
  return (
    <BaseCheckboxGroup className={cn("flex flex-col", className)} {...props}>
      {title && (
        <span className="body-14-semibold mb-2 text-default">{title}</span>
      )}
      <div
        className={cn(columns ? "grid gap-x-6 gap-y-2" : "flex flex-col gap-2")}
        style={
          columns
            ? { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
            : undefined
        }
      >
        {children}
      </div>
    </BaseCheckboxGroup>
  )
}
