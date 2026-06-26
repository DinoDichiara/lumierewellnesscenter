"use client";

import { useLanguage } from "@/context/LanguageContext";
import { IMAGES } from "@/constants/images";

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className="gallery section" aria-labelledby="gallery-title">
      <div className="container">
        <span className="section-label" style={{ textAlign: "center", display: "block" }}>{t.gallery.label}</span>
        <h2 className="gallery__title" id="gallery-title">{t.gallery.title}</h2>

        <div className="gallery__grid" aria-label="Gallery">
          <div className="gallery__item"><img src={IMAGES.gallery_1} alt="gallery 1" /></div>
          <div className="gallery__item"><img src={IMAGES.gallery_2} alt="gallery 2" /></div>
          <div className="gallery__item"><img src={IMAGES.gallery_3} alt="gallery 3" /></div>
          <div className="gallery__item"><img src={IMAGES.gallery_4} alt="gallery 4" /></div>
        </div>
      </div>
    </section>
  );
}
