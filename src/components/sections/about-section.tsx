"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

import { TechBadge } from "@/components/tech/tech-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { useLanguage } from "@/i18n/language-provider";
import { ease, viewportOnce } from "@/lib/motion";

const toolchain = ["git", "vscode", "cursor"] as const;

const aboutPhoto = {
  src: "/assets/images/cyber.avif",
  width: 1738,
  height: 1160,
} as const;

export function AboutSection() {
  const { t } = useLanguage();
  const motionOn = useMotionEnabled();

  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[8%] -z-10 rounded-[2rem] bg-[radial-gradient(circle,rgba(94,233,255,0.16),transparent_70%)] blur-2xl"
          />
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#06080d] shadow-[0_30px_60px_-36px_rgba(0,0,0,0.9)]">
            <Image
              src={aboutPhoto.src}
              alt={t.about.photoAlt}
              width={aboutPhoto.width}
              height={aboutPhoto.height}
              sizes="(max-width: 1024px) 90vw, 420px"
              className="h-full w-full object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b11]/50 via-transparent to-transparent"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            badge={t.about.badge}
            title={t.about.title}
            subtitle={t.about.lead}
          />

          <motion.div
            initial={motionOn ? { opacity: 0, y: 10 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, ease }}
            className="mt-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent)]/10 px-3.5 py-2"
          >
            <GraduationCap className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden />
            <div className="min-w-0">
              <p className="text-[13px] font-medium text-white">{t.about.education}</p>
              <p className="text-[11px] text-white/50">{t.about.educationDetail}</p>
            </div>
          </motion.div>

          <ul className="mt-8 max-w-lg space-y-4">
            {t.about.statements.map((statement, index) => (
              <motion.li
                key={statement}
                initial={motionOn ? { opacity: 0, x: 12 } : false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: index * 0.05, ease }}
                className="flex gap-3 text-[14.5px] leading-7 text-white/60"
              >
                <span
                  aria-hidden
                  className="mt-3 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                />
                {statement}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={motionOn ? { opacity: 0, y: 8 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.4, delay: 0.12, ease }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {toolchain.map((tech) => (
              <TechBadge key={tech} technology={tech} size="sm" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
