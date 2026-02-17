"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon } from "@/components/animated-icon";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="animated-border group relative rounded-2xl border border-border bg-card/40 p-6 transition-shadow duration-200 hover:glow-md"
    >
      {project.featured && <div className="absolute -top-px right-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
          {project.featured && <Sparkles className="h-3.5 w-3.5 text-primary/60" />}
        </div>
        <div className="flex gap-1.5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:text-primary">
              <AnimatedIcon icon={Github} animation="wiggle" className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live`} className="rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:text-primary">
              <AnimatedIcon icon={ExternalLink} animation="bounce" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary" className="border border-border/50 bg-secondary/50 font-mono text-[11px] font-normal">{t}</Badge>
        ))}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" number="03">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">Projects</span>
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
      </div>
    </SectionWrapper>
  );
}
