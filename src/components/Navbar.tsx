"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2" />
      <path d="M2 12h20" />
    </svg>
  );
}

export default function Navbar() {
  const { t, locale, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    const next = !mobileOpen;
    setMobileOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav" role="banner">
      <div className="container nav__inner">
        <Link href="/" className="nav__logo" aria-label="Lumiere Wellness Center">
          Lumiere
        </Link>

        <nav aria-label="Main navigation">
          <ul className={`nav__links${mobileOpen ? " open" : ""}`} id="nav-links" role="list">
            <li><Link href="/" onClick={closeMenu}>{t.nav.home}</Link></li>
            <li><Link href="/services" onClick={closeMenu}>{t.nav.services}</Link></li>
            <li><Link href="/#nosotras" onClick={closeMenu}>{t.nav.about}</Link></li>
            <li><Link href="/#contacto" onClick={closeMenu}>{t.nav.contact}</Link></li>
            <li>
              <Link href="/services" className="nav__cta" onClick={closeMenu}>
                {t.nav.book}
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
            title={locale === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              background: "none",
              border: "1.5px solid var(--color-primary)",
              borderRadius: "100px",
              padding: "0.3rem 0.7rem",
              cursor: "pointer",
              color: "var(--color-muted)",
              fontFamily: "var(--font-ui)",
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "border-color 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-accent)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--color-primary)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted)";
            }}
          >
            <GlobeIcon />
            {locale === "en" ? "ES" : "EN"}
          </button>

          {/* Hamburger */}
          <button
            className="nav__toggle"
            id="nav-toggle"
            aria-controls="nav-links"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <span style={mobileOpen ? { transform: "translateY(6.5px) rotate(45deg)" } : undefined} />
            <span style={mobileOpen ? { opacity: 0 } : undefined} />
            <span style={mobileOpen ? { transform: "translateY(-6.5px) rotate(-45deg)" } : undefined} />
          </button>
        </div>
      </div>
    </header>
  );
}
