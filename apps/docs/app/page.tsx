import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Huxley UI</h1>
        <p
          className="
            mt-4 text-lg text-zinc-600
            dark:text-zinc-400
          "
        >
          Base UI + Tailwind CSS component library
        </p>
        <p
          className="
            mt-2 text-zinc-500
            dark:text-zinc-500
          "
        >
          Copy and paste components into your project
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/docs"
            className="
              inline-flex h-10 items-center justify-center rounded-lg
              bg-blue-600 px-6 text-sm font-medium text-white transition-colors
              hover:bg-blue-700
            "
          >
            Get Started
          </Link>
          <Link
            href="/playground"
            className="
              inline-flex h-10 items-center justify-center rounded-lg border
              border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-700
              transition-colors
              hover:bg-zinc-50
              dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300
              dark:hover:bg-zinc-700
            "
          >
            Playground
          </Link>
        </div>
      </div>
    </main>
  )
}
