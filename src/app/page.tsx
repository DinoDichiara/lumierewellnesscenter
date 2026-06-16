"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

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
          <img src="https://i.postimg.cc/XvDXfv7R/hero.jpg" alt="Hero" />
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
              <span className="section-label">{t.services.label}</span>
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
            <div className="gallery__item"><div className="img-placeholder">gallery-1.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-2.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-3.jpg</div></div>
            <div className="gallery__item"><div className="img-placeholder">gallery-4.jpg</div></div>
          </div>
        </div>
      </section>


      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="cta-banner" id="contacto" aria-labelledby="cta-title">
        <div className="container">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.65)" }}>{t.cta.label}</span>
          <h2 className="cta-banner__title" id="cta-title">{t.cta.title}</h2>
          <p className="cta-banner__sub">{t.cta.sub}</p>
          <a
            href="https://wa.me/549XXXXXXXXXX?text=Hi!%20I%20want%20to%20book%20an%20appointment%20at%20Lumiere%20Wellness%20Center."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-white"
          >
            {t.cta.button}
          </a>
        </div>
      </section>
    </>
  );
}
