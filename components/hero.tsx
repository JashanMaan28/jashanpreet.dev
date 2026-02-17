"use client";

import { motion } from "framer-motion";

interface CodeLine {
  content: string;
  type: "comment" | "blank" | "keyword" | "property" | "indent" | "close";
  rest?: string;
  value?: string;
  punctuation?: string;
}

const codeLines: CodeLine[] = [
  { content: "// hello world", type: "comment" },
  { content: "", type: "blank" },
  { content: "const ", type: "keyword", rest: "developer = {" },
  { content: "  name: ", type: "property", value: '"Jashanpreet Singh"', punctuation: "," },
  { content: "  location: ", type: "property", value: '"Manteca, CA"', punctuation: "," },
  { content: "  role: ", type: "property", value: '"Student · Builder · Problem Solver"', punctuation: "," },
  { content: "", type: "blank" },
  { content: "  interests: [", type: "property" },
  { content: "    ", type: "indent", value: '"physics"', punctuation: "," },
  { content: "    ", type: "indent", value: '"mathematics"', punctuation: "," },
  { content: "    ", type: "indent", value: '"building things with code"', punctuation: "," },
  { content: "  ],", type: "close" },
  { content: "", type: "blank" },
  { content: "  currently: ", type: "property", value: '"learning everything I can"', punctuation: "," },
  { content: "};", type: "close" },
  { content: "", type: "blank" },
  { content: "export default ", type: "keyword", rest: "developer;" },
];

function CodeLineContent({ line }: { line: CodeLine }) {
  switch (line.type) {
    case "blank":
      return <span>&nbsp;</span>;
    case "comment":
      return <span className="italic text-muted-foreground/50">{line.content}</span>;
    case "keyword":
      return (
        <span>
          <span className="font-medium text-primary">{line.content}</span>
          <span className="text-foreground">{line.rest}</span>
        </span>
      );
    case "property":
      return (
        <span>
          <span className="text-foreground/80">{line.content}</span>
          {line.value && <span className="text-amber-500 dark:text-amber-400">{line.value}</span>}
          {line.punctuation && <span className="text-muted-foreground/50">{line.punctuation}</span>}
        </span>
      );
    case "indent":
      return (
        <span>
          <span>{line.content}</span>
          <span className="text-amber-500 dark:text-amber-400">{line.value}</span>
          {line.punctuation && <span className="text-muted-foreground/50">{line.punctuation}</span>}
        </span>
      );
    case "close":
      return <span className="text-foreground/80">{line.content}</span>;
  }
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center py-16 lg:min-h-screen"
    >
      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-primary/[0.07] blur-[100px]"
          style={{ animation: "float-slow 12s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-32 bottom-1/4 h-56 w-56 rounded-full bg-primary/[0.05] blur-[80px]"
          style={{ animation: "float-slower 16s ease-in-out infinite" }}
        />
      </div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Window chrome */}
        <div className="mb-3 flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <motion.span className="h-3 w-3 rounded-full bg-[#ff5f57]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.15, type: "spring", stiffness: 500 }} />
            <motion.span className="h-3 w-3 rounded-full bg-[#febc2e]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 500 }} />
            <motion.span className="h-3 w-3 rounded-full bg-[#28c840]" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.25, type: "spring", stiffness: 500 }} />
          </div>
          <span className="ml-1 font-mono text-xs text-muted-foreground/60">portfolio.ts</span>
        </div>

        {/* Code block */}
        <div className="animated-border overflow-hidden rounded-2xl border border-border bg-card/40">
          <div className="overflow-x-auto p-6 md:p-8">
            <pre className="font-mono text-[13px] leading-7 md:text-[15px] md:leading-8">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 + i * 0.02 }}
                  className="flex rounded-sm transition-colors duration-100 hover:bg-primary/[0.03]"
                >
                  <span className="mr-6 inline-block w-5 select-none text-right font-mono text-xs leading-7 text-muted-foreground/25 md:leading-8">
                    {i + 1}
                  </span>
                  <CodeLineContent line={line} />
                  {i === codeLines.length - 1 && (
                    <span className="animate-blink ml-0.5 inline-block h-[18px] w-[9px] translate-y-[4px] rounded-[1px] bg-primary md:h-[21px]" />
                  )}
                </motion.div>
              ))}
            </pre>
          </div>
        </div>

        {/* Subtitle + status */}
        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <motion.p
            className="text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.3 }}
          >
            That&apos;s me, in code. Scroll down for the human version.
          </motion.p>
          <motion.div
            className="flex items-center gap-2 text-xs text-muted-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.3 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-status-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Open to opportunities</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
