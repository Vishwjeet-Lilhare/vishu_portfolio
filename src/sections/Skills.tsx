import { skills } from "../data/site";
export function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / TECHNICAL TOOLKIT</p>
          <h2 id="skills-title">
            The tools behind <span>the experience.</span>
          </h2>
        </div>
        <p>
          Gameplay first.
          <br />
          The right tools to bring it to life.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-group" key={group.title}>
            <p className="mono">{group.label}</p>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
