"use client"

import { Select as BaseSelect } from "@base-ui/react/select"
import { CaretDownIcon, CheckIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "../utils/cn"

const triggerVariants = cva(
  cn(
    "inline-flex w-full cursor-pointer items-center justify-between",
    "border border-default bg-default text-default",
    "transition-colors",
    "hover:border-hovered",
    "focus-visible:border-brand-default focus-visible:ring-1 focus-visible:ring-brand-default",
    "focus-visible:outline-hidden",
    "data-disabled:pointer-events-none data-disabled:bg-fill-disabled data-disabled:text-disabled",
    "data-popup-open:border-brand-default data-popup-open:ring-1 data-popup-open:ring-brand-default",
  ),
  {
    variants: {
      size: {
        md: "h-[42px] rounded-lg px-3 body-14-medium",
        sm: "h-8 rounded-md px-2.5 body-12-medium",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

type SelectSize = VariantProps<typeof triggerVariants>["size"]

export type SelectRootProps = ComponentProps<typeof BaseSelect.Root>

export function SelectRoot(props: SelectRootProps) {
  return <BaseSelect.Root {...props} />
}

export type SelectTriggerProps = Omit<
  ComponentProps<typeof BaseSelect.Trigger>,
  "className"
> & {
  size?: SelectSize
  error?: boolean
  className?: string
}

export function SelectTrigger({
  size = "md",
  error,
  className,
  children,
  ...props
}: SelectTriggerProps) {
  return (
    <BaseSelect.Trigger
      className={cn(
        triggerVariants({ size }),
        error && "border-danger focus-visible:ring-danger",
        className,
      )}
      {...props}
    >
      <BaseSelect.Value
        className="truncate text-left"
        placeholder={typeof children === "string" ? children : undefined}
      />
      <BaseSelect.Icon className="shrink-0 text-subtle">
        <CaretDownIcon size={16} />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

export type SelectContentProps = Omit<
  ComponentProps<typeof BaseSelect.Popup>,
  "className"
> & {
  className?: string
}

export function SelectContent({
  className,
  children,
  ...props
}: SelectContentProps) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner>
        <BaseSelect.Popup
          className={cn(
            "z-50 rounded-lg border border-default",
            "bg-elevation-surface-overlay-default p-1 shadow-overlay",
            className,
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

export type SelectItemProps = Omit<
  ComponentProps<typeof BaseSelect.Item>,
  "className"
> & {
  className?: string
}

export function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <BaseSelect.Item
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
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
      <BaseSelect.ItemIndicator className="text-brand">
        <CheckIcon size={16} />
      </BaseSelect.ItemIndicator>
    </BaseSelect.Item>
  )
}

export type SelectGroupProps = ComponentProps<typeof BaseSelect.Group>

export function SelectGroup(props: SelectGroupProps) {
  return <BaseSelect.Group {...props} />
}

export type SelectGroupLabelProps = Omit<
  ComponentProps<typeof BaseSelect.GroupLabel>,
  "className"
> & {
  className?: string
}

export function SelectGroupLabel({
  className,
  ...props
}: SelectGroupLabelProps) {
  return (
    <BaseSelect.GroupLabel
      className={cn("body-12-medium px-3 py-1.5 text-subtle", className)}
      {...props}
    />
  )
}

export type SelectSeparatorProps = Omit<
  ComponentProps<typeof BaseSelect.Separator>,
  "className"
> & {
  className?: string
}

export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
  return (
    <BaseSelect.Separator
      className={cn("my-1 border-t border-default", className)}
      {...props}
    />
  )
}

export { triggerVariants }
