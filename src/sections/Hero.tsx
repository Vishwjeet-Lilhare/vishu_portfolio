import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { Environment } from "../components/Environment";
import { site } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-art">
        <Environment />
        <span className="art-coordinate mono">
          WORLD STUDY_001 <span> / </span> UEFN + VERSE
        </span>
        <div className="art-cross cross-one">+</div>
        <div className="art-cross cross-two">+</div>
        <div className="art-caption mono">
          <span className="status-dot" /> ORIGINAL CSS ENVIRONMENT · VISUAL
          CONCEPT
        </div>
      </div>
      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" /> FROM VERSE LOGIC TO PLAYABLE WORLDS
        </div>
        <p className="hero-name">VISHWJEET VINOD LILHARE</p>
        <h1 id="hero-title">
          BUILDING
          <br />
          WORLDS.
          <br />
          <span>
            PROGRAMMING
            <br />
            GAMEPLAY.
          </span>
        </h1>
        <p className="hero-description">
          I'm Vishwjeet, a <strong>UEFN gameplay programmer.</strong>
          <br className="desktop-break" /> I turn gameplay ideas into
          interactive experiences—from enemy behavior and combat to complete
          gameplay loops.
        </p>
        <div className="button-row">
          <a className="button primary" href="#projects">
            Explore My Projects <ArrowUpRight size={18} />
          </a>
          <a className="button secondary" href="#contact">
            Let's Connect <ArrowUpRight size={18} />
          </a>
          {site.resumeUrl && (
            <a className="resume-link" href={site.resumeUrl} download>
              Resume <Download size={16} />
            </a>
          )}
        </div>
        <a className="scroll-cue mono" href="#projects">
          <ArrowDown size={16} /> SCROLL TO EXPLORE
        </a>
      </div>
      <div className="hero-specs">
        <div>
          <span>ROLE</span>
          <strong>GAMEPLAY PROGRAMMER</strong>
        </div>
        <div>
          <span>ENGINE</span>
          <strong>UEFN</strong>
        </div>
        <div>
          <span>LANGUAGE</span>
          <strong>VERSE</strong>
        </div>
        <div>
          <span>FOCUS</span>
          <strong>GAMEPLAY SYSTEMS</strong>
        </div>
        <ArrowDownRight className="spec-arrow" />
      </div>
    </section>
  );
}
