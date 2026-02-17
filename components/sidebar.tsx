"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Github, Linkedin, Mail, Menu, X,
  User, Layers, FolderOpen, Clock, Send, BookOpen,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatedIcon } from "@/components/animated-icon";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", id: "about", icon: User },
  { label: "Stack", id: "stack", icon: Layers },
  { label: "Projects", id: "projects", icon: FolderOpen },
  { label: "Experience", id: "experience", icon: Clock },
  { label: "Writing", id: "blog", icon: BookOpen },
  { label: "Contact", id: "contact", icon: Send },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/JashanMaan28", label: "GitHub", animation: "wiggle" as const },
  { icon: Linkedin, href: "https://linkedin.com/in/jashanpreet-singh", label: "LinkedIn", animation: "bounce" as const },
  { icon: Mail, href: "mailto:jashanpreet@example.com", label: "Email", animation: "pulse" as const },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[280px] flex-col border-r border-border bg-background/60 backdrop-blur-xl lg:flex">
        <div className="flex flex-1 flex-col px-8 py-10">
          <div className="mb-8">
            <h1 className="animate-shimmer bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text font-heading text-xl font-extrabold tracking-tight text-transparent">
              Jashanpreet Singh
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Student. Builder.<br />Problem&nbsp;Solver.
            </p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Manteca, CA</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-status-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Available for opportunities</span>
            </div>
          </div>

          <Separator className="mb-8" />

          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-left cursor-pointer transition-colors duration-150",
                    isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute inset-0 rounded-lg bg-primary/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                  <motion.span
                    className="h-4 rounded-full bg-primary"
                    animate={{ width: isActive ? 3 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                  />
                  <item.icon className={cn("relative h-3.5 w-3.5 transition-colors", isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-foreground")} />
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex-1" />
          <Separator className="mb-6" />

          <div className="flex items-center gap-0.5">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:text-primary">
                <AnimatedIcon icon={link.icon} animation={link.animation} className="h-[18px] w-[18px]" />
              </a>
            ))}
            <div className="ml-auto"><ThemeToggle /></div>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl lg:hidden">
        <div className="flex h-14 items-center justify-between px-4">
          <span className="animate-shimmer bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text font-heading text-lg font-extrabold text-transparent">Jashanpreet</span>
          <div className="flex items-center gap-0.5">
            <ThemeToggle />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground" aria-label="Toggle menu">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mobileMenuOpen ? "close" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.1 }}>
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }} className="fixed inset-0 top-14 z-40 bg-background/60 backdrop-blur-sm lg:hidden" onClick={() => setMobileMenuOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.15 }} className="fixed inset-x-0 top-14 z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col px-4 py-3">
                {navItems.map((item, i) => (
                  <motion.button key={item.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.03 }} onClick={() => scrollTo(item.id)} className={cn("flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm cursor-pointer transition-colors", activeSection === item.id ? "text-primary font-medium bg-primary/5" : "text-muted-foreground")}>
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </motion.button>
                ))}
                <Separator className="my-2" />
                <div className="flex items-center gap-4 px-3 py-2">
                  {socialLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-muted-foreground transition-colors hover:text-primary">
                      <link.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
