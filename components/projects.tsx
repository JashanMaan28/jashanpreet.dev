"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { ExternalLink, Github, Sparkles, X } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { AnimatedIcon } from "@/components/animated-icon";

const HOVER_DURATION = 1000; // ms

function ProjectCard({
  project,
  index,
  onPreview,
}: {
  project: Project;
  index: number;
  onPreview: (project: Project) => void;
}) {
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 300,
    damping: 30,
  });

  const setRingProgress = useCallback((progress: number) => {
    if (!ringRef.current) return;
    const deg = progress * 360;
    ringRef.current.style.background = `conic-gradient(from -90deg, var(--primary) ${deg}deg, transparent ${deg}deg)`;
    ringRef.current.style.opacity = progress > 0 ? "1" : "0";
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / HOVER_DURATION, 1);

      setRingProgress(progress);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        onPreview(project);
        setRingProgress(0);
      }
    },
    [onPreview, project, setRingProgress]
  );

  const onMouseEnter = useCallback(() => {
    startRef.current = 0;
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const onMouseLeaveHandler = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    startRef.current = 0;
    setRingProgress(0);
    x.set(0);
    y.set(0);
  }, [x, y, setRingProgress]);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeaveHandler}
      className="group relative cursor-pointer overflow-visible rounded-2xl border border-border bg-card/40 p-6 transition-shadow duration-200 hover:glow-md"
    >
      {/* Progress ring */}
      <div
        ref={ringRef}
        className="progress-border-ring"
        style={{ opacity: 0, borderRadius: "inherit" }}
      />

      {project.featured && (
        <div className="absolute -top-px right-6 h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-lg font-semibold">
            {project.title}
          </h3>
          {project.featured && (
            <Sparkles className="h-3.5 w-3.5 text-primary/60" />
          )}
        </div>
        <div className="flex gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatedIcon
                icon={Github}
                animation="wiggle"
                className="h-4 w-4"
              />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live`}
              className="rounded-lg p-1.5 text-muted-foreground/60 transition-colors hover:text-primary"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatedIcon
                icon={ExternalLink}
                animation="bounce"
                className="h-4 w-4"
              />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Badge
            key={t}
            variant="secondary"
            className="border border-border/50 bg-secondary/50 font-mono text-[11px] font-normal"
          >
            {t}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-card p-8 shadow-xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Featured accent */}
        {project.featured && (
          <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        )}

        {/* Title */}
        <div className="flex items-center gap-2.5 pr-8">
          <h3 className="font-heading text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h3>
          {project.featured && (
            <Sparkles className="h-4 w-4 text-primary/60" />
          )}
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-6">
          <h4 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="border border-border/50 bg-secondary/50 font-mono text-xs"
              >
                {t}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-8 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              View Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects" number="03">
      <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
        <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onPreview={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
