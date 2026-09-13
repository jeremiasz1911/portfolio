import type { SimpleIcon } from "simple-icons";
import {
  siAndroid,
  siApple,
  siClaude,
  siCss,
  siCursor,
  siDocker,
  siExpo,
  siFacebook,
  siFirebase,
  siGit,
  siGithub,
  siGithubactions,
  siGooglegemini,
  siGooglecloud,
  siGooglemaps,
  siHtml5,
  siJavascript,
  siJest,
  siLinux,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPrestashop,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVitest,
  siWordpress,
} from "simple-icons";

export type TechCategory =
  | "frontend"
  | "mobile"
  | "backend"
  | "data"
  | "cloud"
  | "cms"
  | "tools"
  | "integrations";

export type TechDefinition = {
  id: string;
  name: string;
  category: TechCategory;
  /** Official Simple Icons brand mark when one exists. */
  brand?: SimpleIcon;
  /**
   * Brands that ship as near-black (#000 / #181717) need a light fill on this dark UI.
   * Colourful brands keep their hex.
   */
  invertOnDark?: boolean;
  /** Alias labels that resolve back to this id (project strings, older copy). */
  aliases?: string[];
};

/**
 * Single source of truth for every brand icon in the portfolio.
 * Projects / stack / architecture only store ids — never raw SVG.
 */
export const technologyRegistry = {
  react: {
    id: "react",
    name: "React",
    category: "frontend",
    brand: siReact,
  },
  // Simple Icons has no separate React Native mark — React logo + distinct label.
  "react-native": {
    id: "react-native",
    name: "React Native",
    category: "mobile",
    brand: siReact,
    aliases: ["React Native"],
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    brand: siNextdotjs,
    invertOnDark: true,
    aliases: ["Next.js"],
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    brand: siTypescript,
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    brand: siJavascript,
  },
  html5: {
    id: "html5",
    name: "HTML5",
    category: "frontend",
    brand: siHtml5,
    aliases: ["HTML", "HTML / CSS"],
  },
  css3: {
    id: "css3",
    name: "CSS3",
    category: "frontend",
    brand: siCss,
    aliases: ["CSS"],
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    brand: siTailwindcss,
    aliases: ["Tailwind CSS"],
  },
  expo: {
    id: "expo",
    name: "Expo",
    category: "mobile",
    brand: siExpo,
    invertOnDark: true,
  },
  ios: {
    id: "ios",
    name: "iOS",
    category: "mobile",
    brand: siApple,
    invertOnDark: true,
    aliases: ["Apple", "iOS"],
  },
  android: {
    id: "android",
    name: "Android",
    category: "mobile",
    brand: siAndroid,
  },
  php: {
    id: "php",
    name: "PHP",
    category: "backend",
    brand: siPhp,
  },
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    brand: siNodedotjs,
    aliases: ["Node.js"],
  },
  firebase: {
    id: "firebase",
    name: "Firebase",
    category: "cloud",
    brand: siFirebase,
  },
  "cloud-functions": {
    id: "cloud-functions",
    name: "Cloud Functions",
    category: "cloud",
    brand: siGooglecloud,
    aliases: ["Cloud Functions", "Firebase Cloud Functions"],
  },
  firestore: {
    id: "firestore",
    name: "Firestore",
    category: "data",
    brand: siFirebase,
    aliases: ["Firestore"],
  },
  "firebase-auth": {
    id: "firebase-auth",
    name: "Firebase Auth",
    category: "data",
    brand: siFirebase,
    aliases: ["Firebase Auth", "Firebase Authentication", "Authentication"],
  },
  "firebase-storage": {
    id: "firebase-storage",
    name: "Firebase Storage",
    category: "data",
    brand: siFirebase,
    aliases: ["Firebase Storage", "Storage"],
  },
  "firebase-hosting": {
    id: "firebase-hosting",
    name: "Firebase Hosting",
    category: "cloud",
    brand: siFirebase,
    aliases: ["Firebase Hosting"],
  },
  "google-cloud": {
    id: "google-cloud",
    name: "Google Cloud",
    category: "cloud",
    brand: siGooglecloud,
    aliases: ["Google Cloud", "Cloud"],
  },
  mysql: {
    id: "mysql",
    name: "MySQL",
    category: "data",
    brand: siMysql,
  },
  wordpress: {
    id: "wordpress",
    name: "WordPress",
    category: "cms",
    brand: siWordpress,
    aliases: ["WordPress", "Custom plugins", "WordPress REST API", "Plugin Settings API", "CMS"],
  },
  git: {
    id: "git",
    name: "Git",
    category: "tools",
    brand: siGit,
  },
  github: {
    id: "github",
    name: "GitHub",
    category: "tools",
    brand: siGithub,
    invertOnDark: true,
    aliases: ["GitHub", "GitHub API"],
  },
  "github-actions": {
    id: "github-actions",
    name: "GitHub Actions",
    category: "tools",
    brand: siGithubactions,
    aliases: ["GitHub Actions", "CI/CD", "Automation"],
  },
  docker: {
    id: "docker",
    name: "Docker",
    category: "tools",
    brand: siDocker,
  },
  vercel: {
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    brand: siVercel,
    invertOnDark: true,
  },
  "google-maps": {
    id: "google-maps",
    name: "Google Maps",
    category: "integrations",
    brand: siGooglemaps,
    aliases: ["Google Maps", "Google Maps API", "Maps API"],
  },
  facebook: {
    id: "facebook",
    name: "Facebook API",
    category: "integrations",
    brand: siFacebook,
    aliases: ["Facebook", "Facebook API"],
  },
  python: {
    id: "python",
    name: "Python",
    category: "backend",
    brand: siPython,
    aliases: ["Python"],
  },
  claude: {
    id: "claude",
    name: "Claude",
    category: "tools",
    brand: siClaude,
    aliases: ["Claude", "Anthropic"],
  },
  gemini: {
    id: "gemini",
    name: "Gemini",
    category: "tools",
    brand: siGooglegemini,
    aliases: ["Gemini", "Google Gemini"],
  },
  cursor: {
    id: "cursor",
    name: "Cursor",
    category: "tools",
    brand: siCursor,
    invertOnDark: true,
    aliases: ["Cursor AI", "Cursor"],
  },
  vscode: {
    id: "vscode",
    name: "VS Code",
    category: "tools",
    aliases: ["VS Code", "Visual Studio Code", "Visual Studio", "Visual"],
  },
  linux: {
    id: "linux",
    name: "Linux",
    category: "tools",
    brand: siLinux,
    aliases: ["Linux"],
  },
  windows: {
    id: "windows",
    name: "Windows",
    category: "tools",
    aliases: ["Windows", "Microsoft Windows"],
  },
  jest: {
    id: "jest",
    name: "Jest",
    category: "tools",
    brand: siJest,
    aliases: ["Jest", "unit tests", "testy jednostkowe"],
  },
  vitest: {
    id: "vitest",
    name: "Vitest",
    category: "tools",
    brand: siVitest,
    aliases: ["Vitest"],
  },
  prestashop: {
    id: "prestashop",
    name: "PrestaShop",
    category: "cms",
    brand: siPrestashop,
    aliases: ["PrestaShop", "Presta Shop"],
  },
  firebird: {
    id: "firebird",
    name: "Firebird",
    category: "data",
    aliases: ["Firebird", "Firebird SQL"],
  },
} as const satisfies Record<string, TechDefinition>;

export type TechId = keyof typeof technologyRegistry;

export const techCategoryOrder: TechCategory[] = [
  "frontend",
  "mobile",
  "backend",
  "data",
  "cloud",
  "cms",
  "tools",
  "integrations",
];

const aliasIndex = (() => {
  const map = new Map<string, TechId>();
  (Object.keys(technologyRegistry) as TechId[]).forEach((id) => {
    const entry = technologyRegistry[id] as TechDefinition;
    map.set(normalize(entry.name), id);
    map.set(normalize(id), id);
    entry.aliases?.forEach((alias) => map.set(normalize(alias), id));
  });
  return map;
})();

function normalize(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

export function getTech(id: TechId): TechDefinition {
  return technologyRegistry[id];
}

/** Resolve a free-form label or id to a registry entry when possible. */
export function resolveTech(labelOrId: string): TechDefinition | undefined {
  const byId = technologyRegistry[labelOrId as TechId];
  if (byId) return byId;
  const id = aliasIndex.get(normalize(labelOrId));
  return id ? technologyRegistry[id] : undefined;
}

export function resolveTechId(labelOrId: string): TechId | undefined {
  if (labelOrId in technologyRegistry) return labelOrId as TechId;
  return aliasIndex.get(normalize(labelOrId));
}

export function getTechsByCategory(category: TechCategory | "all") {
  const all = Object.values(technologyRegistry) as TechDefinition[];
  if (category === "all") return all;
  return all.filter((tech) => tech.category === category);
}

export function brandFill(tech: TechDefinition) {
  if (!tech.brand) return "currentColor";
  if (tech.invertOnDark) return "#f4f6fb";
  return `#${tech.brand.hex}`;
}
