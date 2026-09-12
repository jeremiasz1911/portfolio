"use client";

import { motion } from "framer-motion";

import { locales, useLanguage } from "@/i18n/language-provider";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ id = "nav" }: { id?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className="relative flex items-center text-[11px] font-medium tracking-wide"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center">
          {index > 0 ? <span className="px-1 text-white/15">/</span> : null}
          <button
            type="button"
            lang={code}
            onClick={() => setLocale(code)}
            aria-pressed={locale === code}
            className={cn(
              "relative rounded-sm px-1 py-1 uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60",
              locale === code ? "text-white" : "text-white/35 hover:text-white/70",
            )}
          >
            {code}
            {locale === code ? (
              <motion.span
                layoutId={`lang-underline-${id}`}
                transition={spring}
                className="absolute -bottom-0.5 left-1 right-1 h-px bg-[var(--accent)]"
              />
            ) : null}
          </button>
        </span>
      ))}
    </div>
  );
}
