import { defineCatalog } from "@json-render/core"
import { schema } from "@json-render/react/schema"
import { z } from "zod"

export const catalog = defineCatalog(schema, {
  components: {
    Stack: {
      props: z.object({
        direction: z
          .enum(["vertical", "horizontal"])
          .nullable()
          .describe("Layout direction. Default: vertical"),
        gap: z
          .enum(["none", "sm", "md", "lg"])
          .nullable()
          .describe("Spacing between children. Default: md"),
        align: z
          .enum(["start", "center", "end", "stretch"])
          .nullable()
          .describe("Cross-axis alignment. Default: stretch"),
        justify: z
          .enum(["start", "center", "end", "between"])
          .nullable()
          .describe("Main-axis alignment. Default: start"),
      }),
      description:
        "Flex layout container. Use as the primary building block for arranging children vertically or horizontally.",
    },
    Card: {
      props: z.object({
        title: z.string().nullable().describe("Card heading"),
        description: z
          .string()
          .nullable()
          .describe("Subtitle text below the title"),
      }),
      description:
        "Bordered card container with optional title and description. Children render inside.",
    },
    Grid: {
      props: z.object({
        columns: z
          .number()
          .nullable()
          .describe("Number of columns (1-6). Default: 2"),
        gap: z
          .enum(["none", "sm", "md", "lg"])
          .nullable()
          .describe("Spacing between cells. Default: md"),
      }),
      description: "CSS grid layout. Children fill cells left-to-right.",
    },
    Separator: {
      props: z.object({}),
      description: "Horizontal divider line.",
    },
    Heading: {
      props: z.object({
        text: z.string().describe("Heading text"),
        level: z
          .enum(["h1", "h2", "h3", "h4"])
          .nullable()
          .describe("Heading level. Default: h2"),
      }),
      description: "Section heading with semantic level.",
    },
    Text: {
      props: z.object({
        text: z.string().describe("Text content"),
        variant: z
          .enum(["body", "caption", "muted"])
          .nullable()
          .describe("Text style. Default: body"),
      }),
      description: "Paragraph text with style variants.",
    },
    Button: {
      props: z.object({
        label: z.string().describe("Button text"),
        appearance: z
          .enum(["default", "subtle", "ghost", "error", "errorSubtle"])
          .nullable()
          .describe("Visual style. Default: default (filled brand color)"),
        size: z
          .enum(["small", "medium", "large"])
          .nullable()
          .describe("Button size. Default: small"),
        disabled: z.boolean().nullable().describe("Disable the button"),
      }),
      description:
        "Clickable button. Appearances: default (brand), subtle (neutral), ghost (transparent), error, errorSubtle.",
    },
    TextField: {
      props: z.object({
        label: z.string().nullable().describe("Field label above the input"),
        name: z
          .string()
          .nullable()
          .describe("Field name for form data binding"),
        placeholder: z
          .string()
          .nullable()
          .describe("Placeholder text inside the input"),
        description: z
          .string()
          .nullable()
          .describe("Helper text below the input"),
        error: z
          .string()
          .nullable()
          .describe("Error message (replaces description)"),
        size: z
          .enum(["small", "medium", "large"])
          .nullable()
          .describe("Input size. Default: medium"),
        disabled: z.boolean().nullable().describe("Disable the input"),
        type: z
          .enum(["text", "email", "password", "number", "tel", "url"])
          .nullable()
          .describe("HTML input type. Default: text"),
        value: z.string().nullable().describe("Current value"),
      }),
      description:
        "Text input with label, description, and validation error display.",
    },
  },
  actions: {},
})
