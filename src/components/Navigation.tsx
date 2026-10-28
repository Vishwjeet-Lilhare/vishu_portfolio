import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "../data/site";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="VL. Vishwjeet Gameplay Developer — Home"
        onClick={() => setOpen(false)}
      >
        <span className="monogram">
          VL<span>.</span>
        </span>
        <span className="brand-name">
          VISHWJEET<span>GAMEPLAY DEVELOPER</span>
        </span>
      </a>
      <nav
        aria-label="Main navigation"
        id="main-navigation"
        className={open ? "navigation is-open" : "navigation"}
      >
        {navigation.map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            aria-current={
              active === label.toLowerCase() ? "location" : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#contact">
        Let's Connect <ArrowUpRight size={15} />
      </a>
      <button
        id="menu-toggle"
        className="menu-toggle icon-button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
