"use client"

import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

export type CardProps = Omit<ComponentProps<"div">, "className" | "title"> & {
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  className?: string
}

export function Card({
  title,
  description,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-default bg-default p-6",
        className,
      )}
      {...props}
    >
      {title && (
        <h3 className="title-16-semibold text-default mb-1">{title}</h3>
      )}
      {description && (
        <p className="body-12-medium text-subtle mb-4">{description}</p>
      )}
      {children && <div className="flex flex-col gap-4">{children}</div>}
    </div>
  )
}
