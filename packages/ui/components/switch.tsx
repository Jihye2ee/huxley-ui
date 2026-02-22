"use client"

import { Switch as BaseSwitch } from "@base-ui/react/switch"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

type SwitchItemBaseProps = Omit<
  ComponentProps<typeof BaseSwitch.Root>,
  "className"
>

export type SwitchItemProps = SwitchItemBaseProps & {
  className?: string
}

export function SwitchItem({ className, ...props }: SwitchItemProps) {
  return (
    <BaseSwitch.Root
      className={(state) =>
        cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full",
          "transition-colors duration-200",
          state.checked ? "bg-success-bold-default" : "bg-neutral-default",
          state.disabled && "cursor-not-allowed opacity-40",
          typeof className === "string" ? className : undefined,
        )
      }
      {...props}
    >
      <BaseSwitch.Thumb
        className={(state) =>
          cn(
            "block size-5 rounded-full bg-white shadow-raised",
            "transition-transform duration-200",
            state.checked ? "translate-x-5" : "translate-x-0.5",
          )
        }
      />
    </BaseSwitch.Root>
  )
}

export type SwitchProps = SwitchItemProps & {
  label?: ReactNode
}

export function Switch({ label, className, ...props }: SwitchProps) {
  if (!label) {
    return <SwitchItem className={className} {...props} />
  }

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Base UI Switch renders the input internally
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-3",
        props.disabled && "cursor-not-allowed",
        className,
      )}
    >
      <SwitchItem {...props} />
      <span
        className={cn(
          "body-14-medium text-default",
          props.disabled && "text-disabled",
        )}
      >
        {label}
      </span>
    </label>
  )
}
