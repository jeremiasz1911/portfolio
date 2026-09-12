"use client";

import { ArrowUpRight, Download } from "lucide-react";

import { SocialLinks } from "@/components/layout/social-links";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile } from "@/content/profile";
import { useLanguage } from "@/i18n/language-provider";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-28 py-16 sm:py-28 lg:py-32">
      <Reveal>
        <SectionHeading
          badge={t.contact.badge}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />
      </Reveal>

      <Reveal delay={0.06} className="mt-10 max-w-xl">
        <Button href={`mailto:${profile.email}`} className="min-h-11 w-full sm:w-auto">
          {t.contact.emailAction}
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Button>

        <p className="mt-3 text-[13px] text-white/40">{profile.email}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <SocialLinks
            size="md"
            labels
            githubLabel="GitHub"
            linkedinLabel="LinkedIn"
          />
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-1.5 text-[12.5px] text-white/40 transition-colors hover:text-white/70"
          >
            <Download className="h-3.5 w-3.5" />
            {t.contact.cvLabel}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
