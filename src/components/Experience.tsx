"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function Experience() {
  const { lang, t } = useLang();

  const responsibilities = [
    {
      en: "Full-stack development of internal and client business applications (Laravel, PHP, Vue 3, React, Supabase).",
      fr: "Développement full-stack d'applications métier internes et clients (Laravel, PHP, Vue 3, React, Supabase).",
    },
    {
      en: "Custom WordPress theme and Elementor design, responsive tuning, and advanced RTL/LTR localization.",
      fr: "Personnalisation de thèmes WordPress et Elementor, adaptation responsive et localisation avancée RTL/LTR.",
    },
    {
      en: "Database architecture and migrations (MySQL, SQLite, PostgreSQL) with robust relational integrity.",
      fr: "Architecture et migrations de bases de données (MySQL, SQLite, PostgreSQL) avec intégrité relationnelle.",
    },
    {
      en: "Administration of corporate IT systems: Microsoft 365, Entra ID, SharePoint, and Power Platform workflows.",
      fr: "Administration des systèmes IT d'entreprise : Microsoft 365, Entra ID, SharePoint et flux Power Platform.",
    },
    {
      en: "Hosting and infrastructure maintenance: cPanel hosting, Apache, local WAMP stacks, DNS, and SSL.",
      fr: "Maintenance de l'hébergement et de l'infrastructure : cPanel, Apache, stacks WAMP locaux, DNS et SSL.",
    },
    {
      en: "Technical SEO audits, speed optimizations (LiteSpeed cache, asset bundling), and server log diagnostics.",
      fr: "Audits SEO techniques, optimisations de vitesse (cache LiteSpeed, bundling) et diagnostics de logs serveur.",
    },
    {
      en: "Office networking, VPN configuration, Cerberus FTP service deployment, and daily IT troubleshooting.",
      fr: "Réseau de bureau, configuration VPN, déploiement du service Cerberus FTP et support technique quotidien.",
    },
  ];

  return (
    <section id="experience" className="py-20 border-b border-[#26332C]">
      <div className="section-container">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
            {t(translations.experience.sectionTitle)}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#26332C] space-y-12">
          {/* Item 1: IT Responsable */}
          <div className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111715] border-2 border-[#61E6B5] group-hover:scale-125 transition-transform" />

            <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 shadow-xl space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#26332C]/60 pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F1F5F2]">
                    IT Responsable
                  </h3>
                  <div className="text-sm font-medium text-[#61E6B5]">
                    Be Magic Events
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-[#A0ADA5]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#29C98C]" />
                    <span>2024 — {t(translations.experience.present)}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Tunisia</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#A0ADA5]">
                  {t(translations.experience.responsibilities)}:
                </div>
                <ul className="space-y-2">
                  {responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0ADA5] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#29C98C] shrink-0 mt-0.5" />
                      <span>{t(resp)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Badge / Note */}
              <div className="text-[11px] font-mono text-[#A0ADA5]/80 pt-2 border-t border-[#26332C]/40">
                Verified role: active employment encompassing software engineering and internal technical systems management.
              </div>
            </div>
          </div>

          {/* Item 2: Education */}
          <div className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111715] border-2 border-[#26332C] group-hover:border-[#61E6B5] transition-colors" />

            <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 shadow-xl space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#26332C]/60 pb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#61E6B5]" />
                    <span>BTS Marketing &amp; Multimédia</span>
                  </h3>
                  <div className="text-xs text-[#A0ADA5]">
                    Brevet de Technicien Supérieur
                  </div>
                </div>

                <div className="text-xs font-mono text-[#A0ADA5] flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>2020 — 2022</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A0ADA5] leading-relaxed">
                {lang === "fr"
                  ? "Formation supérieure couvrant la conception multimédia, l'ergonomie web, les fondamentaux du développement d'interfaces et la communication digitale."
                  : "Post-secondary degree covering multimedia systems, web ergonomics, front-end development fundamentals, and digital business communications."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
