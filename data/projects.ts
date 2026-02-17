export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

// Replace these with your actual projects
export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "My personal corner of the internet. Built to showcase my work, share what I'm learning, and experiment with modern web technologies.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/JashanMaan28/portfolio",
    live: "/",
    featured: true,
  },
  {
    title: "Physics Simulator",
    description:
      "An interactive 2D physics sandbox that visualizes projectile motion, collisions, and gravitational fields in real time.",
    tech: ["TypeScript", "Canvas API", "React"],
    github: "https://github.com/JashanMaan28/physics-sim",
    featured: true,
  },
  {
    title: "TaskFlow",
    description:
      "A minimal task management app with drag-and-drop boards, tags, and a clean interface that stays out of your way.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/JashanMaan28/taskflow",
    live: "https://taskflow-demo.vercel.app",
    featured: false,
  },
];
