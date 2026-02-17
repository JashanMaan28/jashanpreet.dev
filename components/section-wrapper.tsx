"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  number?: string;
}

export function SectionWrapper({
  children,
  id,
  className,
  number,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={cn("relative py-16 md:py-24", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {number && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-6 right-0 select-none font-heading text-[10rem] font-extrabold leading-none text-primary/[0.04] md:text-[14rem]"
        >
          {number}
        </span>
      )}
      {children}
    </motion.section>
  );
}
