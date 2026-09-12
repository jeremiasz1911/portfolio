"use client";

import { motion } from "framer-motion";

import { TechIcon } from "@/components/tech/tech-icon";
import type { ArchitecturePattern } from "@/content/architecture";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ArchitectureFlowProps = {
  pattern: ArchitecturePattern;
  className?: string;
};

export function ArchitectureFlow({ pattern, className }: ArchitectureFlowProps) {
  const { t } = useLanguage();

  return (
    <div className={cn("space-y-8", className)}>
      <ol className="flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-0">
        {pattern.layers.map((layer, index) => {
          const label =
            t.architecture.layers[layer.id as keyof typeof t.architecture.layers] ??
            layer.id;
          const isLast = index === pattern.layers.length - 1;

          return (
            <li key={layer.id} className="flex flex-1 flex-col lg:flex-row lg:items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease }}
                className="flex-1 rounded-2xl border border-white/[0.09] bg-white/[0.03] p-4"
              >
                <p className="t-eyebrow text-white/30">{label}</p>
                <ul className="mt-3 space-y-2.5">
                  {layer.items.map((item) => (
                    <li key={`${item.label}-${item.tech ?? ""}`} className="flex items-start gap-2.5">
                      {item.tech ? (
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                          <TechIcon technology={item.tech} size={14} />
                        </span>
                      ) : (
                        <span className="mt-0.5 h-7 w-7 shrink-0" aria-hidden />
                      )}
                      <span className="min-w-0">
                        <span className="block text-[13.5px] leading-5 text-white/85">
                          {item.label}
                        </span>
                        {item.role ? (
                          <span className="mt-0.5 block text-[11px] text-white/35">
                            {item.role}
                          </span>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {!isLast ? (
                <>
                  <div aria-hidden className="flex justify-center py-2 lg:hidden">
                    <span className="h-6 w-px bg-gradient-to-b from-white/25 to-white/5" />
                  </div>
                  <div aria-hidden className="hidden items-center px-2 lg:flex">
                    <span className="h-px w-6 bg-gradient-to-r from-white/25 to-white/5" />
                  </div>
                </>
              ) : null}
            </li>
          );
        })}
      </ol>

      {pattern.externals && pattern.externals.length > 0 ? (
        <div>
          <p className="t-eyebrow text-white/30">{t.architecture.externals}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {pattern.externals.map((item) => (
              <li
                key={`${item.label}-${item.tech ?? ""}`}
                className="inline-flex items-center gap-2 rounded-lg border border-dashed border-white/[0.12] px-3 py-1.5 text-[12.5px] text-white/55"
              >
                {item.tech ? <TechIcon technology={item.tech} size={13} /> : null}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
