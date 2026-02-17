import Link from "next/link";
import { CursorGlow } from "@/components/cursor-glow";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <CursorGlow />

      <div
        className="dot-grid pointer-events-none fixed inset-0"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]"
          style={{ animation: "float-slow 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-48 top-2/3 h-[350px] w-[350px] rounded-full bg-primary/[0.02] blur-[80px]"
          style={{ animation: "float-slower 25s ease-in-out infinite" }}
        />
      </div>

      <div className="relative z-10 text-center px-6">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none font-heading text-[10rem] font-extrabold leading-none text-primary/[0.07] sm:text-[14rem]"
        >
          404
        </span>

        <div className="-mt-12 sm:-mt-16">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              Page not found
            </span>
          </h1>

          <p className="mt-4 max-w-md mx-auto text-sm leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go home
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Read blog
            </Link>
          </div>
        </div>

        <div className="mt-12 font-mono text-xs text-muted-foreground/30">
          {`// 404 — nothing here`}
        </div>
      </div>
    </div>
  );
}
