"use client";
import React, { createContext, useContext, useState, useCallback } from "react";
import type { Lang } from "@/data/translations";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  t: <T extends { en: string; fr: string }>(obj: T) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  toggle: () => {},
  t: (obj) => obj.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === "en" ? "fr" : "en";
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
        document.title =
          next === "fr"
            ? "Haykel Ben Nasser — Développeur Hybride & Résolveur de Problèmes"
            : "Haykel Ben Nasser — Hybrid Developer & Problem Solver";
      }
      return next;
    });
  }, []);

  const t = useCallback(
    <T extends { en: string; fr: string }>(obj: T): string => obj[lang],
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
