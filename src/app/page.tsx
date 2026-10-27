"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ExpertiseStrip } from "@/components/ExpertiseStrip";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { ItInfrastructure } from "@/components/ItInfrastructure";
import { ArchiveProjects } from "@/components/ArchiveProjects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0F0E] text-[#F1F5F2]">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ExpertiseStrip />
        <FeaturedProjects />
        <ItInfrastructure />
        <ArchiveProjects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
