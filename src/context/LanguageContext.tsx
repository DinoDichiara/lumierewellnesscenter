"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Locale } from "@/lib/translations";

type LanguageContextType = {
  locale: Locale;
  t: (typeof translations)[Locale];
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const toggle = () => setLocale((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
