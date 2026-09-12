export type NavItemId =
  | "work"
  | "expertise"
  | "experience"
  | "about"
  | "contact";

export type NavId = NavItemId;

export type NavItem = {
  id: NavItemId;
  /** DOM id of the section this nav item scrolls to. */
  href: string;
};

export const navItems: NavItem[] = [
  { id: "work", href: "#work" },
  { id: "expertise", href: "#expertise" },
  { id: "experience", href: "#experience" },
  { id: "about", href: "#about" },
  { id: "contact", href: "#contact" },
];

/**
 * Maps observed section DOM ids → nav highlight.
 * Engineering sits under Expertise so both light the same pill.
 */
export const trackedSections: { sectionId: string; navId: NavId }[] = [
  { sectionId: "work", navId: "work" },
  { sectionId: "expertise", navId: "expertise" },
  { sectionId: "engineering", navId: "expertise" },
  { sectionId: "experience", navId: "experience" },
  { sectionId: "about", navId: "about" },
  { sectionId: "contact", navId: "contact" },
];
