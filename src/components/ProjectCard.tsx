"use client";

import React, { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  BookOpen,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Terminal,
  Database,
  Sparkles,
  Code2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetail?: (id: string) => void;
  featured?: boolean;
}

export function ProjectCard({
  project,
  onOpenDetail,
  featured = false,
}: ProjectCardProps) {
  const { lang, t } = useLang();
  const [expanded, setExpanded] = useState(false);

  // Status badge color coding
  const getStatusBadge = () => {
    switch (project.status) {
      case "in-development":
        return {
          label: t(translations.projects.inDev),
          color: "border-amber-500/30 text-amber-300 bg-amber-500/10",
        };
      case "professional":
        return {
          label: t(translations.projects.professional),
          color: "border-[#29C98C]/30 text-[#61E6B5] bg-[#29C98C]/10",
        };
      case "internal-tool":
        return {
          label: t(translations.projects.internal),
          color: "border-sky-500/30 text-sky-300 bg-sky-500/10",
        };
      case "experiment":
        return {
          label: t(translations.projects.experiment),
          color: "border-purple-500/30 text-purple-300 bg-purple-500/10",
        };
      case "live":
        return {
          label: t(translations.projects.live),
          color: "border-emerald-500/30 text-emerald-300 bg-emerald-500/10",
        };
      default:
        return {
          label: project.status,
          color: "border-[#26332C] text-[#A0ADA5] bg-[#111715]",
        };
    }
  };

  const statusInfo = getStatusBadge();

  if (featured) {
    return (
      <article className="group rounded-xl border border-[#26332C] bg-[#111715] p-6 flex flex-col justify-between h-full w-full hover:border-[#61E6B5]/50 transition-all duration-300 shadow-lg hover:shadow-[#61E6B5]/5">
        <div className="space-y-4 flex-1 flex flex-col">
          {/* Top metadata tags */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs font-mono text-[#61E6B5] tracking-wide uppercase">
              {t(project.category)}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[11px] font-mono border ${statusInfo.color}`}
            >
              {statusInfo.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#F1F5F2] group-hover:text-[#61E6B5] transition-colors">
            {t(project.title)}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#A0ADA5] leading-relaxed flex-1">
            {t(project.description)}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
            {project.tech.map((tItem) => (
              <span
                key={tItem}
                className="px-2 py-0.5 rounded bg-[#151D19] border border-[#26332C] text-xs font-mono text-[#F1F5F2]/80"
              >
                {tItem}
              </span>
            ))}
          </div>
        </div>

        {/* Inline Expandable Case Study Preview (Always present in DOM for crawlers & instant toggle) */}
        {project.caseStudy && (
          <div
            id={`case-study-${project.id}`}
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-[1600px] opacity-100 mt-5 pt-5 border-t border-[#26332C]" : "max-h-0 opacity-0"
            }`}
            aria-hidden={!expanded}
          >
            <div className="space-y-3.5 text-xs leading-relaxed">
              <div className="p-3 rounded-lg bg-[#151D19] border border-[#26332C]">
                <div className="font-mono uppercase text-[#61E6B5] font-semibold mb-1 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  {t(translations.projects.context)}
                </div>
                <p className="text-[#F1F5F2]/90">{t(project.caseStudy.context)}</p>
              </div>

              <div className="p-3 rounded-lg bg-[#151D19] border border-[#26332C]">
                <div className="font-mono uppercase text-[#EAB308] font-semibold mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {t(translations.projects.problem)}
                </div>
                <p className="text-[#F1F5F2]/90">{t(project.caseStudy.problem)}</p>
              </div>

              <div className="p-3 rounded-lg bg-[#151D19] border border-[#26332C]">
                <div className="font-mono uppercase text-[#29C98C] font-semibold mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  {t(translations.projects.role)}
                </div>
                <p className="text-[#F1F5F2]/90">{t(project.caseStudy.role)}</p>
              </div>

              <div className="p-3 rounded-lg bg-[#151D19] border border-[#26332C]">
                <div className="font-mono uppercase text-[#61E6B5] font-semibold mb-1 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  {t(translations.projects.approach)}
                </div>
                <p className="text-[#F1F5F2]/90">{t(project.caseStudy.approach)}</p>
              </div>

              <div className="p-3 rounded-lg bg-[#151D19] border border-[#26332C]">
                <div className="font-mono uppercase text-[#A0ADA5] font-semibold mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#61E6B5]" />
                  {t(translations.projects.challenges)}
                </div>
                <p className="text-[#F1F5F2]/90">{t(project.caseStudy.challenges)}</p>
              </div>

              {project.caseStudy.architecture && (
                <div className="p-3 rounded-lg bg-[#0B0F0E] border border-[#26332C]">
                  <div className="font-mono uppercase text-[#61E6B5] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    {lang === "fr" ? "Modules & Architecture Vérifiés" : "Verified Codebase Modules"}
                  </div>
                  <ul className="space-y-1 font-mono text-[11px] text-[#A0ADA5]">
                    {project.caseStudy.architecture.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#61E6B5]">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-3 rounded-lg bg-[#0B0F0E] border border-[#26332C]">
                <div className="font-mono uppercase text-[#29C98C] font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {t(translations.projects.evidence)}
                </div>
                <p className="text-[#A0ADA5]">{t(project.caseStudy.evidence)}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Row */}
        <div className="pt-6 mt-6 border-t border-[#26332C] flex items-center justify-between gap-3 flex-wrap">
          {project.caseStudy ? (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setExpanded(!expanded)}
                type="button"
                aria-expanded={expanded}
                aria-controls={`case-study-${project.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151D19] border border-[#26332C] hover:border-[#61E6B5] text-xs font-mono font-semibold text-[#61E6B5] hover:text-[#29C98C] transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>
                  {expanded
                    ? t(translations.projects.closeDetails)
                    : t(translations.projects.viewDetails)}
                </span>
                {expanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              {onOpenDetail && (
                <button
                  onClick={() => onOpenDetail(project.id)}
                  type="button"
                  className="text-[11px] font-mono text-[#A0ADA5] hover:text-[#61E6B5] underline underline-offset-4 transition-colors cursor-pointer"
                >
                  {lang === "fr" ? "Vue plein écran" : "Full view"}
                </button>
              )}
            </div>
          ) : (
            <div />
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A0ADA5] hover:text-[#F1F5F2] transition-colors"
            >
              <span>{t(translations.projects.viewLive)}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </article>
    );
  }

  // Compact Archive Card representation
  return (
    <div className="rounded-xl border border-[#26332C] bg-[#111715]/60 p-5 flex flex-col justify-between h-full hover:border-[#61E6B5]/40 transition-colors">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono gap-2">
          <span className="text-[#61E6B5] truncate">{t(project.category)}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] border shrink-0 ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
        </div>
        <h4 className="text-base font-bold text-[#F1F5F2]">{t(project.title)}</h4>
        <p className="text-xs text-[#A0ADA5] leading-relaxed">
          {t(project.description)}
        </p>
      </div>

      <div className="pt-4 mt-4 border-t border-[#26332C]/60 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map((item) => (
            <span
              key={item}
              className="px-1.5 py-0.5 rounded bg-[#151D19] text-[10px] font-mono text-[#A0ADA5]"
            >
              {item}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-mono text-[#A0ADA5] self-center">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#61E6B5] hover:text-[#29C98C] transition-colors p-1"
            title="External Link"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
