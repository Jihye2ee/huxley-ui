"use client"

import { Button } from "@huxley-ui/ui/components/button"
import { Card } from "@huxley-ui/ui/components/card"
import { Separator } from "@huxley-ui/ui/components/separator"
import { Stack } from "@huxley-ui/ui/components/stack"
import { TextField } from "@huxley-ui/ui/components/text-field"
import { cn } from "@huxley-ui/ui/utils/cn"
import { defineRegistry } from "@json-render/react"

import { catalog } from "./catalog"

const GAP_MAP: Record<string, string> = {
  none: "gap-0",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
}

export const { registry } = defineRegistry(catalog, {
  components: {
    Stack: ({ props, children }) => (
      <Stack
        direction={props.direction ?? "vertical"}
        gap={props.gap ?? "md"}
        align={props.align ?? "stretch"}
        justify={props.justify ?? "start"}
      >
        {children}
      </Stack>
    ),

    Card: ({ props, children }) => (
      <Card
        title={props.title ?? undefined}
        description={props.description ?? undefined}
      >
        {children}
      </Card>
    ),

    Grid: ({ props, children }) => {
      const cols = Math.min(Math.max(props.columns ?? 2, 1), 6)
      return (
        <div
          className={cn("grid", GAP_MAP[props.gap ?? "md"])}
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          }}
        >
          {children}
        </div>
      )
    },

    Separator: () => <Separator />,

    Heading: ({ props }) => {
      const tag = props.level ?? "h2"
      const styles: Record<string, string> = {
        h1: "title-16-semibold text-default text-2xl",
        h2: "title-16-semibold text-default text-xl",
        h3: "title-16-semibold text-default text-lg",
        h4: "body-15-semibold text-default",
      }
      const Tag = tag as "h1" | "h2" | "h3" | "h4"
      return <Tag className={styles[tag]}>{props.text}</Tag>
    },

    Text: ({ props }) => {
      const styles: Record<string, string> = {
        body: "body-15-medium text-default",
        caption: "body-12-medium text-subtle",
        muted: "body-13-medium text-subtle",
      }
      return <p className={styles[props.variant ?? "body"]}>{props.text}</p>
    },

    Button: ({ props }) => (
      <Button
        appearance={
          (props.appearance ?? "default") as
            | "default"
            | "subtle"
            | "ghost"
            | "error"
            | "errorSubtle"
        }
        size={(props.size ?? "small") as "small" | "medium" | "large"}
        disabled={props.disabled ?? false}
      >
        {props.label}
      </Button>
    ),

    TextField: ({ props }) => (
      <TextField
        label={props.label ?? undefined}
        name={props.name ?? undefined}
        placeholder={props.placeholder ?? undefined}
        description={props.description ?? undefined}
        error={props.error ?? undefined}
        size={(props.size ?? "medium") as "small" | "medium" | "large"}
        disabled={props.disabled ?? false}
        type={props.type ?? "text"}
        defaultValue={props.value ?? ""}
      />
    ),
  },
})
