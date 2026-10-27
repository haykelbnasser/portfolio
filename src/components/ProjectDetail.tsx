"use client";

import React, { useEffect } from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Project } from "@/data/projects";
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, Terminal, Database, Sparkles } from "lucide-react";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { lang, t } = useLang();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm transition-all duration-300">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Slide-in drawer container */}
      <div className="relative w-full max-w-2xl h-full bg-[#111715] border-l border-[#26332C] p-6 sm:p-8 overflow-y-auto shadow-2xl z-10 flex flex-col justify-between">
        <div className="space-y-6">
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 border-b border-[#26332C] pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#151D19] border border-[#26332C] text-[#61E6B5]">
                  {t(project.category)}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#0B0F0E] text-[#A0ADA5] border border-[#26332C]">
                  {project.type.toUpperCase()}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F1F5F2]">
                {t(project.title)}
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg bg-[#151D19] text-[#A0ADA5] hover:text-[#F1F5F2] hover:bg-[#26332C] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick link button if URL exists */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151D19] border border-[#26332C] text-sm text-[#61E6B5] hover:border-[#61E6B5] transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{t(translations.projects.viewLive)}</span>
            </a>
          )}

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#A0ADA5] mb-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#61E6B5]" />
              {t(translations.projects.techStack)}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#0B0F0E] border border-[#26332C] text-xs font-mono text-[#F1F5F2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Sections */}
          {project.caseStudy ? (
            <div className="space-y-5 pt-2 border-t border-[#26332C]/60">
              {/* Context */}
              <div className="bg-[#151D19]/60 p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#61E6B5] mb-1.5 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  {t(translations.projects.context)}
                </h4>
                <p className="text-sm text-[#F1F5F2]/90 leading-relaxed">
                  {t(project.caseStudy.context)}
                </p>
              </div>

              {/* Problem / Requirements */}
              <div className="bg-[#151D19]/60 p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#EAB308] mb-1.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {t(translations.projects.problem)}
                </h4>
                <p className="text-sm text-[#F1F5F2]/90 leading-relaxed">
                  {t(project.caseStudy.problem)}
                </p>
              </div>

              {/* Role */}
              <div className="bg-[#151D19]/60 p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#29C98C] mb-1.5 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  {t(translations.projects.role)}
                </h4>
                <p className="text-sm text-[#F1F5F2]/90 leading-relaxed">
                  {t(project.caseStudy.role)}
                </p>
              </div>

              {/* Technical Approach */}
              <div className="bg-[#151D19]/60 p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#61E6B5] mb-1.5 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  {t(translations.projects.approach)}
                </h4>
                <p className="text-sm text-[#F1F5F2]/90 leading-relaxed">
                  {t(project.caseStudy.approach)}
                </p>
              </div>

              {/* Challenges & Decisions */}
              <div className="bg-[#151D19]/60 p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#A0ADA5] mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#61E6B5]" />
                  {t(translations.projects.challenges)}
                </h4>
                <p className="text-sm text-[#F1F5F2]/90 leading-relaxed">
                  {t(project.caseStudy.challenges)}
                </p>
              </div>

              {/* Status and Evidence */}
              <div className="bg-[#0B0F0E] p-4 rounded-xl border border-[#26332C]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#29C98C] mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t(translations.projects.evidence)}
                </h4>
                <p className="text-sm text-[#A0ADA5] leading-relaxed">
                  {t(project.caseStudy.evidence)}
                </p>
              </div>

              {/* Architecture & Modules */}
              {project.caseStudy.architecture && (
                <div className="bg-[#0B0F0E] p-4 rounded-xl border border-[#26332C]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#61E6B5] mb-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    {lang === "fr" ? "Modules & Architecture Vérifiés" : "Verified Codebase Modules"}
                  </h4>
                  <ul className="space-y-1.5 font-mono text-xs text-[#A0ADA5]">
                    {project.caseStudy.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#61E6B5]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="text-sm text-[#A0ADA5] py-4">
              {t(project.description)}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 mt-6 border-t border-[#26332C] flex items-center justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2.5 rounded-lg bg-[#151D19] border border-[#26332C] text-sm text-[#F1F5F2] hover:border-[#61E6B5] hover:text-[#61E6B5] transition-colors cursor-pointer"
          >
            {t(translations.projects.closeDetails)}
          </button>
        </div>
      </div>
    </div>
  );
}
