"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ArchitectureFlow } from "@/components/architecture/architecture-flow";
import { TechIcon } from "@/components/tech/tech-icon";
import { SectionHeading } from "@/components/ui/section-heading";
import { architecturePatterns } from "@/content/architecture";
import { stackGroups, type StackGroupId } from "@/content/stack";
import { getTech, type TechId } from "@/content/technologies";
import { useLanguage } from "@/i18n/language-provider";
import { ease, spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Panel = "stack" | "architecture";
type StackFilter = StackGroupId | "all";

/**
 * LEVEL 2 engineering area — stack OR architecture, never both at once.
 * Architecture shows one showcase flow; full patterns live in project details.
 */
export function EngineeringSection() {
  const { t } = useLanguage();
  const [panel, setPanel] = useState<Panel>("stack");
  const [stackFilter, setStackFilter] = useState<StackFilter>("all");

  const stackFilters: StackFilter[] = [
    "all",
    ...stackGroups.map((group) => group.id),
  ];

  const stackItems = useMemo(() => {
    if (stackFilter === "all") {
      const seen = new Set<TechId>();
      return stackGroups.flatMap((group) =>
        group.items
          .filter((item) => {
            if (item.priority !== "primary") return false;
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
          })
          .map((item) => ({ ...item, group: group.id })),
      );
    }

    const group = stackGroups.find((entry) => entry.id === stackFilter);
    return (group?.items ?? []).map((item) => ({ ...item, group: group!.id }));
  }, [stackFilter]);

  const showcase =
    architecturePatterns.find((entry) => entry.id === "mobile") ??
    architecturePatterns[0];

  return (
    <section id="engineering" className="scroll-mt-28 py-16 sm:py-24 lg:py-28">
      <SectionHeading
        badge={t.engineering.badge}
        title={t.engineering.title}
        subtitle={t.engineering.subtitle}
      />

      <div className="mt-10 inline-flex rounded-full border border-white/[0.08] bg-white/[0.02] p-1">
        {(["stack", "architecture"] as const).map((id) => {
          const active = panel === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setPanel(id)}
              className={cn(
                "relative rounded-full px-4 py-2 text-[12.5px] transition-colors",
                active ? "text-white" : "text-white/45 hover:text-white/75",
              )}
            >
              {active ? (
                <motion.span
                  layoutId="engineering-panel"
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/[0.12]"
                />
              ) : null}
              <span className="relative">{t.engineering.panels[id]}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {panel === "stack" ? (
          <motion.div
            key="stack"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease }}
            className="mt-8"
          >
            <div className="no-scrollbar max-w-full overflow-x-auto">
              <div role="tablist" className="flex w-max min-w-full gap-2">
                {stackFilters.map((filter) => {
                  const isActive = filter === stackFilter;
                  const label =
                    filter === "all"
                      ? t.projects.filters.all
                      : t.stack.groups[filter];

                  return (
                    <button
                      key={filter}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setStackFilter(filter)}
                      className={cn(
                        "relative shrink-0 rounded-full px-3.5 py-1.5 text-[12px] whitespace-nowrap transition-colors",
                        isActive
                          ? "text-white"
                          : "text-white/40 hover:text-white/70",
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="eng-stack-filter"
                          transition={spring}
                          className="absolute inset-0 rounded-full bg-white/[0.07] ring-1 ring-white/[0.12]"
                        />
                      ) : null}
                      <span className="relative">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {stackItems.map((item) => {
                const tech = getTech(item.id);

                return (
                  <li key={`${item.group}-${item.id}`}>
                    <Link
                      href={`/projects?tech=${item.id}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.04]">
                        <TechIcon technology={item.id} size={18} />
                      </span>
                      <span className="truncate text-[13px] text-white/80">
                        {tech.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            key="architecture"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease }}
            className="mt-8"
          >
            <p className="mb-5 max-w-xl text-[13.5px] leading-6 text-white/45">
              {t.architecture.patterns[showcase.id]}. {t.architecture.subtitle}
            </p>
            <ArchitectureFlow pattern={showcase} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
