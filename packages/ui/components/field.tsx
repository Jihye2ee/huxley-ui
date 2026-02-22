"use client"

import { Field as BaseField } from "@base-ui/react/field"
import { Input } from "@base-ui/react/input"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

const inputVariants = cva(
  cn(
    "w-full bg-transparent text-default outline-none",
    "placeholder:text-subtle",
    "disabled:cursor-not-allowed disabled:text-disabled",
  ),
  {
    variants: {
      size: {
        medium: "body-15-medium",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
)

const wrapperVariants = cva(
  cn(
    "inline-flex w-full items-center gap-2 rounded-lg border border-default",
    "bg-default transition-colors",
    "hover:border-hovered",
    "focus-within:border-brand-default focus-within:ring-1 focus-within:ring-brand-default",
    "data-invalid:border-danger data-invalid:focus-within:ring-danger",
    "data-disabled:pointer-events-none data-disabled:bg-fill-disabled data-disabled:text-disabled",
  ),
  {
    variants: {
      size: {
        medium: "h-[42px] px-3 py-2.5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
)

export type FieldProps = Omit<
  ComponentProps<typeof Input>,
  "size" | "className"
> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  leading?: ReactNode
  size?: VariantProps<typeof inputVariants>["size"]
  className?: string
  inputClassName?: string
  fieldProps?: Omit<ComponentProps<typeof BaseField.Root>, "children">
}

export function Field({
  label,
  description,
  error,
  leading,
  size = "medium",
  className,
  inputClassName,
  disabled,
  fieldProps,
  ...inputProps
}: FieldProps) {
  return (
    <BaseField.Root disabled={disabled} {...fieldProps}>
      {label && (
        <BaseField.Label
          className={cn(
            "body-12-medium mb-1.5 block text-default",
            disabled && "text-disabled",
          )}
        >
          {label}
        </BaseField.Label>
      )}

      <div className={cn(wrapperVariants({ size }), className)}>
        {leading && (
          <span className="flex shrink-0 items-center text-subtle [&_svg]:size-5">
            {leading}
          </span>
        )}
        <Input
          className={cn(inputVariants({ size }), inputClassName)}
          disabled={disabled}
          {...inputProps}
        />
      </div>

      {description && !error && (
        <BaseField.Description className="body-12-medium mt-1.5 text-subtle">
          {description}
        </BaseField.Description>
      )}

      {error && (
        <BaseField.Error className="body-12-medium mt-1.5 text-danger" match>
          {error}
        </BaseField.Error>
      )}
    </BaseField.Root>
  )
}

export { inputVariants, wrapperVariants }
