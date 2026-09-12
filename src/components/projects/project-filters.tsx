"use client";

import { motion } from "framer-motion";

import type { ProjectFilter } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectFiltersProps = {
  filters: ProjectFilter[];
  active: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
};

export function ProjectFilters({ filters, active, onChange }: ProjectFiltersProps) {
  const { t } = useLanguage();

  return (
    <div className="no-scrollbar max-w-full overflow-x-auto">
      <div role="tablist" aria-label={t.projects.badge} className="flex w-max min-w-full gap-2">
        {filters.map((filter) => {
          const isActive = filter === active;

          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(filter)}
              className={cn(
                "relative shrink-0 rounded-full px-4 py-2 text-[12.5px] whitespace-nowrap transition-colors duration-200",
                "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
                isActive ? "text-white" : "text-white/45 hover:text-white/80",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId="project-filter-pill"
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/[0.14]"
                />
              ) : (
                <span className="absolute inset-0 rounded-full ring-1 ring-white/[0.07]" />
              )}
              <span className="relative">{t.projects.filters[filter]}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
