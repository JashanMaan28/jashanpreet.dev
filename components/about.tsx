"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";

export function About() {
  return (
    <SectionWrapper id="about" number="01">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">About</span>
      </h2>
      <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05, duration: 0.3 }}>
          I&apos;m a 12th grade student from Manteca, CA with a deep curiosity for how things work, from the laws of physics to the logic behind a well-crafted app.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.3 }}>
          I spend my time building projects with code, exploring mathematics, and figuring out ways to solve problems that interest me. I&apos;m drawn to the intersection of <span className="text-foreground font-medium">creative thinking</span> and <span className="text-foreground font-medium">technical execution</span>.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.3 }}>
          Right now, I&apos;m focused on getting better at full-stack web development, learning about system design, and shipping things that people can actually use.
        </motion.p>
      </div>
      <div className="mt-8 font-mono text-xs text-muted-foreground/30">{`// curiosity > credentials`}</div>
    </SectionWrapper>
  );
}
