"use client"

import {
  CheckCircleIcon,
  WarningCircleIcon,
  XCircleIcon,
  XIcon,
} from "@phosphor-icons/react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

import { cn } from "../utils/cn"

const toastVariants = cva(
  cn(
    "pointer-events-auto flex w-full max-w-sm items-start gap-3",
    "rounded-lg border border-default",
    "bg-elevation-surface-overlay-default p-4 shadow-overlay",
  ),
  {
    variants: {
      appearance: {
        default: "",
        warning: "",
        error: "",
        success: "",
      },
    },
    defaultVariants: {
      appearance: "default",
    },
  },
)

type ToastAppearance = VariantProps<typeof toastVariants>["appearance"]

const iconMap = {
  warning: WarningCircleIcon,
  error: XCircleIcon,
  success: CheckCircleIcon,
} as const

const iconColorMap = {
  warning: "fill-warning",
  error: "fill-error",
  success: "fill-success",
} as const

type ToastData = {
  id: string
  appearance?: ToastAppearance
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
}

type ToastContextType = {
  toast: (props: Omit<ToastData, "id">) => void
}

const ToastContext = createContext<ToastContextType | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

type ToastItemProps = ToastData & {
  onClose: (id: string) => void
}

function ToastItem({
  id,
  appearance = "default",
  title,
  description,
  action,
  duration = 5000,
  onClose,
}: ToastItemProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration)
    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  const IconComponent =
    appearance && appearance !== "default" ? iconMap[appearance] : null

  return (
    <div className={toastVariants({ appearance })}>
      {IconComponent && (
        <IconComponent
          size={20}
          weight="fill"
          className={cn(
            "shrink-0",
            appearance && appearance !== "default"
              ? iconColorMap[appearance]
              : undefined,
          )}
        />
      )}
      <div className="flex-1">
        <p className="title-14-semibold text-default">{title}</p>
        {description && (
          <p className="body-12-medium mt-0.5 text-subtle">{description}</p>
        )}
      </div>
      {action ? (
        <button
          type="button"
          className="body-12-semibold shrink-0 cursor-pointer text-default hover:opacity-80"
          onClick={() => {
            action.onClick()
            onClose(id)
          }}
        >
          {action.label}
        </button>
      ) : (
        <button
          type="button"
          className={cn(
            "shrink-0 cursor-pointer text-subtle",
            "hover:text-default",
            "[&_svg]:size-4",
          )}
          onClick={() => onClose(id)}
        >
          <XIcon />
        </button>
      )}
    </div>
  )
}

export type ToastProviderProps = {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback((props: Omit<ToastData, "id">) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
    setToasts((prev) => [...prev, { ...props, id }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext value={{ toast: addToast }}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} onClose={removeToast} />
        ))}
      </div>
    </ToastContext>
  )
}

export { toastVariants }
