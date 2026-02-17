import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { TechStackSection } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects";
import { GitHubActivity } from "@/components/github-activity";
import { ExperienceSection } from "@/components/experience";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BlogSectionHome } from "@/components/blog/blog-section-home";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <Hero />
        <About />
        <TechStackSection />
        <ProjectsSection />
        <GitHubActivity />
        <ExperienceSection />
        <BlogSectionHome />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
