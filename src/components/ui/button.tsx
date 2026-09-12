"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  download?: boolean;
  className?: string;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/70";

const variants = {
  primary: "bg-white text-[#06080d] hover:bg-white/90",
  secondary: "border border-white/20 text-white/85 hover:border-white/40 hover:text-white",
} satisfies Record<NonNullable<ButtonProps["variant"]>, string>;

export function Button({
  children,
  href,
  download,
  className,
  variant = "primary",
}: ButtonProps) {
  const motionOn = useMotionEnabled();
  const classes = cn(base, variants[variant], className);
  const hover = motionOn ? { y: -2 } : undefined;
  const tap = motionOn ? { y: 0 } : undefined;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={hover}
        whileTap={tap}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={hover} whileTap={tap} className={classes}>
      {children}
    </motion.button>
  );
}
