"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function PhilosophyStrip() {
  const { t } = useLanguage();

  return (
    <div className="strip" aria-hidden="true">
      <p className="strip__quote">{t.strip.quote}</p>
    </div>
  );
}
