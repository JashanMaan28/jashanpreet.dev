"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Wrench, BookOpen } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { techStack, categoryLabels } from "@/data/tech-stack";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const categories = ["language", "framework", "tool", "learning"] as const;
const categoryIcons = { language: Code2, framework: Layers, tool: Wrench, learning: BookOpen };

export function TechStackSection() {
  return (
    <SectionWrapper id="stack" number="02">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Tech Stack</span>
      </h2>

      <div className="mt-8 space-y-8">
        {categories.map((category) => {
          const items = techStack.filter((t) => t.category === category);
          if (items.length === 0) return null;
          const Icon = categoryIcons[category];

          return (
            <div key={category}>
              <div className="mb-3 flex items-center gap-2">
                <Icon className="h-3.5 w-3.5 text-primary/60" />
                <h3 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {categoryLabels[category]}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <Tooltip key={item.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02, duration: 0.25 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="animated-border cursor-default rounded-xl border border-border bg-card/40 px-4 py-2.5 font-mono text-sm transition-shadow duration-200 hover:glow-sm hover:border-primary/20"
                      >
                        {item.name}
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="font-mono text-xs">
                      {item.level}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
