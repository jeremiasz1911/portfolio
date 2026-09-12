import type { Dictionary } from "@/i18n/locales/pl";
import type { TechId } from "@/content/technologies";

export type CapabilityId = keyof Dictionary["capabilities"]["items"];

export type Capability = {
  id: CapabilityId;
  accent: string;
  /** Brand icons shown on the card. */
  tech: TechId[];
};

/** Core product shapes — tech detail lives in Engineering. */
export const capabilities: Capability[] = [
  {
    id: "web",
    accent: "text-sky-300",
    tech: ["react", "nextjs", "typescript"],
  },
  {
    id: "mobile",
    accent: "text-violet-300",
    tech: ["react-native", "expo", "firebase"],
  },
  {
    id: "backend",
    accent: "text-amber-300",
    tech: ["firebase", "cloud-functions", "nodejs"],
  },
  {
    id: "automation",
    accent: "text-cyan-300",
    tech: ["github-actions", "github", "google-cloud"],
  },
  {
    id: "wordpress",
    accent: "text-indigo-300",
    tech: ["wordpress", "php", "javascript"],
  },
];
