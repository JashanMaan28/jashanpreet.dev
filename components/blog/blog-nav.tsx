"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function BlogNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="animate-shimmer bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text font-heading text-lg font-extrabold tracking-tight text-transparent">
              Jashanpreet
            </span>
          </Link>
          <span className="text-border">/</span>
          <Link
            href="/blog"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Blog
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
