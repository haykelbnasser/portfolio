"use client";

import React from "react";
import { useLang } from "@/components/LanguageProvider";
import {
  Server,
  Cloud,
  Globe,
  Shield,
  Database,
  ArrowRight,
  Workflow,
  HardDrive,
} from "lucide-react";

export function ItInfrastructure() {
  const { lang } = useLang();

  const pillars = [
    {
      icon: <Cloud className="w-5 h-5 text-[#61E6B5]" />,
      title: {
        en: "Microsoft 365 & Identity Administration",
        fr: "Microsoft 365 & Administration des Identités",
      },
      desc: {
        en: "Managing Microsoft 365 Business Standard tenants, user provisioning, licensing, Entra ID (Azure AD) access control, SharePoint document libraries, and Power Apps / Power Automate business workflows.",
        fr: "Gestion de tenants Microsoft 365 Business Standard, provisionnement des utilisateurs, licences, contrôle d'accès Entra ID (Azure AD), bibliothèques SharePoint et flux Power Apps / Power Automate.",
      },
      tags: ["Microsoft 365", "SharePoint", "Entra ID", "Power Apps", "Power Automate"],
    },
    {
      icon: <HardDrive className="w-5 h-5 text-[#61E6B5]" />,
      title: {
        en: "Local Application Servers & Networking",
        fr: "Serveurs d'Applications Locaux & Réseau",
      },
      desc: {
        en: "Deploying and maintaining internal PHP/Laravel business tools on local WAMP/Apache stacks, configuring OpenVPN for remote access, and operating Cerberus FTP Server for file transfers.",
        fr: "Déploiement et maintenance d'outils métier PHP/Laravel internes sur serveurs locaux WAMP/Apache, configuration d'OpenVPN pour l'accès distant et administration de Cerberus FTP Server.",
      },
      tags: ["WAMP", "Apache", "OpenVPN", "Cerberus FTP", "LAN / Routing"],
    },
    {
      icon: <Globe className="w-5 h-5 text-[#61E6B5]" />,
      title: {
        en: "Web Hosting, DNS & Email Deliverability",
        fr: "Hébergement Web, DNS & Délivrabilité Email",
      },
      desc: {
        en: "Managing cPanel shared and subdomain hosting environments, domain migrations, DNS zone records (A, CNAME, MX, TXT/SPF/DKIM), SSL certificates, and SMTP / email troubleshooting.",
        fr: "Administration d'environnements d'hébergement cPanel et sous-domaines, migrations de domaines, zones DNS (A, CNAME, MX, TXT/SPF/DKIM), certificats SSL et dépannage SMTP / e-mail.",
      },
      tags: ["cPanel", "DNS Zones", "SSL/TLS", "SMTP & Email", "Domain Migration"],
    },
  ];

  return (
    <section id="infrastructure" className="py-20 border-b border-[#26332C] bg-[#0B0F0E]">
      <div className="section-container">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111715] border border-[#26332C] text-xs font-mono text-[#61E6B5]">
            <Server className="w-3.5 h-3.5" />
            <span>{lang === "fr" ? "SYSTÈMES IT & INFRASTRUCTURE" : "IT SYSTEMS & INFRASTRUCTURE"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F1F5F2] tracking-tight">
            {lang === "fr"
              ? "Infrastructure IT & Systèmes Opérationnels"
              : "IT Infrastructure & Operational Systems"}
          </h2>
          <p className="text-sm sm:text-base text-[#A0ADA5] max-w-2xl leading-relaxed">
            {lang === "fr"
              ? "Au-delà de l'écriture du code, je déploie, connecte et maintiens l'environnement technique réel dans lequel les applications et les équipes travaillent au quotidien."
              : "Beyond writing code, I configure, connect, and support the underlying technical environment that business applications and teams rely on every day."}
          </p>
        </div>

        {/* 3 Infrastructure Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#26332C] bg-[#111715] p-6 flex flex-col justify-between hover:border-[#61E6B5]/40 transition-colors shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-[#151D19] border border-[#26332C] flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-[#F1F5F2]">
                  {pillar.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0ADA5] leading-relaxed">
                  {pillar.desc[lang]}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5 mt-5 border-t border-[#26332C]/60">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#151D19] border border-[#26332C] text-[11px] font-mono text-[#F1F5F2]/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Architecture / Connection Flow Diagram */}
        <div className="rounded-xl border border-[#26332C] bg-[#111715] p-6 sm:p-8">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-4 border-b border-[#26332C]">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#61E6B5]">
              <Workflow className="w-4 h-4" />
              <span>
                {lang === "fr"
                  ? "Architecture Opérationnelle — Connexion Développement & IT"
                  : "Operational Architecture — Connecting Development & IT"}
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#A0ADA5]">
              {lang === "fr" ? "Environnement réel chez Be Magic Events" : "Real-world environment at Be Magic Events"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-xs font-mono">
            {/* Node 1 */}
            <div className="p-4 rounded-lg bg-[#151D19] border border-[#26332C] space-y-1.5">
              <div className="text-[#61E6B5] font-semibold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                <span>1. {lang === "fr" ? "Utilisateurs & Accès" : "Users & Identity"}</span>
              </div>
              <p className="text-[#A0ADA5] text-[11px] leading-relaxed font-sans">
                {lang === "fr"
                  ? "Équipes Bureau, Dépôt, Atelier & Événements authentifiées via Entra ID, VPN ou accès applicatif."
                  : "Office, Warehouse, Workshop & Event staff authenticated via Entra ID, OpenVPN, or role-based app logins."}
              </p>
            </div>

            {/* Node 2 */}
            <div className="p-4 rounded-lg bg-[#151D19] border border-[#26332C] space-y-1.5">
              <div className="text-[#61E6B5] font-semibold flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" />
                <span>2. {lang === "fr" ? "Applications Métier" : "Business Apps"}</span>
              </div>
              <p className="text-[#A0ADA5] text-[11px] leading-relaxed font-sans">
                {lang === "fr"
                  ? "StockApp (SQLite), Extra App (MySQL) sur serveur WAMP local + Pointage QR/GPS (React / Supabase)."
                  : "StockApp (SQLite) & Extra App (MySQL) on local WAMP server + QR/GPS Attendance (React / Supabase)."}
              </p>
            </div>

            {/* Node 3 */}
            <div className="p-4 rounded-lg bg-[#151D19] border border-[#26332C] space-y-1.5">
              <div className="text-[#61E6B5] font-semibold flex items-center gap-1.5">
                <Cloud className="w-3.5 h-3.5" />
                <span>3. {lang === "fr" ? "Cloud & Collaboration" : "Cloud & Workflows"}</span>
              </div>
              <p className="text-[#A0ADA5] text-[11px] leading-relaxed font-sans">
                {lang === "fr"
                  ? "Microsoft 365, SharePoint, Power Automate & Cerberus FTP pour le partage documentaire et les rapports."
                  : "Microsoft 365, SharePoint, Power Automate & Cerberus FTP for document sharing and reporting."}
              </p>
            </div>

            {/* Node 4 */}
            <div className="p-4 rounded-lg bg-[#151D19] border border-[#26332C] space-y-1.5">
              <div className="text-[#61E6B5] font-semibold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>4. {lang === "fr" ? "Web Public & DNS" : "Public Web & DNS"}</span>
              </div>
              <p className="text-[#A0ADA5] text-[11px] leading-relaxed font-sans">
                {lang === "fr"
                  ? "Sites WordPress/Laravel sur cPanel, gestion DNS, cache LiteSpeed, SSL et SEO technique."
                  : "WordPress & Laravel properties on cPanel, DNS management, LiteSpeed caching, SSL, and technical SEO."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
