import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Environment } from "../components/Environment";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

export function Projects({
  onSelect,
}: {
  onSelect: (project: Project) => void;
}) {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2 id="projects-title">
            Ideas into <span>playable worlds.</span>
          </h2>
        </div>
        <p>
          A look at the mechanics, systems,
          <br />
          and experiences I'm building.
        </p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            key={project.slug}
            className={`project-card project-card--${project.theme}`}
          >
            <div className="project-visual">
              {project.featuredImage ? (
                <img
                  src={project.featuredImage.src}
                  alt={project.featuredImage.alt}
                  loading="lazy"
                />
              ) : (
                <Environment theme={project.theme} />
              )}
              <span className="project-number mono">0{index + 1}</span>
              <span
                className={`project-status ${project.status === "In development" ? "is-development" : ""}`}
              >
                <span className="status-dot" />
                {project.status}
              </span>
              {!project.featuredImage && (
                <span className="concept-label mono">
                  CONCEPT ART / CSS ILLUSTRATION
                </span>
              )}
              <span className="visual-title">
                {project.theme === "horror" ? (
                  <>
                    THE WAY
                    <br />
                    <em>OUT.</em>
                  </>
                ) : project.theme === "aim" ? (
                  <>
                    MAKE EVERY
                    <br />
                    <em>SHOT COUNT.</em>
                  </>
                ) : (
                  <>
                    GROW.
                    <br />
                    <em>BUILD. REPEAT.</em>
                  </>
                )}
              </span>
            </div>
            <div className="project-info">
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="project-bottom">
                <div className="tags">
                  {project.technologies.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <button
                  className="text-button"
                  onClick={() => onSelect(project)}
                >
                  View Case Study <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
