"use client";

import { useLanguage } from "@/context/LanguageContext";

const stepIcons = ["🧖", "✨", "🌿"];

export default function RitualSection() {
  const { t } = useLanguage();

  return (
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
  );
}
