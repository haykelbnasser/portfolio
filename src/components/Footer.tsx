"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export function Footer() {
  const { t } = useLang();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#26332C] bg-[#0B0F0E] py-8 text-xs font-mono text-[#A0ADA5]">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {currentYear} Haykel Ben Nasser. {t(translations.footer.rights)}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#61E6B5]" />
          <span>{t(translations.footer.built)}</span>
        </div>
      </div>
    </footer>
  );
}
