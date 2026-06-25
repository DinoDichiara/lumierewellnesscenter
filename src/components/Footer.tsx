"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <span className="footer__logo">Lumiere</span>

        <nav aria-label="Footer">
          <ul className="footer__links" role="list">
            <li><Link href="/">{t.nav.home}</Link></li>
            <li><Link href="/services">{t.nav.services}</Link></li>
            <li><Link href="/#nosotras">{t.nav.about}</Link></li>
            <li><Link href="/#contacto">{t.nav.contact}</Link></li>
          </ul>
        </nav>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lumierewellnesscenter/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.2c.8 1.1 2 1.9 3.4 2v2.7c-1.4 0-2.8-.4-4-1.2v6.4c0 3-2.4 5.4-5.4 5.4S5.2 18.1 5.2 15.1c0-2.8 2.1-5.1 4.8-5.4v2.8c-1.2.2-2.1 1.3-2.1 2.6 0 1.5 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6V2.5h2.8c.1 1 .4 1.9.7 2.7z" />
            </svg>
          </a>
        </div>

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {t.footer.copy}
        </p>
      </div>
    </footer>
  );
}
