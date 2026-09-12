"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { TechIcon } from "@/components/tech/tech-icon";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLanguage } from "@/i18n/language-provider";
import { ease, spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const scrolledSection = useActiveSection();
  const active = pathname.startsWith("/projects") ? "work" : scrolledSection;
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, "change", (value) => {
    setCondensed(value > 80);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 50);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundColor: condensed ? "rgba(6,8,13,0.82)" : "rgba(6,8,13,0)",
          borderBottomColor: condensed
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.4, ease }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
        style={{ backdropFilter: condensed ? undefined : "none" }}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-[var(--hero-max)] items-center justify-between gap-4 px-[clamp(1.25rem,4vw,3.5rem)] transition-[height] duration-300",
            condensed ? "h-14" : "h-16 sm:h-[4.5rem] lg:h-20",
          )}
        >
          <Link
            href="/#hero"
            className="text-[13px] font-medium tracking-tight text-white/90 transition-opacity hover:opacity-70 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60"
          >
            jeremiasz<span className="text-[var(--accent)]">.dev</span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <li key={item.id}>
                    <a
                      href={`/${item.href}`}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "relative block rounded-full px-3 py-1.5 text-[12.5px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60",
                        isActive ? "text-white" : "text-white/45 hover:text-white/80",
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-pill"
                          transition={spring}
                          className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/10"
                        />
                      ) : null}
                      <span className="relative">{t.nav.items[item.id]}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="hidden h-9 w-9 place-items-center rounded-full text-white/45 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 sm:grid"
            >
              <TechIcon technology="github" size={15} />
            </a>
            <LanguageSwitcher />
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              className="grid h-9 w-9 place-items-center rounded-full text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" aria-hidden />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                setMenuOpen(false);
                menuButtonRef.current?.focus();
              }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              aria-hidden
            />

            <motion.nav
              id={menuId}
              aria-label="Mobile"
              role="dialog"
              aria-modal="true"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.38, ease }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl border-t border-white/10 bg-[#0a0d14] pb-[env(safe-area-inset-bottom)] lg:hidden"
            >
              <div className="flex items-center justify-between px-6 pt-4 pb-2">
                <span className="h-1 w-10 rounded-full bg-white/15" aria-hidden />
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    menuButtonRef.current?.focus();
                  }}
                  aria-label={t.nav.closeMenu}
                  className="grid h-10 w-10 place-items-center rounded-full text-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60"
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <ul className="px-4 pb-5">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.035, duration: 0.3, ease }}
                  >
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={`/${item.href}`}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-12 items-center justify-between rounded-xl px-4 py-3.5 text-[15px] text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 active:bg-white/[0.06]"
                    >
                      {t.nav.items[item.id]}
                      {active === item.id ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      ) : null}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t border-white/[0.07] px-7 py-4">
                <span className="t-meta">{t.nav.languageLabel}</span>
                <LanguageSwitcher id="sheet" />
              </div>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
