"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/constants/images";

type Service = {
  id: number;
  name: string;
  name_es: string;
  category: string;
  description: string;
  description_es: string;
  duration: string;
  price: string;
};

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-tag" />
      <div className="skeleton skeleton-name" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-text" />
      <div className="skeleton skeleton-btn" />
    </div>
  );
}

export default function HomePage() {
  const { t, locale } = useLanguage();
  const [featured, setFeatured] = useState<Service[] | null>(null);

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

  useEffect(() => {
    fetch(`${basePath}/data/services.json`)
      .then((r) => r.json())
      .then((data: Service[]) => setFeatured(data.slice(0, 3)))
      .catch(() => setFeatured([]));
  }, []);

  const stepIcons = ["🧖", "✨", "🌿"];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <span className="hero__eyebrow">{t.hero.eyebrow}</span>
          <h1 className="hero__title" id="hero-title">
            {t.hero.titleParts[0]}<br />
            {t.hero.titleParts[1]}<br />
            <em>{t.hero.titleParts[2]}</em>
          </h1>
          <p className="hero__sub">{t.hero.sub}</p>
          <Link href="/services" className="btn btn--primary">
            {t.hero.cta}
          </Link>
        </div>

        <div className="hero__img-wrap" aria-hidden="true">
          <img src={IMAGES.hero} alt="Hero" />
        </div>
      </section>


      {/* ── Philosophy Strip ─────────────────────────────────── */}
      <div className="strip" aria-hidden="true">
        <p className="strip__quote">{t.strip.quote}</p>
      </div>


      {/* ── Featured Services ─────────────────────────────────── */}
      <section className="services-section section" aria-labelledby="services-title">
        <div className="container">
          <div className="services-section__header">
            <div>
              <h2 className="services-section__title" id="services-title">{t.services.title}</h2>
            </div>
            <Link href="/services" className="btn btn--outline">{t.services.viewAll}</Link>
          </div>

          <div className="services-grid" aria-live="polite">
            {featured === null ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : featured.length === 0 ? (
              <p style={{ color: "var(--color-muted)", gridColumn: "1/-1", textAlign: "center", padding: "2rem 0" }}>
                {locale === "en" ? "Could not load services. Please try again later." : "No se pudieron cargar los servicios. Por favor, intentá más tarde."}
              </p>
            ) : (
              featured.map((svc, i) => (
                <article key={svc.id} className={`service-card${i === 0 ? " service-card--featured" : ""}`}>
                  <div className="service-card__img-wrap">
                    <div className="img-placeholder">service-{i + 1}.jpg</div>
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__name">{locale === "en" ? svc.name : svc.name_es}</h3>
                    <p className="service-card__desc">{locale === "en" ? svc.description : svc.description_es}</p>
                    <Link href="/services" className="service-card__link">{t.services.viewMore}</Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>


      {/* ── About ────────────────────────────────────────────── */}
      <section className="about section" id="nosotras" aria-labelledby="about-title">
        <div className="container">
          <div className="about__inner">
            <div className="about__img-wrap">
              <div className="img-placeholder">about.jpg</div>
            </div>

            <div className="about__content">
              <span className="section-label">{t.about.label}</span>
              <h2 className="about__title" id="about-title">{t.about.title}</h2>
              <div className="about__divider" aria-hidden="true" />
              <p className="about__text">{t.about.p1}</p>
              <p className="about__text">{t.about.p2}</p>
              <Link href="/services" className="btn btn--outline" style={{ marginTop: "0.5rem" }}>
                {t.about.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── Ritual / Process ──────────────────────────────────── */}
      <section className="ritual section" aria-labelledby="ritual-title">
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>{t.ritual.label}</span>
          <h2 className="ritual__title" id="ritual-title">{t.ritual.title}</h2>
          <p className="ritual__sub">{t.ritual.sub}</p>

          <div className="ritual__steps" role="list">
            {t.ritual.steps.map((step, i) => (
              <div key={i} className="ritual__step" role="listitem">
                <div className="ritual__step-icon" aria-hidden="true">{stepIcons[i]}</div>
                <span className="ritual__step-num">{step.num}</span>
                <h3 className="ritual__step-name">{step.name}</h3>
                <p className="ritual__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Gallery Teaser ────────────────────────────────────── */}
      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="container">
          <span className="section-label" style={{ textAlign: "center", display: "block" }}>{t.gallery.label}</span>
          <h2 className="gallery__title" id="gallery-title">{t.gallery.title}</h2>

          <div className="gallery__grid" aria-label="Gallery">
            <div className="gallery__item"><img src={IMAGES.galery_1}/></div>
            <div className="gallery__item"><img src={IMAGES.galery_2}/></div>
            <div className="gallery__item"><img src={IMAGES.galery_3}/></div>
            <div className="gallery__item"><img src={IMAGES.galery_4}/></div>
          </div>
        </div>
      </section>


      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="cta-banner" id="contacto" aria-labelledby="cta-title">
        <div className="container">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>{t.cta.label}</span>
          <h2 className="cta-banner__title" id="cta-title">{t.cta.title}</h2>
          <p className="cta-banner__sub">{t.cta.sub}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/12138032393?text=${encodeURIComponent(locale === "en" ? "Hi! I'd like to book an appointment at Lumiere Wellness Center." : "¡Hola! Me gustaría reservar una cita en Lumiere Wellness Center.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M24 4C12.954 4 4 12.954 4 24c0 3.615.97 7.01 2.66 9.94L4 44l10.34-2.63A19.94 19.94 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36.5a16.43 16.43 0 0 1-8.38-2.3l-.6-.36-6.14 1.56 1.62-5.96-.39-.62A16.44 16.44 0 0 1 7.5 24C7.5 14.887 14.887 7.5 24 7.5S40.5 14.887 40.5 24 33.113 40.5 24 40.5zm9.01-12.26c-.49-.25-2.9-1.43-3.35-1.59-.45-.16-.77-.25-1.1.25s-1.26 1.59-1.55 1.92c-.28.33-.57.37-1.06.12-2.9-1.45-4.8-2.58-6.72-5.86-.51-.87.51-.81 1.45-2.7.16-.33.08-.62-.04-.87s-1.1-2.65-1.51-3.63c-.4-.95-.8-.82-1.1-.84-.28-.01-.61-.01-.93-.01-.33 0-.87.12-1.32.62-.45.5-1.73 1.69-1.73 4.12s1.77 4.77 2.01 5.1c.25.33 3.47 5.3 8.41 7.44 3.13 1.35 4.35 1.46 5.91 1.23.95-.14 2.9-1.19 3.31-2.33.41-1.14.41-2.12.29-2.33-.12-.2-.45-.33-.94-.57z" />
              </svg>
              {t.cta.button}
            </a>
            <a
              href="sms:+12138032393"
              className="btn btn--outline-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              {locale === "en" ? "Send us a text" : "Envianos un SMS"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
