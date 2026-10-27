"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { skillCategories } from "@/data/skills";
import { Wrench, CheckCircle2, CircleDashed } from "lucide-react";

export function Skills() {
  const { t } = useLang();

  const getCategoryTitle = (id: string) => {
    const cats = translations.skills.categories;
    switch (id) {
      case "frontend": return t(cats.frontend);
      case "backend": return t(cats.backend);
      case "database": return t(cats.database);
      case "cms": return t(cats.cms);
      case "infra": return t(cats.infra);
      case "automation": return t(cats.automation);
      default: return id;
    }
  };

  return (
    <section id="skills" className="py-20 border-b border-[#26332C]">
      <div className="section-container">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <Wrench className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
            {t(translations.skills.sectionTitle)}
          </h2>
          <p className="text-sm sm:text-base text-[#A0ADA5] max-w-2xl leading-relaxed">
            {t(translations.skills.sectionSub)}
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl border border-[#26332C] bg-[#111715] p-5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-mono font-semibold text-[#61E6B5] uppercase tracking-wider mb-4 pb-2 border-b border-[#26332C]/60 flex items-center justify-between">
                  <span>{getCategoryTitle(cat.id)}</span>
                  <span className="text-[11px] text-[#A0ADA5] font-normal">
                    {cat.skills.length} tools
                  </span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                        skill.core
                          ? "bg-[#151D19] border border-[#29C98C]/40 text-[#F1F5F2] font-medium shadow-xs"
                          : "bg-transparent border border-dashed border-[#26332C] text-[#A0ADA5]"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-8 pt-6 border-t border-[#26332C]/60 flex flex-wrap items-center gap-6 text-xs text-[#A0ADA5] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-[#151D19] border border-[#29C98C]" />
            <span className="text-[#F1F5F2]">{t(translations.skills.corePractical)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded border border-dashed border-[#26332C]" />
            <span>{t(translations.skills.additionalExp)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
