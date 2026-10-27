// Skills data — grouped by category
// Core = demonstrated in substantial projects; Additional = real but less prominent

export interface Skill {
  name: string;
  core: boolean; // true = core practical experience, false = additional exposure
}

export interface SkillCategory {
  id: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    skills: [
      { name: "HTML",                  core: true  },
      { name: "CSS",                   core: true  },
      { name: "JavaScript",            core: true  },
      { name: "Responsive Design",     core: true  },
      { name: "Tailwind CSS",          core: true  },
      { name: "React",                 core: true  },
      { name: "Vue 3",                 core: true  },
      { name: "Elementor",             core: true  },
      { name: "Angular",               core: false },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "PHP",                   core: true  },
      { name: "Laravel",               core: true  },
      { name: "Python",                core: true  },
      { name: "Java",                  core: false },
      { name: "C#",                    core: false },
    ],
  },
  {
    id: "database",
    skills: [
      { name: "MySQL",                 core: true  },
      { name: "SQLite",                core: true  },
      { name: "PostgreSQL (Supabase)", core: true  },
      { name: "Data Modeling",         core: true  },
    ],
  },
  {
    id: "cms",
    skills: [
      { name: "WordPress",             core: true  },
      { name: "WooCommerce",           core: true  },
      { name: "Theme Customization",   core: true  },
      { name: "Plugin Debugging",      core: true  },
      { name: "Technical SEO",         core: true  },
    ],
  },
  {
    id: "infra",
    skills: [
      { name: "cPanel & Hosting",      core: true  },
      { name: "Apache / WAMP",         core: true  },
      { name: "DNS & Domains",         core: true  },
      { name: "Microsoft 365",         core: true  },
      { name: "SharePoint",            core: true  },
      { name: "Entra ID",              core: true  },
      { name: "Email Config & Debug",  core: true  },
      { name: "OpenVPN",               core: true  },
      { name: "Cerberus FTP",          core: true  },
      { name: "Deployment & Backups",  core: true  },
    ],
  },
  {
    id: "automation",
    skills: [
      { name: "Power Apps",            core: true  },
      { name: "Power Automate",        core: true  },
      { name: "Python Automation",     core: true  },
      { name: "Tesseract OCR",         core: true  },
      { name: "Git & GitHub",          core: true  },
      { name: "Unity (Android)",       core: false },
    ],
  },
];
