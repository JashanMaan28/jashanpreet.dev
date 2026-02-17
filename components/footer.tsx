import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto max-w-4xl px-6 py-8 md:px-12">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground/60 sm:flex-row">
          <span className="flex items-center gap-1.5">
            <Code2 className="h-3 w-3" /> {new Date().getFullYear()} Jashanpreet Singh. All rights reserved.
          </span>
          <span className="font-mono text-[11px]">Next.js &middot; Tailwind CSS &middot; Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
