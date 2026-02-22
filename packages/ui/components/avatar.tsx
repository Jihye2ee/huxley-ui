"use client"

import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"

import { cn } from "../utils/cn"

const avatarVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full",
  {
    variants: {
      size: {
        large: "size-10",
        small: "size-6",
      },
      color: {
        neutral: "bg-neutral-default text-subtle",
        orange: "bg-accent-orange text-accent-oragne",
        green: "bg-accent-green text-accent-green",
        blue: "bg-accent-blue text-accent-blue",
      },
    },
    defaultVariants: {
      size: "large",
      color: "neutral",
    },
  },
)

const initialVariants = cva("select-none", {
  variants: {
    size: {
      small: "body-10-semibold",
      large: "body-14-semibold",
    },
  },
  defaultVariants: {
    size: "large",
  },
})

type AvatarVariantProps = VariantProps<typeof avatarVariants>

export type AvatarProps = Omit<ComponentProps<"div">, "className"> &
  AvatarVariantProps & {
    src?: string
    alt?: string
    children?: string
    className?: string
  }

export function Avatar({
  size = "large",
  color = "neutral",
  src,
  alt,
  children,
  className,
  ...props
}: AvatarProps) {
  return (
    <div className={cn(avatarVariants({ size, color }), className)} {...props}>
      {src ? (
        <img src={src} alt={alt || ""} className="size-full object-cover" />
      ) : (
        <span className={initialVariants({ size })}>{children?.charAt(0)}</span>
      )}
    </div>
  )
}

export { avatarVariants }
