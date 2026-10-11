import { useState, useEffect } from "react";
import { SITE, APPLY_FORM_URL } from "../data.js";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Why InternNova", href: "#why" },
  { label: "How it works", href: "#how" },
  { label: "Events", href: "#events" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="wrap bar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="InternNova homepage redesign">
          <svg className="brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span className="brand-name">InternNova</span>
          <span className="badge-tag">redesign</span>
        </a>

        <button
          className="menu-btn"
          id="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
          <span>{isOpen ? "Close" : "Menu"}</span>
        </button>

        <nav id="main-nav" className={`nav ${isOpen ? "open" : ""}`} aria-label="Main Navigation">
          {navLinks.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link" onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            href={APPLY_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            onClick={closeMenu}
          >
            Apply Now
            <span className="sr">(opens official application form)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
