"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { SectionHeading } from "@/components/ui/section-heading";
import { profilePhoto } from "@/content/profile";
import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { useLanguage } from "@/i18n/language-provider";
import { ease, viewportOnce } from "@/lib/motion";

export function AboutSection() {
  const { t } = useLanguage();
  const motionOn = useMotionEnabled();

  return (
    <section id="about" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[16rem] lg:mx-0 lg:max-w-[18rem]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(94,233,255,0.14),transparent_70%)] blur-2xl"
          />
          <div className="relative aspect-[1086/1448] overflow-hidden rounded-2xl bg-[#06080d]">
            <Image
              src={profilePhoto.src}
              alt={t.about.photoAlt}
              width={profilePhoto.width}
              height={profilePhoto.height}
              sizes="(max-width: 1024px) 70vw, 280px"
              className="h-full w-full object-contain object-bottom"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            badge={t.about.badge}
            title={t.about.title}
            subtitle={t.about.lead}
          />

          <ul className="mt-10 max-w-lg space-y-4">
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
        </div>
      </div>
    </section>
  );
}
