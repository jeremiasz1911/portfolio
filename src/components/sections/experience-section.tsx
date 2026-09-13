"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { TechBadge } from "@/components/tech/tech-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });

  const lineScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <section id="experience" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <SectionHeading
        badge={t.experience.badge}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div ref={ref} className="relative mt-10 lg:mt-14">
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[7px] w-px bg-white/[0.07] lg:left-[calc(20%+7px)]"
        />
        <motion.span
          aria-hidden
          style={{ scaleY: lineScale, opacity: lineOpacity }}
          className="absolute top-2 bottom-2 left-[7px] w-px origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/60 to-transparent lg:left-[calc(20%+7px)]"
        />

        <ol className="space-y-12 lg:space-y-16">
          {experience.map((entry, index) => {
            const copy = t.experience.items[entry.id];

            return (
              <motion.li
                key={entry.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-12% 0px -18% 0px" }}
                transition={{ duration: 0.55, delay: index * 0.04, ease }}
                className="relative grid gap-4 pl-9 lg:grid-cols-[20%_1fr] lg:gap-8 lg:pl-0"
              >
                <div className="lg:pr-8 lg:text-right">
                  {entry.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10.5px] text-emerald-300">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      {t.experience.currentLabel}
                    </span>
                  ) : (
                    <p className="t-meta">{copy.period}</p>
                  )}
                </div>

                <span
                  className={cn(
                    "absolute top-1 left-0 z-10 grid h-[15px] w-[15px] place-items-center rounded-full border bg-[#06080d] lg:left-[20%]",
                    entry.current ? "border-[var(--accent)]/60" : "border-white/15",
                  )}
                >
                  <span
                    className={cn(
                      "h-[5px] w-[5px] rounded-full",
                      entry.current ? "bg-[var(--accent)]" : "bg-white/30",
                    )}
                  />
                </span>

                <div className="lg:pl-8">
                  <div className="flex items-center gap-2.5">
                    <entry.icon className={cn("h-4 w-4", entry.accent)} aria-hidden />
                    <h3 className="text-[17px] font-medium text-white">{copy.org}</h3>
                  </div>
                  <p className="mt-1 text-[13px] text-white/50">{copy.role}</p>
                  <p className="mt-3 max-w-lg text-[14px] leading-7 text-white/60">
                    {copy.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {copy.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] text-white/65"
                      >
                        <span
                          aria-hidden
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {entry.tech && entry.tech.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tech.map((tech) => (
                        <TechBadge key={tech} technology={tech} size="sm" />
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
