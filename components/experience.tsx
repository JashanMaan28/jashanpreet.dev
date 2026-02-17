"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { experiences } from "@/data/experience";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const typeConfig = {
  education: { icon: GraduationCap, color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
  work: { icon: Briefcase, color: "bg-teal-500/10 text-teal-500 border-teal-500/20" },
  achievement: { icon: Award, color: "bg-amber-500/10 text-amber-500 border-amber-500/20" },
} as const;

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" number="04">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Experience</span>
      </h2>

      <div className="relative mt-8">
        <motion.div
          className="absolute bottom-0 left-[17px] top-0 w-px"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ originY: 0 }}
        >
          <div className="h-full w-full bg-gradient-to-b from-primary/40 via-border to-transparent" />
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="relative pl-14"
              >
                <motion.div
                  className={`absolute left-0 top-0.5 flex h-[34px] w-[34px] items-center justify-center rounded-full border ${config.color}`}
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon className="h-4 w-4" />
                  {i === 0 && <span className="absolute inset-0 animate-status-ping rounded-full border border-primary/30" />}
                </motion.div>

                <div className={i === experiences.length - 1 ? "opacity-60" : ""}>
                  <span className="font-mono text-xs text-muted-foreground/70">{exp.period}</span>
                  <h3 className="mt-1 font-heading text-base font-semibold">{exp.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground/70">{exp.organization}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
