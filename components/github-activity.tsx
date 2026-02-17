"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { SectionWrapper } from "@/components/section-wrapper";

export function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <SectionWrapper id="github">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          GitHub Activity
        </span>
      </h2>
      <p className="mt-3 text-sm text-muted-foreground">
        My contribution graph. Proof that I ship code, not just talk about it.
      </p>
      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card/40 p-4 md:p-6">
        <GitHubCalendar
          username="JashanMaan28"
          colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          blockSize={11}
          blockMargin={3}
          fontSize={12}
          theme={{
            dark: ["#1a1a2e", "#064e3b", "#059669", "#10b981", "#34d399"],
            light: ["#f0fdf4", "#d1fae5", "#6ee7b7", "#34d399", "#10b981"],
          }}
        />
      </div>
    </SectionWrapper>
  );
}
