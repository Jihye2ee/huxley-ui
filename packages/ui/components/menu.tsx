"use client"

import { Menu as BaseMenu } from "@base-ui/react/menu"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

export type MenuRootProps = ComponentProps<typeof BaseMenu.Root>

export function MenuRoot(props: MenuRootProps) {
  return <BaseMenu.Root {...props} />
}

export type MenuTriggerProps = ComponentProps<typeof BaseMenu.Trigger>

export function MenuTrigger(props: MenuTriggerProps) {
  return <BaseMenu.Trigger {...props} />
}

export type MenuContentProps = Omit<
  ComponentProps<typeof BaseMenu.Popup>,
  "className"
> & {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  align?: "start" | "center" | "end"
  className?: string
}

export function MenuContent({
  side = "bottom",
  sideOffset = 4,
  align = "start",
  className,
  children,
  ...props
}: MenuContentProps) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner side={side} sideOffset={sideOffset} align={align}>
        <BaseMenu.Popup
          className={cn(
            "z-50 min-w-[180px] rounded-lg border border-default",
            "bg-elevation-surface-overlay-default p-1 shadow-overlay",
            className,
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

export type MenuItemProps = Omit<
  ComponentProps<typeof BaseMenu.Item>,
  "className"
> & {
  danger?: boolean
  className?: string
}

export function MenuItem({ danger, className, ...props }: MenuItemProps) {
  return (
    <BaseMenu.Item
      className={cn(
        "flex w-full cursor-pointer items-center rounded-md px-3 py-2",
        "body-14-medium transition-colors",
        "focus-visible:outline-hidden",
        danger
          ? "text-error data-highlighted:bg-error-default"
          : "text-default data-highlighted:bg-interaction-hovered",
        props.disabled && "pointer-events-none text-disabled",
        className,
      )}
      {...props}
    />
  )
}

export type MenuGroupProps = {
  children: ReactNode
  className?: string
}

export function MenuGroup({ children, className }: MenuGroupProps) {
  return <BaseMenu.Group className={className}>{children}</BaseMenu.Group>
}

export type MenuGroupLabelProps = Omit<
  ComponentProps<typeof BaseMenu.GroupLabel>,
  "className"
> & {
  className?: string
}

export function MenuGroupLabel({ className, ...props }: MenuGroupLabelProps) {
  return (
    <BaseMenu.GroupLabel
      className={cn("body-12-medium px-3 py-1.5 text-subtle", className)}
      {...props}
    />
  )
}

export type MenuSeparatorProps = Omit<
  ComponentProps<typeof BaseMenu.Separator>,
  "className"
> & {
  className?: string
}

export function MenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <BaseMenu.Separator
      className={cn("my-1 border-t border-default", className)}
      {...props}
    />
  )
}
