import {
  collectUsedComponents,
  serializeProps as rawSerializeProps,
} from "@json-render/codegen"
import type { Spec } from "@json-render/react"

const HEADING_STYLES: Record<string, string> = {
  h1: "title-16-semibold text-default text-2xl",
  h2: "title-16-semibold text-default text-xl",
  h3: "title-16-semibold text-default text-lg",
  h4: "body-15-semibold text-default",
}

const TEXT_STYLES: Record<string, string> = {
  body: "body-15-medium text-default",
  caption: "body-12-medium text-subtle",
  muted: "body-13-medium text-subtle",
}

const GAP_MAP: Record<string, string> = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
}

const HUXLEY_COMPONENTS = new Set([
  "Stack",
  "Card",
  "Separator",
  "Button",
  "TextField",
])

function filterNulls(props: Record<string, unknown>): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [k, v] of Object.entries(props)) {
    if (v !== null && v !== undefined) out[k] = v
  }
  return out
}

function serializeProps(props: Record<string, unknown>): string {
  return rawSerializeProps(filterNulls(props))
}

function renderChildren(
  spec: Spec,
  children: string[] | undefined,
  indent: number,
): string {
  if (!children || children.length === 0) return ""
  return children
    .map((key) => generateJSX(spec, key, indent))
    .filter(Boolean)
    .join("\n")
}

function generateJSX(spec: Spec, key: string, indent: number): string {
  const element = spec.elements[key]
  if (!element) return ""

  const spaces = "  ".repeat(indent)
  const p = element.props as Record<string, unknown>
  const kids = element.children

  switch (element.type) {
    case "Heading": {
      const tag = (p.level as string) ?? "h2"
      const cls = HEADING_STYLES[tag] ?? HEADING_STYLES.h2
      return `${spaces}<${tag} className="${cls}">${p.text}</${tag}>`
    }

    case "Text": {
      const cls =
        TEXT_STYLES[(p.variant as string) ?? "body"] ?? TEXT_STYLES.body
      return `${spaces}<p className="${cls}">${p.text}</p>`
    }

    case "Grid": {
      const cols = Math.min(Math.max((p.columns as number) ?? 2, 1), 6)
      const cls = `grid grid-cols-${cols} ${GAP_MAP[(p.gap as string) ?? "md"]}`
      const inner = renderChildren(spec, kids, indent + 1)
      return inner
        ? `${spaces}<div className="${cls}">\n${inner}\n${spaces}</div>`
        : `${spaces}<div className="${cls}" />`
    }

    case "Button": {
      const { label, ...rest } = p
      const propsStr = serializeProps(rest)
      const open = propsStr
        ? `${spaces}<Button ${propsStr}>`
        : `${spaces}<Button>`
      return `${open}${label}</Button>`
    }

    case "TextField": {
      const { value, ...rest } = p
      const mapped = {
        ...rest,
        ...(value != null ? { defaultValue: value } : {}),
      }
      const propsStr = serializeProps(mapped)
      return propsStr
        ? `${spaces}<TextField ${propsStr} />`
        : `${spaces}<TextField />`
    }

    default: {
      const propsStr = serializeProps(p)
      const hasKids = kids && kids.length > 0

      if (!hasKids) {
        return propsStr
          ? `${spaces}<${element.type} ${propsStr} />`
          : `${spaces}<${element.type} />`
      }

      const inner = renderChildren(spec, kids, indent + 1)
      const open = propsStr
        ? `${spaces}<${element.type} ${propsStr}>`
        : `${spaces}<${element.type}>`
      return `${open}\n${inner}\n${spaces}</${element.type}>`
    }
  }
}

function collectImports(spec: Spec): string[] {
  const used = collectUsedComponents(spec)
  return [...used].filter((c) => HUXLEY_COMPONENTS.has(c)).sort()
}

export function specToCode(spec: Spec): string {
  const imports = collectImports(spec)
  const jsx = generateJSX(spec, spec.root, 2)

  const importLine =
    imports.length > 0
      ? `import { ${imports.join(", ")} } from "@huxley-ui/ui"\n\n`
      : ""

  return `${importLine}export default function Page() {
  return (
${jsx}
  )
}`
}
