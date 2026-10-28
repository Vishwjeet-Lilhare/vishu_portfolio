import { ArrowUp } from "lucide-react";
import { site } from "../data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a className="brand" href="#home">
          <span className="monogram">
            VL<span>.</span>
          </span>
          <span>
            {site.name}
            <small>Game Developer | Verse Programmer</small>
          </span>
        </a>
        <nav aria-label="Footer navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </nav>
        <a className="back-to-top" href="#home" aria-label="Back to top">
          <ArrowUp size={19} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.shortName}
        </span>
        <span>
          Built with React, TypeScript, and a passion for gameplay systems.
        </span>
      </div>
    </footer>
  );
}
