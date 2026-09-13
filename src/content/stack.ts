import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type StackGroupId = keyof Dictionary["stack"]["groups"];

export type StackItem = {
  id: TechId;
  priority: "primary" | "secondary";
};

export type StackGroup = {
  id: StackGroupId;
  items: StackItem[];
};

/** Stack explorer groups — ids resolve icons from the technology registry. */
export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    items: [
      { id: "react", priority: "primary" },
      { id: "nextjs", priority: "primary" },
      { id: "typescript", priority: "primary" },
      { id: "javascript", priority: "primary" },
      { id: "tailwind", priority: "secondary" },
      { id: "html5", priority: "secondary" },
      { id: "css3", priority: "secondary" },
    ],
  },
  {
    id: "mobile",
    items: [
      { id: "react-native", priority: "primary" },
      { id: "expo", priority: "primary" },
      { id: "ios", priority: "secondary" },
      { id: "android", priority: "secondary" },
    ],
  },
  {
    id: "backend",
    items: [
      { id: "firebase", priority: "primary" },
      { id: "cloud-functions", priority: "primary" },
      { id: "python", priority: "primary" },
      { id: "nodejs", priority: "secondary" },
      { id: "php", priority: "secondary" },
    ],
  },
  {
    id: "data",
    items: [
      { id: "firestore", priority: "primary" },
      { id: "firebase-auth", priority: "primary" },
      { id: "mysql", priority: "primary" },
      { id: "firebird", priority: "secondary" },
      { id: "firebase-storage", priority: "secondary" },
    ],
  },
  {
    id: "cloud",
    items: [
      { id: "google-cloud", priority: "primary" },
      { id: "firebase-hosting", priority: "secondary" },
      { id: "vercel", priority: "secondary" },
    ],
  },
  {
    id: "cms",
    items: [
      { id: "wordpress", priority: "primary" },
      { id: "prestashop", priority: "primary" },
      { id: "php", priority: "secondary" },
    ],
  },
  {
    id: "tools",
    items: [
      { id: "git", priority: "primary" },
      { id: "github", priority: "primary" },
      { id: "github-actions", priority: "primary" },
      { id: "cursor", priority: "primary" },
      { id: "vscode", priority: "primary" },
      { id: "linux", priority: "primary" },
      { id: "windows", priority: "secondary" },
      { id: "jest", priority: "secondary" },
      { id: "vitest", priority: "secondary" },
      { id: "claude", priority: "secondary" },
      { id: "gemini", priority: "secondary" },
      { id: "docker", priority: "secondary" },
    ],
  },
];
