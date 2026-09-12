"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { ProjectCtaCard } from "@/components/projects/project-cta-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ProjectGrid } from "@/components/projects/project-grid";
import { TechBadge } from "@/components/tech/tech-badge";
import {
  getAvailableFilters,
  projects,
  type ProjectFilter,
} from "@/content/projects";
import { resolveTech, resolveTechId } from "@/content/technologies";
import { useLanguage } from "@/i18n/language-provider";

type ProjectsCatalogProps = {
  /** From `/projects?tech=firebase` — filters tiles by registry id. */
  initialTech?: string;
};

export function ProjectsCatalog({ initialTech }: ProjectsCatalogProps) {
  const { t } = useLanguage();
  const techId = initialTech ? resolveTechId(initialTech) : undefined;
  const tech = techId ? resolveTech(techId) : undefined;

  const [active, setActive] = useState<ProjectFilter>("all");

  const filters = useMemo(() => getAvailableFilters(projects), []);
  const visible = useMemo(() => {
    let list =
      active === "all"
        ? projects
        : projects.filter((project) => project.categories.includes(active));

    if (techId) {
      list = list.filter((project) =>
        [...project.tech, ...project.highlights].some((entry) => entry === techId),
      );
    }

    return list;
  }, [active, techId]);

  return (
    <section className="pb-24 lg:pb-32">
      <header className="space-y-3">
        <p className="t-eyebrow text-[var(--accent)]/80">{t.projects.catalog.badge}</p>
        <h1 className="t-title max-w-2xl text-balance">{t.projects.catalog.title}</h1>
        <p className="max-w-xl text-sm leading-6 text-white/55">
          {t.projects.catalog.subtitle}
        </p>
      </header>

      {tech ? (
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] py-1.5 pr-2 pl-1.5">
          <TechBadge technology={tech.id} size="sm" />
          <Link
            href="/projects"
            className="grid h-7 w-7 place-items-center rounded-full text-white/45 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label={t.projects.filters.all}
          >
            <X className="h-3.5 w-3.5" />
          </Link>
        </div>
      ) : null}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <ProjectFilters filters={filters} active={active} onChange={setActive} />
        <p className="t-meta hidden sm:block">
          {visible.length} {t.projects.catalog.count}
        </p>
      </div>

      <div className="mt-8">
        {visible.length > 0 ? (
          <ProjectGrid
            projects={visible}
            className="2xl:grid-cols-4"
            trailing={
              <ProjectCtaCard
                href="/#contact"
                eyebrow={t.contact.badge}
                title={t.projects.cta.title}
                body={t.projects.cta.body}
                action={t.projects.cta.action}
                wide
              />
            }
          />
        ) : (
          <p className="rounded-2xl border border-dashed border-white/10 px-6 py-16 text-center text-sm text-white/45">
            {t.projects.catalog.empty}
          </p>
        )}
      </div>
    </section>
  );
}
