import { Boxes, Briefcase, Smartphone, type LucideIcon } from "lucide-react";

import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type ExperienceId = keyof Dictionary["experience"]["items"];

export type ExperienceEntry = {
  id: ExperienceId;
  icon: LucideIcon;
  accent: string;
  current: boolean;
  /** A few brand icons — not a second technology stack. */
  tech?: TechId[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "freelance",
    icon: Briefcase,
    accent: "text-[var(--accent)]",
    current: true,
    tech: ["react", "react-native", "firebase", "wordpress"],
  },
  {
    id: "candyweb",
    icon: Smartphone,
    accent: "text-amber-300",
    current: false,
    tech: ["react", "react-native", "typescript"],
  },
  {
    id: "earlier",
    icon: Boxes,
    accent: "text-white/40",
    current: false,
    tech: ["react", "typescript", "javascript"],
  },
];
