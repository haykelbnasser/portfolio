"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { siteConfig } from "@/data/config";
import { TerminalPanel } from "@/components/TerminalPanel";
import { ArrowRight, MessageSquare, Download, Code2, Server } from "lucide-react";

export function Hero() {
  const { lang, t } = useLang();

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#61E6B5]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Subtitle Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111715] border border-[#26332C] text-[#A0ADA5] text-xs font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#29C98C]" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-[50px] font-bold tracking-tight text-[#F1F5F2] leading-[1.15]">
              {lang === "fr" ? (
                <>
                  Je conçois des solutions numériques qui répondent aux{" "}
                  <span className="text-[#61E6B5] underline decoration-[#29C98C]/40 decoration-wavy underline-offset-4">
                    besoins réels
                  </span>
                  .
                </>
              ) : (
                <>
                  I build digital solutions that work in the{" "}
                  <span className="text-[#61E6B5] underline decoration-[#29C98C]/40 decoration-wavy underline-offset-4">
                    real world
                  </span>
                  .
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A0ADA5] max-w-xl leading-relaxed">
              {t(translations.hero.sub)}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#61E6B5] text-[#0B0F0E] font-semibold text-sm hover:bg-[#29C98C] transition-all shadow-md shadow-[#61E6B5]/10 cursor-pointer"
              >
                <span>{t(translations.hero.cta1)}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#26332C] bg-[#111715] text-[#F1F5F2] font-medium text-sm hover:border-[#61E6B5] hover:text-[#61E6B5] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#61E6B5]" />
                <span>{t(translations.hero.cta2)}</span>
              </a>

              {/* CV Downloads */}
              <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <a
                  href={lang === "fr" ? siteConfig.cvFr : siteConfig.cvEn}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#26332C] bg-[#151D19] text-[#A0ADA5] hover:text-[#F1F5F2] hover:border-[#61E6B5] transition-all text-xs font-mono"
                  title="Download Resume / CV"
                >
                  <Download className="w-3.5 h-3.5 text-[#61E6B5]" />
                  <span>{lang === "fr" ? t(translations.hero.cvFr) : t(translations.hero.cvEn)}</span>
                </a>
              </div>
            </div>

            {/* Quick trust metrics / attributes */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#A0ADA5] border-t border-[#26332C]/60">
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-[#61E6B5]" />
                <span>Laravel · React · PHP · WordPress</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server className="w-4 h-4 text-[#61E6B5]" />
                <span>IT Infrastructure · cPanel · M365</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5">
            <TerminalPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
