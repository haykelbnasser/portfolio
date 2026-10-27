"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { siteConfig } from "@/data/config";
import { Mail, Download, Info, MessageSquareCode, Globe2, Code } from "lucide-react";

export function Contact() {
  const { lang, t } = useLang();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#61E6B5]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>CONNECT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F1F5F2]">
            {t(translations.contact.headline)}{" "}
            <span className="text-[#61E6B5] block sm:inline">
              {t(translations.contact.sub)}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A0ADA5] leading-relaxed max-w-xl mx-auto">
            {t(translations.contact.body)}
          </p>

          {/* Action Cards / Links */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
            {/* Email Card */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group p-5 rounded-xl border border-[#26332C] bg-[#111715] hover:border-[#61E6B5] hover:bg-[#151D19] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-lg bg-[#151D19] border border-[#26332C] text-[#61E6B5] group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-[#A0ADA5]">Direct</span>
              </div>
              <div>
                <div className="text-xs font-mono text-[#A0ADA5]">{t(translations.contact.email)}</div>
                <div className="text-sm font-semibold text-[#F1F5F2] group-hover:text-[#61E6B5] transition-colors truncate">
                  {siteConfig.email}
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-[#26332C] bg-[#111715] hover:border-[#61E6B5] hover:bg-[#151D19] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-lg bg-[#151D19] border border-[#26332C] text-[#61E6B5] group-hover:scale-110 transition-transform">
                  <Globe2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-[#A0ADA5]">Professional</span>
              </div>
              <div>
                <div className="text-xs font-mono text-[#A0ADA5]">{t(translations.contact.linkedin)}</div>
                <div className="text-sm font-semibold text-[#F1F5F2] group-hover:text-[#61E6B5] transition-colors truncate">
                  haykel-ben-nasser
                </div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-xl border border-[#26332C] bg-[#111715] hover:border-[#61E6B5] hover:bg-[#151D19] transition-all flex flex-col justify-between sm:col-span-2 md:col-span-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="p-2 rounded-lg bg-[#151D19] border border-[#26332C] text-[#61E6B5] group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </span>
                <span className="text-xs font-mono text-[#A0ADA5]">Repositories</span>
              </div>
              <div>
                <div className="text-xs font-mono text-[#A0ADA5]">{t(translations.contact.github)}</div>
                <div className="text-sm font-semibold text-[#F1F5F2] group-hover:text-[#61E6B5] transition-colors truncate">
                  haykelbennasser
                </div>
              </div>
            </a>
          </div>

          {/* CV Direct Download Pill row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.cvEn}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#26332C] bg-[#111715] text-[#A0ADA5] hover:text-[#F1F5F2] hover:border-[#61E6B5] transition-all text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5 text-[#61E6B5]" />
              <span>{t(translations.contact.cvEn)}</span>
            </a>

            <a
              href={siteConfig.cvFr}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#26332C] bg-[#111715] text-[#A0ADA5] hover:text-[#F1F5F2] hover:border-[#61E6B5] transition-all text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5 text-[#61E6B5]" />
              <span>{t(translations.contact.cvFr)}</span>
            </a>
          </div>

          {/* Config advisory note */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111715]/70 border border-[#26332C] text-[11px] font-mono text-[#A0ADA5]">
            <Info className="w-3.5 h-3.5 text-[#61E6B5]" />
            <span>{t(translations.contact.note)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
