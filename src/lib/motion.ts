import type { Transition, Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;
export const easeInOut = [0.65, 0, 0.35, 1] as const;

export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
};

export const spring: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 34,
  mass: 0.7,
};

export const viewportOnce = { once: true, margin: "-15% 0px -10% 0px" } as const;

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.slow, ease } },
};

export const stagger = (gap = 0.06): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: gap } },
});
