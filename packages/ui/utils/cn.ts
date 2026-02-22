import { twMerge } from "tailwind-merge"

type ClassValue = string | boolean | undefined | null

export function cn(...inputs: ClassValue[]): string {
  return twMerge(inputs.filter(Boolean).join(" "))
}
