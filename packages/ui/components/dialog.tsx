"use client"

import { Dialog as BaseDialog } from "@base-ui/react/dialog"
import { XIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

const dialogSizeVariants = cva(
  cn(
    "fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
    "rounded-2xl border border-default bg-elevation-surface-overlay-default",
    "p-6 shadow-overlay",
    "focus-visible:outline-hidden",
  ),
  {
    variants: {
      size: {
        default: "max-w-[480px]",
        medium: "max-w-[720px]",
        large: "max-w-[1080px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

type DialogSize = VariantProps<typeof dialogSizeVariants>["size"]

export type DialogRootProps = ComponentProps<typeof BaseDialog.Root>

export function DialogRoot(props: DialogRootProps) {
  return <BaseDialog.Root {...props} />
}

export type DialogTriggerProps = ComponentProps<typeof BaseDialog.Trigger>

export function DialogTrigger(props: DialogTriggerProps) {
  return <BaseDialog.Trigger {...props} />
}

export type DialogContentProps = Omit<
  ComponentProps<typeof BaseDialog.Popup>,
  "className"
> & {
  size?: DialogSize
  className?: string
}

export function DialogContent({
  size = "default",
  className,
  children,
  ...props
}: DialogContentProps) {
  return (
    <BaseDialog.Portal>
      <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-blanket-default" />
      <BaseDialog.Popup
        className={cn(dialogSizeVariants({ size }), className)}
        {...props}
      >
        {children}
      </BaseDialog.Popup>
    </BaseDialog.Portal>
  )
}

export type DialogHeaderProps = {
  children: ReactNode
  className?: string
}

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={cn("pr-8", className)}>{children}</div>
}

export type DialogTitleProps = Omit<
  ComponentProps<typeof BaseDialog.Title>,
  "className"
> & {
  className?: string
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <BaseDialog.Title
      className={cn("title-18-semibold text-default", className)}
      {...props}
    />
  )
}

export type DialogDescriptionProps = Omit<
  ComponentProps<typeof BaseDialog.Description>,
  "className"
> & {
  className?: string
}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <BaseDialog.Description
      className={cn("body-14-medium mt-1.5 text-subtle", className)}
      {...props}
    />
  )
}

export type DialogFooterProps = {
  children: ReactNode
  variant?: "default" | "directional"
  className?: string
}

export function DialogFooter({
  children,
  variant = "default",
  className,
}: DialogFooterProps) {
  return (
    <div
      className={cn(
        "mt-8 flex items-center gap-2",
        variant === "default" ? "justify-end" : "justify-between",
        className,
      )}
    >
      {children}
    </div>
  )
}

export type DialogCloseProps = Omit<
  ComponentProps<typeof BaseDialog.Close>,
  "className"
> & {
  className?: string
}

export function DialogClose({ className, ...props }: DialogCloseProps) {
  return (
    <BaseDialog.Close
      className={cn(
        "absolute right-6 top-6 inline-flex size-8 cursor-pointer",
        "items-center justify-center rounded-md",
        "hover:bg-interaction-hovered",
        "focus-visible:outline-hidden",
        "[&_svg]:size-5",
        className,
      )}
      {...props}
    >
      <XIcon />
    </BaseDialog.Close>
  )
}

export { dialogSizeVariants }
