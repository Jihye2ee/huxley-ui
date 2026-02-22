import tsParser from "@typescript-eslint/parser"
import betterTailwindcss from "eslint-plugin-better-tailwindcss"

export default [
  {
    ignores: [
      "**/node_modules/**",
      "apps/docs/.next/**",
      "apps/docs/.source/**",
    ],
  },
  {
    ...betterTailwindcss.configs.recommended,
    files: [
      "packages/ui/**/*.{ts,tsx}",
      "apps/docs/**/*.{ts,tsx}",
    ],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "better-tailwindcss/enforce-consistent-line-wrapping": "off",
    },
    settings: {
      "better-tailwindcss": {
        entryPoint: "apps/docs/app/globals.css",
        callees: ["cn", "cva", "clsx"],
      },
    },
  },
]
