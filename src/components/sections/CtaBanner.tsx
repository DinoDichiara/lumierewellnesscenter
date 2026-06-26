"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function CtaBanner() {
  const { t, locale } = useLanguage();

  return (
    <section className="cta-banner" id="contacto" aria-labelledby="cta-title">
      <div className="container">
        <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>{t.cta.label}</span>
        <h2 className="cta-banner__title" id="cta-title">{t.cta.title}</h2>
        <p className="cta-banner__sub">{t.cta.sub}</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`https://wa.me/12138032393?text=${encodeURIComponent(
              locale === "en"
                ? "Hi! I'd like to book an appointment at Lumiere Wellness Center."
                : "¡Hola! Me gustaría reservar una cita en Lumiere Wellness Center."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M24 4C12.954 4 4 12.954 4 24c0 3.615.97 7.01 2.66 9.94L4 44l10.34-2.63A19.94 19.94 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36.5a16.43 16.43 0 0 1-8.38-2.3l-.6-.36-6.14 1.56 1.62-5.96-.39-.62A16.44 16.44 0 0 1 7.5 24C7.5 14.887 14.887 7.5 24 7.5S40.5 14.887 40.5 24 33.113 40.5 24 40.5zm9.01-12.26c-.49-.25-2.9-1.43-3.35-1.59-.45-.16-.77-.25-1.1.25s-1.26 1.59-1.55 1.92c-.28.33-.57.37-1.06.12-2.9-1.45-4.8-2.58-6.72-5.86-.51-.87.51-.81 1.45-2.7.16-.33.08-.62-.04-.87s-1.1-2.65-1.51-3.63c-.4-.95-.8-.82-1.1-.84-.28-.01-.61-.01-.93-.01-.33 0-.87.12-1.32.62-.45.5-1.73 1.69-1.73 4.12s1.77 4.77 2.01 5.1c.25.33 3.47 5.3 8.41 7.44 3.13 1.35 4.35 1.46 5.91 1.23.95-.14 2.9-1.19 3.31-2.33.41-1.14.41-2.12.29-2.33-.12-.2-.45-.33-.94-.57z" />
            </svg>
            {t.cta.button}
          </a>
          <a href="sms:+12138032393" className="btn btn--outline-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {locale === "en" ? "Send us a text" : "Envianos un SMS"}
          </a>
        </div>
      </div>
    </section>
  );
}
