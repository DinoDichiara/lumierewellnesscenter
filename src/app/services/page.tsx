"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Service = {
  id: number;
  name: string;
  name_es: string;
  category: string;
  category_es?: string;
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
      <div className="skeleton skeleton-text" style={{ width: "65%" }} />
      <div className="skeleton skeleton-btn" />
    </div>
  );
}

export default function ServicesPage() {
  const { t, locale } = useLanguage();
  const [services, setServices] = useState<Service[] | null>(null);
  const [error, setError] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [categories, setCategories] = useState<{ en: string; es: string }[]>([]);

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

  useEffect(() => {
    fetch(`${basePath}/data/services.json`)
      .then((r) => r.json())
      .then((data: Service[]) => {
        setServices(data);
        const seen = new Set<string>();
        const cats: { en: string; es: string }[] = [];
        data.forEach((s) => {
          if (!seen.has(s.category)) {
            seen.add(s.category);
            cats.push({ en: s.category, es: s.category_es ?? s.category });
          }
        });
        setCategories(cats);
      })
      .catch(() => {
        setServices([]);
        setError(true);
      });
  }, []);

  const filtered =
    services === null
      ? null
      : activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* ── Catalog Hero ──────────────────────────────────────── */}
      <div className="catalog-hero">
        <div className="container">
          <h1 className="catalog-hero__title">{t.catalog.title}</h1>
        </div>
      </div>


      {/* ── Filter Bar ────────────────────────────────────────── */}
      <div className="filter-bar" role="navigation" aria-label={locale === "en" ? "Filter by category" : "Filtrar por categoría"}>
        <div className="container filter-bar__inner">
          {services === null ? (
            <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>
              {locale === "en" ? "Loading filters…" : "Cargando filtros…"}
            </span>
          ) : (
            <>
              <button
                className={`filter-btn${activeFilter === "all" ? " active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                {t.catalog.filterAll}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.en}
                  className={`filter-btn${activeFilter === cat.en ? " active" : ""}`}
                  onClick={() => setActiveFilter(cat.en)}
                >
                  {locale === "en" ? cat.en : cat.es}
                </button>
              ))}
            </>
          )}
        </div>
      </div>


      {/* ── Catalog Grid ──────────────────────────────────────── */}
      <section className="catalog-section" aria-labelledby="catalog-title">
        <div className="container">
          <h2 id="catalog-title" className="sr-only">{t.catalog.title}</h2>
          <div className="catalog-grid" aria-live="polite">
            {filtered === null ? (
              Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            ) : error ? (
              <div className="empty-state">
                <div className="empty-state__icon">{t.catalog.error.icon}</div>
                <h3 className="empty-state__title">{t.catalog.error.title}</h3>
                <p className="empty-state__text">{t.catalog.error.text}</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state__icon">{t.catalog.empty.icon}</div>
                <h3 className="empty-state__title">{t.catalog.empty.title}</h3>
                <p className="empty-state__text">{t.catalog.empty.text}</p>
              </div>
            ) : (
              filtered.map((svc) => {
                const name = locale === "en" ? svc.name : svc.name_es;
                const desc = locale === "en" ? svc.description : svc.description_es;
                const cat = locale === "en" ? svc.category : (svc.category_es ?? svc.category);
                const waMsg = encodeURIComponent(
                  locale === "en"
                    ? `Hi! I'd like to inquire about: ${svc.name}`
                    : `Hola! Me gustaría consultar sobre: ${svc.name_es}`
                );
                return (
                  <article key={svc.id} className="catalog-card" data-category={svc.category}>
                    <span className="catalog-card__tag">{cat}</span>
                    <h3 className="catalog-card__name">{name}</h3>
                    <p className="catalog-card__desc">{desc}</p>
                    <div className="catalog-card__meta">
                      <span>⏱ {svc.duration}</span>
                    </div>
                    <div className="catalog-card__price">{svc.price}</div>
                    <div className="catalog-card__cta">
                      <a
                        href={`https://wa.me/12138032393?text=${waMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                      >
                        {t.catalog.consult}
                      </a>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>


      {/* ── CTA Strip ─────────────────────────────────────────── */}
      <section className="cta-banner" aria-labelledby="cta-strip-title">
        <div className="container">
          <h2 className="cta-banner__title" id="cta-strip-title">{t.catalog.ctaTitle}</h2>
          <p className="cta-banner__sub">{t.catalog.ctaSub}</p>
          <a
            href="https://wa.me/12138032393?text=Hi!%20I%27d%20like%20advice%20on%20Lumiere%20Wellness%20Center%20treatments."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-white"
          >
            {t.catalog.ctaButton}
          </a>
        </div>
      </section>
    </>
  );
}
