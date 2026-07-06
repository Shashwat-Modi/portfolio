import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navData } from "../data/contentData";

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
        className="flex items-center gap-1.5 text-sm tracking-wide text-stone-400 transition-colors duration-200 hover:text-zinc-100"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-w-56 border border-zinc-800 bg-zinc-900/98 py-2 shadow-2xl shadow-black/40 backdrop-blur">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-5 py-2.5 text-sm text-stone-400 transition-colors duration-150 hover:bg-zinc-800/60 hover:text-zinc-100"
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
    <div className="border-b border-zinc-800/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-base text-stone-300"
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
              className="block py-2 pl-4 text-sm text-stone-500 transition-colors duration-150 hover:text-zinc-100"
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
    `text-sm tracking-wide transition-colors duration-200 ${
      isActive ? "text-zinc-100" : "text-stone-400 hover:text-zinc-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-900/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          to={navData.brand.to}
          className="font-serif text-lg tracking-wide text-zinc-100 transition-colors duration-200 hover:text-stone-300"
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
            className="border border-stone-400 px-4 py-1.5 text-sm tracking-wide text-stone-300 transition-colors duration-200 hover:border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900"
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
            className={`h-px w-6 bg-zinc-100 transition-transform duration-200 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-zinc-100 transition-transform duration-200 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-y-auto border-t border-zinc-800/70 bg-zinc-900 transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-[calc(100svh-4rem)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6">
          {navData.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-b border-zinc-800/70 py-4 text-base text-stone-300"
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
            className="my-6 border border-stone-400 py-3 text-center text-sm tracking-wide text-stone-300"
          >
            {navData.resume.label}
          </a>
        </div>
      </div>
    </header>
  );
}
