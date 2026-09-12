"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { ProjectArchitectureDiagram } from "@/components/architecture/project-architecture-diagram";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectShot } from "@/components/projects/project-shot";
import { TechGroupedStack } from "@/components/tech/tech-grouped-stack";
import { TechIcon } from "@/components/tech/tech-icon";
import type { ProjectSystemField } from "@/content/architecture";
import { getRelatedProjects, type Project } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";

const systemOrder: ProjectSystemField[] = [
  "client",
  "platforms",
  "frontend",
  "backend",
  "database",
  "auth",
  "storage",
  "integrations",
  "deployment",
];

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const related = getRelatedProjects(project);
  const browserShots = project.shots.filter((shot) => shot.frame === "browser");
  const phoneShots = project.shots.filter((shot) => shot.frame === "phone");
  const systemEntries = systemOrder
    .map((field) => ({ field, value: project.system?.[field] }))
    .filter((entry): entry is { field: ProjectSystemField; value: string } =>
      Boolean(entry.value),
    );

  const flowLabels =
    "flows" in copy && copy.flows
      ? (copy.flows as Record<string, string>)
      : undefined;

  return (
    <article className="pb-24 lg:pb-32">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-[12.5px] text-white/45 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" />
        {t.projects.labels.back}
      </Link>

      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mt-8 space-y-6"
      >
        <div className="space-y-3">
          <p className="t-eyebrow text-[var(--accent)]/80">{copy.type}</p>
          <h1 className="t-title max-w-3xl text-balance">{copy.title}</h1>
          <p className="max-w-2xl text-[15px] leading-7 text-white/60">{copy.short}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="t-meta">
            {t.projects.labels.year}: {project.year}
          </span>
          <span className="h-3 w-px bg-white/15" aria-hidden />
          <span className="t-meta">
            {project.categories.map((c) => t.projects.filters[c]).join(" · ")}
          </span>
        </div>

        {project.links?.live || project.links?.repo ? (
          <div className="flex flex-wrap gap-3">
            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-4 py-2 text-[12.5px] text-white/80 transition-colors hover:border-[var(--accent)]/40 hover:text-white"
              >
                {t.projects.labels.visit}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
              </a>
            ) : null}
            {project.links.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-4 py-2 text-[12.5px] text-white/80 transition-colors hover:border-[var(--accent)]/40 hover:text-white"
              >
                <TechIcon technology="github" size={14} />
                {t.projects.labels.code}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        ) : null}
      </motion.header>

      <motion.section
        aria-label={t.projects.labels.screenshots}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease }}
        className="mt-12 lg:mt-14"
      >
        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-8 lg:p-10">
          <div
            className={
              phoneShots.length > 0
                ? "grid items-end gap-6 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-10"
                : "grid gap-6"
            }
          >
            <div className="space-y-6">
              {browserShots.map((shot, index) => (
                <ProjectShot
                  key={shot.src}
                  shot={shot}
                  alt={copy.title}
                  natural
                  priority={index === 0}
                  sizes="(max-width: 1024px) 92vw, 780px"
                />
              ))}
            </div>
            {phoneShots.length > 0 ? (
              <div className="mx-auto w-[180px] sm:w-[200px]">
                {phoneShots.map((shot) => (
                  <ProjectShot
                    key={shot.src}
                    shot={shot}
                    alt={copy.title}
                    natural
                    sizes="200px"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </motion.section>

      <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:gap-16">
        <section>
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.about}</h2>
          <div className="mt-5 space-y-4">
            {copy.about.map((paragraph) => (
              <p key={paragraph} className="text-[14.5px] leading-7 text-white/60">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.whatIDid}</h2>
          <ul className="mt-5 space-y-2.5">
            {project.roles.map((role) => (
              <li key={role} className="flex items-center gap-2.5">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent)]/12 text-[var(--accent)]">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-[13.5px] text-white/70">
                  {t.projects.roles[role]}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {systemEntries.length > 0 ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.system}</h2>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {systemEntries.map(({ field, value }) => (
              <div
                key={field}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5"
              >
                <dt className="t-meta text-white/35">{t.projects.systemFields[field]}</dt>
                <dd className="mt-1.5 text-[13.5px] leading-5 text-white/75">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {project.architecture ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.architecture}</h2>
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <ProjectArchitectureDiagram
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
            />
          </div>
        </section>
      ) : null}

      <div className="mt-16 grid gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-16">
        <section>
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.features}</h2>
          <ul className="mt-5 space-y-2.5">
            {copy.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-[13.5px] text-white/70">
                <span
                  aria-hidden
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]/70"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.challenges}</h2>
          <ul className="mt-5 space-y-3">
            {copy.challenges.map((challenge) => (
              <li
                key={challenge}
                className="rounded-xl border border-white/[0.07] px-4 py-3 text-[13.5px] leading-6 text-white/60"
              >
                {challenge}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.flows && project.flows.length > 0 ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.flows}</h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {project.flows.map((flow) => (
              <div
                key={flow.id}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
              >
                <p className="text-[13px] font-medium text-white/80">
                  {flowLabels?.[flow.id] ?? flow.id}
                </p>
                <ol className="mt-4 flex flex-col gap-0">
                  {flow.steps.map((step, index) => (
                    <li key={step} className="flex flex-col">
                      <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[12.5px] text-white/70">
                        {step}
                      </span>
                      {index < flow.steps.length - 1 ? (
                        <span aria-hidden className="mx-auto h-3 w-px bg-white/15" />
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-16 lg:mt-20">
        <h2 className="t-eyebrow text-white/30">{t.projects.labels.stack}</h2>
        <div className="mt-5">
          <TechGroupedStack
            technologies={project.tech}
            groupLabels={{
              ...t.stack.groups,
              integrations: t.architecture.externals,
              other: t.projects.labels.stack,
            }}
          />
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-6 sm:px-7">
        <h2 className="t-eyebrow text-white/30">{t.projects.labels.result}</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/70">{copy.result}</p>
      </section>

      {related.length > 0 ? (
        <section className="mt-20 lg:mt-28">
          <h2 className="t-eyebrow text-white/30">{t.projects.labels.related}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {related.map((item) => (
              <ProjectCard key={item.id} project={{ ...item, size: "normal" }} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
