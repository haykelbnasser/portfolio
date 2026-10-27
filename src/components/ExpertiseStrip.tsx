"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";

export function ExpertiseStrip() {
  const { t } = useLang();

  return (
    <section className="border-y border-[#26332C] bg-[#111715]/70 py-4 overflow-x-auto scrollbar-none">
      <div className="section-container flex items-center justify-between gap-6 whitespace-nowrap min-w-max md:min-w-0 md:justify-center md:flex-wrap">
        {translations.expertise.items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61E6B5]" />
            <span className="text-xs md:text-sm font-medium text-[#F1F5F2]/90 tracking-wide">
              {t(item)}
            </span>
            {idx < translations.expertise.items.length - 1 && (
              <span className="text-[#26332C] hidden lg:inline-block ml-3">/</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
