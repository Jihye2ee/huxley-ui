"use client"

import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog"
import { XIcon } from "@phosphor-icons/react"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

export type AlertDialogRootProps = ComponentProps<typeof BaseAlertDialog.Root>

export function AlertDialogRoot(props: AlertDialogRootProps) {
  return <BaseAlertDialog.Root {...props} />
}

export type AlertDialogTriggerProps = ComponentProps<
  typeof BaseAlertDialog.Trigger
>

export function AlertDialogTrigger(props: AlertDialogTriggerProps) {
  return <BaseAlertDialog.Trigger {...props} />
}

export type AlertDialogContentProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Popup>,
  "className"
> & {
  className?: string
}

export function AlertDialogContent({
  className,
  children,
  ...props
}: AlertDialogContentProps) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 z-50 bg-blanket-default" />
      <BaseAlertDialog.Popup
        className={cn(
          "fixed top-1/2 left-1/2 z-50 w-[480px]",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-2xl border border-default bg-elevation-surface-overlay-default",
          "shadow-overlay",
          "focus-visible:outline-hidden",
          className,
        )}
        {...props}
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  )
}

export type AlertDialogTitleProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Title>,
  "className"
> & {
  className?: string
}

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps) {
  return (
    <BaseAlertDialog.Title
      className={cn("title-18-semibold text-default px-5 pt-5", className)}
      {...props}
    />
  )
}

export type AlertDialogDescriptionProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Description>,
  "className"
> & {
  className?: string
}

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  return (
    <BaseAlertDialog.Description
      className={cn("body-14-regular text-subtle px-5 py-3", className)}
      {...props}
    />
  )
}

export type AlertDialogFooterProps = {
  children: ReactNode
  variant?: "default" | "directional"
  className?: string
}

export function AlertDialogFooter({
  children,
  variant = "default",
  className,
}: AlertDialogFooterProps) {
  return (
    <div
      className={cn(
        "px-5 py-3 flex items-center gap-3",
        variant === "default" ? "justify-end" : "justify-between",
        className,
      )}
    >
      {children}
    </div>
  )
}

export type AlertDialogCloseProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Close>,
  "className"
> & {
  className?: string
}

export function AlertDialogClose({
  className,
  ...props
}: AlertDialogCloseProps) {
  return (
    <BaseAlertDialog.Close
      className={cn(
        "absolute right-3 top-3 inline-flex size-8 cursor-pointer",
        "items-center justify-center rounded-md",
        "hover:bg-interaction-hovered",
        "focus-visible:outline-hidden",
        "[&_svg]:size-5",
        className,
      )}
      {...props}
    >
      <XIcon />
    </BaseAlertDialog.Close>
  )
}

export type AlertDialogActionProps = Omit<
  ComponentProps<typeof BaseAlertDialog.Close>,
  "className"
> & {
  className?: string
}

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps) {
  return <BaseAlertDialog.Close className={className} {...props} />
}

export function AlertDialogCancel({
  className,
  ...props
}: AlertDialogCloseProps) {
  return <BaseAlertDialog.Close className={className} {...props} />
}
