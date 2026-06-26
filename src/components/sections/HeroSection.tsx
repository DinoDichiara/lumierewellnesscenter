"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/constants/images";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
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
  );
}
