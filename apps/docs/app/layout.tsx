import "./globals.css"
import { RootProvider } from "fumadocs-ui/provider/next"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Huxley UI",
  description: "디자인 시스템 기반 컴포넌트 + AI Playground",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
