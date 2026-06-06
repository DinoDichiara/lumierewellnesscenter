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

        <p className="footer__copy">
          &copy; {new Date().getFullYear()} {t.footer.copy}
        </p>
      </div>
    </footer>
  );
}
