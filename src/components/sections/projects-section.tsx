"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { moreFeaturedProjects, spotlightProjects } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";

export function ProjectsSection() {
  const { t } = useLanguage();

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

      <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8 lg:space-y-10">
        {spotlightProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
            transition={{ duration: 0.55, delay: index * 0.04, ease }}
          >
            <FeaturedProject
              project={project}
              priority={index === 0}
              reverse={index % 2 === 1}
            />
          </motion.div>
        ))}
      </div>

      {moreFeaturedProjects.length > 0 ? (
        <div className="mt-12 sm:mt-16">
          <p className="mb-4 text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.moreLabel}
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
            {moreFeaturedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="mini" />
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
