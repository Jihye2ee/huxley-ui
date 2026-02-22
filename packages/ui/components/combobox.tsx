"use client"

import { Combobox as BaseCombobox } from "@base-ui/react/combobox"
import { CaretDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "../utils/cn"

const comboboxTriggerVariants = cva(
  cn(
    "inline-flex w-full items-center",
    "border border-default bg-default",
    "transition-colors",
    "hover:border-hovered",
    "focus-within:border-brand-default focus-within:ring-1 focus-within:ring-brand-default",
    "data-disabled:pointer-events-none data-disabled:bg-fill-disabled data-disabled:text-disabled",
  ),
  {
    variants: {
      inputSize: {
        md: "min-h-[42px] rounded-lg px-3 body-14-medium",
        sm: "min-h-8 rounded-md px-2.5 body-12-medium",
      },
    },
    defaultVariants: {
      inputSize: "md",
    },
  },
)

type ComboboxInputSize = VariantProps<
  typeof comboboxTriggerVariants
>["inputSize"]

export type ComboboxRootProps = ComponentProps<typeof BaseCombobox.Root>

export function ComboboxRoot(props: ComboboxRootProps) {
  return <BaseCombobox.Root {...props} />
}

export type ComboboxInputProps = Omit<
  ComponentProps<typeof BaseCombobox.Input>,
  "className" | "size"
> & {
  inputSize?: ComboboxInputSize
  error?: boolean
  className?: string
}

export function ComboboxInput({
  inputSize = "md",
  error,
  className,
  ...props
}: ComboboxInputProps) {
  return (
    <BaseCombobox.Trigger
      className={cn(
        comboboxTriggerVariants({ inputSize }),
        error && "border-danger focus-within:ring-danger",
        className,
      )}
    >
      <BaseCombobox.Input
        className={cn(
          "w-full flex-1 bg-transparent text-default outline-none",
          "placeholder:text-subtle",
        )}
        {...props}
      />
      <BaseCombobox.Icon className="shrink-0 text-subtle">
        <CaretDownIcon size={16} />
      </BaseCombobox.Icon>
    </BaseCombobox.Trigger>
  )
}

export type ComboboxContentProps = Omit<
  ComponentProps<typeof BaseCombobox.Popup>,
  "className"
> & {
  className?: string
}

export function ComboboxContent({
  className,
  children,
  ...props
}: ComboboxContentProps) {
  return (
    <BaseCombobox.Portal>
      <BaseCombobox.Positioner>
        <BaseCombobox.Popup
          className={cn(
            "z-50 rounded-lg border border-default",
            "bg-elevation-surface-overlay-default p-1 shadow-overlay",
            className,
          )}
          {...props}
        >
          <BaseCombobox.List>{children}</BaseCombobox.List>
        </BaseCombobox.Popup>
      </BaseCombobox.Positioner>
    </BaseCombobox.Portal>
  )
}

export type ComboboxItemProps = Omit<
  ComponentProps<typeof BaseCombobox.Item>,
  "className"
> & {
  className?: string
}

export function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxItemProps) {
  return (
    <BaseCombobox.Item
      className={cn(
        "flex w-full cursor-pointer items-center justify-between",
        "rounded-md px-3 py-2 body-14-medium text-default",
        "transition-colors",
        "focus-visible:outline-hidden",
        "data-highlighted:bg-interaction-hovered",
        "data-disabled:pointer-events-none data-disabled:text-disabled",
        className,
      )}
      {...props}
    >
      {children}
      <BaseCombobox.ItemIndicator className="text-brand">
        <CheckIcon size={16} />
      </BaseCombobox.ItemIndicator>
    </BaseCombobox.Item>
  )
}

export type ComboboxEmptyProps = Omit<
  ComponentProps<typeof BaseCombobox.Empty>,
  "className"
> & {
  className?: string
}

export function ComboboxEmpty({
  className,
  children,
  ...props
}: ComboboxEmptyProps) {
  return (
    <BaseCombobox.Empty
      className={cn("body-14-medium px-3 py-2 text-subtle", className)}
      {...props}
    >
      {children || "No results found"}
    </BaseCombobox.Empty>
  )
}

export type ComboboxChipProps = {
  children: string
  onRemove?: () => void
  className?: string
}

export function ComboboxChip({
  children,
  onRemove,
  className,
}: ComboboxChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md bg-neutral-default",
        "body-12-medium px-2 py-0.5 text-default",
        className,
      )}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          className="cursor-pointer text-subtle hover:text-default [&_svg]:size-3"
          onClick={onRemove}
        >
          <XIcon />
        </button>
      )}
    </span>
  )
}

export { comboboxTriggerVariants }
