"use client"

import { Popover as BasePopover } from "@base-ui/react/popover"
import { XIcon } from "@phosphor-icons/react"
import type { ComponentProps } from "react"

import { cn } from "../utils/cn"

export type PopoverRootProps = ComponentProps<typeof BasePopover.Root>

export function PopoverRoot(props: PopoverRootProps) {
  return <BasePopover.Root {...props} />
}

export type PopoverTriggerProps = ComponentProps<typeof BasePopover.Trigger>

export function PopoverTrigger(props: PopoverTriggerProps) {
  return <BasePopover.Trigger {...props} />
}

export type PopoverContentProps = Omit<
  ComponentProps<typeof BasePopover.Popup>,
  "className"
> & {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  className?: string
}

export function PopoverContent({
  side = "bottom",
  sideOffset = 8,
  className,
  children,
  ...props
}: PopoverContentProps) {
  return (
    <BasePopover.Portal>
      <BasePopover.Positioner side={side} sideOffset={sideOffset}>
        <BasePopover.Popup
          className={cn(
            "z-50 max-w-xs rounded-xl border border-default",
            "bg-elevation-surface-overlay-default p-4 shadow-overlay",
            className,
          )}
          {...props}
        >
          {children}
        </BasePopover.Popup>
      </BasePopover.Positioner>
    </BasePopover.Portal>
  )
}

export type PopoverTitleProps = Omit<
  ComponentProps<typeof BasePopover.Title>,
  "className"
> & {
  className?: string
}

export function PopoverTitle({ className, ...props }: PopoverTitleProps) {
  return (
    <BasePopover.Title
      className={cn("title-14-semibold text-default", className)}
      {...props}
    />
  )
}

export type PopoverDescriptionProps = Omit<
  ComponentProps<typeof BasePopover.Description>,
  "className"
> & {
  className?: string
}

export function PopoverDescription({
  className,
  ...props
}: PopoverDescriptionProps) {
  return (
    <BasePopover.Description
      className={cn("body-12-medium mt-1 text-subtle", className)}
      {...props}
    />
  )
}

export type PopoverCloseProps = Omit<
  ComponentProps<typeof BasePopover.Close>,
  "className"
> & {
  className?: string
}

export function PopoverClose({ className, ...props }: PopoverCloseProps) {
  return (
    <BasePopover.Close
      className={cn(
        "absolute right-3 top-3 inline-flex size-6 cursor-pointer",
        "items-center justify-center rounded-md",
        "hover:bg-interaction-hovered",
        "focus-visible:outline-hidden",
        "[&_svg]:size-4",
        className,
      )}
      {...props}
    >
      <XIcon />
    </BasePopover.Close>
  )
}

export type PopoverArrowProps = Omit<
  ComponentProps<typeof BasePopover.Arrow>,
  "className"
> & {
  className?: string
}

export function PopoverArrow({ className, ...props }: PopoverArrowProps) {
  return (
    <BasePopover.Arrow
      className={cn(
        "fill-elevation-surface-overlay-default",
        "[&>path:first-child]:stroke-default",
        className,
      )}
      {...props}
    />
  )
}
