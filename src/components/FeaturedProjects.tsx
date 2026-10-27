"use client";

import React, { useState } from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { featuredProjects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";
import { FolderGit2 } from "lucide-react";

export function FeaturedProjects() {
  const { t } = useLang();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenDetail = (id: string) => {
    const found = featuredProjects.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  };

  return (
    <section id="projects" className="py-20 border-b border-[#26332C]">
      <div className="section-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SELECTION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
            {t(translations.projects.sectionTitle)}
          </h2>
          <p className="text-sm sm:text-base text-[#A0ADA5] max-w-2xl leading-relaxed">
            {t(translations.projects.sectionSub)}
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col h-full ${index === 0 || index === 1 ? "md:col-span-1 lg:col-span-1" : ""}`}
            >
              <ProjectCard
                project={project}
                featured={true}
                onOpenDetail={handleOpenDetail}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Slide-out Panel */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
