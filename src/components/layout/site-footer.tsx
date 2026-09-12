"use client";

import { Mail } from "lucide-react";

import { SocialLinks } from "@/components/layout/social-links";
import { navItems } from "@/content/navigation";
import { profile } from "@/content/profile";
import { useLanguage } from "@/i18n/language-provider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="mt-4 border-t border-white/[0.07] py-12">
      <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-sm text-white">
            {profile.name}
            <span className="text-[var(--accent)]">.dev</span>
          </p>
          <p className="mt-1.5 text-[12.5px] text-white/40">{t.footer.tagline}</p>
        </div>

        <div>
          <p className="t-eyebrow text-white/30">{t.footer.navLabel}</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/${item.href}`}
                  className="text-[13px] text-white/55 transition-colors hover:text-white"
                >
                  {t.nav.items[item.id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="t-eyebrow text-white/30">{t.footer.connectLabel}</p>
          <div className="mt-3 flex items-center gap-2">
            <SocialLinks size="sm" />
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.1] bg-white/[0.03] text-white/70 transition-colors hover:border-white/[0.18] hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-[11px] text-white/30">
        © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
      </p>
    </footer>
  );
}
