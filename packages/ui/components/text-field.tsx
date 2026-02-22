"use client"

import { Field } from "@base-ui/react/field"
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
        small: "body-12-medium",
        medium: "body-15-medium",
        large: "title-16-semibold",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
)

const wrapperVariants = cva(
  cn(
    `
      inline-flex w-full items-center gap-2 rounded-lg border border-default
      bg-default transition-colors
    `,
    "hover:border-hovered",
    `
      focus-within:border-brand-default focus-within:ring-1
      focus-within:ring-brand-default
    `,
    `
      data-invalid:border-danger
      data-invalid:focus-within:ring-danger
    `,
    `
      data-disabled:pointer-events-none data-disabled:bg-fill-disabled
      data-disabled:text-disabled
    `,
  ),
  {
    variants: {
      size: {
        small: "h-8 px-2.5 py-1.5",
        medium: "h-[42px] px-3 py-2.5",
        large: "h-[54px] px-4 py-3.5",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
)

type TextFieldSize = VariantProps<typeof inputVariants>["size"]

type BaseFieldRootProps = ComponentProps<typeof Field.Root>

export type TextFieldProps = Omit<
  ComponentProps<typeof Input>,
  "size" | "className"
> & {
  label?: ReactNode
  description?: ReactNode
  error?: ReactNode
  leading?: ReactNode
  trailing?: ReactNode
  size?: TextFieldSize
  className?: string
  inputClassName?: string
  fieldProps?: Omit<BaseFieldRootProps, "children">
}

export function TextField({
  label,
  description,
  error,
  leading,
  trailing,
  size = "medium",
  className,
  inputClassName,
  disabled,
  fieldProps,
  ...inputProps
}: TextFieldProps) {
  return (
    <Field.Root disabled={disabled} {...fieldProps}>
      {label && (
        <Field.Label
          className={cn(
            "body-12-medium mb-1.5 block text-default",
            disabled && "text-disabled",
          )}
        >
          {label}
        </Field.Label>
      )}

      <div className={cn(wrapperVariants({ size }), className)}>
        {leading && (
          <span
            className="
            flex shrink-0 items-center text-subtle
            [&_svg]:size-5
          "
          >
            {leading}
          </span>
        )}
        <Input
          className={cn(inputVariants({ size }), inputClassName)}
          disabled={disabled}
          {...inputProps}
        />
        {trailing && (
          <span
            className="
            flex shrink-0 items-center text-subtle
            [&_svg]:size-5
          "
          >
            {trailing}
          </span>
        )}
      </div>

      {description && !error && (
        <Field.Description className="mt-1.5 body-12-medium text-subtle">
          {description}
        </Field.Description>
      )}

      {error && (
        <Field.Error className="mt-1.5 body-12-medium text-danger" match>
          {error}
        </Field.Error>
      )}
    </Field.Root>
  )
}

export { inputVariants, wrapperVariants }
