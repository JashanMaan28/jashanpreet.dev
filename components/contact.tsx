"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { AnimatedIcon } from "@/components/animated-icon";

const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:jashanpreet@example.com", display: "jashanpreet@example.com", animation: "pulse" as const },
  { icon: Github, label: "GitHub", href: "https://github.com/JashanMaan28", display: "github.com/JashanMaan28", animation: "wiggle" as const },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/jashanpreet-singh", display: "linkedin.com/in/jashanpreet-singh", animation: "bounce" as const },
];

export function Contact() {
  return (
    <SectionWrapper id="contact" number="05">
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Let&apos;s Connect</span>
      </h2>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
        Always open to connecting, whether it&apos;s about a project idea, an opportunity, or just to say hello.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
            whileHover={{ y: -3 }}
            className="animated-border group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/40 p-6 transition-shadow duration-200 hover:glow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/[0.06] text-primary transition-colors group-hover:bg-primary/10">
              <AnimatedIcon icon={link.icon} animation={link.animation} className="h-5 w-5" />
            </div>
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">{link.label}</span>
              <div className="mt-1 flex items-center gap-1 text-sm text-foreground">
                <span>{link.display}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="mt-10 font-mono text-xs text-muted-foreground/25">{`// don't be a stranger`}</div>
    </SectionWrapper>
  );
}
