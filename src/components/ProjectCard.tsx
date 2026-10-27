"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Project } from "@/data/projects";
import { ExternalLink, BookOpen, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onOpenDetail?: (id: string) => void;
  featured?: boolean;
}

export function ProjectCard({ project, onOpenDetail, featured = false }: ProjectCardProps) {
  const { t } = useLang();

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
      <div className="group rounded-xl border border-[#26332C] bg-[#111715] p-6 flex flex-col justify-between h-full w-full hover:border-[#61E6B5]/50 transition-all duration-300 shadow-lg hover:shadow-[#61E6B5]/5">
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

        {/* Action Row */}
        <div className="pt-6 mt-6 border-t border-[#26332C] flex items-center justify-between gap-3">
          {project.caseStudy && onOpenDetail ? (
            <button
              onClick={() => onOpenDetail(project.id)}
              type="button"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#61E6B5] hover:text-[#29C98C] transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{t(translations.projects.viewDetails)}</span>
            </button>
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
      </div>
    );
  }

  // Compact Archive Card representation
  return (
    <div className="rounded-xl border border-[#26332C] bg-[#111715]/60 p-5 flex flex-col justify-between hover:border-[#61E6B5]/40 transition-colors">
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-[#61E6B5]">{t(project.category)}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] border ${statusInfo.color}`}>
            {statusInfo.label}
          </span>
        </div>
        <h4 className="text-base font-bold text-[#F1F5F2]">{t(project.title)}</h4>
        <p className="text-xs text-[#A0ADA5] leading-relaxed line-clamp-2">
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
