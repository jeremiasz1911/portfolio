"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { ease } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const motionOn = useMotionEnabled();

  return (
    <motion.div
      initial={motionOn ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: motionOn ? 0.55 : 0, ease, delay: motionOn ? delay : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
