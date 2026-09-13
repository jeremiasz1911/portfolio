import type {
  ProjectArchitectureEdge,
  ProjectArchitectureNode,
  ProjectFlow,
  ProjectSystemField,
} from "@/content/architecture";
import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type ProjectId = keyof Dictionary["projects"]["items"];
export type ProjectFilter = keyof Dictionary["projects"]["filters"];
export type ProjectCategory = Exclude<ProjectFilter, "all">;
export type ProjectRole = keyof Dictionary["projects"]["roles"];

export type ProjectShot = {
  src: string;
  frame: "browser" | "phone";
  url?: string;
};

export type ProjectSystem = Partial<Record<ProjectSystemField, string>>;

export type Project = {
  id: ProjectId;
  slug: string;
  categories: [ProjectCategory, ...ProjectCategory[]];
  year: string;
  /** Full stack — case study. Prefer TechId; plain strings only when no brand exists. */
  tech: Array<TechId | string>;
  /** 2–4 badges on the tile. */
  highlights: Array<TechId | string>;
  roles: ProjectRole[];
  shots: ProjectShot[];
  size: "normal" | "wide";
  featured: boolean;
  system?: ProjectSystem;
  architecture?: {
    nodes: ProjectArchitectureNode[];
    edges: ProjectArchitectureEdge[];
  };
  flows?: ProjectFlow[];
  links?: {
    live?: string;
    repo?: string;
    appStore?: string;
    playStore?: string;
  };
  /** Soft brand accent for featured sections (CSS color). */
  accent?: string;
  /** Homepage spotlight sections (ordered). */
  spotlight?: boolean;
  needsInfo?: boolean;
};

/**
 * Catalogue order. Homepage uses `featured`.
 * Adding a project = one object here + matching `projects.items` in pl.ts / en.ts.
 */
export const projects: Project[] = [
  {
    id: "powiat",
    slug: "powiat-decyduje",
    categories: ["mobile", "systems"],
    year: "2024 — 2025",
    tech: [
      "react-native",
      "expo",
      "typescript",
      "firebase",
      "firestore",
      "cloud-functions",
      "google-maps",
      "SMS API",
    ],
    highlights: ["react-native", "firebase", "google-maps"],
    roles: ["mobile", "backend", "api", "uiux", "deployment"],
    shots: [
      // Product-facing app screens (no profile / PII shots)
      { src: "/assets/projects/powiat_9.png", frame: "phone" },
      { src: "/assets/projects/powiat_8.png", frame: "phone" },
      { src: "/assets/projects/powiat_6.png", frame: "phone" },
      {
        src: "/assets/projects/powiat_5.png",
        frame: "browser",
        url: "powiatdecyduje.pl/panel",
      },
    ],
    size: "wide",
    featured: true,
    spotlight: true,
    accent: "rgba(227, 6, 19, 0.22)",
    links: {
      live: "https://powiatdecyduje.pl",
      appStore: "https://apps.apple.com/pl/app/powiat-decyduje/id6787748328",
      playStore:
        "https://play.google.com/store/apps/details?id=com.jeremiasz1911.powiatdecyduje",
    },
    system: {
      client: "Mobile application + admin panel",
      platforms: "iOS + Android + Web admin",
      frontend: "React Native / Expo",
      backend: "Firebase Cloud Functions",
      database: "Firestore",
      auth: "Firebase Authentication (phone / anonymous)",
      storage: "Firebase Storage",
      integrations: "Google Maps API · SMS API",
      deployment: "App Store · Google Play · hosting",
    },
    architecture: {
      nodes: [
        { id: "app", label: "React Native / Expo", tech: "react-native", role: "Mobile client" },
        { id: "auth", label: "Firebase Auth", tech: "firebase-auth", role: "Authentication" },
        { id: "fn", label: "Cloud Functions", tech: "cloud-functions", role: "Backend" },
        { id: "db", label: "Firestore", tech: "firestore", role: "Database" },
        { id: "storage", label: "Storage", tech: "firebase-storage", role: "Files" },
        { id: "sms", label: "SMS API", role: "External" },
        { id: "maps", label: "Google Maps", tech: "google-maps", role: "External" },
        { id: "admin", label: "Admin panel", tech: "react", role: "Web admin" },
      ],
      edges: [
        { from: "app", to: "auth" },
        { from: "auth", to: "fn" },
        { from: "fn", to: "db" },
        { from: "fn", to: "sms" },
        { from: "db", to: "storage" },
        { from: "app", to: "maps" },
        { from: "admin", to: "db" },
      ],
    },
    flows: [
      {
        id: "registration",
        steps: [
          "Phone number",
          "Send SMS",
          "Verification code",
          "Cloud Function",
          "Resident profile",
        ],
      },
      {
        id: "voting",
        steps: [
          "Open project",
          "Cast vote",
          "Auth check",
          "Cloud Function",
          "Firestore update",
        ],
      },
    ],
  },
  {
    id: "perfectTune",
    slug: "perfecttune",
    categories: ["web", "mobile", "systems"],
    year: "2023 —",
    tech: [
      "react",
      "react-native",
      "expo",
      "typescript",
      "firebase",
      "firestore",
      "cloud-functions",
      "firebase-storage",
    ],
    highlights: ["react", "react-native", "firebase"],
    roles: ["frontend", "mobile", "backend", "uiux", "deployment"],
    shots: [
      {
        src: "/assets/projects/perfecttune-dashboard.png",
        frame: "browser",
        url: "perfecttune.pl/panel",
      },
      { src: "/assets/projects/perfect_mob2.jpg", frame: "phone" },
      { src: "/assets/projects/perfect_mob3.jpg", frame: "phone" },
      { src: "/assets/projects/perfect_mob4.jpg", frame: "phone" },
    ],
    size: "normal",
    featured: true,
    spotlight: true,
    accent: "rgba(99, 102, 241, 0.22)",
    system: {
      client: "Mobile app + web panel",
      platforms: "iOS · Android · Web",
      frontend: "React + React Native / Expo",
      backend: "Firebase Cloud Functions",
      database: "Firestore",
      auth: "Firebase Authentication",
      storage: "Firebase Storage",
      integrations: "Notifications · roles",
      deployment: "Stores + web hosting",
    },
    architecture: {
      nodes: [
        { id: "mobile", label: "React Native", tech: "react-native", role: "Mobile" },
        { id: "web", label: "React panel", tech: "react", role: "Web" },
        { id: "auth", label: "Firebase Auth", tech: "firebase-auth" },
        { id: "fn", label: "Cloud Functions", tech: "cloud-functions" },
        { id: "db", label: "Firestore", tech: "firestore" },
        { id: "files", label: "Storage", tech: "firebase-storage" },
      ],
      edges: [
        { from: "mobile", to: "auth" },
        { from: "web", to: "auth" },
        { from: "auth", to: "fn" },
        { from: "fn", to: "db" },
        { from: "fn", to: "files" },
      ],
    },
  },
  {
    id: "gitMachine",
    slug: "git-machine",
    categories: ["web", "systems"],
    year: "2025",
    tech: [
      "react",
      "nextjs",
      "typescript",
      "github",
      "github-actions",
      "Cron",
      "firebase",
    ],
    highlights: ["nextjs", "github", "github-actions"],
    roles: ["frontend", "backend", "api", "automation", "deployment"],
    shots: [
      {
        src: "/assets/projects/git-machine_laptop1.png",
        frame: "browser",
        url: "git-machine.vercel.app",
      },
      {
        src: "/assets/projects/git-machine_laptop2.png",
        frame: "browser",
        url: "git-machine.vercel.app/dashboard",
      },
      {
        src: "/assets/projects/git-machine-dashboard.png",
        frame: "browser",
        url: "git-machine.vercel.app/dashboard",
      },
      { src: "/assets/projects/git-machine_mobile1.png", frame: "phone" },
      { src: "/assets/projects/git-machine_mobile2.png", frame: "phone" },
      { src: "/assets/projects/git-machine_mobile3.png", frame: "phone" },
    ],
    size: "wide",
    featured: true,
    accent: "rgba(99, 102, 241, 0.2)",
    links: { live: "https://git-machine.vercel.app" },
    system: {
      client: "Web dashboard",
      platforms: "Web",
      frontend: "React / Next.js",
      backend: "App logic + scheduled jobs",
      database: "Firebase",
      integrations: "GitHub API · GitHub Actions",
      deployment: "vercel",
    },
    architecture: {
      nodes: [
        { id: "ui", label: "Next.js dashboard", tech: "nextjs", role: "Dashboard" },
        { id: "api", label: "App API", tech: "nodejs" },
        { id: "cron", label: "Cron / Actions", tech: "github-actions", role: "Automation" },
        { id: "gh", label: "GitHub API", tech: "github", role: "External" },
        { id: "db", label: "Firebase", tech: "firebase" },
        { id: "report", label: "Reports / history" },
      ],
      edges: [
        { from: "ui", to: "api" },
        { from: "cron", to: "api" },
        { from: "api", to: "gh" },
        { from: "api", to: "db" },
        { from: "db", to: "report" },
      ],
    },
    flows: [
      {
        id: "analysis",
        steps: [
          "Scheduled trigger",
          "Fetch repositories",
          "Analyse",
          "Store results",
          "Dashboard update",
        ],
      },
    ],
  },
  {
    id: "ilPrimo",
    slug: "il-primo",
    categories: ["systems", "web"],
    year: "2022 — 2023",
    tech: ["react", "typescript", "REST API", "Admin dashboard"],
    highlights: ["react", "typescript", "javascript"],
    roles: ["frontend", "backend", "cms", "uiux"],
    shots: [
      {
        src: "/assets/projects/ilprimo-laptop1.png",
        frame: "browser",
        url: "ilprimo.pl",
      },
      {
        src: "/assets/projects/ilprimo-laptop2.png",
        frame: "browser",
        url: "ilprimo.pl/menu",
      },
      {
        src: "/assets/projects/il-primo-desktop.png",
        frame: "browser",
        url: "ilprimo.pl/panel",
      },
      { src: "/assets/projects/ilprimo_mobile1.png", frame: "phone" },
      { src: "/assets/projects/ilprimo_mobile2.png", frame: "phone" },
      { src: "/assets/projects/il-primo-mobile.png", frame: "phone" },
    ],
    size: "wide",
    featured: true,
    accent: "rgba(212, 175, 55, 0.18)",
    links: { live: "https://ilprimo.pl" },
    system: {
      client: "Admin CMS + public site",
      platforms: "Web · Mobile web",
      frontend: "React",
      backend: "REST API",
      database: "Backend data store",
      deployment: "Web hosting",
    },
    architecture: {
      nodes: [
        { id: "admin", label: "React admin", tech: "react", role: "CMS panel" },
        { id: "api", label: "REST API", role: "API" },
        { id: "db", label: "Data store" },
        { id: "site", label: "Public site", tech: "react" },
      ],
      edges: [
        { from: "admin", to: "api" },
        { from: "api", to: "db" },
        { from: "site", to: "api" },
      ],
    },
  },
  {
    id: "asyncGallery",
    slug: "async-gallery",
    categories: ["plugins", "wordpress"],
    year: "2024",
    tech: [
      "wordpress",
      "php",
      "javascript",
      "facebook",
      "wordpress",
      "Responsive images",
    ],
    highlights: ["wordpress", "javascript", "facebook"],
    roles: ["frontend", "backend", "api", "uiux"],
    shots: [
      {
        src: "/assets/projects/async-gallery-desktop.png",
        frame: "browser",
        url: "async-gallery",
      },
    ],
    size: "normal",
    featured: true,
    system: {
      client: "WordPress plugin",
      platforms: "wordpress",
      frontend: "JS gallery component",
      backend: "PHP plugin + settings API",
      integrations: "facebook",
      deployment: "WordPress plugin ZIP",
    },
    architecture: {
      nodes: [
        { id: "wp", label: "WordPress", tech: "wordpress" },
        { id: "plugin", label: "Async Gallery plugin", tech: "php", role: "Plugin" },
        { id: "fb", label: "Facebook API", tech: "facebook" },
        { id: "cache", label: "Cache / async load" },
        { id: "ui", label: "Gallery UI", tech: "javascript" },
      ],
      edges: [
        { from: "wp", to: "plugin" },
        { from: "plugin", to: "fb" },
        { from: "plugin", to: "cache" },
        { from: "cache", to: "ui" },
      ],
    },
  },
  {
    id: "aqualityConfigurator",
    slug: "aquality-configurator",
    categories: ["web", "systems"],
    year: "2025",
    tech: ["javascript", "wordpress", "Product configurator", "REST API", "UI/UX"],
    highlights: ["javascript"],
    roles: ["frontend", "uiux", "api"],
    shots: [
      {
        src: "/assets/projects/aquality-configurator-desktop.png",
        frame: "browser",
        url: "kabinyaquality.pl/konfigurator",
      },
      { src: "/assets/projects/aquality-configurator-mobile.png", frame: "phone" },
    ],
    size: "wide",
    featured: true,
    spotlight: true,
    accent: "rgba(14, 165, 233, 0.22)",
    links: { live: "https://kabinyaquality.pl" },
    needsInfo: true,
    system: {
      client: "Product configurator",
      platforms: "Web · Mobile web",
      frontend: "JavaScript UI",
      backend: "WordPress / REST",
      deployment: "kabinyaquality.pl",
    },
  },
  {
    id: "aquality",
    slug: "aquality",
    categories: ["web", "wordpress"],
    year: "2025",
    tech: ["wordpress", "javascript", "E-commerce", "UI/UX"],
    highlights: ["wordpress"],
    roles: ["frontend", "uiux", "cms"],
    shots: [
      {
        src: "/assets/projects/aquality_laptop1.png",
        frame: "browser",
        url: "kabinyaquality.pl",
      },
      {
        src: "/assets/projects/aquality_laptop2.png",
        frame: "browser",
        url: "kabinyaquality.pl",
      },
      {
        src: "/assets/projects/aquality_laptop3.png",
        frame: "browser",
        url: "kabinyaquality.pl",
      },
      {
        src: "/assets/projects/aquality-desktop.png",
        frame: "browser",
        url: "kabinyaquality.pl",
      },
    ],
    size: "normal",
    featured: true,
    accent: "rgba(82, 166, 140, 0.22)",
    links: { live: "https://kabinyaquality.pl" },
    needsInfo: true,
    system: {
      client: "Company site + shop",
      platforms: "Web",
      frontend: "WordPress",
      deployment: "kabinyaquality.pl",
    },
  },
  {
    id: "ekspresja",
    slug: "ekspresja",
    categories: ["web", "systems"],
    year: "2025",
    tech: ["nextjs", "react", "typescript", "UI/UX"],
    highlights: ["nextjs", "react", "typescript"],
    roles: ["frontend", "backend", "uiux", "deployment"],
    shots: [
      {
        src: "/assets/projects/ekspresja_laptop1.png",
        frame: "browser",
        url: "ekspresja.net/kalendarz",
      },
      {
        src: "/assets/projects/ekspresja_laptop2.png",
        frame: "browser",
        url: "ekspresja.net/login",
      },
      {
        src: "/assets/projects/ekspresja_laptop3.png",
        frame: "browser",
        url: "ekspresja.net",
      },
      { src: "/assets/projects/ekspresja_mobile1.png", frame: "phone" },
      { src: "/assets/projects/ekspresja_mobile2.png", frame: "phone" },
      { src: "/assets/projects/ekspresja_mobile3.png", frame: "phone" },
    ],
    size: "wide",
    featured: true,
    spotlight: true,
    accent: "rgba(147, 51, 234, 0.22)",
    links: { live: "https://ekspresja.net" },
    system: {
      client: "Public site + parent panel",
      platforms: "Web · Mobile web",
      frontend: "Next.js / React",
      backend: "Auth + parent panel",
      deployment: "ekspresja.net",
    },
  },
  {
    id: "fbFeed",
    slug: "fb-feed-post-page",
    categories: ["plugins", "wordpress"],
    year: "2024",
    tech: ["wordpress", "php", "javascript", "facebook", "Cron", "Scheduling"],
    highlights: ["wordpress", "facebook"],
    roles: ["frontend", "backend", "api", "automation"],
    shots: [
      {
        src: "/assets/projects/fb-feed-desktop.png",
        frame: "browser",
        url: "fb-feed-post-page",
      },
    ],
    size: "normal",
    featured: false,
    system: {
      client: "WordPress plugin",
      platforms: "wordpress",
      frontend: "Native WP posts UI",
      backend: "PHP plugin + cron",
      integrations: "facebook",
      deployment: "WordPress plugin",
    },
    architecture: {
      nodes: [
        { id: "wp", label: "WordPress", tech: "wordpress" },
        { id: "plugin", label: "FB Feed plugin", tech: "php", role: "Plugin" },
        { id: "cron", label: "Cron / schedule", tech: "github-actions" },
        { id: "fb", label: "Facebook API", tech: "facebook" },
        { id: "posts", label: "Native WP posts", tech: "wordpress" },
      ],
      edges: [
        { from: "wp", to: "plugin" },
        { from: "cron", to: "plugin" },
        { from: "plugin", to: "fb" },
        { from: "plugin", to: "posts" },
      ],
    },
    flows: [
      {
        id: "import",
        steps: [
          "Cron trigger",
          "Fetch FB posts",
          "Map to WP posts",
          "Save images",
          "Publish / schedule",
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const spotlightProjects = projects.filter((project) => project.spotlight);
export const moreFeaturedProjects = featuredProjects.filter(
  (project) => !project.spotlight,
);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({
      candidate,
      shared: candidate.categories.filter((category) =>
        project.categories.includes(category),
      ).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

export function getAvailableFilters(list: Project[]): ProjectFilter[] {
  const used = new Set<ProjectCategory>();
  list.forEach((project) => project.categories.forEach((c) => used.add(c)));

  const order: ProjectCategory[] = [
    "web",
    "mobile",
    "wordpress",
    "systems",
    "plugins",
    "other",
  ];

  return ["all", ...order.filter((category) => used.has(category))];
}
