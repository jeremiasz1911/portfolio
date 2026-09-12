"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/capabilities";
import { useLanguage } from "@/i18n/language-provider";
import { ease, viewportOnce } from "@/lib/motion";

/**
 * LEVEL 1 — what I build. Tech detail lives in Engineering / Project Details.
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

      <ul className="mt-10 max-w-2xl divide-y divide-white/[0.07] border-y border-white/[0.07] sm:mt-12">
        {capabilities.map((item, index) => {
          const copy = t.capabilities.items[item.id];

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: index * 0.04, ease }}
              className="py-5"
            >
              <h3 className="text-[15px] font-medium tracking-tight text-white">
                {copy.title}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-6 text-white/50">
                {copy.body}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
