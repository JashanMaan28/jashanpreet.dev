import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStackSection } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects";
import { GitHubActivity } from "@/components/github-activity";
import { ExperienceSection } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CursorGlow } from "@/components/cursor-glow";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CursorGlow />

      <div className="dot-grid pointer-events-none fixed inset-0" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/[0.03] blur-[100px]"
          style={{ animation: "float-slow 20s ease-in-out infinite" }}
        />
        <div
          className="absolute -left-48 top-2/3 h-[350px] w-[350px] rounded-full bg-primary/[0.02] blur-[80px]"
          style={{ animation: "float-slower 25s ease-in-out infinite" }}
        />
      </div>

      <Sidebar />

      <main className="relative pt-14 lg:pt-0 lg:pl-[280px]">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <Hero />
          <About />
          <TechStackSection />
          <ProjectsSection />
          <GitHubActivity />
          <ExperienceSection />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
