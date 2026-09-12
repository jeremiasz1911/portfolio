"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCtaCardProps = {
  href: string;
  eyebrow?: string;
  title: string;
  body?: string;
  action: string;
  wide?: boolean;
};

/** Fills the trailing cell of the grid so a short last row never looks unfinished. */
export function ProjectCtaCard({
  href,
  eyebrow,
  title,
  body,
  action,
  wide,
}: ProjectCtaCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease }}
      className={cn("min-w-0", wide && "sm:col-span-2")}
    >
      <Link
        href={href}
        className={cn(
          "group flex rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.015]",
          "transition-colors duration-300 hover:border-[var(--accent)]/35 hover:bg-white/[0.04]",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
          /* Mobile strip */
          "min-h-[7.25rem] items-center justify-between gap-4 px-4 py-3.5",
          /* Tablet+ card */
          "sm:h-full sm:min-h-[220px] sm:flex-col sm:items-stretch sm:justify-between sm:gap-6 sm:p-6",
        )}
      >
        <div className="min-w-0 space-y-1 sm:space-y-2">
          {eyebrow ? (
            <p className="t-eyebrow text-[var(--accent)]/70">{eyebrow}</p>
          ) : null}
          <p className="text-[14px] leading-snug font-medium tracking-tight text-balance text-white sm:text-[17px]">
            {title}
          </p>
          {body ? (
            <p className="hidden max-w-sm text-[13px] leading-6 text-white/50 sm:block">
              {body}
            </p>
          ) : null}
        </div>

        <span className="inline-flex shrink-0 items-center gap-2 text-[12px] text-white/70 transition-colors group-hover:text-[var(--accent)] sm:text-[13px]">
          {action}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </span>
      </Link>
    </motion.div>
  );
}
