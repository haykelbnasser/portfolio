// ============================================================
// PROJECT DATA — all featured and archive projects
// Add or update projects here — UI adapts automatically
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
  context:    { en: string; fr: string };
  problem:    { en: string; fr: string };
  role:       { en: string; fr: string };
  approach:   { en: string; fr: string };
  challenges: { en: string; fr: string };
  evidence:   { en: string; fr: string };
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
  // ── FEATURED ────────────────────────────────────────────
  {
    id: "tayebli",
    title: {
      en: "Tayebli — B2B Catering Platform",
      fr: "Tayebli — Plateforme de restauration B2B",
    },
    description: {
      en: "A multi-company catering management platform built with Laravel. Employees vote on weekly menus, the superadmin manages dish collections and voting sessions, and the system generates weekly production reports for the kitchen.",
      fr: "Une plateforme de gestion de restauration multi-entreprises construite avec Laravel. Les employés votent pour les menus hebdomadaires, le superadmin gère les collections de plats et les sessions de vote, et le système génère des rapports de production pour la cuisine.",
    },
    category: { en: "Business Application", fr: "Application métier" },
    type: "personal",
    status: "in-development",
    tech: ["Laravel", "PHP", "MySQL", "Vue 3", "Inertia.js", "Tailwind CSS"],
    url: "https://tayebli.tn/",
    featured: true,
    order: 1,
    caseStudy: {
      context: {
        en: "A catering service needed a structured system to manage meal selection across multiple client companies. Each company has its own employees, voting sessions, and weekly menus. A single superadmin oversees the entire operation.",
        fr: "Un service de restauration avait besoin d'un système structuré pour gérer la sélection des repas dans plusieurs entreprises clientes. Chaque entreprise possède ses propres employés, sessions de vote et menus hebdomadaires. Un superadmin unique supervise l'ensemble de l'opération.",
      },
      problem: {
        en: "The key design challenge was historical integrity: dish folders evolve over time, but past voting sessions must remain immutable snapshots. The system also needed to handle ties at the vote cutoff threshold and allow manual adjustments by the admin.",
        fr: "Le défi de conception principal était l'intégrité historique : les dossiers de plats évoluent dans le temps, mais les anciennes sessions de vote doivent rester des instantanés immuables. Le système devait également gérer les égalités au seuil de coupure et permettre des ajustements manuels par l'admin.",
      },
      role: {
        en: "Full development — architecture, database design, backend logic, Vue 3 frontend, role-based access control, and cPanel deployment configuration.",
        fr: "Développement complet — architecture, conception de base de données, logique backend, frontend Vue 3, contrôle d'accès basé sur les rôles et configuration du déploiement cPanel.",
      },
      approach: {
        en: "Laravel 11 with Inertia.js and Vue 3 for a modern SPA-like experience without a separate API. Each voting session snapshots the dish folder at the time of creation (voting_session_dishes table). The superadmin can adjust the final selection before the weekly menu is published.",
        fr: "Laravel 11 avec Inertia.js et Vue 3 pour une expérience SPA moderne sans API séparée. Chaque session de vote capture l'état du dossier de plats au moment de sa création (table voting_session_dishes). Le superadmin peut ajuster la sélection finale avant la publication du menu hebdomadaire.",
      },
      challenges: {
        en: "Handling ties at the vote cutoff required a dedicated flag and admin review workflow. Multi-company data isolation was implemented at the query level throughout, not just at the UI. Meal preferences (salt/spicy) are captured per selection and aggregated for kitchen production reports.",
        fr: "La gestion des égalités au seuil de coupure a nécessité un indicateur dédié et un flux de révision admin. L'isolation des données multi-entreprises a été implémentée au niveau des requêtes, pas seulement dans l'interface. Les préférences de repas (sel/épicé) sont capturées par sélection et agrégées pour les rapports de production cuisine.",
      },
      evidence: {
        en: "In active development. Core voting, meal selection, and admin management workflows are implemented. Weekly email recap to the kitchen and some reporting features are in progress.",
        fr: "En développement actif. Les flux de vote, de sélection de repas et de gestion admin sont implémentés. Le récapitulatif email hebdomadaire à la cuisine et certaines fonctionnalités de rapports sont en cours.",
      },
    },
  },
  {
    id: "extra-laravel",
    title: {
      en: "Extra App — Event Workforce & Payments",
      fr: "Extra App — Gestion des effectifs et paiements événementiels",
    },
    description: {
      en: "A Laravel internal application for managing freelance event workers ('extras'), calculating per-event primes, tracking transporter quotas and payments, and generating PDF payment reports — replacing a manual spreadsheet process.",
      fr: "Une application Laravel interne pour gérer les travailleurs événementiels freelances ('extras'), calculer les primes par événement, suivre les quotas et paiements transporteurs, et générer des rapports PDF de paiement — remplaçant un processus manuel par tableur.",
    },
    category: { en: "Internal Business Application", fr: "Application métier interne" },
    type: "internal",
    status: "internal-tool",
    tech: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "PDF generation"],
    featured: true,
    order: 2,
    caseStudy: {
      context: {
        en: "Be Magic Events employs freelance 'extra' workers for its events. Each event has different participants, activities, and transporters. The business needed a structured system to track who worked which events, calculate what each person is owed, manage transporter invoices, and generate payment documents.",
        fr: "Be Magic Events emploie des travailleurs freelances 'extras' pour ses événements. Chaque événement a des participants, des activités et des transporteurs différents. L'entreprise avait besoin d'un système structuré pour suivre qui a travaillé quels événements, calculer ce que chaque personne doit recevoir, gérer les factures transporteurs et générer des documents de paiement.",
      },
      problem: {
        en: "The previous process was manual: spreadsheets and paper documents for tracking primes, transporter quotas, and payment status. Errors and missing records were frequent. Generating monthly payment reports required significant manual effort.",
        fr: "Le processus précédent était manuel : tableurs et documents papier pour suivre les primes, quotas transporteurs et statuts de paiement. Les erreurs et les enregistrements manquants étaient fréquents. La génération des rapports de paiement mensuels nécessitait un effort manuel important.",
      },
      role: {
        en: "Full development — Laravel application architecture, database design (events, employees, activities, transporters, payments, payment archives), role-based access (superadmin/admin), batch payment processing, and PDF report generation.",
        fr: "Développement complet — architecture de l'application Laravel, conception de la base de données (événements, employés, activités, transporteurs, paiements, archives de paiement), accès basé sur les rôles (superadmin/admin), traitement par lot des paiements et génération de rapports PDF.",
      },
      approach: {
        en: "Laravel with Blade templates. The data model connects events to employees (with per-event prime amounts) and transporters (with quotas). The superadmin can run batch payment processing and generate per-employee and per-transporter reports. Payment records are archived after settlement.",
        fr: "Laravel avec templates Blade. Le modèle de données connecte les événements aux employés (avec les montants de prime par événement) et aux transporteurs (avec les quotas). Le superadmin peut exécuter des traitements de paiement par lot et générer des rapports par employé et par transporteur. Les enregistrements de paiement sont archivés après règlement.",
      },
      challenges: {
        en: "Separating active payments from archived records while maintaining full historical auditability. The batch pay-all workflow needed to be transactional — if any payment fails, none should be committed. Transporter invoices required their own tracking separate from employee primes.",
        fr: "Séparer les paiements actifs des enregistrements archivés tout en maintenant une auditabilité historique complète. Le flux de paiement global devait être transactionnel — si un paiement échoue, aucun ne doit être validé. Les factures transporteurs nécessitaient leur propre suivi séparé des primes employés.",
      },
      evidence: {
        en: "Internal tool deployed for Be Magic Events operations. Source code available in the local workspace.",
        fr: "Outil interne déployé pour les opérations de Be Magic Events. Le code source est disponible dans l'espace de travail local.",
      },
    },
  },
  {
    id: "stockapp",
    title: {
      en: "StockApp — Inventory & Operations Management",
      fr: "StockApp — Gestion des stocks et opérations",
    },
    description: {
      en: "A Laravel internal application for stock and inventory management. Covers suppliers, articles, departments, issue and return vouchers, purchase invoices, storage locations, and monthly activity tracking — with role-based access (admin / magasinier) and a full audit log.",
      fr: "Une application Laravel interne pour la gestion des stocks et des opérations. Couvre les fournisseurs, articles, départements, bons de sortie et retour, factures d'achat, emplacements de stockage et suivi mensuel des activités — avec accès basé sur les rôles (admin / magasinier) et un journal d'audit complet.",
    },
    category: { en: "Internal Business Application", fr: "Application métier interne" },
    type: "internal",
    status: "internal-tool",
    tech: ["Laravel", "PHP", "SQLite", "Blade", "JavaScript", "Tom Select", "PDF generation"],
    featured: true,
    order: 3,
    caseStudy: {
      context: {
        en: "Be Magic Events required a structured way to manage physical inventory — materials, equipment, and supplies used for events. Stock needed to be tracked across multiple storage locations, with a clear record of what was issued, what was returned, and what was purchased.",
        fr: "Be Magic Events avait besoin d'un moyen structuré pour gérer l'inventaire physique — matériaux, équipements et fournitures utilisés pour les événements. Le stock devait être suivi dans plusieurs emplacements de stockage, avec un enregistrement clair de ce qui a été sorti, retourné et acheté.",
      },
      problem: {
        en: "Without a dedicated system, stock movements were tracked manually. Knowing current stock levels, who issued what, and reconciling purchases against usage was error-prone. The system also needed to handle two user roles: an admin with full access and a magasinier (storekeeper) with limited rights.",
        fr: "Sans système dédié, les mouvements de stock étaient suivis manuellement. Connaître les niveaux de stock actuels, qui a sorti quoi, et réconcilier les achats avec l'utilisation était source d'erreurs. Le système devait également gérer deux rôles : un admin avec accès complet et un magasinier avec droits limités.",
      },
      role: {
        en: "Full development — Laravel application with SQLite database, role-based access control, issue/return voucher system with PDF download, purchase invoice tracking, multi-location storage, activity management, and employee lost-items reporting.",
        fr: "Développement complet — application Laravel avec base de données SQLite, contrôle d'accès basé sur les rôles, système de bons de sortie/retour avec téléchargement PDF, suivi des factures d'achat, stockage multi-emplacements, gestion des activités et rapport des articles perdus par employé.",
      },
      approach: {
        en: "Laravel with SQLite for a self-contained deployment requiring no separate database server. Tom Select provides enhanced dropdowns for article and supplier search. Vouchers are modelled as documents with line items, mirroring real paper workflows. An activity log records all admin actions for auditability.",
        fr: "Laravel avec SQLite pour un déploiement autonome ne nécessitant pas de serveur de base de données séparé. Tom Select fournit des listes déroulantes améliorées pour la recherche d'articles et de fournisseurs. Les bons sont modélisés comme des documents avec des lignes, reproduisant les flux de travail papier réels. Un journal d'activité enregistre toutes les actions admin pour l'auditabilité.",
      },
      challenges: {
        en: "Designing voucher line-item creation to work smoothly as a single-page form while keeping the data model normalized. Stock minimum thresholds needed to trigger low-stock visibility on the dashboard without complex background jobs. The deletion password policy prevented accidental removal of operational records.",
        fr: "Concevoir la création de lignes de bons pour fonctionner de manière fluide comme un formulaire d'une seule page tout en maintenant le modèle de données normalisé. Les seuils minimaux de stock devaient déclencher la visibilité de stock bas sur le tableau de bord sans tâches d'arrière-plan complexes. La politique de mot de passe de suppression empêchait la suppression accidentelle d'enregistrements opérationnels.",
      },
      evidence: {
        en: "Internal tool built for Be Magic Events stock operations. Source code available in the local workspace.",
        fr: "Outil interne construit pour les opérations de stock de Be Magic Events. Le code source est disponible dans l'espace de travail local.",
      },
    },
  },
  {
    id: "bemagic-pointage",
    title: {
      en: "Clock-In System — Employee Attendance",
      fr: "Système de Pointage — Présence des employés",
    },
    description: {
      en: "A React + Supabase web application for employee attendance tracking. Employees clock in via QR code scan with GPS capture. Admins get a real-time dashboard, configurable schedules, offsite event management, and monthly PDF/CSV reports.",
      fr: "Une application web React + Supabase pour le suivi de présence des employés. Les employés pointent via scan de QR code avec capture GPS. Les admins disposent d'un tableau de bord en temps réel, de plannings configurables, de gestion d'événements hors-site et de rapports PDF/CSV mensuels.",
    },
    category: { en: "Internal Web Application", fr: "Application web interne" },
    type: "internal",
    status: "internal-tool",
    tech: ["React 18", "Vite", "Supabase", "PostgreSQL", "Zustand", "jsPDF", "QR Code"],
    featured: true,
    order: 4,
    caseStudy: {
      context: {
        en: "Be Magic Events needed a reliable way to track attendance for three departments (Bureau, Dépôt, Atelier Menuisier). Employees work at the office or at offsite events, and the management team needed daily visibility and monthly reporting.",
        fr: "Be Magic Events avait besoin d'un moyen fiable de suivre la présence dans trois départements (Bureau, Dépôt, Atelier Menuisier). Les employés travaillent au bureau ou lors d'événements hors-site, et l'équipe de direction avait besoin d'une visibilité quotidienne et de rapports mensuels.",
      },
      problem: {
        en: "A phone-based OTP system was rejected due to SMS costs. The solution needed to work on any device, require no app installation, and handle the difference between regular office days and offsite event assignments.",
        fr: "Un système OTP par téléphone a été rejeté en raison des coûts SMS. La solution devait fonctionner sur tout appareil, ne nécessiter aucune installation d'application et gérer la différence entre les jours de bureau habituels et les assignations hors-site.",
      },
      role: {
        en: "Full development — Supabase schema with custom pgcrypto authentication, React frontend, QR code generation per department, admin dashboard, schedule configuration, offsite event management, and CSV/PDF report generation.",
        fr: "Développement complet — schéma Supabase avec authentification pgcrypto personnalisée, frontend React, génération de QR codes par département, tableau de bord admin, configuration des plannings, gestion des événements hors-site et génération de rapports CSV/PDF.",
      },
      approach: {
        en: "Phone number + password authentication using pgcrypto without OTP SMS costs. Three QR codes (one per department) are generated and printed. Scanning a QR code on any device opens the check-in page pre-filled with the department. GPS coordinates are captured at check-in.",
        fr: "Authentification par numéro de téléphone + mot de passe avec pgcrypto sans frais SMS OTP. Trois QR codes (un par département) sont générés et imprimés. Scanner un QR code sur n'importe quel appareil ouvre la page de pointage pré-remplie avec le département. Les coordonnées GPS sont capturées au pointage.",
      },
      challenges: {
        en: "Designing a check-in flow that works on mobile browsers without app installation while still capturing GPS accurately. The offsite event system required a separate workflow so that employees assigned to events don't count as absent during those periods.",
        fr: "Concevoir un flux de pointage fonctionnant sur les navigateurs mobiles sans installation d'application tout en capturant le GPS avec précision. Le système d'événements hors-site nécessitait un flux séparé pour que les employés assignés aux événements ne comptent pas comme absents pendant ces périodes.",
      },
      evidence: {
        en: "Deployed on a cPanel subdomain and connected to a Supabase project. Used daily by Be Magic Events employees. Three admin email recipients receive absence/tardiness notifications.",
        fr: "Déployé sur un sous-domaine cPanel et connecté à un projet Supabase. Utilisé quotidiennement par les employés de Be Magic Events. Trois destinataires email admin reçoivent les notifications d'absences/retards.",
      },
    },
  },
  {
    id: "be-magic-website",
    title: {
      en: "Be Magic Events — Website Development & Maintenance",
      fr: "Be Magic Events — Développement & maintenance du site web",
    },
    description: {
      en: "Ongoing professional web development and maintenance of the Be Magic Events team building website. Work includes WordPress/Elementor customization, activity pages, front-end behavior, technical SEO, plugin debugging, performance and caching issues, and hosting-related troubleshooting.",
      fr: "Développement web professionnel et maintenance continue du site web de team building Be Magic Events. Les travaux comprennent la personnalisation WordPress/Elementor, les pages d'activités, les comportements front-end, le SEO technique, le débogage de plugins, les problèmes de performance et de cache, et le dépannage lié à l'hébergement.",
    },
    category: { en: "Website Development & Maintenance", fr: "Développement & maintenance web" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor", "PHP", "JavaScript", "CSS", "cPanel", "SEO"],
    url: "https://bemagicteambuilding.tn/",
    featured: true,
    order: 5,
    caseStudy: {
      context: {
        en: "Be Magic Events is a team building company operating in Tunisia. The website is a key business asset used to showcase activities and generate client inquiries. As IT Responsable, I handle ongoing development and maintenance alongside other technical responsibilities.",
        fr: "Be Magic Events est une entreprise de team building opérant en Tunisie. Le site web est un actif commercial clé utilisé pour présenter les activités et générer des demandes clients. En tant que Responsable IT, je gère le développement continu et la maintenance parallèlement à d'autres responsabilités techniques.",
      },
      problem: {
        en: "A live business website requires continuous maintenance: content updates, performance monitoring, plugin compatibility, caching configuration, SEO health, and rapid response to technical issues that affect user experience or search visibility.",
        fr: "Un site web d'entreprise en production nécessite une maintenance continue : mises à jour de contenu, surveillance des performances, compatibilité des plugins, configuration du cache, santé SEO et réponse rapide aux problèmes techniques affectant l'expérience utilisateur ou la visibilité en recherche.",
      },
      role: {
        en: "I am responsible for the website's technical maintenance: customizing Elementor templates, developing custom PHP snippets and JavaScript behaviors, troubleshooting plugin conflicts, managing hosting configuration on cPanel, and diagnosing performance and caching issues.",
        fr: "Je suis responsable de la maintenance technique du site : personnalisation des templates Elementor, développement de snippets PHP personnalisés et comportements JavaScript, dépannage des conflits de plugins, gestion de la configuration d'hébergement sur cPanel, et diagnostic des problèmes de performance et de cache.",
      },
      approach: {
        en: "Working within WordPress and Elementor to customize activity pages, navigation behavior, and mobile layouts. Using browser developer tools to diagnose CSS specificity conflicts, JavaScript errors, and caching-related display inconsistencies. Coordinating with the hosting environment for Apache configuration and domain management.",
        fr: "Travail au sein de WordPress et Elementor pour personnaliser les pages d'activités, le comportement de navigation et les mises en page mobiles. Utilisation des outils de développement du navigateur pour diagnostiquer les conflits de spécificité CSS, les erreurs JavaScript et les incohérences d'affichage liées au cache. Coordination avec l'environnement d'hébergement pour la configuration Apache et la gestion des domaines.",
      },
      challenges: {
        en: "Plugin updates frequently break customizations or cause visual regressions. LiteSpeed caching can serve stale content that makes recent fixes appear not to have taken effect. Diagnosing whether an issue is a code problem or a cached response requires systematic cache invalidation and testing.",
        fr: "Les mises à jour de plugins cassent fréquemment les personnalisations ou causent des régressions visuelles. Le cache LiteSpeed peut servir du contenu obsolète qui fait paraître les correctifs récents sans effet. Diagnostiquer si un problème est lié au code ou à une réponse mise en cache nécessite une invalidation systématique du cache et des tests.",
      },
      evidence: {
        en: "Professional work — live website maintained as part of my role as IT Responsable at Be Magic Events.",
        fr: "Travail professionnel — site web en ligne maintenu dans le cadre de mon rôle de Responsable IT chez Be Magic Events.",
      },
    },
  },
  {
    id: "apple-butter",
    title: {
      en: "Apple Butter Cafe KSA — Theme & Bilingual Customization",
      fr: "Apple Butter Cafe KSA — Personnalisation thème & bilingue",
    },
    description: {
      en: "WordPress theme customization for a Saudi café with Arabic RTL as the primary language. Implemented an instant Arabic/English language switch that updates text direction, fonts, and layout without a page reload. Diagnosed and resolved LiteSpeed caching conflicts with Slider Revolution assets.",
      fr: "Personnalisation de thème WordPress pour un café saoudien avec l'arabe RTL comme langue principale. Implémentation d'un interrupteur de langue arabe/anglais instantané mettant à jour la direction du texte, les polices et la mise en page sans rechargement de page. Diagnostic et résolution des conflits de cache LiteSpeed avec les assets Slider Revolution.",
    },
    category: { en: "WordPress Theme Customization", fr: "Personnalisation de thème WordPress" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "PHP", "JavaScript", "CSS", "RTL", "LiteSpeed Cache", "Slider Revolution"],
    url: "https://www.applebuttercafeksa.com/",
    featured: true,
    order: 6,
    caseStudy: {
      context: {
        en: "A Saudi café needed a website that presents naturally in Arabic RTL with a seamless switch to English for international visitors. The site uses a custom WordPress theme and relies on LiteSpeed caching and Slider Revolution for the hero section.",
        fr: "Un café saoudien avait besoin d'un site présentant naturellement en arabe RTL avec une transition transparente vers l'anglais pour les visiteurs internationaux. Le site utilise un thème WordPress personnalisé et repose sur le cache LiteSpeed et Slider Revolution pour la section héro.",
      },
      problem: {
        en: "The language switch needed to change not only visible text content but also the document direction (RTL/LTR), font choices, and layout-dependent elements — instantly, without a full page reload. Additionally, Slider Revolution assets and CSS were loading inconsistently when LiteSpeed cache was active.",
        fr: "L'interrupteur de langue devait changer non seulement le contenu textuel visible mais aussi la direction du document (RTL/LTR), les choix de polices et les éléments dépendants de la mise en page — instantanément, sans rechargement complet de la page. De plus, les assets et CSS de Slider Revolution se chargeaient de manière incohérente avec le cache LiteSpeed actif.",
      },
      role: {
        en: "JavaScript and CSS implementation of the bilingual switch, RTL/LTR layout logic, and diagnosis of the caching/Slider Revolution conflict.",
        fr: "Implémentation JavaScript et CSS de l'interrupteur bilingue, logique de mise en page RTL/LTR et diagnostic du conflit cache/Slider Revolution.",
      },
      approach: {
        en: "The language switch uses JavaScript to toggle a class on the document root, update the lang and dir attributes, and swap text content via a centralized data structure. LiteSpeed cache was configured to exclude specific URL parameters to prevent stale slider assets.",
        fr: "L'interrupteur de langue utilise JavaScript pour basculer une classe sur la racine du document, mettre à jour les attributs lang et dir, et échanger le contenu textuel via une structure de données centralisée. Le cache LiteSpeed a été configuré pour exclure des paramètres d'URL spécifiques afin d'éviter les assets du slider obsolètes.",
      },
      challenges: {
        en: "RTL and LTR layouts differ in more than text direction: margins, padding, icon placement, and flexbox direction all need to be mirrored. The LiteSpeed/Slider Revolution issue required understanding how the cache layer interacts with dynamically loaded assets.",
        fr: "Les mises en page RTL et LTR diffèrent davantage que la direction du texte : les marges, le rembourrage, le placement des icônes et la direction flexbox doivent tous être inversés. Le problème LiteSpeed/Slider Revolution nécessitait de comprendre comment la couche de cache interagit avec les assets chargés dynamiquement.",
      },
      evidence: {
        en: "Professional client work. Live website accessible at the URL above.",
        fr: "Travail client professionnel. Site web en ligne accessible à l'URL ci-dessus.",
      },
    },
  },
  {
    id: "humanpower",
    title: {
      en: "Humanpower Group — Domain Migration & Website",
      fr: "Humanpower Group — Migration de domaine & site web",
    },
    description: {
      en: "Professional web project involving the migration of a WordPress/Elementor website from a staging subdomain to the primary domain, along with website structure and service presentation for a multi-service consultancy (Advisory, Assessment, Academy, DigiTech).",
      fr: "Projet web professionnel impliquant la migration d'un site WordPress/Elementor d'un sous-domaine de staging vers le domaine principal, avec la structure du site et la présentation des services pour un cabinet de conseil multi-services (Advisory, Assessment, Academy, DigiTech).",
    },
    category: { en: "WordPress & Domain Migration", fr: "WordPress & Migration de domaine" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor", "cPanel", "DNS", "Apache"],
    url: "https://humanpower-group.com/",
    featured: true,
    order: 7,
    caseStudy: {
      context: {
        en: "Humanpower Group is a multi-service consultancy that needed to transition their website from a development environment (subdomain) to their primary production domain without downtime or content loss.",
        fr: "Humanpower Group est un cabinet de conseil multi-services qui avait besoin de faire passer son site d'un environnement de développement (sous-domaine) vers son domaine principal de production sans interruption ni perte de contenu.",
      },
      problem: {
        en: "Domain migrations with WordPress require careful handling of serialized database references, absolute URLs, and DNS propagation timing. Elementor stores layout data that contains hardcoded URLs requiring search-and-replace operations at the database level.",
        fr: "Les migrations de domaine WordPress nécessitent une gestion soigneuse des références de base de données sérialisées, des URL absolues et du timing de propagation DNS. Elementor stocke des données de mise en page contenant des URL codées en dur nécessitant des opérations de recherche et remplacement au niveau de la base de données.",
      },
      role: {
        en: "Domain migration coordination, WordPress URL reconfiguration, DNS and cPanel configuration, and website structure verification after migration.",
        fr: "Coordination de la migration de domaine, reconfiguration des URL WordPress, configuration DNS et cPanel, et vérification de la structure du site après migration.",
      },
      approach: {
        en: "Used Search & Replace DB tooling to update serialized URLs in the WordPress database. Verified DNS propagation and configured the cPanel hosting environment for the new primary domain. Confirmed all internal links, media references, and Elementor templates resolved correctly after migration.",
        fr: "Utilisation d'outils Search & Replace DB pour mettre à jour les URL sérialisées dans la base de données WordPress. Vérification de la propagation DNS et configuration de l'hébergement cPanel pour le nouveau domaine principal. Confirmation que tous les liens internes, références médias et templates Elementor se résolvent correctement après migration.",
      },
      challenges: {
        en: "Elementor's serialized data format makes simple text-based find-and-replace unreliable. DNS propagation windows create a period where different users see different versions of the site depending on their resolver cache.",
        fr: "Le format de données sérialisées d'Elementor rend le simple remplacement de texte peu fiable. Les fenêtres de propagation DNS créent une période où différents utilisateurs voient différentes versions du site selon leur cache de résolveur.",
      },
      evidence: {
        en: "Professional client work. Live website accessible at the URL above.",
        fr: "Travail client professionnel. Site web en ligne accessible à l'URL ci-dessus.",
      },
    },
  },
  {
    id: "it-systems",
    title: {
      en: "Internal IT Systems & Infrastructure",
      fr: "Systèmes IT internes & Infrastructure",
    },
    description: {
      en: "Design, configuration, and maintenance of the internal IT environment at Be Magic Events: Microsoft 365, SharePoint, Entra ID, Power Platform, OpenVPN, Cerberus FTP, WAMP, DNS, email, and cPanel hosting — connecting development work with the technical infrastructure that supports it.",
      fr: "Conception, configuration et maintenance de l'environnement IT interne chez Be Magic Events : Microsoft 365, SharePoint, Entra ID, Power Platform, OpenVPN, Cerberus FTP, WAMP, DNS, e-mail et hébergement cPanel — connectant le travail de développement avec l'infrastructure technique qui le supporte.",
    },
    category: { en: "IT Infrastructure & Systems Administration", fr: "Infrastructure IT & Administration systèmes" },
    type: "internal",
    status: "professional",
    tech: ["Microsoft 365", "SharePoint", "Entra ID", "Power Apps", "Power Automate", "OpenVPN", "Cerberus FTP", "WAMP", "Apache", "cPanel", "DNS"],
    featured: true,
    order: 7,
    caseStudy: {
      context: {
        en: "As IT Responsable at Be Magic Events, I manage the technical environment that the business depends on — both the infrastructure that runs internal applications and the cloud services that connect employees and data.",
        fr: "En tant que Responsable IT chez Be Magic Events, je gère l'environnement technique dont dépend l'entreprise — à la fois l'infrastructure qui exécute les applications internes et les services cloud qui connectent les employés et les données.",
      },
      problem: {
        en: "A small business with multiple technical systems — cloud, local, and web-hosted — needs someone who can span development, administration, and troubleshooting. The challenge is maintaining reliable connectivity between these systems while supporting day-to-day operations.",
        fr: "Une petite entreprise avec plusieurs systèmes techniques — cloud, local et hébergé web — a besoin de quelqu'un capable de couvrir le développement, l'administration et le dépannage. Le défi est de maintenir une connectivité fiable entre ces systèmes tout en supportant les opérations quotidiennes.",
      },
      role: {
        en: "I configured and maintain the Microsoft 365 tenant (users, licenses, email, SharePoint), manage Entra ID for identity and access, run Power Apps/Automate workflows for business processes, maintain the WAMP local server, configure OpenVPN for remote access, manage Cerberus FTP for file distribution, and handle DNS and cPanel hosting for all company web properties.",
        fr: "Je configure et maintiens le tenant Microsoft 365 (utilisateurs, licences, e-mail, SharePoint), gère Entra ID pour l'identité et l'accès, exécute des flux Power Apps/Automate pour les processus métier, maintiens le serveur local WAMP, configure OpenVPN pour l'accès distant, gère Cerberus FTP pour la distribution de fichiers, et gère le DNS et l'hébergement cPanel pour toutes les propriétés web de l'entreprise.",
      },
      approach: {
        en: "Treating the IT environment as a system rather than a collection of separate tools. Internal PHP applications (like the Extra app and attendance system) are designed to work within the constraints of local hosting and connect where needed to cloud services. DNS and email configuration are maintained to support business operations without external dependencies where possible.",
        fr: "Traiter l'environnement IT comme un système plutôt qu'une collection d'outils séparés. Les applications PHP internes (comme l'Extra app et le système de présence) sont conçues pour fonctionner dans les contraintes de l'hébergement local et se connecter aux services cloud si nécessaire. La configuration DNS et e-mail est maintenue pour soutenir les opérations métier sans dépendances externes si possible.",
      },
      challenges: {
        en: "Email configuration and deliverability issues are a recurring challenge — SPF, DKIM, and DMARC records interact with business email reputation in ways that require careful diagnosis. Power Platform workflows have licensing and connector limitations that require workarounds for some use cases.",
        fr: "La configuration des e-mails et les problèmes de délivrabilité sont un défi récurrent — les enregistrements SPF, DKIM et DMARC interagissent avec la réputation des e-mails d'entreprise d'une manière nécessitant un diagnostic soigneux. Les flux Power Platform ont des limitations de licences et de connecteurs qui nécessitent des solutions de contournement pour certains cas d'usage.",
      },
      evidence: {
        en: "Ongoing professional responsibility as IT Responsable at Be Magic Events. These are operational systems in daily use.",
        fr: "Responsabilité professionnelle continue en tant que Responsable IT chez Be Magic Events. Ce sont des systèmes opérationnels en usage quotidien.",
      },
    },
  },

  // ── ARCHIVE ──────────────────────────────────────────────
  {
    id: "mahazshop",
    title: { en: "Mahazshop", fr: "Mahazshop" },
    description: {
      en: "WordPress/WooCommerce e-commerce site. Theme transition and environment maintenance.",
      fr: "Site e-commerce WordPress/WooCommerce. Transition de thème et maintenance d'environnement.",
    },
    category: { en: "E-Commerce", fr: "E-Commerce" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    featured: false,
  },
  {
    id: "lartiste",
    title: { en: "L'Artiste Traiteur", fr: "L'Artiste Traiteur" },
    description: {
      en: "Website for a French-language catering company. Custom design, menu UX, and online presence.",
      fr: "Site web pour un traiteur. Design personnalisé, UX du menu et présence en ligne.",
    },
    category: { en: "Website", fr: "Site web" },
    type: "client",
    status: "professional",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: "les-jardins",
    title: { en: "Les Jardins du Golf", fr: "Les Jardins du Golf" },
    description: {
      en: "Event venue website. Presentation and relevant website work.",
      fr: "Site web pour un lieu événementiel. Présentation et travaux web associés.",
    },
    category: { en: "Website", fr: "Site web" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor"],
    featured: false,
  },
  {
    id: "mes-demarches",
    title: { en: "Mes Démarches Juridiques", fr: "Mes Démarches Juridiques" },
    description: {
      en: "Elementor popup, mobile template, and reviews carousel customization for a French legal advisory website.",
      fr: "Personnalisation d'une popup Elementor, d'un template mobile et d'un carrousel d'avis pour un site de conseil juridique français.",
    },
    category: { en: "WordPress Customization", fr: "Personnalisation WordPress" },
    type: "client",
    status: "professional",
    tech: ["WordPress", "Elementor", "CSS", "JavaScript"],
    featured: false,
  },
  {
    id: "image-optimizer",
    title: { en: "Image Optimizer Tool", fr: "Outil d'optimisation d'images" },
    description: {
      en: "A local tool for compressing and converting images (including WebP) to maximize quality at minimum file size for product images.",
      fr: "Un outil local pour compresser et convertir des images (dont WebP) afin de maximiser la qualité au minimum de poids pour les images produits.",
    },
    category: { en: "Utility Tool", fr: "Outil utilitaire" },
    type: "personal",
    status: "experiment",
    tech: ["Python", "Pillow"],
    featured: false,
  },
  {
    id: "resume-parser",
    title: { en: "Resume Parser — Ollama OCR", fr: "Parseur de CV — Ollama OCR" },
    description: {
      en: "A Python pipeline using Ollama (local LLM) and Tesseract OCR to extract structured data from PDF résumés at scale and export to Excel.",
      fr: "Un pipeline Python utilisant Ollama (LLM local) et Tesseract OCR pour extraire des données structurées depuis des CV PDF à grande échelle et les exporter en Excel.",
    },
    category: { en: "Automation / AI Tool", fr: "Automatisation / Outil IA" },
    type: "internal",
    status: "experiment",
    tech: ["Python", "Tesseract OCR", "Ollama", "Pandas", "openpyxl"],
    featured: false,
  },
];

export const featuredProjects = projects.filter(p => p.featured && (p.order ?? 99) <= 7).sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
export const archiveProjects  = projects.filter(p => !p.featured || (p.order ?? 99) > 7);
