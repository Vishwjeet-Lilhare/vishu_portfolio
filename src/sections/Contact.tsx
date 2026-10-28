import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { site } from "../data/site";

export function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus(
        "Unable to copy. Select the email address below, or use the email button.",
      );
    }
  }
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">
        <span className="status-dot" /> 05 / LET'S MAKE SOMETHING PLAYABLE
      </p>
      <div className="contact-layout">
        <div>
          <h2 id="contact-title">
            Have a game idea?
            <br />
            <span>Let's build something.</span>
          </h2>
          <p>
            I'm interested in gameplay programming opportunities,
            game-development collaborations, and projects where creative ideas
            meet technical implementation.
          </p>
          <a className="button primary" href={`mailto:${site.email}`}>
            Let's talk gameplay <ArrowUpRight size={20} />
          </a>
        </div>
        <div className="contact-details">
          <span className="mono">START A CONVERSATION</span>
          <div className="email-row">
            <Mail size={18} />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <button
              className="icon-button"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copyStatus.startsWith("Email copied") ? (
                <Check size={17} />
              ) : (
                <Copy size={17} />
              )}
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {copyStatus}
          </p>
          <div className="social-links">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
                <ArrowUpRight size={18} />
              </a>
            ))}
          </div>
          <p className="contact-location">
            <MapPin size={15} />
            {site.location}
          </p>
          {site.showPhone && (
            <a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a>
          )}
        </div>
      </div>
    </section>
  );
}
