export interface Experience {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "work" | "achievement";
}

// Replace with your actual experience
export const experiences: Experience[] = [
  {
    title: "High School Student",
    organization: "Ripon High School",
    period: "2022 - Present",
    description:
      "Coursework in AP Physics, Calculus, and Computer Science. Building projects and exploring new technologies independently.",
    type: "education",
  },
  {
    title: "Self-Taught Developer",
    organization: "Independent",
    period: "2023 - Present",
    description:
      "Learned web development from the ground up: HTML, CSS, JavaScript, then React and Next.js. Built multiple projects to solidify understanding.",
    type: "work",
  },
  {
    title: "Started Coding",
    organization: "First Steps",
    period: "2023",
    description:
      "Wrote my first lines of Python, discovered the joy of making a computer do what you tell it to, and never looked back.",
    type: "achievement",
  },
];
