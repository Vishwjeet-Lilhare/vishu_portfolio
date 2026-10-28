import { ArrowRight, Braces, Bug, Layers3, Play } from "lucide-react";
import { site, education } from "../data/site";

export function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="about-copy">
        <p className="eyebrow">02 / THE DEVELOPER BEHIND THE SYSTEMS</p>
        <h2 id="about-title">
          Curious about systems.
          <br />
          <span>Focused on gameplay.</span>
        </h2>
        <p>
          I'm a game developer focused on building interactive experiences with
          UEFN and Verse. I enjoy turning gameplay ideas into practical
          systems—from enemy behavior and combat mechanics to objectives, UI,
          and player feedback.
        </p>
        <p>
          My workflow centers on experimentation, playtesting, debugging, and
          improving the player experience.
        </p>
        <div className="about-location">
          <span className="status-dot" /> BASED IN {site.location.toUpperCase()}
        </div>
      </div>
      <div className="about-panel">
        <div className="panel-title mono">
          <Braces size={18} />
          <span>DEVELOPER PROFILE</span>
          <span className="panel-plus">+</span>
        </div>
        <dl>
          <div>
            <dt>CURRENT FOCUS</dt>
            <dd>UEFN gameplay programming</dd>
          </div>
          <div>
            <dt>EXPLORING</dt>
            <dd>
              Gameplay mechanics, AI behavior, interactive systems, game UI, and
              level design
            </dd>
          </div>
          <div>
            <dt>FOUNDATION</dt>
            <dd>
              {education.degree}
              <small>
                {education.college} · SGBAU / {education.period}
              </small>
            </dd>
          </div>
        </dl>
        <div className="workflow">
          {[
            { title: "Prototype", Icon: Layers3 },
            { title: "Test", Icon: Play },
            { title: "Debug", Icon: Bug },
            { title: "Iterate", Icon: Braces },
          ].map(({ title, Icon }, i) => (
            <div key={title}>
              <Icon size={20} />
              <span>{title}</span>
              {i < 3 && <ArrowRight className="workflow-arrow" size={12} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
