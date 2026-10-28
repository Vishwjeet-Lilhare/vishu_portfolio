import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "../types/project";
import { projects } from "../data/projects";

export function CaseStudy({
  project,
  onClose,
  onSelect,
}: {
  project: Project | null;
  onClose: () => void;
  onSelect: (project: Project) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const content = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [Boolean(project)]);
  useEffect(() => {
    if (content.current) content.current.scrollTop = 0;
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            'button, a[href], video[controls], [tabindex="0"]',
          ),
        );
        const first = controls[0];
        const last = controls.at(-1);
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement?.id === "case-title")
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="case-scroll" ref={content}>
          <div className="case-top">
            <span className="eyebrow">
              PROJECT FIELD NOTES / {project.status}
            </span>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Close case study"
            >
              <X />
            </button>
          </div>
          <h2 id="case-title" tabIndex={-1}>
            {project.title}
          </h2>
          <div className="tags">
            {project.technologies.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="case-intro">{project.description}</p>
          <div className="status-note">
            <span className="status-dot" />
            <p>{project.statusDetail}</p>
          </div>
          <section>
            <h3>01 / The gameplay goal</h3>
            <p>{project.goal}</p>
          </section>
          <section>
            <h3>02 / The gameplay loop</h3>
            <ol className="gameplay-loop">
              {project.loop.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          <section>
            <h3>03 / Systems & mechanics</h3>
            <ul className="system-list">
              {project.systems.map((system) => (
                <li key={system}>{system}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>04 / Technical implementation</h3>
            <p>{project.implementation}</p>
          </section>
          <section>
            <h3>05 / Development notebook</h3>
            <p className="muted">
              Editorial draft based on the supplied project context. Review
              prompts below are not claims of completed work.
            </p>
            {project.developmentNotes.map((note) => (
              <div className="development-note" key={note.title}>
                <h4>{note.title}</h4>
                <p>{note.body}</p>
              </div>
            ))}
          </section>
          {!!project.gallery?.length && (
            <section>
              <h3>06 / Gameplay gallery</h3>
              <div className="gallery">
                {project.gallery.map((media) =>
                  media.type === "image" ? (
                    <img
                      key={media.src}
                      src={media.src}
                      alt={media.alt}
                      loading="lazy"
                    />
                  ) : (
                    <figure key={media.src}>
                      <video
                        src={media.src}
                        controls
                        preload="metadata"
                        aria-label={media.alt}
                      />
                      <figcaption>{media.alt}</figcaption>
                    </figure>
                  ),
                )}
              </div>
            </section>
          )}
          {!project.gallery?.length && (
            <p className="media-note">
              Gameplay captures will be added when available. The portfolio
              illustrations are visual concepts.
            </p>
          )}
          {(project.sourceUrl || project.playUrl) && (
            <div className="button-row">
              {project.sourceUrl && (
                <a
                  className="button secondary"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source <ArrowUpRight size={16} />
                </a>
              )}
              {project.playUrl && (
                <a
                  className="button primary"
                  href={project.playUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Play Project <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          )}
          {project.lastUpdated && (
            <p className="muted">Last updated: {project.lastUpdated}</p>
          )}
          <section>
            <h3>Keep exploring</h3>
            <div className="related-projects">
              {projects
                .filter((item) => item.slug !== project.slug)
                .map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => {
                      onSelect(item);
                      document.getElementById("case-title")?.focus();
                    }}
                  >
                    {item.title}
                    <ArrowUpRight size={18} />
                  </button>
                ))}
            </div>
          </section>
        </div>
      )}
    </dialog>
  );
}
