"use client";

import { motion, useScroll, useSpring } from "framer-motion";

import { navItems } from "@/content/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { t } = useLanguage();
  const active = useActiveSection();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] lg:hidden"
      />

      <nav
        aria-label={t.nav.progressLabel}
        className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 xl:block"
      >
        <div className="relative flex flex-col items-end gap-4">
          <span
            aria-hidden
            className="absolute top-1 right-[3.5px] bottom-1 w-px bg-white/[0.09]"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: progress }}
            className="absolute top-1 right-[3.5px] bottom-1 w-px origin-top bg-[var(--accent)]/60"
          />

          {navItems.map((item) => {
            const isActive = active === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex items-center gap-3"
              >
                <span
                  className={cn(
                    "t-meta whitespace-nowrap opacity-0 transition-all duration-300 group-hover:opacity-100",
                    isActive && "opacity-100 text-white/70",
                  )}
                >
                  {t.nav.items[item.id]}
                </span>
                <span
                  className={cn(
                    "relative z-10 block rounded-full transition-all duration-300",
                    isActive
                      ? "h-2 w-2 bg-[var(--accent)] ring-4 ring-[var(--accent)]/12"
                      : "h-1.5 w-1.5 bg-white/25 group-hover:bg-white/60",
                  )}
                />
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
