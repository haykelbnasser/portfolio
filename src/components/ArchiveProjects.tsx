"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { archiveProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Archive } from "lucide-react";

export function ArchiveProjects() {
  const { lang, t } = useLang();

  return (
    <section className="py-16 border-b border-[#26332C] bg-[#0E1311]">
      <div className="section-container">
        {/* Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#A0ADA5]">
            <Archive className="w-3.5 h-3.5 text-[#61E6B5]" />
            <span>{lang === "fr" ? "ARCHIVE DE PROJETS" : "PROJECT ARCHIVE"}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F1F5F2]">
            {t(translations.projects.archiveTitle)}
          </h3>
          <p className="text-xs sm:text-sm text-[#A0ADA5] max-w-xl">
            {t(translations.projects.archiveSub)}
          </p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {archiveProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
