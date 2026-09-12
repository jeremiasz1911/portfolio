"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";

const SPOTLIGHT_IDS = new Set(["powiat", "perfectTune", "aqualityConfigurator"]);

export function ProjectsSection() {
  const { t } = useLanguage();

  const spotlights = featuredProjects.filter((project) =>
    SPOTLIGHT_IDS.has(project.id),
  );
  const more = featuredProjects.filter(
    (project) => !SPOTLIGHT_IDS.has(project.id),
  );

  return (
    <section id="work" className="scroll-mt-28 py-16 sm:py-28 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          badge={t.projects.badge}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <Link
          href="/projects"
          className="group hidden items-center gap-2 rounded-full border border-white/[0.12] px-4 py-2 text-[12.5px] text-white/70 transition-colors duration-300 hover:border-[var(--accent)]/40 hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none sm:inline-flex"
        >
          {t.projects.viewAll}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </Link>
      </div>

      {/* Featured / spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.55, ease }}
        className="mt-8 space-y-3 sm:mt-12 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0 lg:mt-14 lg:gap-5"
      >
        {spotlights.map((project, index) => (
          <div
            key={project.id}
            className={
              index === 0 ? "sm:col-span-2 lg:col-span-2" : undefined
            }
          >
            <ProjectCard
              project={project}
              priority={index < 2}
              variant={index === 0 ? "spotlight" : "tile"}
            />
          </div>
        ))}
      </motion.div>

      {/* Compact list for remaining featured */}
      {more.length > 0 ? (
        <div className="mt-8 sm:mt-10">
          <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.moreLabel}
          </p>
          <div className="space-y-2.5">
            {more.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                variant="row"
              />
            ))}
          </div>
        </div>
      ) : null}

      <Link
        href="/projects"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.12] px-5 py-3.5 text-[14px] text-white/80 transition-colors duration-300 hover:border-[var(--accent)]/40 hover:text-white sm:mt-10 sm:hidden"
      >
        {t.projects.viewAll}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
