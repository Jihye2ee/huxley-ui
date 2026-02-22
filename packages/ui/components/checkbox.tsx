"use client"

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { CheckIcon, MinusIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

const checkboxVariants = cva(
  cn(
    "relative inline-flex shrink-0 items-center justify-center rounded",
    "border-2 border-default transition-colors",
    "data-checked:border-brand-default data-checked:bg-brand-default",
    "data-indeterminate:border-brand-default data-indeterminate:bg-brand-default",
    "data-disabled:opacity-40 data-disabled:cursor-not-allowed",
    "focus-visible:outline-hidden",
  ),
  {
    variants: {
      size: {
        default: "size-[18px]",
        sm: "size-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

type CheckboxSize = VariantProps<typeof checkboxVariants>["size"]

type CheckboxItemBaseProps = Omit<
  ComponentProps<typeof BaseCheckbox.Root>,
  "className"
>

export type CheckboxItemProps = CheckboxItemBaseProps & {
  size?: CheckboxSize
  className?: string
}

export function CheckboxItem({
  size = "default",
  className,
  ...props
}: CheckboxItemProps) {
  const iconSize = size === "sm" ? 10 : 12

  return (
    <BaseCheckbox.Root
      className={cn(checkboxVariants({ size }), className)}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex items-center justify-center text-inverse">
        {props.indeterminate ? (
          <MinusIcon size={iconSize} weight="bold" />
        ) : (
          <CheckIcon size={iconSize} weight="bold" />
        )}
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}

export type CheckboxProps = CheckboxItemProps & {
  label?: ReactNode
}

export function Checkbox({
  label,
  size = "default",
  className,
  disabled,
  ...props
}: CheckboxProps) {
  if (!label) {
    return (
      <CheckboxItem
        size={size}
        className={className}
        disabled={disabled}
        {...props}
      />
    )
  }

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: Base UI Checkbox renders the input internally
    <label
      className={cn(
        "inline-flex cursor-pointer items-center gap-2",
        disabled && "cursor-not-allowed",
        className,
      )}
    >
      <CheckboxItem size={size} disabled={disabled} {...props} />
      <span
        className={cn(
          size === "sm"
            ? "body-12-medium text-default"
            : "body-14-medium text-default",
          disabled && "text-disabled",
        )}
      >
        {label}
      </span>
    </label>
  )
}

export { checkboxVariants }
