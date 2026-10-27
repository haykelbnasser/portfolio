// ============================================================
// PROJECT DATA — 7 Featured Case Studies + Dedicated IT Section + Archive
// Verified line-by-line against actual workspace codebases
// ============================================================

export type ProjectStatus =
  | "in-development"
  | "professional"
  | "internal-tool"
  | "experiment"
  | "live";

export type ProjectType =
  | "personal"
  | "client"
  | "internal"
  | "experiment";

export interface CaseStudy {
  context:      { en: string; fr: string };
  problem:      { en: string; fr: string };
  role:         { en: string; fr: string };
  approach:     { en: string; fr: string };
  challenges:   { en: string; fr: string };
  evidence:     { en: string; fr: string };
  architecture?: string[]; // Key verified modules/routes/tables from codebase
}

export interface Project {
  id: string;
  title:       { en: string; fr: string };
  description: { en: string; fr: string };
  category:    { en: string; fr: string };
  type:        ProjectType;
  status:      ProjectStatus;
  tech:        string[];
  url?:        string;
  repo?:       string;
  featured:    boolean;
  order?:      number;
  caseStudy?:  CaseStudy;
}

export const projects: Project[] = [
  // ── 1. TAYEBLI ───────────────────────────────────────────
  {
    id: "tayebli",
    title: {
      en: "Tayebli — B2B Catering Platform",
      fr: "Tayebli — Plateforme de restauration B2B",
    },
    description: {
      en: "Multi-company B2B catering platform built with Laravel 11, Inertia.js, and Vue 3. Supports company-specific dish folders, employee voting sessions with immutable dish snapshots, daily meal selections with dietary preferences, and daily/weekly kitchen aggregation queries.",
      fr: "Plateforme de restauration B2B multi-entreprises construite avec Laravel 11, Inertia.js et Vue 3. Prend en charge les dossiers de plats par entreprise, les sessions de vote avec instantanés immuables, le choix des repas quotidiens avec préférences alimentaires et l'agrégation quotidienne/hebdomadaire.",
    },
    category: { en: "B2B Web Application", fr: "Application Web B2B" },
    type: "personal",
    status: "in-development",
    tech: ["Laravel 11", "PHP", "MySQL", "Vue 3", "Inertia.js", "Tailwind CSS"],
    url: "https://tayebli.tn/",
    featured: true,
    order: 1,
    caseStudy: {
      context: {
        en: "A B2B catering operation needed a structured web platform to coordinate meal voting and daily dish ordering across multiple client companies, overseen by a central superadmin.",
        fr: "Un service de restauration B2B avait besoin d'une plateforme structurée pour coordonner le vote des menus et la commande quotidienne de plats pour plusieurs entreprises clientes, supervisée par un superadmin central.",
      },
      problem: {
        en: "Global dish folders change over time, but historical voting sessions must retain an exact snapshot of the dishes that were voted on. Additionally, the system needed to detect ties at the top-20 cutoff and allow manual superadmin adjustments before publishing the weekly menu.",
        fr: "Les dossiers de plats évoluent dans le temps, mais les sessions de vote historiques doivent conserver un instantané exact des plats votés. Le système devait aussi détecter les égalités au seuil du top 20 et permettre des ajustements manuels par le superadmin avant de publier le menu hebdomadaire.",
      },
      role: {
        en: "Full-stack architecture and implementation: 18 database migrations, Eloquent models, Admin & Employee controllers, Vue 3 Composition API pages via Inertia.js, and cPanel deployment helpers.",
        fr: "Architecture et implémentation full-stack : 18 migrations de base de données, modèles Eloquent, contrôleurs Admin & Employé, pages Vue 3 Composition API via Inertia.js et utilitaires de déploiement cPanel.",
      },
      approach: {
        en: "Built on Laravel 11 with Inertia.js and Vue 3. When a voting session starts, dishes are snapshotted into `voting_session_dishes`. Employees vote up to their limit, and `VotingResultController` ranks dishes while flagging ties at the cutoff. Once locked into `weekly_menus`, employees submit daily `meal_selections` including salt (`low`/`normal`) and spice (`high`/`normal`) preferences.",
        fr: "Construit sous Laravel 11 avec Inertia.js et Vue 3. Lorsqu'une session de vote démarre, les plats sont copiés dans `voting_session_dishes`. Les employés votent et `VotingResultController` classe les plats tout en signalant les égalités au seuil. Une fois le menu hebdomadaire publié, les employés soumettent leurs `meal_selections` quotidiennes avec préférences de sel et d'épices.",
      },
      challenges: {
        en: "Enforcing strict multi-company tenant isolation across all queries (`companies`, `voting_sessions`, `weekly_menus`, `meal_selections`) and aggregating daily dish counts broken down by salt and spicy preferences in `ReportController`.",
        fr: "Garantir l'isolation stricte des données entre entreprises sur toutes les requêtes et agréger les quantités quotidiennes par plat ventilées par préférences de sel et de piquant dans `ReportController`.",
      },
      evidence: {
        en: "In active development. Implemented and verified in codebase: multi-company CRUD, dish folders, voting sessions, tie-detection, daily meal selection with salt/spicy options, and `ReportController` endpoints (`daily`, `weekly`, `unselected` employees) plus `SendWeeklyKitchenRecapCommand`. Production rollout is ongoing.",
        fr: "En développement actif. Implémenté et vérifié dans le code : CRUD multi-entreprises, dossiers de plats, sessions de vote, détection d'égalités, sélection quotidienne avec options sel/épicé, endpoints `ReportController` (`daily`, `weekly`, `unselected`) et commande `SendWeeklyKitchenRecapCommand`.",
      },
      architecture: [
        "Admin\\CompanyController, DishController, FolderController",
        "Admin\\VotingSessionController & VotingResultController (tie cutoff logic)",
        "Employee\\VotingController & MealSelectionController (salt/spicy prefs)",
        "Admin\\ReportController (daily/weekly aggregation & unselected employees)",
        "18 migrations including audit_logs, voting_session_dishes, meal_selections",
      ],
    },
  },

  // ── 2. STOCKAPP ──────────────────────────────────────────
  {
    id: "stockapp",
    title: {
      en: "StockApp — Inventory & Operations Management",
      fr: "StockApp — Gestion des stocks et opérations",
    },
    description: {
      en: "Internal Laravel & SQLite inventory application managing stock across multiple storage locations. Features issue vouchers, return vouchers, purchase invoices, supplier/article management, role-based access (admin / magasinier), PDF voucher exports, and an action audit log.",
      fr: "Application interne d'inventaire Laravel & SQLite gérant les stocks sur plusieurs emplacements. Inclut bons de sortie, bons de retour, factures d'achat, gestion fournisseurs/articles, accès par rôle (admin / magasinier), exports PDF et journal d'audit.",
    },
    category: { en: "Internal Business Application", fr: "Application métier interne" },
    type: "internal",
    status: "internal-tool",
    tech: ["Laravel", "PHP", "SQLite", "Blade", "JavaScript", "Tom Select", "PDF Export"],
    featured: true,
    order: 2,
    caseStudy: {
      context: {
        en: "Be Magic Events needed an internal system to track equipment, materials, and supplies across two storage units, replacing manual stock tracking with structured issue and return vouchers.",
        fr: "Be Magic Events avait besoin d'un système interne pour suivre les équipements, matériaux et fournitures sur deux unités de stockage, remplaçant le suivi manuel par des bons de sortie et de retour structurés.",
      },
      problem: {
        en: "Equipment leaving the warehouse for events wasn't consistently reconciled upon return. The team needed clear visibility into stock movements, minimum stock alerts, lost items per employee, and distinct permissions for the storekeeper (`magasinier`) versus administrators.",
        fr: "Le matériel sortant du dépôt pour les événements n'était pas systématiquement réconcilié au retour. L'équipe avait besoin d'une visibilité claire sur les mouvements de stock, les seuils d'alerte, les articles perdus par employé et des permissions distinctes pour le magasinier et l'administrateur.",
      },
      role: {
        en: "Designed and developed the complete application: 25+ database migrations, role middleware, voucher & purchase controllers, PDF generation routes, and local WAMP deployment.",
        fr: "Conception et développement complet de l'application : plus de 25 migrations, middleware de rôles, contrôleurs de bons et d'achats, génération de PDF et déploiement sur serveur local WAMP.",
      },
      approach: {
        en: "Used Laravel with SQLite for zero-configuration local database portability, and Tom Select for fast searchable article/supplier dropdowns. Issue vouchers (`issue_vouchers`) link items to events, storage locations,activities, and employees. Return vouchers (`return_vouchers`) reconcile returned quantities.",
        fr: "Utilisation de Laravel avec SQLite pour la portabilité locale et Tom Select pour les listes déroulantes recherchables. Les bons de sortie (`issue_vouchers`) lient les articles aux événements, dépôts, activités et employés. Les bons de retour (`return_vouchers`) réconcilient les quantités retournées.",
      },
      challenges: {
        en: "Maintaining stock accuracy across multiple storage locations (`article_storage` pivot) and protecting destructive actions with an admin-only gate, deletion password verification, and an `ActivityLog` model recording user actions.",
        fr: "Maintenir l'exactitude des stocks entre plusieurs emplacements (`article_storage`) et protéger les suppressions par un contrôle d'accès admin, un mot de passe de suppression et un modèle `ActivityLog` enregistrant les actions.",
      },
      evidence: {
        en: "Implemented and deployed internally at Be Magic Events. Verified in codebase: `VoucherController` (issue/return + PDF download), `PurchaseController`, `StorageController`, `ReportController` (`purchases` & `stock`), `EmployeeController::downloadLostItemsPdf`, and `ActivityLog` (`/admin/audit`).",
        fr: "Implémenté et déployé en interne chez Be Magic Events. Vérifié dans le code : `VoucherController` (sortie/retour + export PDF), `PurchaseController`, `StorageController`, `ReportController` (`purchases` & `stock`), `EmployeeController::downloadLostItemsPdf` et `ActivityLog` (`/admin/audit`).",
      },
      architecture: [
        "VoucherController (createIssue, storeIssue, createReturn, downloadIssuePdf, downloadReturnPdf)",
        "PurchaseController & SupplierController (purchase_invoices & items)",
        "ArticleController & StorageController (multi-storage stock tracking & stock_min)",
        "EmployeeController::downloadLostItemsPdf (lost items PDF per employee)",
        "ActivityLog model & /admin/audit route with can:admin-only middleware",
      ],
    },
  },

  // ── 3. EXTRA APP (LARAVEL) ───────────────────────────────
  {
    id: "extra-laravel",
    title: {
      en: "Extra App — Event Workforce, Bonuses & Transporter Payments",
      fr: "Extra App — Gestion des Primes Événementielles & Transporteurs",
    },
    description: {
      en: "Internal Laravel application built to manage event workers ('extras'), calculate per-event employee bonuses, track advances, manage transporter event quotas/payments, run batch monthly settlements, and generate payment reports.",
      fr: "Application Laravel interne conçue pour gérer les travailleurs événementiels ('extras'), calculer les primes par événement, suivre les acomptes, gérer les paiements des transporteurs, exécuter des règlements mensuels par lot et générer des rapports.",
    },
    category: { en: "Internal Financial & Operations Tool", fr: "Outil Interne Finances & Opérations" },
    type: "internal",
    status: "internal-tool",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript"],
    featured: true,
    order: 3,
    caseStudy: {
      context: {
        en: "Be Magic Events works with freelance staff ('extras') and external transporters across dozens of events. Each event involves different personnel, custom per-event bonus rates, employee advances, and transporter fees.",
        fr: "Be Magic Events travaille avec des collaborateurs événementiels ('extras') et des transporteurs externes. Chaque événement implique différents intervenants, des tarifs de primes spécifiques, des acomptes et des frais de transport.",
      },
      problem: {
        en: "Calculating monthly payouts across multiple events, deducting unpaid advances (`accomptes`), and tracking which event participations were pending (`attente`) versus settled (`payé`) was error-prone when done in spreadsheets.",
        fr: "Calculer les paiements mensuels sur plusieurs événements, déduire les acomptes non payés et suivre quelles participations étaient en `attente` ou `payé` était source d'erreurs sur tableur.",
      },
      role: {
        en: "Built Both the original legacy PHP/WAMP version and the modernized Laravel application (`EventController`, `PaymentController`, `TransporterController`, `ReportController`, and `PaymentArchive`).",
        fr: "Développement de la version initiale PHP/WAMP puis de l'application Laravel modernisée (`EventController`, `PaymentController`, `TransporterController`, `ReportController` et `PaymentArchive`).",
      },
      approach: {
        en: "Events link to employees and transporters via pivot tables storing per-event `price` and payment `state` (`attente` / `payé`). Superadmins can filter reports by month or year (`reports/employee` and `reports/transporter`) and trigger `payAll` or batch settlements (`payments/batch`) protected by an action password middleware.",
        fr: "Les événements sont liés aux employés et transporteurs via des tables pivots stockant le tarif (`price`) et l'état (`attente` / `payé`). Le superadmin peut filtrer les rapports par mois ou année et déclencher le règlement groupé (`payAll` / `payments/batch`) protégé par mot de passe.",
      },
      challenges: {
        en: "Ensuring that settling an employee's monthly events simultaneously marks pending advances as paid and writes immutable records into `payment_archives` with invoice numbers and event dates.",
        fr: "S'assurer que le règlement mensuel d'un employé marque simultanément ses acomptes en attente comme payés et crée des enregistrements d'archive dans `payment_archives` avec numéro de facture et date d'événement.",
      },
      evidence: {
        en: "Deployed internally on local server infrastructure for Be Magic Events operations. Verified in codebase (`extra_laravel` and legacy `extra`).",
        fr: "Déployé en interne sur l'infrastructure locale pour les opérations de Be Magic Events. Vérifié dans le code source (`extra_laravel` et version `extra`).",
      },
      architecture: [
        "EventController, EmployeeController, ActivityController, TransporterController",
        "PaymentController (advances, archive, storeArchive, batchView, processBatch)",
        "ReportController (employee & transporter monthly/yearly aggregation + payAll)",
        "Middleware: role:superadmin & action.password protection",
      ],
    },
  },

  // ── 4. CLOCK-IN / POINTAGE ───────────────────────────────
  {
    id: "bemagic-pointage",
    title: {
      en: "Clock-In System — QR & GPS Employee Attendance",
      fr: "Système de Pointage — Présence Employés par QR & GPS",
    },
    description: {
      en: "React 18 + Supabase web application for employee attendance across three departments (Bureau, Dépôt, Atelier Menuisier). Features QR code check-in with GPS and device capture, configurable schedules, offsite event assignments, and CSV/PDF exports.",
      fr: "Application web React 18 + Supabase de gestion des présences sur trois départements (Bureau, Dépôt, Atelier Menuisier). Inclut pointage par QR code avec capture GPS et appareil, horaires configurables, événements hors-site et exports CSV/PDF.",
    },
    category: { en: "Internal Web Application", fr: "Application Web Interne" },
    type: "internal",
    status: "internal-tool",
    tech: ["React 18", "Vite", "Supabase", "PostgreSQL", "Zustand", "jsPDF", "PapaParse", "QR Code"],
    featured: true,
    order: 4,
    caseStudy: {
      context: {
        en: "Be Magic Events needed a mobile-friendly attendance system for employees working across three departments (`Bureau`, `Dépôt`, `Atelier Menuisier`) as well as offsite event locations.",
        fr: "Be Magic Events avait besoin d'un système de pointage adapté au mobile pour ses employés répartis sur trois départements (`Bureau`, `Dépôt`, `Atelier Menuisier`) ainsi que sur des événements hors-site.",
      },
      problem: {
        en: "SMS OTP authentication was too costly for daily check-ins, and standard office check-in didn't account for staff dispatched to offsite team-building events.",
        fr: "L'authentification par SMS OTP était trop coûteuse pour un usage quotidien, et le pointage classique ne prenait pas en compte les équipes envoyées en événement hors-site.",
      },
      role: {
        en: "Full design and development: PostgreSQL schema & RPC functions on Supabase, custom phone + password auth via `pgcrypto`, React UI (`PointagePage`, `Dashboard`, `QrCodes`, `Schedules`, `OffsiteEvents`, `Reports`), and cPanel SPA deployment.",
        fr: "Conception et développement complet : schéma PostgreSQL et fonctions RPC sur Supabase, authentification téléphone + mot de passe via `pgcrypto`, interface React et déploiement SPA sur cPanel.",
      },
      approach: {
        en: "Generated printable department QR codes (`QrCodes.jsx`). When an employee scans a code and logs in on their phone, `PointagePage.jsx` records the timestamp, GPS coordinates, and device info. The admin `Dashboard.jsx` queries daily status (`present`, `absent`, `late`, `offsite`, `departed`) and allows adding per-employee notes.",
        fr: "Génération de QR codes imprimables par département (`QrCodes.jsx`). Lorsqu'un employé scanne le code sur son téléphone, `PointagePage.jsx` enregistre l'heure, les coordonnées GPS et l'appareil. Le `Dashboard.jsx` admin affiche les statuts du jour et permet d'ajouter des notes par employé.",
      },
      challenges: {
        en: "Coordinating configurable department work schedules (`Schedules.jsx`) with offsite event overrides (`OffsiteEvents.jsx`) so employees on event duty are categorized accurately in monthly PDF (`jsPDF`) and CSV (`PapaParse`) reports.",
        fr: "Coordonner les horaires configurables par département (`Schedules.jsx`) avec les événements hors-site (`OffsiteEvents.jsx`) afin que les employés en mission soient catégorisés correctement dans les rapports PDF et CSV.",
      },
      evidence: {
        en: "Built and packaged for cPanel subdomain hosting with a Supabase backend (`bemagic-pointage`). All admin modules (`Dashboard`, `Employees`, `QrCodes`, `Schedules`, `OffsiteEvents`, `Reports`) and PDF/CSV export utilities (`src/lib/pdf.js`, `src/lib/csv.js`) are implemented in the repository.",
        fr: "Construit et packagé pour hébergement sur sous-domaine cPanel avec backend Supabase (`bemagic-pointage`). Tous les modules admin et utilitaires d'export PDF/CSV (`src/lib/pdf.js`, `src/lib/csv.js`) sont implémentés dans le dépôt.",
      },
      architecture: [
        "Admin components: Dashboard.jsx, Employees.jsx, QrCodes.jsx, Schedules.jsx, OffsiteEvents.jsx, Reports.jsx",
        "Employee flow: LoginPage.jsx (phone + password) & PointagePage.jsx (GPS + device capture)",
        "Export libraries: src/lib/pdf.js (jsPDF + autotable) & src/lib/csv.js (PapaParse)",
        "Backend: supabase/schema.sql + pgcrypto custom authentication",
      ],
    },
  },

  // ── 5. BE MAGIC EVENTS WEBSITE ───────────────────────────
  {
    id: "be-magic-website",
    title: {
      en: "Be Magic Events — Website Development & Technical SEO",
      fr: "Be Magic Events — Développement Web & SEO Technique",
    },
    description: {
      en: "Professional development, customization, and ongoing maintenance of the Be Magic Events corporate website. Covers custom activity pages, WordPress/Elementor layouts, front-end scripts, technical SEO, caching diagnostics, and cPanel hosting management.",
      fr: "Développement professionnel, personnalisation et maintenance continue du site corporate Be Magic Events. Couvre les pages d'activités, mises en page WordPress/Elementor, scripts front-end, SEO technique, diagnostic de cache et gestion cPanel.",
    },
    category: { en: "Corporate Website & SEO", fr: "Site Corporate & SEO" },
    type: "client",
    status: "live",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS", "Technical SEO", "cPanel"],
    url: "https://bemagicteambuilding.tn/",
    featured: true,
    order: 5,
    caseStudy: {
      context: {
        en: "Be Magic Events relies on its primary web presence (`bemagicteambuilding.tn`) to showcase corporate team-building activities and capture B2B client inquiries in Tunisia.",
        fr: "Be Magic Events s'appuie sur son site principal (`bemagicteambuilding.tn`) pour présenter ses activités de team building et générer des demandes clients B2B en Tunisie.",
      },
      problem: {
        en: "The website required structured activity catalogs, responsive landing pages, fast load times despite media-heavy pages, and reliable uptime on shared cPanel infrastructure.",
        fr: "Le site nécessitait un catalogue d'activités structuré, des pages d'atterrissage responsives, des temps de chargement rapides malgré un contenu riche en médias et une disponibilité fiable sur cPanel.",
      },
      role: {
        en: "Web Developer (2022–2023) and subsequently IT Manager & Full-Stack Developer (2024–Present) responsible for layout customization, SEO implementation, plugin debugging, and hosting operations.",
        fr: "Développeur Web (2022–2023) puis IT Manager & Développeur Full-Stack (2024–Présent) responsable de la personnalisation, du SEO, du débogage de plugins et de l'hébergement.",
      },
      approach: {
        en: "Built and refined custom Elementor templates supplemented by custom CSS and JavaScript where page-builder defaults fell short. Implemented on-page SEO best practices, structured headings, optimized image assets, and managed Apache/cPanel configurations.",
        fr: "Création et optimisation de templates Elementor complétés par du CSS et JavaScript sur mesure. Mise en place des bonnes pratiques SEO on-page, optimisation des médias et gestion de la configuration Apache/cPanel.",
      },
      challenges: {
        en: "Resolving plugin version conflicts, preventing layout regressions across mobile breakpoints, and balancing caching rules with dynamic form and asset updates.",
        fr: "Résoudre les conflits de versions de plugins, prévenir les régressions visuelles sur mobile et équilibrer les règles de cache avec les mises à jour dynamiques.",
      },
      evidence: {
        en: "Live production website associated with my verified employment at Be Magic Events.",
        fr: "Site web en production lié à mon poste vérifié chez Be Magic Events.",
      },
    },
  },

  // ── 6. APPLE BUTTER CAFE KSA ─────────────────────────────
  {
    id: "apple-butter",
    title: {
      en: "Apple Butter Cafe KSA — Custom RTL/LTR Bilingual Theme",
      fr: "Apple Butter Cafe KSA — Thème Bilingue Arabe RTL / Anglais",
    },
    description: {
      en: "WordPress theme development and troubleshooting for a restaurant brand in Saudi Arabia. Features Arabic RTL as primary presentation, an instant Arabic/English directional switcher, custom interactive menu previews, and LiteSpeed/Slider Revolution cache debugging.",
      fr: "Développement et dépannage de thème WordPress pour une enseigne de restauration en Arabie Saoudite. Présentation principale en arabe RTL, bascule instantanée arabe/anglais, aperçu interactif du menu et résolution de conflits de cache LiteSpeed/Slider Revolution.",
    },
    category: { en: "Custom WordPress Theme & RTL", fr: "Thème WordPress Sur Mesure & RTL" },
    type: "client",
    status: "live",
    tech: ["WordPress", "Custom Theme", "PHP", "JavaScript", "RTL/LTR CSS", "LiteSpeed Cache", "Slider Revolution"],
    url: "https://www.applebuttercafeksa.com/",
    featured: true,
    order: 6,
    caseStudy: {
      context: {
        en: "Apple Butter Cafe KSA required a bilingual Arabic/English website tailored to customers in Saudi Arabia, defaulting to Arabic (RTL) while allowing visitors to switch seamlessly to English (LTR).",
        fr: "Apple Butter Cafe KSA avait besoin d'un site bilingue arabe/anglais adapté au marché saoudien, s'affichant par défaut en arabe (RTL) tout en permettant de basculer instantanément en anglais (LTR).",
      },
      problem: {
        en: "Switching between Arabic and English required flipping document direction (`dir='rtl'` / `dir='ltr'`), typography, sticky navigation alignment, and interactive menu cards without page-reload flicker. Furthermore, LiteSpeed Cache was serving inconsistent Slider Revolution and CSS assets.",
        fr: "Le passage entre l'arabe et l'anglais nécessitait d'inverser la direction du document (`dir='rtl'` / `dir='ltr'`), la typographie, l'alignement du menu fixe et les cartes du menu sans rechargement. De plus, LiteSpeed Cache servait des assets Slider Revolution et CSS incohérents.",
      },
      role: {
        en: "Custom WordPress theme engineering (`apple-butter-theme`), customizer settings scripting, bilingual DOM/direction switching, and caching/asset troubleshooting.",
        fr: "Ingénierie du thème WordPress sur mesure (`apple-butter-theme`), scripts de configuration du customizer, bascule bilingue DOM/direction et dépannage du cache et des assets.",
      },
      approach: {
        en: "Developed and packaged modular WordPress theme files (`functions.php`, customizer settings, sticky header CSS, and contact/menu templates) alongside Python validation scripts (`verify_all_lint.py`, `check_sticky_css.py`) to verify PHP syntax and theme mod bindings before zipping for deployment.",
        fr: "Développement et packaging de fichiers de thème WordPress modulaires accompagnés de scripts Python de vérification (`verify_all_lint.py`, `check_sticky_css.py`) pour valider la syntaxe PHP et les champs du customizer avant déploiement.",
      },
      challenges: {
        en: "Debugging differences between cached and uncached page states under LiteSpeed Cache and ensuring Slider Revolution assets initialized properly across both RTL and LTR layouts.",
        fr: "Déboguer les différences d'affichage entre les états mis en cache et non mis en cache sous LiteSpeed et garantir l'initialisation correcte de Slider Revolution en RTL comme en LTR.",
      },
      evidence: {
        en: "Live client website (`applebuttercafeksa.com`) and verified theme source packages + diagnostic scripts in the local workspace.",
        fr: "Site client en ligne (`applebuttercafeksa.com`) et packages de thème + scripts de diagnostic vérifiés dans l'espace de travail.",
      },
      architecture: [
        "Custom WordPress theme package (apple-butter-theme)",
        "Instant RTL (Arabic) <-> LTR (English) direction & string switcher",
        "Interactive bilingual menu preview & PDF menu integration",
        "Automated PHP lint & theme-mod verification scripts",
      ],
    },
  },

  // ── 7. HUMANPOWER GROUP ──────────────────────────────────
  {
    id: "humanpower",
    title: {
      en: "Humanpower Group — Domain Migration & Multi-Service Web Setup",
      fr: "Humanpower Group — Migration de Domaine & Portail Multi-Services",
    },
    description: {
      en: "Professional web project for a multi-service consultancy (Advisory, Assessment, Academy, DigiTech). Handled migration from a staging subdomain to the primary production domain, database URL updates, DNS/cPanel configuration, and SEO structure.",
      fr: "Projet web professionnel pour un cabinet de conseil multi-services (Advisory, Assessment, Academy, DigiTech). Migration d'un sous-domaine vers le domaine principal, mise à jour de la base de données, configuration DNS/cPanel et structure SEO.",
    },
    category: { en: "Domain Migration & Web Delivery", fr: "Migration de Domaine & Déploiement Web" },
    type: "client",
    status: "live",
    tech: ["WordPress", "Elementor", "MySQL", "cPanel", "DNS", "SEO"],
    url: "https://humanpower-group.com/",
    featured: true,
    order: 7,
    caseStudy: {
      context: {
        en: "Humanpower Group needed to launch their multi-pillar corporate website (Advisory, Assessment, Academy, DigiTech) on their primary domain after initial development on a staging subdomain, accompanied by an SEO structure review.",
        fr: "Humanpower Group devait publier son site corporate multi-pôles (Advisory, Assessment, Academy, DigiTech) sur son domaine principal après une phase de développement sur sous-domaine, accompagné d'une structuration SEO.",
      },
      problem: {
        en: "Moving a WordPress/Elementor installation between domains breaks serialized PHP arrays in the database, media paths, and internal links if not migrated systematically.",
        fr: "Déplacer une installation WordPress/Elementor d'un sous-domaine vers un domaine principal corrompt les tableaux PHP sérialisés en base de données, les chemins médias et les liens internes si la migration n'est pas rigoureuse.",
      },
      role: {
        en: "Executed the subdomain-to-root domain migration, reconfigured cPanel and DNS records, updated serialized database references, and worked on service presentation and SEO documentation.",
        fr: "Exécution de la migration du sous-domaine vers le domaine principal, reconfiguration cPanel et DNS, mise à jour des références sérialisées en base de données et travail sur la présentation des services et le SEO.",
      },
      approach: {
        en: "Coordinated file transfer on cPanel, ran serialization-safe URL replacements across WordPress and Elementor metadata tables, verified SSL/DNS resolution, and audited page titles and service hierarchy.",
        fr: "Coordination du transfert sur cPanel, remplacement sécurisé des URL dans les tables sérialisées WordPress et Elementor, vérification SSL/DNS et audit de la hiérarchie des pages.",
      },
      challenges: {
        en: "Preventing broken Elementor widget styles and asset 404s post-migration while minimizing transition downtime.",
        fr: "Éviter la perte de styles des widgets Elementor et les erreurs 404 sur les médias après migration tout en réduisant le temps d'indisponibilité.",
      },
      evidence: {
        en: "Live website (`humanpower-group.com`) and SEO planning documentation verified in workspace.",
        fr: "Site en ligne (`humanpower-group.com`) et documentation SEO vérifiés dans l'espace de travail.",
      },
    },
  },

  // ── ARCHIVE PROJECTS ─────────────────────────────────────
  {
    id: "lartiste",
    title: { en: "L'Artiste Traiteur", fr: "L'Artiste Traiteur" },
    description: {
      en: "Luxury dark-themed catering website and interactive digital menu built for a catering brand launched in 2026.",
      fr: "Site web élégant au thème sombre et menu numérique interactif conçus pour un service traiteur lancé en 2026.",
    },
    category: { en: "Website & Menu UX", fr: "Site Web & UX Menu" },
    type: "client",
    status: "professional",
    tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    featured: false,
  },
  {
    id: "les-jardins",
    title: { en: "Les Jardins du Golf", fr: "Les Jardins du Golf" },
    description: {
      en: "Event venue presentation and digital menu interface.",
      fr: "Présentation de lieu événementiel et interface de menu numérique.",
    },
    category: { en: "Website & Menu", fr: "Site Web & Menu" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor", "HTML/CSS"],
    featured: false,
  },
  {
    id: "mes-demarches",
    title: { en: "Mes Démarches Juridiques", fr: "Mes Démarches Juridiques" },
    description: {
      en: "Elementor popup, mobile header template, and customer reviews carousel customization for a French legal assistance firm.",
      fr: "Personnalisation de popup Elementor, d'en-tête mobile et d'un carrousel d'avis pour un cabinet français d'accompagnement juridique.",
    },
    category: { en: "WordPress Customization", fr: "Personnalisation WordPress" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: "mahazshop",
    title: { en: "Mahazshop", fr: "Mahazshop" },
    description: {
      en: "WordPress and WooCommerce e-commerce theme transition and environment maintenance.",
      fr: "Transition de thème e-commerce WordPress/WooCommerce et maintenance de l'environnement.",
    },
    category: { en: "E-Commerce", fr: "E-Commerce" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    featured: false,
  },
  {
    id: "unity-escape-apps",
    title: {
      en: "Escape Game (P2, P5, P9) & Event Dispatch Mobile Apps",
      fr: "Applications Mobiles Escape Game (P2, P5, P9) & Événements",
    },
    description: {
      en: "Mobile applications built with Unity (P2, P5, P9) used as interactive clues in team-building escape games, plus a participant dispatching mobile app.",
      fr: "Applications mobiles développées sous Unity (P2, P5, P9) servant d'indices interactifs en Escape Game, ainsi qu'une application mobile de répartition des participants.",
    },
    category: { en: "Mobile & Unity Development", fr: "Développement Mobile & Unity" },
    type: "internal",
    status: "professional",
    tech: ["Unity", "C#", "Android", "Mobile UI"],
    featured: false,
  },
  {
    id: "art-et-couleurs-apps",
    title: {
      en: "Quotation, Production & Maintenance Web Apps",
      fr: "Applications de Devis, Production & Maintenance",
    },
    description: {
      en: "Internal PHP web applications built during my internship at Art & Couleurs for quotation management, production tracking, and machine/vehicle maintenance.",
      fr: "Applications web PHP internes développées chez Art & Couleurs pour la gestion des devis, le suivi de production et la maintenance des machines et véhicules.",
    },
    category: { en: "Internal Web Tools", fr: "Outils Web Internes" },
    type: "internal",
    status: "professional",
    tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    featured: false,
  },
  {
    id: "resume-parser",
    title: { en: "Resume Parser — Ollama & Tesseract OCR", fr: "Extracteur de CV — Ollama & Tesseract OCR" },
    description: {
      en: "Resumable Python pipeline combining Tesseract OCR and local Ollama LLM inference to extract structured candidate profiles from PDF batches into Excel.",
      fr: "Pipeline Python combinant Tesseract OCR et un modèle local Ollama pour extraire des données structurées de lots de CV PDF vers Excel.",
    },
    category: { en: "Automation & OCR Experiment", fr: "Automatisation & Expérimentation OCR" },
    type: "internal",
    status: "experiment",
    tech: ["Python", "Tesseract OCR", "Ollama", "Pandas", "openpyxl"],
    featured: false,
  },
  {
    id: "image-optimizer",
    title: { en: "WebP & Product Image Optimizer", fr: "Optimiseur d'Images Produits & WebP" },
    description: {
      en: "Utility tool built to compress and batch-convert product photos to WebP while preserving visual quality.",
      fr: "Outil utilitaire conçu pour compresser et convertir en lot des images produits au format WebP tout en préservant la qualité visuelle.",
    },
    category: { en: "Developer Utility", fr: "Utilitaire Développeur" },
    type: "personal",
    status: "experiment",
    tech: ["Python", "Pillow", "WebP"],
    featured: false,
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

export const archiveProjects = projects.filter((p) => !p.featured);
