import { ArrowUpRight } from "lucide-react";
import { certifications, education } from "../data/site";
import { projects } from "../data/projects";
export function Journey() {
  return (
    <section
      id="journey"
      className="section journey-section"
      aria-labelledby="journey-title"
    >
      <div>
        <p className="eyebrow">04 / LEARNING BY BUILDING</p>
        <h2 id="journey-title">
          A foundation in code.
          <br />
          <span>A future in games.</span>
        </h2>
        <p className="journey-intro">
          From Computer Science to hands-on gameplay systems. Every project is a
          chance to build, test, and improve.
        </p>
        <div className="certifications">
          <span className="mono">CERTIFICATIONS</span>
          {certifications.map((cert) => (
            <p key={cert}>
              {cert}
              <ArrowUpRight size={14} aria-hidden="true" />
            </p>
          ))}
        </div>
      </div>
      <ol className="timeline">
        <li>
          <span className="timeline-marker" />
          <p className="eyebrow">{education.period} / EDUCATION</p>
          <h3>{education.degree}</h3>
          <p>
            {education.college}
            <br />
            {education.university}
          </p>
        </li>
        {projects.map((project) => (
          <li key={project.slug}>
            <span className="timeline-marker" />
            <p className="eyebrow">
              {project.status === "In development"
                ? "CURRENT DEVELOPMENT"
                : "PROJECT"}
            </p>
            <h3>{project.title}</h3>
            <p>
              {project.theme === "horror"
                ? "Creature behavior, objectives, combat, and player feedback."
                : project.theme === "aim"
                  ? "Target-practice gameplay, device events, and iteration."
                  : "Crop growth, inventory, harvesting, shop stocking, and NPC sales architecture."}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
