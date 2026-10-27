// ============================================================
// SITE CONFIGURATION — update contact details before publishing
// ============================================================

export const siteConfig = {
  name: "Haykel Ben Nasser",
  role: "Full-Stack Developer & IT Professional",
  tagline: "FULL-STACK DEVELOPMENT · DIGITAL SOLUTIONS · IT SYSTEMS",
  // ── Contact ─────────────────────────────────────────────
  email: "haykelbnasser@gmail.com",
  linkedin: "https://www.linkedin.com/in/haykel-ben-nasser-55b3a42b8/",
  github: "https://github.com/haykelbnasser",
  // ── CV Relative Filenames ───────────────────────────────
  cvEnFile: "Haykel_Ben_Nasser_Resume.pdf",
  cvFrFile: "Haykel_Ben_Nasser_CV_FR.pdf",
  // ── Helper to resolve assets whether running locally or on GitHub Pages ──
  getAssetPath: (relativePath: string) => {
    const cleanPath = relativePath.startsWith("/") ? relativePath : `/${relativePath}`;
    if (typeof window !== "undefined") {
      const isGhPages = window.location.pathname.startsWith("/portfolio");
      return isGhPages ? `/portfolio${cleanPath}` : cleanPath;
    }
    // SSR / SSG build fallback
    const isGhActions = process.env.GITHUB_ACTIONS === "true";
    return isGhActions ? `/portfolio${cleanPath}` : cleanPath;
  },
  // ── SEO / Domain ────────────────────────────────────────
  siteUrl: "https://haykelbnasser.github.io/portfolio",
};
