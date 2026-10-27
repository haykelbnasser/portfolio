// ============================================================
// SITE CONFIGURATION — update contact details before publishing
// ============================================================

const repoBase = typeof window !== "undefined" && window.location.pathname.startsWith("/portfolio")
  ? "/portfolio"
  : "";

export const siteConfig = {
  name: "Haykel Ben Nasser",
  role: "Full-Stack Developer & IT Professional",
  tagline: "FULL-STACK DEVELOPMENT · DIGITAL SOLUTIONS · IT SYSTEMS",
  // ── Contact ─────────────────────────────────────────────
  email: "contact@haykel.dev", // TODO: replace with real email
  linkedin: "https://www.linkedin.com/in/haykel-ben-nasser", // TODO: replace with real LinkedIn URL
  github: "https://github.com/haykelbnasser",
  // ── CVs ─────────────────────────────────────────────────
  cvEn: `${repoBase}/cv/Haykel_Ben_Nasser_Resume.pdf`,
  cvFr: `${repoBase}/cv/Haykel_Ben_Nasser_CV_FR.pdf`,
  // ── SEO / Domain ────────────────────────────────────────
  siteUrl: "https://haykelbnasser.github.io/portfolio",
};
