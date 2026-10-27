// ============================================================
// TRANSLATIONS — English & French
// Add a new key here for every user-visible string.
// ============================================================

export type Lang = "en" | "fr";

export const translations = {
  // ── Navigation ───────────────────────────────────────────
  nav: {
    home:       { en: "Home",        fr: "Accueil" },
    work:       { en: "Work",        fr: "Projets" },
    about:      { en: "About",       fr: "À propos" },
    skills:     { en: "Skills",      fr: "Compétences" },
    experience: { en: "Experience",  fr: "Expérience" },
    contact:    { en: "Contact",     fr: "Contact" },
  },
  // ── Hero ─────────────────────────────────────────────────
  hero: {
    headline: {
      en: "I build digital solutions that work in the real world.",
      fr: "Je conçois des solutions numériques qui répondent aux besoins réels.",
    },
    sub: {
      en: "I'm a developer and IT professional who turns business needs into practical software, reliable websites, and connected technical systems — from implementation to deployment and maintenance.",
      fr: "Je suis développeur et professionnel de l'informatique. Je transforme les besoins des entreprises en logiciels utiles, sites web fiables et systèmes techniques cohérents, de la conception au déploiement et à la maintenance.",
    },
    cta1: { en: "Explore my work",          fr: "Découvrir mes projets" },
    cta2: { en: "Let's talk",               fr: "Discutons de votre projet" },
    cvEn: { en: "Download CV (EN)",         fr: "Télécharger CV (EN)" },
    cvFr: { en: "Download CV (FR)",         fr: "Télécharger CV (FR)" },
  },
  // ── Expertise Strip ───────────────────────────────────────
  expertise: {
    title: { en: "What I bring to the table", fr: "Ce que j'apporte" },
    items: [
      { en: "Full-Stack Web Development", fr: "Développement Web Full-Stack" },
      { en: "Business Application Design", fr: "Conception d'applications métier" },
      { en: "WordPress & CMS Customization", fr: "Personnalisation WordPress & CMS" },
      { en: "IT Infrastructure & Hosting", fr: "Infrastructure IT & Hébergement" },
      { en: "Technical Troubleshooting", fr: "Résolution de problèmes techniques" },
      { en: "Microsoft 365 & Collaboration Tools", fr: "Microsoft 365 & Outils collaboratifs" },
    ],
  },
  // ── Projects ─────────────────────────────────────────────
  projects: {
    sectionTitle:   { en: "Featured Work",           fr: "Projets Sélectionnés" },
    sectionSub:     { en: "Projects that demonstrate real business requirements, technical implementation, and practical delivery.", fr: "Des projets qui illustrent des besoins métier réels, une implémentation technique concrète et une livraison opérationnelle." },
    archiveTitle:   { en: "More Work",               fr: "Autres Projets" },
    archiveSub:     { en: "A selection of additional professional and experimental work.", fr: "Une sélection de travaux professionnels et exploratoires supplémentaires." },
    viewLive:       { en: "View live",               fr: "Voir le site" },
    viewDetails:    { en: "Case study",              fr: "Étude de cas" },
    closeDetails:   { en: "Close",                   fr: "Fermer" },
    techStack:      { en: "Technologies",            fr: "Technologies" },
    status:         { en: "Status",                  fr: "Statut" },
    context:        { en: "Context",                 fr: "Contexte" },
    problem:        { en: "Problem / Requirement",   fr: "Problème / Besoin" },
    role:           { en: "My Role",                 fr: "Mon Rôle" },
    approach:       { en: "Technical Approach",      fr: "Approche Technique" },
    challenges:     { en: "Challenges & Decisions",  fr: "Défis & Décisions" },
    evidence:       { en: "Status & Evidence",       fr: "Statut & Preuves" },
    // Status labels
    inDev:          { en: "In Development",          fr: "En développement" },
    professional:   { en: "Professional Work",       fr: "Projet professionnel" },
    internal:       { en: "Internal Tool",           fr: "Outil interne" },
    experiment:     { en: "Experiment",              fr: "Expérimentation" },
    live:           { en: "Live",                    fr: "En ligne" },
  },
  // ── About ─────────────────────────────────────────────────
  about: {
    sectionTitle: { en: "About",         fr: "À propos" },
    p1: {
      en: "I work at the intersection of software development and IT systems. My role at Be Magic Events has given me hands-on experience across the full technical lifecycle — from understanding a business requirement, to building or customizing the solution, to managing the infrastructure it runs on.",
      fr: "Je travaille à l'intersection du développement logiciel et des systèmes informatiques. Mon rôle chez Be Magic Events m'a permis d'acquérir une expérience concrète sur l'ensemble du cycle de vie technique — de la compréhension d'un besoin métier à la construction ou la personnalisation de la solution, jusqu'à la gestion de l'infrastructure sur laquelle elle fonctionne.",
    },
    p2: {
      en: "I've built business applications with Laravel and PHP, customized WordPress sites for real clients, managed Microsoft 365 environments, configured hosting and DNS, diagnosed caching and performance issues, and set up internal tools that connect different parts of a business operation.",
      fr: "J'ai développé des applications métier avec Laravel et PHP, personnalisé des sites WordPress pour de vrais clients, administré des environnements Microsoft 365, configuré des hébergements et des DNS, diagnostiqué des problèmes de cache et de performance, et mis en place des outils internes qui relient différentes parties d'une opération commerciale.",
    },
    p3: {
      en: "I value practical solutions over theoretical ones. I approach each project by understanding the context first — what the business needs, what constraints exist, and what the right level of complexity is for the situation.",
      fr: "Je préfère les solutions pratiques aux solutions théoriques. J'aborde chaque projet en comprenant d'abord le contexte — ce dont l'entreprise a besoin, quelles contraintes existent, et quel niveau de complexité est approprié à la situation.",
    },
    languagesTitle: { en: "Languages",   fr: "Langues" },
    languages: [
      { name: "Arabic",   level: { en: "Native",        fr: "Natif" } },
      { name: "French",   level: { en: "Conversational (B1)", fr: "Conversationnel (B1)" } },
      { name: "English",  level: { en: "Professional (B2)",   fr: "Professionnel (B2)" } },
    ],
  },
  // ── Skills ────────────────────────────────────────────────
  skills: {
    sectionTitle: { en: "Skills",           fr: "Compétences" },
    sectionSub:   { en: "Technologies I work with regularly, grouped by area. Depth varies — the projects above are the best evidence of practical experience.", fr: "Technologies avec lesquelles je travaille régulièrement, regroupées par domaine. Le niveau varie — les projets ci-dessus constituent la meilleure preuve de mon expérience pratique." },
    categories: {
      frontend:    { en: "Front-End Development",       fr: "Développement Front-End" },
      backend:     { en: "Back-End Development",        fr: "Développement Back-End" },
      database:    { en: "Databases",                   fr: "Bases de données" },
      cms:         { en: "CMS & E-Commerce",            fr: "CMS & E-Commerce" },
      infra:       { en: "IT Systems & Infrastructure", fr: "Systèmes IT & Infrastructure" },
      automation:  { en: "Automation & Additional Tools", fr: "Automatisation & Outils complémentaires" },
    },
    corePractical: { en: "Core practical experience", fr: "Expérience pratique principale" },
    additionalExp: { en: "Additional exposure",       fr: "Exposition complémentaire" },
  },
  // ── Experience ───────────────────────────────────────────
  experience: {
    sectionTitle: { en: "Experience & Education", fr: "Expérience & Formation" },
    present:      { en: "Present",                fr: "Présent" },
    responsibilities: { en: "Responsibilities",   fr: "Responsabilités" },
    education:    { en: "Education",              fr: "Formation" },
  },
  // ── Contact ──────────────────────────────────────────────
  contact: {
    headline: { en: "Have a problem worth solving?",     fr: "Un problème à résoudre ?" },
    sub:      { en: "Let's build the solution.",         fr: "Construisons la solution ensemble." },
    body:     { en: "I'm open to developer positions in France and Europe, and to freelance projects where technical expertise makes a real difference. If you have a requirement, let's talk.", fr: "Je suis disponible pour des postes de développeur en France et en Europe, ainsi que pour des projets freelance où l'expertise technique fait vraiment la différence. Si vous avez un besoin, parlons-en." },
    email:    { en: "Send an email",  fr: "Envoyer un e-mail" },
    linkedin: { en: "LinkedIn",       fr: "LinkedIn" },
    github:   { en: "GitHub",         fr: "GitHub" },
    cvEn:     { en: "Download CV (EN)", fr: "Télécharger CV (EN)" },
    cvFr:     { en: "Download CV (FR)", fr: "Télécharger CV (FR)" },
    note:     { en: "Contact details are placeholders — update in src/data/config.ts.", fr: "Les coordonnées sont des exemples — à mettre à jour dans src/data/config.ts." },
  },
  // ── Footer ───────────────────────────────────────────────
  footer: {
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
    built:  { en: "Built with Next.js, React, and Tailwind CSS.", fr: "Construit avec Next.js, React et Tailwind CSS." },
  },
  // ── Terminal panel (hero visual) ─────────────────────────
  terminal: {
    title: { en: "haykel@dev:~$", fr: "haykel@dev:~$" },
  },
} as const;

export type TranslationKey = typeof translations;
