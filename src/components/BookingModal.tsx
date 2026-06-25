"use client";

import { useEffect } from "react";

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

type Props = {
  service: Service | null;
  locale: string;
  onClose: () => void;
};

const CALENDLY_URL =
  "https://calendly.com/lumierewellnesscenter/30min?hide_gdpr_banner=1&background_color=fbf9ea&text_color=3a2e28&primary_color=b08175";

export default function BookingModal({ service, locale, onClose }: Props) {
  // Close on ESC
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  const name = locale === "en" ? service.name : service.name_es;
  const desc = locale === "en" ? service.description : service.description_es;
  const cat  = locale === "en" ? service.category : (service.category_es ?? service.category);
  const waMsg = encodeURIComponent(
    locale === "en"
      ? `Hi! I'd like to book: ${service.name}`
      : `¡Hola! Me gustaría reservar: ${service.name_es}`
  );

  return (
    <div className="bmodal-overlay" role="dialog" aria-modal="true" aria-label={name} onClick={onClose}>
      <div className="bmodal" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="bmodal__header">
          <div>
            <span className="catalog-card__tag">{cat}</span>
            <h2 className="bmodal__title">{name}</h2>
          </div>
          <button className="bmodal__close" onClick={onClose} aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Service details */}
        <div className="bmodal__details">
          <p className="bmodal__desc">{desc}</p>
          <div className="bmodal__meta">
            <span className="bmodal__meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              {service.duration}
            </span>
            <span className="bmodal__price">{service.price}</span>
          </div>
        </div>

        {/* Calendly embed */}
        <div className="bmodal__calendly-wrap">
          <iframe
            src={CALENDLY_URL}
            className="bmodal__calendly"
            title={locale === "en" ? "Book an appointment" : "Reservar un turno"}
            loading="lazy"
            frameBorder="0"
          />
        </div>

        {/* Alternative contact */}
        <div className="bmodal__alt">
          <span className="bmodal__alt-label">
            {locale === "en" ? "Prefer to reach us directly?" : "¿Preferís contactarnos directamente?"}
          </span>
          <div className="bmodal__alt-btns">
            <a
              href={`https://wa.me/12138032393?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bmodal__alt-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
                <path d="M24 4C12.954 4 4 12.954 4 24c0 3.615.97 7.01 2.66 9.94L4 44l10.34-2.63A19.94 19.94 0 0 0 24 44c11.046 0 20-8.954 20-20S35.046 4 24 4zm0 36.5a16.43 16.43 0 0 1-8.38-2.3l-.6-.36-6.14 1.56 1.62-5.96-.39-.62A16.44 16.44 0 0 1 7.5 24C7.5 14.887 14.887 7.5 24 7.5S40.5 14.887 40.5 24 33.113 40.5 24 40.5zm9.01-12.26c-.49-.25-2.9-1.43-3.35-1.59-.45-.16-.77-.25-1.1.25s-1.26 1.59-1.55 1.92c-.28.33-.57.37-1.06.12-2.9-1.45-4.8-2.58-6.72-5.86-.51-.87.51-.81 1.45-2.7.16-.33.08-.62-.04-.87s-1.1-2.65-1.51-3.63c-.4-.95-.8-.82-1.1-.84-.28-.01-.61-.01-.93-.01-.33 0-.87.12-1.32.62-.45.5-1.73 1.69-1.73 4.12s1.77 4.77 2.01 5.1c.25.33 3.47 5.3 8.41 7.44 3.13 1.35 4.35 1.46 5.91 1.23.95-.14 2.9-1.19 3.31-2.33.41-1.14.41-2.12.29-2.33-.12-.2-.45-.33-.94-.57z"/>
              </svg>
              WhatsApp
            </a>
            <a href="sms:+12138032393" className="bmodal__alt-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              SMS
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
