"use client"

import { Radio as BaseRadio } from "@base-ui/react/radio"
import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

const radioVariants = cva(
  cn(
    "relative inline-flex shrink-0 items-center justify-center rounded-full",
    "border-2 border-default transition-colors",
    "data-checked:border-brand-default data-checked:bg-transparent",
  ),
  {
    variants: {
      size: {
        default: "size-5",
        small: "size-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

const dotVariants = cva(
  cn(
    "rounded-full bg-brand-default",
    "transition-transform duration-150",
    "scale-0 data-checked:scale-100",
  ),
  {
    variants: {
      size: {
        default: "size-2.5",
        small: "size-2",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

type RadioSize = VariantProps<typeof radioVariants>["size"]

export type RadioGroupProps = Omit<
  ComponentProps<typeof BaseRadioGroup>,
  "className"
> & {
  orientation?: "vertical" | "horizontal"
  className?: string
}

export function RadioGroup({
  orientation = "vertical",
  className,
  ...props
}: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={cn(
        "flex",
        orientation === "vertical" ? "flex-col gap-3" : "flex-row gap-6",
        className,
      )}
      {...props}
    />
  )
}

export type RadioItemProps = Omit<
  ComponentProps<typeof BaseRadio.Root>,
  "className"
> & {
  label?: ReactNode
  size?: RadioSize
  className?: string
}

export function RadioItem({
  label,
  size = "default",
  className,
  disabled,
  ...props
}: RadioItemProps) {
  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Base UI Radio renders the input internally
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed opacity-40",
        className,
      )}
    >
      <BaseRadio.Root
        className={radioVariants({ size })}
        disabled={disabled}
        {...props}
      >
        <BaseRadio.Indicator className={dotVariants({ size })} />
      </BaseRadio.Root>
      {label && (
        <span
          className={cn(
            "body-14-medium text-default",
            disabled && "text-disabled",
          )}
        >
          {label}
        </span>
      )}
    </label>
  )
}

export { radioVariants }
