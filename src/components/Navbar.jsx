import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navData, siteMeta } from "../data/contentData";

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 12 8"
      className={`h-2.5 w-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5L12 13L20.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UtilityStrip() {
  return (
    <div className="flex w-full items-center gap-4 border-b border-temple-grey/60 px-6 py-1.5 text-charcoal md:px-10">
      <a
        href={siteMeta.linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="transition-colors duration-200 hover:text-dark-night"
      >
        <LinkedInIcon />
      </a>
      <a
        href={`mailto:${siteMeta.email}`}
        aria-label="Email"
        className="transition-colors duration-200 hover:text-dark-night"
      >
        <MailIcon />
      </a>
    </div>
  );
}

function DesktopDropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);

  const handleEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1.5 text-base font-medium tracking-wide text-dark-night/70 transition-colors duration-200 hover:text-dark-night"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-w-56 border border-temple-grey bg-snowfall py-2 shadow-xl shadow-dark-night/10">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-5 py-2.5 font-serif text-base font-medium tracking-normal text-dark-night/70 transition-colors duration-150 hover:bg-frozen-dew/40 hover:text-dark-night"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({ label, items, onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-temple-grey/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base font-medium tracking-wide text-dark-night"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-200 ${open ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"}`}>
        <div className="min-h-0">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={onNavigate}
              className="block py-2 pl-4 font-serif text-base font-medium tracking-normal text-dark-night/70 transition-colors duration-150 hover:text-dark-night"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    `text-base font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-dark-night" : "text-dark-night/70 hover:text-dark-night"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-temple-grey bg-snowfall/95 backdrop-blur-md">
      <UtilityStrip />

      <nav className="flex h-20 w-full items-center justify-between px-6 md:px-10">
        <Link
          to={navData.brand.to}
          className="font-cursive text-4xl leading-none tracking-normal text-dark-night transition-all duration-500 hover:tracking-wide hover:opacity-70 md:text-5xl"
        >
          {navData.brand.label}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navData.links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          {navData.dropdowns.map((dd) => (
            <DesktopDropdown key={dd.label} label={dd.label} items={dd.items} />
          ))}
          <a
            href={navData.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dark-night/30 px-4 py-1.5 text-base font-medium tracking-wide text-dark-night opacity-70 transition-all duration-200 hover:border-dark-night hover:bg-dark-night hover:text-snowfall hover:opacity-100"
          >
            {navData.resume.label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-dark-night transition-transform duration-200 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-dark-night transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-y-auto border-t border-temple-grey bg-snowfall transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[calc(100svh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6">
          {navData.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-temple-grey/60 py-4 text-base font-medium tracking-wide text-dark-night"
            >
              {link.label}
            </Link>
          ))}
          {navData.dropdowns.map((dd) => (
            <MobileAccordion key={dd.label} label={dd.label} items={dd.items} onNavigate={() => setMobileOpen(false)} />
          ))}
          <a
            href={navData.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="my-6 border border-dark-night/30 py-3 text-center text-base font-medium tracking-wide text-dark-night opacity-70"
          >
            {navData.resume.label}
          </a>
        </div>
      </div>
    </header>
  );
}
