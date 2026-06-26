"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/constants/images";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="about section" id="nosotras" aria-labelledby="about-title">
      <div className="container">
        <div className="about__inner">
          <div className="about__img-wrap">
            <img src={IMAGES.about} alt="" />
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
  );
}
