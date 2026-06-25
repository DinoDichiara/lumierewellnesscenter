"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import BookingModal from "@/components/BookingModal";

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
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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
                const cat  = locale === "en" ? svc.category : (svc.category_es ?? svc.category);
                return (
                  <article key={svc.id} className="catalog-card" data-category={svc.category}>
                    <span className="catalog-card__tag">{cat}</span>
                    <h3 className="catalog-card__name">{name}</h3>
                    <p className="catalog-card__desc">{desc}</p>
                    <div className="catalog-card__meta">
                      <span>⏱ {svc.duration}</span>
                    </div>
                    <div className="catalog-card__footer">
                      <span className="catalog-card__price">{svc.price}</span>
                      <button
                        className="btn btn--primary catalog-card__book-btn"
                        onClick={() => setSelectedService(svc)}
                      >
                        {locale === "en" ? "Book" : "Reservar"}
                      </button>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>


      <BookingModal
        service={selectedService}
        locale={locale}
        onClose={() => setSelectedService(null)}
      />

      {/* ── CTA Strip ─────────────────────────────────────────── */}
      <section className="cta-banner" aria-labelledby="cta-strip-title">
        <div className="container">
          <h2 className="cta-banner__title" id="cta-strip-title">{t.catalog.ctaTitle}</h2>
          <p className="cta-banner__sub">{t.catalog.ctaSub}</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/12138032393?text=${encodeURIComponent(locale === "en" ? "Hi! I'd like advice on Lumiere Wellness Center treatments." : "¡Hola! Me gustaría recibir asesoramiento sobre los tratamientos de Lumiere Wellness Center.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M24 4C12.954 4 4 12.954 4 24c0 3.615.97 7.01 2.66 9.94L4 44l10.34-2.63A19.94 19.94 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36.5a16.43 16.43 0 0 1-8.38-2.3l-.6-.36-6.14 1.56 1.62-5.96-.39-.62A16.44 16.44 0 0 1 7.5 24C7.5 14.887 14.887 7.5 24 7.5S40.5 14.887 40.5 24 33.113 40.5 24 40.5zm9.01-12.26c-.49-.25-2.9-1.43-3.35-1.59-.45-.16-.77-.25-1.1.25s-1.26 1.59-1.55 1.92c-.28.33-.57.37-1.06.12-2.9-1.45-4.8-2.58-6.72-5.86-.51-.87.51-.81 1.45-2.7.16-.33.08-.62-.04-.87s-1.1-2.65-1.51-3.63c-.4-.95-.8-.82-1.1-.84-.28-.01-.61-.01-.93-.01-.33 0-.87.12-1.32.62-.45.5-1.73 1.69-1.73 4.12s1.77 4.77 2.01 5.1c.25.33 3.47 5.3 8.41 7.44 3.13 1.35 4.35 1.46 5.91 1.23.95-.14 2.9-1.19 3.31-2.33.41-1.14.41-2.12.29-2.33-.12-.2-.45-.33-.94-.57z" />
              </svg>
              {t.catalog.ctaButton}
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
