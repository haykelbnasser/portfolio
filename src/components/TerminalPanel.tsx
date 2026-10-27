"use client";

import React from "react";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";

export function TerminalPanel() {
  return (
    <div className="w-full rounded-xl border border-[#26332C] bg-[#111715] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#151D19] border-b border-[#26332C]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#EAB308]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#22C55E]/80 inline-block" />
          <span className="text-[#A0ADA5] text-xs ml-2 select-none flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#61E6B5]" /> haykel@server: ~
          </span>
        </div>
        <div className="text-[11px] text-[#A0ADA5] flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#29C98C]" /> IT Verified
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-5 space-y-3.5 text-[#F1F5F2]">
        <div>
          <span className="text-[#61E6B5] font-semibold">guest@portfolio:~$</span>{" "}
          <span className="text-[#F1F5F2]">whoami</span>
          <div className="text-[#A0ADA5] mt-1 pl-3 border-l-2 border-[#26332C]">
            Haykel Ben Nasser — Hybrid Developer & IT Responsable (Tunisia / Remote / Relocation ready)
          </div>
        </div>

        <div>
          <span className="text-[#61E6B5] font-semibold">guest@portfolio:~$</span>{" "}
          <span className="text-[#F1F5F2]">cat current_stack.json</span>
          <div className="mt-1 pl-3 border-l-2 border-[#26332C] text-[#A0ADA5] space-y-0.5 text-xs">
            <p>&#123;</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;backend&quot;</span>: [&quot;Laravel&quot;, &quot;PHP&quot;, &quot;Python&quot;, &quot;MySQL&quot;, &quot;SQLite&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;frontend&quot;</span>: [&quot;React&quot;, &quot;Vue 3&quot;, &quot;Next.js&quot;, &quot;Tailwind&quot;, &quot;JavaScript&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;cms_web&quot;</span>: [&quot;WordPress&quot;, &quot;Elementor&quot;, &quot;WooCommerce&quot;, &quot;RTL Support&quot;],</p>
            <p className="pl-4"><span className="text-[#61E6B5]">&quot;systems_it&quot;</span>: [&quot;cPanel&quot;, &quot;Apache&quot;, &quot;M365&quot;, &quot;Entra ID&quot;, &quot;OpenVPN&quot;, &quot;DNS&quot;]</p>
            <p>&#125;</p>
          </div>
        </div>

        <div>
          <span className="text-[#61E6B5] font-semibold">guest@portfolio:~$</span>{" "}
          <span className="text-[#F1F5F2]">systemctl status core-services</span>
          <div className="mt-1 pl-3 border-l-2 border-[#26332C] text-xs space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#29C98C] animate-pulse"></span>
              <span className="text-[#29C98C] font-semibold">active (running)</span>
              <span className="text-[#A0ADA5]">— Production web apps &amp; client workflows</span>
            </div>
            <p className="text-[#A0ADA5]">● Dispatched: Tayebli (Laravel), Extra (Events &amp; Primes), StockApp, Pointage (Supabase)</p>
          </div>
        </div>

        <div className="pt-1 flex items-center gap-2 text-[#61E6B5]">
          <span>guest@portfolio:~$</span>
          <span className="w-2 h-4 bg-[#61E6B5] cursor-blink inline-block" />
        </div>
      </div>
    </div>
  );
}
