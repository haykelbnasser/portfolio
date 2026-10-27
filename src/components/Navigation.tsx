"use client";

import React, { useState, useEffect } from "react";
import { useLang } from "@/components/LanguageProvider";
import { translations } from "@/data/translations";
import { Menu, X, Globe } from "lucide-react";

export function Navigation() {
  const { lang, toggle, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t(translations.nav.home) },
    { href: "#projects", label: t(translations.nav.work) },
    { href: "#about", label: t(translations.nav.about) },
    { href: "#skills", label: t(translations.nav.skills) },
    { href: "#experience", label: t(translations.nav.experience) },
    { href: "#contact", label: t(translations.nav.contact) },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0B0F0E]/90 backdrop-blur-md border-b border-[#26332C] py-3.5 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono font-bold text-lg tracking-wider text-[#F1F5F2] hover:text-[#61E6B5] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#61E6B5] inline-block group-hover:scale-125 transition-transform" />
          <span>HAYKEL<span className="text-[#61E6B5]">.DEV</span></span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#A0ADA5] hover:text-[#61E6B5] transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language Toggle Button */}
          <button
            onClick={toggle}
            type="button"
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#26332C] bg-[#111715] text-xs font-mono text-[#F1F5F2] hover:border-[#61E6B5] hover:text-[#61E6B5] transition-all cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5 text-[#61E6B5]" />
            <span className="font-semibold uppercase">{lang === "en" ? "FR" : "EN"}</span>
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            type="button"
            aria-label="Toggle language"
            className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-[#26332C] bg-[#111715] text-xs font-mono text-[#F1F5F2]"
          >
            <Globe className="w-3.5 h-3.5 text-[#61E6B5]" />
            <span className="font-semibold uppercase">{lang === "en" ? "FR" : "EN"}</span>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
            aria-label="Toggle menu"
            className="p-1.5 text-[#A0ADA5] hover:text-[#F1F5F2] focus:outline-none"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111715] border-b border-[#26332C] px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#F1F5F2] hover:text-[#61E6B5] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
