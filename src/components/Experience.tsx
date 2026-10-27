"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Cpu,
  Smartphone,
  Server,
} from "lucide-react";

export function Experience() {
  const { lang, t } = useLang();

  const jobs = [
    {
      role: {
        en: "IT Manager & Full-Stack Developer",
        fr: "IT Manager & Développeur Full-Stack",
      },
      company: "Be Magic Events",
      location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
      period: {
        en: "January 2024 — Present",
        fr: "Janvier 2024 — Présent",
      },
      summary: {
        en: "Primary technology lead responsible for the company's technology operations and development of internal software solutions. Identify business requirements, design appropriate technical solutions, develop and deploy applications, and provide ongoing technical support and maintenance.",
        fr: "Responsable technologique principal de l'entreprise, en charge des opérations IT ainsi que de la conception et du développement des solutions logicielles internes. Identification des besoins métiers, recherche et conception de solutions techniques, développement et déploiement des applications, ainsi que leur support et maintenance.",
      },
      sections: [
        {
          title: {
            en: "Technology & IT Operations",
            fr: "Gestion IT & Opérations Technologiques",
          },
          icon: "server",
          bullets: [
            {
              en: "Responsible for the company's IT systems, hardware, software, technical operations, and user support.",
              fr: "Responsable des systèmes informatiques, du matériel, des logiciels, des opérations IT et du support technique de l'entreprise.",
            },
            {
              en: "Act as the primary technical point of contact, analyzing operational problems and identifying appropriate technology-based solutions.",
              fr: "Principal interlocuteur technique pour l'analyse des problèmes opérationnels et la recherche de solutions technologiques adaptées.",
            },
            {
              en: "Manage implementation, deployment, maintenance, and continuous improvement of the company's technology solutions (Microsoft 365, SharePoint, Entra ID, cPanel, WAMP, OpenVPN, FTP).",
              fr: "Gestion de la mise en place, du déploiement, de la maintenance et de l'amélioration continue des solutions technologiques de l'entreprise (Microsoft 365, SharePoint, Entra ID, cPanel, WAMP, OpenVPN, FTP).",
            },
            {
              en: "Translate business and operational requirements into practical software solutions and automated workflows.",
              fr: "Transformation des besoins métiers et opérationnels en solutions logicielles concrètes et processus automatisés.",
            },
          ],
        },
        {
          title: {
            en: "Business Application Development",
            fr: "Développement d'Applications Métier",
          },
          icon: "cpu",
          bullets: [
            {
              en: "Designed and developed a stock management application using Laravel to manage inventory across two stock units, including stock movements, issue vouchers, return vouchers, stock status, and monthly reporting.",
              fr: "Conception et développement d'une application de gestion des stocks avec Laravel permettant de gérer les stocks de deux unités, les mouvements de stock, les bons de sortie, les bons de retour, l'état du stock et la génération de rapports mensuels.",
            },
            {
              en: "Designed and developed a bonus and payment management application to manage employee bonuses and transporter payments by event, track payments, and generate reports for transporters and employee bonuses.",
              fr: "Conception et développement d'une application de gestion des primes et paiements permettant de gérer les primes des employés et les paiements des transporteurs par événement, d'assurer le suivi des paiements et de générer des rapports pour les transporteurs et les primes par employé.",
            },
            {
              en: "Developed a QR code and GPS-based attendance management application for employee check-in and attendance tracking, with reporting by employee, department, and period.",
              fr: "Développement d'une application de gestion des présences basée sur les QR codes et la géolocalisation GPS, permettant d'enregistrer les pointages des employés et de générer des rapports par employé, département et période.",
            },
            {
              en: "Designed and developed internal applications for quotation, client, and event management, plus systems for managing employee bonuses and advances.",
              fr: "Conception et développement d'applications internes pour la gestion des devis, des clients et des événements, ainsi que des systèmes de gestion des primes et acomptes.",
            },
            {
              en: "Analyze existing workflows and develop customized applications to reduce manual processes and improve operational efficiency.",
              fr: "Analyse des processus existants et développement de solutions personnalisées afin de réduire les tâches manuelles et améliorer l'efficacité opérationnelle.",
            },
          ],
        },
        {
          title: {
            en: "Mobile Application Development",
            fr: "Développement d'Applications Mobiles",
          },
          icon: "smartphone",
          bullets: [
            {
              en: "Designed and developed P2, P5, and P9 mobile applications using Unity, used as interactive clues in escape game activities.",
              fr: "Conception et développement des applications mobiles P2, P5 et P9 avec Unity, utilisées comme indices dans l'activité Escape Game.",
            },
            {
              en: "Developed a mobile application for participant dispatching and activity management during events.",
              fr: "Développement d'une application mobile destinée à la répartition et à la gestion des participants lors des événements.",
            },
          ],
        },
      ],
    },
    {
      role: {
        en: "Web Developer",
        fr: "Développeur Web",
      },
      company: "Be Magic Events",
      location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
      period: {
        en: "September 2022 — December 2023",
        fr: "Septembre 2022 — Décembre 2023",
      },
      bullets: [
        {
          en: "Designed and developed websites using WordPress, adapting layouts and functionality to project requirements.",
          fr: "Conception et développement de sites web avec WordPress, adaptés aux besoins et aux spécifications des différents projets.",
        },
        {
          en: "Implemented SEO best practices to improve website visibility and search engine rankings.",
          fr: "Mise en œuvre des bonnes pratiques SEO afin d'améliorer la visibilité des sites et leur positionnement dans les moteurs de recherche.",
        },
        {
          en: "Maintained and optimized websites, resolving technical issues and improving website performance and usability.",
          fr: "Maintenance et optimisation des sites web, résolution des problèmes techniques et amélioration de leurs performances et de leur ergonomie.",
        },
      ],
    },
    {
      role: {
        en: "Web Development Intern",
        fr: "Stagiaire – Développement Web",
      },
      company: "Art & Couleurs",
      location: { en: "Tunis, Tunisia", fr: "Tunis, Tunisie" },
      period: {
        en: "January 2021 — March 2021",
        fr: "Janvier 2021 — Mars 2021",
      },
      bullets: [
        {
          en: "Developed a quotation management application using PHP.",
          fr: "Développement d'une application de gestion des devis avec PHP.",
        },
        {
          en: "Built a production management system to support operational processes.",
          fr: "Développement d'un système de gestion de la production pour accompagner les processus opérationnels.",
        },
        {
          en: "Developed an application for tracking the maintenance of machines and vehicles.",
          fr: "Développement d'une application de suivi de la maintenance des machines et des véhicules.",
        },
      ],
    },
  ];

  const educationList = [
    {
      degree: {
        en: "BTS – Higher Technician in Marketing and Multimedia",
        fr: "BTS – Technicien Supérieur en Marketing et Multimédia",
      },
      school: "CSFT – Tunis",
      period: "2020 — 2022",
      desc: {
        en: "Higher technician program covering multimedia production, web design & ergonomics, front-end development fundamentals, and digital marketing.",
        fr: "Formation supérieure couvrant la conception multimédia, l'ergonomie web, les fondamentaux du développement d'interfaces et le marketing digital.",
      },
    },
    {
      degree: {
        en: "High School Diploma in Economics and Management",
        fr: "Diplôme d'études secondaires – Économie et Gestion",
      },
      school: "Cité Khadra – Tunis",
      period: "2013 — 2018",
      desc: {
        en: "Secondary education specialization in economics, business management, and quantitative analysis.",
        fr: "Cycle secondaire spécialisé en économie, gestion des entreprises et analyse quantitative.",
      },
    },
  ];

  const renderSectionIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="w-3.5 h-3.5 text-[#61E6B5]" />;
      case "cpu":
        return <Cpu className="w-3.5 h-3.5 text-[#61E6B5]" />;
      case "smartphone":
        return <Smartphone className="w-3.5 h-3.5 text-[#61E6B5]" />;
      default:
        return null;
    }
  };

  return (
    <section id="experience" className="py-20 border-b border-[#26332C]">
      <div className="section-container">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH &amp; EDUCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
            {t(translations.experience.sectionTitle)}
          </h2>
        </div>

        {/* Professional Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#61E6B5] mb-8 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>{lang === "fr" ? "Expérience Professionnelle" : "Professional Experience"}</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#26332C] space-y-10">
            {jobs.map((job, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111715] border-2 transition-transform ${
                    idx === 0
                      ? "border-[#61E6B5] group-hover:scale-125"
                      : "border-[#29C98C]/70 group-hover:border-[#61E6B5]"
                  }`}
                />

                <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 shadow-xl space-y-5 hover:border-[#61E6B5]/40 transition-colors">
                  {/* Job Header */}
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#26332C]/60 pb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#F1F5F2]">
                        {t(job.role)}
                      </h4>
                      <div className="text-sm font-semibold text-[#61E6B5] mt-0.5">
                        {job.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#A0ADA5]">
                      <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151D19] border border-[#26332C] text-[#F1F5F2]">
                        <Calendar className="w-3.5 h-3.5 text-[#29C98C]" />
                        <span>{t(job.period)}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#61E6B5]" />
                        <span>{t(job.location)}</span>
                      </span>
                    </div>
                  </div>

                  {/* Summary if present */}
                  {job.summary && (
                    <p className="text-xs sm:text-sm text-[#F1F5F2]/90 leading-relaxed bg-[#151D19]/60 p-3.5 rounded-lg border border-[#26332C]">
                      {t(job.summary)}
                    </p>
                  )}

                  {/* Grouped Sections (for IT Manager & Full-Stack role) */}
                  {job.sections && (
                    <div className="space-y-5">
                      {job.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-2.5">
                          <div className="text-xs font-mono uppercase tracking-wider text-[#61E6B5] flex items-center gap-1.5 font-semibold">
                            {renderSectionIcon(sec.icon)}
                            <span>{t(sec.title)}</span>
                          </div>
                          <ul className="space-y-2 pl-1">
                            {sec.bullets.map((b, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0ADA5] leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#29C98C] shrink-0 mt-0.5" />
                                <span>{t(b)}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Direct Bullets (for Web Developer & Intern roles) */}
                  {job.bullets && (
                    <ul className="space-y-2">
                      {job.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A0ADA5] leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#29C98C] shrink-0 mt-0.5" />
                          <span>{t(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider text-[#61E6B5] mb-8 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span>{t(translations.experience.education)}</span>
          </h3>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[#26332C] space-y-8">
            {educationList.map((edu, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#111715] border-2 border-[#26332C] group-hover:border-[#61E6B5] transition-colors" />

                <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 shadow-xl space-y-3 hover:border-[#61E6B5]/40 transition-colors">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#26332C]/60 pb-3">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#F1F5F2] flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#61E6B5] shrink-0" />
                        <span>{t(edu.degree)}</span>
                      </h4>
                      <div className="text-xs font-mono text-[#61E6B5] mt-0.5">
                        {edu.school}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#A0ADA5] flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#151D19] border border-[#26332C]">
                      <Calendar className="w-3.5 h-3.5 text-[#29C98C]" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#A0ADA5] leading-relaxed">
                    {t(edu.desc)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
