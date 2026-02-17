"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Animation = "bounce" | "spin" | "pulse" | "wiggle" | "float";

const hoverVariants: Record<Animation, TargetAndTransition> = {
  bounce: { y: [0, -4, 0], transition: { duration: 0.4, ease: "easeInOut" } },
  spin: { rotate: [0, 360], transition: { duration: 0.5, ease: "easeInOut" } },
  pulse: {
    scale: [1, 1.25, 1],
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  wiggle: {
    rotate: [0, -12, 12, -8, 8, 0],
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  float: {
    y: [0, -3, 0],
    transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
  },
};

interface AnimatedIconProps {
  icon: LucideIcon;
  animation?: Animation;
  className?: string;
  continuous?: boolean;
}

export function AnimatedIcon({
  icon: Icon,
  animation = "bounce",
  className = "h-4 w-4",
  continuous = false,
}: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={!continuous ? hoverVariants[animation] : undefined}
      animate={continuous ? hoverVariants[animation] : undefined}
      className="inline-flex items-center justify-center"
    >
      <Icon className={className} />
    </motion.div>
  );
}
