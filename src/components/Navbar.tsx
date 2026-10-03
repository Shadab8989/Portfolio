import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "../lib/theme";
import { useScrollSpy } from "../lib/useScrollSpy";
import { siteConfig } from "../data/content";
import { getContactHref } from "../lib/contact";

const links = [
  { label: "Demo", href: "#demo" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = links.map((l) => l.href.slice(1));

function ThemeSwitch() {
  const { resolved, setTheme } = useTheme();
  const isDark = resolved === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <button
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      className="relative inline-flex items-center w-16 h-8 rounded-full border border-border-strong bg-bg-sub cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {/* Sliding knob */}
      <span
        className="absolute top-[3px] w-[26px] h-[26px] rounded-full bg-bg-card border border-border-strong shadow-sm transition-transform duration-200 ease-in-out depth-highlight"
        style={{ transform: isDark ? "translateX(34px)" : "translateX(3px)" }}
      />
      {/* Sun icon */}
      <span className={`absolute left-[7px] top-1/2 -translate-y-1/2 transition-colors duration-150 ${!isDark ? "text-fg" : "text-fg-muted"}`}>
        <Sun size={14} />
      </span>
      {/* Moon icon */}
      <span className={`absolute right-[7px] top-1/2 -translate-y-1/2 transition-colors duration-150 ${isDark ? "text-fg" : "text-fg-muted"}`}>
        <Moon size={14} />
      </span>
    </button>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "glass shadow-[0_1px_2px_rgba(0,0,0,0.04)] border-b border-border"
            : "bg-bg/70 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <nav className="container-main flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Wordmark */}
          <a href="#" className="text-fg font-semibold text-sm tracking-tight flex items-center gap-1.5" aria-label="Home">
            {siteConfig.name}
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={`relative text-sm font-medium transition-colors duration-150 py-1 ${
                  active === l.href.slice(1) ? "text-fg" : "text-fg-sub hover:text-fg"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 right-0 -bottom-1 h-[2px] bg-accent rounded-full transition-all duration-200 ${
                    active === l.href.slice(1) ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitch />
            <a
              href={getContactHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-[8px] bg-bg-inv text-fg-inv h-10 px-5 text-sm font-medium hover:opacity-90 transition-all duration-150 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Discuss a Project
              <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeSwitch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-fg cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[8px]"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-bg flex flex-col md:hidden animate-fade-in">
          <div className="container-main flex items-center justify-between h-16 border-b border-border">
            <span className="text-fg font-semibold text-sm flex items-center gap-1.5">
              {siteConfig.name}
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-fg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-[8px]"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="container-main flex flex-col gap-6 pt-12" aria-label="Mobile navigation">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={`text-lg font-medium ${
                  active === l.href.slice(1) ? "text-fg" : "text-fg-sub"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={getContactHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-[8px] bg-bg-inv text-fg-inv h-11 px-5 text-sm font-medium w-fit mt-4 hover:opacity-90 transition-all duration-150 active:scale-[0.98]"
            >
              Discuss a Project
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
