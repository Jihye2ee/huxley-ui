"use client"

import { Slider as BaseSlider } from "@base-ui/react/slider"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

export type SliderProps = Omit<
  ComponentProps<typeof BaseSlider.Root>,
  "className"
> & {
  label?: ReactNode
  showValue?: boolean
  className?: string
}

export function Slider({
  label,
  showValue = false,
  className,
  disabled,
  ...props
}: SliderProps) {
  return (
    <BaseSlider.Root
      className={cn("flex w-full flex-col", className)}
      disabled={disabled}
      {...props}
    >
      {(label || showValue) && (
        <div className="mb-2 flex items-center justify-between">
          {label && (
            <span
              className={cn(
                "body-14-medium text-default",
                disabled && "text-disabled",
              )}
            >
              {label}
            </span>
          )}
          {showValue && (
            <BaseSlider.Value
              className={cn(
                "body-14-medium text-default",
                disabled && "text-disabled",
              )}
            >
              {(formattedValues) => {
                if (formattedValues.length === 1) {
                  return formattedValues[0]
                }
                return formattedValues.join(" \u2013 ")
              }}
            </BaseSlider.Value>
          )}
        </div>
      )}
      <BaseSlider.Track
        className={cn(
          "relative h-1 w-full rounded-full bg-neutral-default",
          disabled && "opacity-40",
        )}
      >
        <BaseSlider.Indicator
          className={cn(
            "absolute h-full rounded-full",
            disabled ? "bg-subtle" : "bg-brand-default",
          )}
        />
        <BaseSlider.Thumb
          className={cn(
            "absolute top-1/2 size-5 -translate-x-1/2 -translate-y-1/2",
            "cursor-pointer rounded-full bg-white shadow-raised",
            "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-default",
            disabled && "cursor-not-allowed bg-subtle",
          )}
        />
      </BaseSlider.Track>
    </BaseSlider.Root>
  )
}
