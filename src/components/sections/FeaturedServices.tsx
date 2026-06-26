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
  image: string;
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

export default function FeaturedServices() {
  const { t, locale } = useLanguage();
  const [featured, setFeatured] = useState<Service[] | null>(null);

  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

  useEffect(() => {
    fetch(`${basePath}/data/services.json`)
      .then((r) => r.json())
      .then((data: Service[]) => setFeatured(data.slice(0, 3)))
      .catch(() => setFeatured([]));
  }, []);

  return (
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
              {locale === "en"
                ? "Could not load services. Please try again later."
                : "No se pudieron cargar los servicios. Por favor, intentá más tarde."}
            </p>
          ) : (
            featured.map((svc, i) => (
              <article key={svc.id} className={`service-card${i === 0 ? " service-card--featured" : ""}`}>
                <div className="service-card__img-wrap">
                  <img src={svc.image} alt={svc.name} />
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
  );
}
