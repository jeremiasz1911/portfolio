"use client";

import { motion } from "framer-motion";

import { TechIcon } from "@/components/tech/tech-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/capabilities";
import { useLanguage } from "@/i18n/language-provider";
import { ease, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * LEVEL 1 — what I build / how I help. Tech detail lives in Engineering.
 */
export function CapabilitiesSection() {
  const { t } = useLanguage();

  return (
    <section id="expertise" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <SectionHeading
        badge={t.capabilities.badge}
        title={t.capabilities.title}
        subtitle={t.capabilities.subtitle}
      />

      <ul className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:gap-4">
        {capabilities.map((item, index) => {
          const copy = t.capabilities.items[item.id];
          const Icon = item.icon;

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: index * 0.03, ease }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5"
            >
              <div className="flex items-start gap-3.5">
                <span
                  className={cn(
                    "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.1] bg-white/[0.04]",
                    item.accent,
                  )}
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-medium tracking-tight text-white">
                    {copy.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-6 text-white/50">
                    {copy.body}
                  </p>

                  {item.tech.length > 0 ? (
                    <ul className="mt-3 flex flex-wrap items-center gap-2">
                      {item.tech.map((tech) => (
                        <li
                          key={tech}
                          className="grid h-7 w-7 place-items-center rounded-md border border-white/[0.08] bg-white/[0.03]"
                          title={tech}
                        >
                          <TechIcon technology={tech} size={14} />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
