import type { Project } from "../types/project";

export function Environment({
  theme = "hero",
}: {
  theme?: Project["theme"] | "hero";
}) {
  return (
    <div className={`environment environment--${theme}`} aria-hidden="true">
      <div className="scene-grid" />
      <div className="scene-haze" />
      {theme === "hero" || theme === "horror" ? (
        <>
          <div className="mountain mountain--back" />
          <div className="mountain mountain--front" />
          <div className="pillar pillar--one" />
          <div className="pillar pillar--two" />
          <div className="pillar pillar--three" />
          <div className="portal">
            <div className="portal-inner" />
          </div>
          <div className="platform">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="traveler">
            <i />
          </div>
          <div className="ground-light" />
        </>
      ) : theme === "aim" ? (
        <>
          <div className="range-lines" />
          <div className="target target--one" />
          <div className="target target--two" />
          <div className="target target--three" />
          <div className="reticle">
            <i />
          </div>
        </>
      ) : (
        <>
          <div className="farm-sun" />
          <div className="farm-field">
            {Array.from({ length: 24 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="farm-house">
            <i />
          </div>
          <div className="farm-crate" />
        </>
      )}
      <div className="scene-vignette" />
    </div>
  );
}
