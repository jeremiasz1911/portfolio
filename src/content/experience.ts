import {
  Briefcase,
  Building2,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

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
    tech: ["react", "react-native", "firebase", "wordpress", "python"],
  },
  {
    id: "candyweb",
    icon: Smartphone,
    accent: "text-amber-300",
    current: false,
    tech: ["react", "react-native", "wordpress", "typescript", "javascript"],
  },
  {
    id: "softhard",
    icon: Building2,
    accent: "text-sky-300",
    current: false,
    tech: ["python", "mysql", "linux"],
  },
  {
    id: "blacrea",
    icon: Globe,
    accent: "text-pink-300",
    current: false,
    tech: ["wordpress", "prestashop", "php", "javascript", "html5", "css3"],
  },
];
