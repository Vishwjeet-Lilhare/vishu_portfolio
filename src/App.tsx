import { useState } from "react";
import { MotionConfig } from "motion/react";
import { Navigation } from "./components/Navigation";
import { CaseStudy } from "./components/CaseStudy";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Journey } from "./sections/Journey";
import { Contact } from "./sections/Contact";
import type { Project } from "./types/project";

export default function App() {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects onSelect={setProject} />
        <About />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <CaseStudy
        project={project}
        onClose={() => setProject(null)}
        onSelect={setProject}
      />
    </MotionConfig>
  );
}
