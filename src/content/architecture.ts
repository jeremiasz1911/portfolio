import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type ArchitecturePatternId = keyof Dictionary["architecture"]["patterns"];

export type ArchitectureItem = {
  label: string;
  /** Optional brand from the central registry. */
  tech?: TechId;
  /** Short role under the label, e.g. "Mobile client". */
  role?: string;
};

export type ArchitectureLayer = {
  id: string;
  items: ArchitectureItem[];
};

export type ArchitecturePattern = {
  id: ArchitecturePatternId;
  layers: ArchitectureLayer[];
  externals?: ArchitectureItem[];
};

/**
 * Four product shapes I actually ship.
 * Layer titles come from i18n (`architecture.layers.*`).
 */
export const architecturePatterns: ArchitecturePattern[] = [
  {
    id: "mobile",
    layers: [
      {
        id: "client",
        items: [
          { label: "React Native", tech: "react-native", role: "Mobile client" },
          { label: "Expo", tech: "expo" },
          { label: "iOS / Android", tech: "ios" },
        ],
      },
      {
        id: "auth",
        items: [{ label: "Firebase Auth", tech: "firebase-auth", role: "Authentication" }],
      },
      {
        id: "api",
        items: [{ label: "Cloud Functions", tech: "cloud-functions", role: "Backend" }],
      },
      {
        id: "data",
        items: [
          { label: "Firestore", tech: "firestore", role: "Database" },
          { label: "Storage", tech: "firebase-storage", role: "Files" },
        ],
      },
      {
        id: "result",
        items: [
          { label: "Google Maps", tech: "google-maps", role: "External" },
          { label: "SMS API", role: "External" },
        ],
      },
    ],
    externals: [
      { label: "Google Maps", tech: "google-maps" },
      { label: "SMS API" },
      { label: "App Store", tech: "ios" },
      { label: "Google Play", tech: "android" },
    ],
  },
  {
    id: "web",
    layers: [
      {
        id: "client",
        items: [
          { label: "React", tech: "react", role: "Web client" },
          { label: "Next.js", tech: "nextjs" },
        ],
      },
      {
        id: "api",
        items: [
          { label: "REST API", role: "API layer" },
          { label: "Cloud Functions", tech: "cloud-functions" },
        ],
      },
      {
        id: "logic",
        items: [{ label: "Auth · Roles · Rules", tech: "firebase-auth", role: "Business logic" }],
      },
      {
        id: "data",
        items: [
          { label: "Firestore", tech: "firestore" },
          { label: "MySQL", tech: "mysql" },
          { label: "Storage", tech: "firebase-storage" },
        ],
      },
    ],
    externals: [
      { label: "GitHub API", tech: "github" },
      { label: "Webhooks" },
    ],
  },
  {
    id: "wordpress",
    layers: [
      {
        id: "client",
        items: [{ label: "WordPress", tech: "wordpress", role: "Site" }],
      },
      {
        id: "plugin",
        items: [
          { label: "Custom plugin", tech: "wordpress", role: "Plugin" },
          { label: "PHP", tech: "php" },
          { label: "JavaScript", tech: "javascript" },
        ],
      },
      {
        id: "api",
        items: [
          { label: "WordPress API", tech: "wordpress" },
          { label: "Facebook API", tech: "facebook" },
        ],
      },
      {
        id: "process",
        items: [{ label: "Cache · Async · Cron", role: "Processing" }],
      },
      {
        id: "result",
        items: [{ label: "Frontend component", tech: "javascript", role: "UI" }],
      },
    ],
    externals: [{ label: "Facebook API", tech: "facebook" }],
  },
  {
    id: "automation",
    layers: [
      {
        id: "client",
        items: [{ label: "Next.js dashboard", tech: "nextjs", role: "Dashboard" }],
      },
      {
        id: "api",
        items: [{ label: "App API", tech: "nodejs", role: "API" }],
      },
      {
        id: "engine",
        items: [{ label: "GitHub Actions", tech: "github-actions", role: "Automation" }],
      },
      {
        id: "service",
        items: [{ label: "GitHub API", tech: "github", role: "External" }],
      },
      {
        id: "result",
        items: [{ label: "Reports · History", tech: "firebase", role: "Data" }],
      },
    ],
    externals: [
      { label: "GitHub Actions", tech: "github-actions" },
      { label: "GitHub API", tech: "github" },
    ],
  },
];

export type ProjectArchitectureNode = {
  id: string;
  label: string;
  tech?: TechId;
  role?: string;
};

export type ProjectArchitectureEdge = {
  from: string;
  to: string;
};

export type ProjectSystemField =
  | "client"
  | "platforms"
  | "frontend"
  | "backend"
  | "database"
  | "auth"
  | "storage"
  | "integrations"
  | "deployment";

export type ProjectFlow = {
  id: string;
  steps: string[];
};
