"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] hidden transition-opacity duration-500 lg:block"
      style={{
        opacity: visible ? 1 : 0,
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, oklch(0.696 0.17 162 / 0.035), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
}
