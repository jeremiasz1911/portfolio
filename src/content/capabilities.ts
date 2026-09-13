import type { LucideIcon } from "lucide-react";
import {
  CloudCog,
  LayoutDashboard,
  Puzzle,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type CapabilityId = keyof Dictionary["capabilities"]["items"];

export type Capability = {
  id: CapabilityId;
  accent: string;
  icon: LucideIcon;
  /** Brand icons shown on the card. */
  tech: TechId[];
};

/** Core delivery areas — tech detail lives in Engineering. */
export const capabilities: Capability[] = [
  {
    id: "web",
    accent: "text-sky-300",
    icon: LayoutDashboard,
    tech: ["react", "nextjs", "typescript"],
  },
  {
    id: "mobile",
    accent: "text-violet-300",
    icon: Smartphone,
    tech: ["react-native", "expo", "firebase"],
  },
  {
    id: "backend",
    accent: "text-amber-300",
    icon: Server,
    tech: ["firebase", "cloud-functions", "python", "nodejs"],
  },
  {
    id: "automation",
    accent: "text-cyan-300",
    icon: CloudCog,
    tech: ["github-actions", "github", "google-cloud"],
  },
  {
    id: "wordpress",
    accent: "text-indigo-300",
    icon: Puzzle,
    tech: ["wordpress", "php", "javascript"],
  },
  {
    id: "security",
    accent: "text-emerald-300",
    icon: ShieldCheck,
    tech: ["firebase-auth", "linux", "python"],
  },
  {
    id: "python",
    accent: "text-yellow-300",
    icon: Terminal,
    tech: ["python", "linux", "mysql", "firebird"],
  },
  {
    id: "ai",
    accent: "text-fuchsia-300",
    icon: Sparkles,
    tech: ["cursor", "vscode", "git", "claude"],
  },
];
