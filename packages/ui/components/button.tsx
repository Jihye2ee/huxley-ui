"use client"

import { Button as BaseButton } from "@base-ui/react/button"
import { SpinnerGapIcon } from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps, ReactNode } from "react"

import { cn } from "../utils/cn"

const iconButtonVariants = cva(
  cn(
    `
      relative inline-flex shrink-0 cursor-pointer items-center justify-center
      rounded-md p-0
    `,
    `
      disabled:pointer-events-none
      disabled:[&_svg]:fill-disabled
    `,
  ),
  {
    variants: {
      appearance: {
        subtle: `
          bg-neutral-default
          hover:bg-neutral-hovered
          disabled:bg-fill-disabled
        `,
        ghost: `
          hover:bg-interaction-hovered
          bg-transparent
          disabled:border-none disabled:bg-none
        `,
      },
      size: {
        small: `
          size-6 min-w-6
          [&_svg]:size-4
        `,
        medium: `
          size-8 min-w-8
          [&_svg]:size-5
        `,
        large: `
          size-10 min-w-10
          [&_svg]:size-6
        `,
      },
    },
    defaultVariants: {
      appearance: "ghost",
      size: "medium",
    },
  },
)

const buttonVariants = cva(
  cn(
    `
      relative inline-flex cursor-pointer items-center justify-center gap-1
      whitespace-nowrap
      focus-visible:outline-hidden
    `,
    "disabled:pointer-events-none disabled:bg-disabled disabled:text-disabled",
  ),
  {
    variants: {
      appearance: {
        default: `
          bg-brand-default text-inverse
          hover:bg-brand-hovered
          aria-pressed:bg-brand-pressed
        `,
        subtle: `
          bg-neutral-default text-default
          hover:bg-neutral-hovered
          aria-pressed:bg-neutral-pressed
        `,
        ghost: `
          text-default
          hover:bg-interaction-hovered
          aria-pressed:bg-interaction-pressed
          bg-transparent
        `,
        error: `
          bg-error-bold-default text-inverse
          hover:bg-error-bold-hovered
          aria-pressed:bg-error-bold-pressed
        `,
        errorSubtle: `
          bg-error-default text-error
          hover:bg-error-hovered
          aria-pressed:bg-error-pressed
        `,
      },
      size: {
        small: "body-12-medium h-6 rounded-sm px-2",
        medium: "body-12-medium h-8 rounded-md px-3",
        large: "body-14-medium h-10 rounded-lg px-4",
      },
    },
    defaultVariants: {
      appearance: "default",
      size: "small",
    },
  },
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>
type IconButtonVariantProps = VariantProps<typeof iconButtonVariants>

type ButtonAppearance = ButtonVariantProps["appearance"]
type IconButtonAppearance = IconButtonVariantProps["appearance"]

type BaseButtonProps = ComponentProps<typeof BaseButton>

type IconButtonProps = {
  icon: ReactNode
  children?: never
}

type RegularButtonProps = {
  icon?: never
  children: ReactNode
}

export type ButtonProps = Omit<BaseButtonProps, "className"> &
  ButtonVariantProps & {
    loading?: boolean
    className?: string
  } & (IconButtonProps | RegularButtonProps)

export function Button({
  className,
  appearance = "default",
  size = "small",
  disabled,
  loading,
  children,
  icon,
  ...props
}: ButtonProps) {
  const isIconButton = Boolean(icon && !children)
  const child = isIconButton ? icon : children

  const getClassName = (state: { disabled: boolean }) => {
    const baseClassName = isIconButton
      ? iconButtonVariants({
          appearance: appearance as IconButtonAppearance,
          size,
        })
      : buttonVariants({
          appearance: appearance as ButtonAppearance,
          size,
        })

    return cn(
      baseClassName,
      state.disabled && "cursor-not-allowed opacity-50",
      loading && "pointer-events-none",
      className,
    )
  }

  const spinnerSize = size === "large" ? 20 : size === "medium" ? 16 : 14

  return (
    <BaseButton
      className={getClassName}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {!loading ? (
        child
      ) : (
        <>
          <SpinnerGapIcon
            size={spinnerSize}
            className="absolute animate-spin"
            aria-hidden
          />
          <span className="invisible">{child}</span>
        </>
      )}
    </BaseButton>
  )
}

export { buttonVariants, iconButtonVariants }
