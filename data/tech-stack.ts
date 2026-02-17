export interface TechItem {
  name: string;
  category: "language" | "framework" | "tool" | "learning";
  level: string;
}

export const techStack: TechItem[] = [
  // Languages
  { name: "JavaScript", category: "language", level: "Comfortable" },
  { name: "TypeScript", category: "language", level: "Comfortable" },
  { name: "Python", category: "language", level: "Comfortable" },
  { name: "HTML", category: "language", level: "Comfortable" },
  { name: "CSS", category: "language", level: "Comfortable" },
  // Frameworks & Libraries
  { name: "React", category: "framework", level: "Comfortable" },
  { name: "Next.js", category: "framework", level: "Comfortable" },
  { name: "Tailwind CSS", category: "framework", level: "Comfortable" },
  { name: "Framer Motion", category: "framework", level: "Learning" },
  // Tools
  { name: "Git", category: "tool", level: "Comfortable" },
  { name: "VS Code", category: "tool", level: "Daily driver" },
  { name: "GitHub", category: "tool", level: "Comfortable" },
  // Currently Learning
  { name: "Node.js", category: "learning", level: "Exploring" },
  { name: "PostgreSQL", category: "learning", level: "Exploring" },
  { name: "Docker", category: "learning", level: "Curious" },
];

export const categoryLabels: Record<string, string> = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  tool: "Tools",
  learning: "Currently Learning",
};
