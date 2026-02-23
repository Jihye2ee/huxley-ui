import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="title-32-bold text-default">Huxley UI</h1>
        <p className="mt-4 body-16-regular text-subtle">
          Base UI + Tailwind CSS component library
        </p>
        <p className="mt-2 body-14-regular text-subtlest">
          Copy and paste components into your project
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            href="/docs"
            className="body-14-medium inline-flex h-10 items-center justify-center rounded-lg bg-brand-default px-6 text-inverse transition-colors hover:bg-brand-hovered"
          >
            Get Started
          </Link>
          <Link
            href="/playground"
            className="body-14-medium inline-flex h-10 items-center justify-center rounded-lg border border-default px-6 text-default transition-colors hover:bg-interaction-hovered"
          >
            Playground
          </Link>
        </div>
      </div>
    </main>
  )
}
