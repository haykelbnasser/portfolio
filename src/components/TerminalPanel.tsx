"use client";

import React from "react";
import { Terminal, Code2 } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

export function TerminalPanel() {
  const { lang } = useLang();

  return (
    <div className="w-full rounded-xl border border-[#26332C] bg-[#111715] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#151D19] border-b border-[#26332C]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#EAB308]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#22C55E]/80 inline-block" />
          <span className="text-[#A0ADA5] text-xs ml-2 select-none flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#61E6B5]" /> haykel@workspace: ~
          </span>
        </div>
        <div className="text-[11px] text-[#A0ADA5] flex items-center gap-1.5">
          <Code2 className="w-3.5 h-3.5 text-[#61E6B5]" />
          <span>{lang === "fr" ? "Applications métier · Systèmes IT" : "Building business apps · Managing IT"}</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 space-y-3.5 text-[#F1F5F2]">
        <div>
          <span className="text-[#61E6B5] font-semibold">haykel@dev:~$</span>{" "}
          <span className="text-[#F1F5F2]">cat profile.txt</span>
          <div className="text-[#A0ADA5] mt-1 pl-3 border-l-2 border-[#26332C]">
            {lang === "fr"
              ? "Haykel Ben Nasser — Développeur Hybride & Résolveur de Problèmes"
              : "Haykel Ben Nasser — Hybrid Developer & Problem Solver"}
            <div className="text-[11px] text-[#61E6B5] mt-0.5">
              FULL-STACK DEVELOPMENT · DIGITAL SOLUTIONS · IT SYSTEMS
            </div>
          </div>
        </div>

        <div>
          <span className="text-[#61E6B5] font-semibold">haykel@dev:~$</span>{" "}
          <span className="text-[#F1F5F2]">cat technical_stack.json</span>
          <div className="mt-1 pl-3 border-l-2 border-[#26332C] text-[#A0ADA5] space-y-0.5 text-xs">
            <p>&#123;</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;backend&quot;</span>: [&quot;Laravel&quot;, &quot;PHP&quot;, &quot;Python&quot;, &quot;MySQL&quot;, &quot;SQLite&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;frontend&quot;</span>: [&quot;React&quot;, &quot;Vue 3&quot;, &quot;Next.js&quot;, &quot;Tailwind&quot;, &quot;JavaScript&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;cms_web&quot;</span>: [&quot;WordPress&quot;, &quot;Elementor&quot;, &quot;RTL/LTR&quot;, &quot;Technical SEO&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;systems_it&quot;</span>: [&quot;cPanel&quot;, &quot;Apache/WAMP&quot;, &quot;M365&quot;, &quot;Entra ID&quot;, &quot;DNS&quot;]</p>
            <p>&#125;</p>
          </div>
        </div>

        <div>
          <span className="text-[#61E6B5] font-semibold">haykel@dev:~$</span>{" "}
          <span className="text-[#F1F5F2]">ls -la ./projects/</span>
          <div className="mt-1 pl-3 border-l-2 border-[#26332C] text-xs space-y-1 text-[#A0ADA5]">
            <p><span className="text-[#EAB308]">[in-dev]</span>     tayebli-b2b-catering (Laravel 11 / Vue 3)</p>
            <p><span className="text-sky-300">[internal]</span>   stockapp-inventory · extra-payments · qr-pointage</p>
            <p><span className="text-[#61E6B5]">[live-web]</span>   bemagicteambuilding.tn · applebuttercafeksa.com · humanpower-group.com</p>
          </div>
        </div>

        <div className="pt-1 flex items-center gap-2 text-[#61E6B5]">
          <span>haykel@dev:~$</span>
          <span className="w-2 h-4 bg-[#61E6B5] cursor-blink inline-block" />
        </div>
      </div>
    </div>
  );
}
