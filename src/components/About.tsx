"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { User, Languages, CheckCircle, Terminal, HardDrive } from "lucide-react";

export function About() {
  const { t } = useLang();

  return (
    <section id="about" className="py-20 border-b border-[#26332C]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
              <User className="w-3.5 h-3.5" />
              <span>PROFILE &amp; METHODOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
              {t(translations.about.sectionTitle)}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A0ADA5] leading-relaxed">
              <p>{t(translations.about.p1)}</p>
              <p>{t(translations.about.p2)}</p>
              <p>{t(translations.about.p3)}</p>
            </div>

            {/* Core Values / Working Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-lg border border-[#26332C] bg-[#111715]">
                <div className="text-xs font-mono text-[#61E6B5] flex items-center gap-1.5 font-semibold mb-1">
                  <Terminal className="w-3.5 h-3.5" /> Practical Pragmatism
                </div>
                <div className="text-xs text-[#A0ADA5]">
                  Choosing the right tool for the job over fashionable complexity.
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-[#26332C] bg-[#111715]">
                <div className="text-xs font-mono text-[#29C98C] flex items-center gap-1.5 font-semibold mb-1">
                  <HardDrive className="w-3.5 h-3.5" /> Full Lifecycle Ownership
                </div>
                <div className="text-xs text-[#A0ADA5]">
                  From gathering requirements to database migrations, servers, and ongoing support.
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Quick Facts Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-[#26332C] pb-4">
                <h3 className="text-base font-bold text-[#F1F5F2] flex items-center gap-2">
                  <Languages className="w-4 h-4 text-[#61E6B5]" />
                  <span>{t(translations.about.languagesTitle)}</span>
                </h3>
                <span className="text-xs font-mono text-[#A0ADA5]">CEFR Standards</span>
              </div>

              <div className="space-y-4">
                {translations.about.languages.map((langItem, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#151D19] border border-[#26332C]"
                  >
                    <span className="text-sm font-medium text-[#F1F5F2]">
                      {langItem.name}
                    </span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B0F0E] text-[#61E6B5] border border-[#26332C]">
                      {t(langItem.level)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Education snippet */}
              <div className="pt-4 border-t border-[#26332C] space-y-2.5">
                <div className="text-xs font-mono text-[#A0ADA5] uppercase tracking-wider">
                  Academic Foundation
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#61E6B5] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#F1F5F2]">
                      BTS – Marketing &amp; Multimédia
                    </div>
                    <div className="text-xs text-[#A0ADA5] font-mono">CSFT – Tunis · 2020 — 2022</div>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#29C98C] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-[#F1F5F2]">
                      Economics &amp; Management Diploma
                    </div>
                    <div className="text-xs text-[#A0ADA5] font-mono">Cité Khadra – Tunis · 2013 — 2018</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
