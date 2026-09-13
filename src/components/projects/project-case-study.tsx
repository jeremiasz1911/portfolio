"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { ProjectArchitectureDiagram } from "@/components/architecture/project-architecture-diagram";
import { DeviceDuo } from "@/components/projects/device-duo";
import { PhoneCluster } from "@/components/projects/phone-cluster";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectShot } from "@/components/projects/project-shot";
import { StoreBadges } from "@/components/projects/store-badges";
import { TechBadge } from "@/components/tech/tech-badge";
import { getRelatedProjects, type Project } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const related = getRelatedProjects(project);
  const phoneShots = project.shots.filter((shot) => shot.frame === "phone");
  const browserShots = project.shots.filter((shot) => shot.frame === "browser");
  const accent = project.accent ?? "rgba(94,233,255,0.16)";
  const isMobileFirst =
    project.categories.includes("mobile") &&
    !project.categories.includes("web") &&
    phoneShots.length > 0;
  const hasDuo = Boolean(browserShots[0] && phoneShots[0]);

  const solutionShots = phoneShots.length > 0 ? phoneShots : browserShots;

  return (
    <article className="pb-24 lg:pb-32">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-2 text-[13px] text-white/45 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" />
        {t.projects.labels.back}
      </Link>

      {/* ── Introduction ── */}
      <motion.header
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14"
      >
        <div className="order-2 space-y-6 lg:order-1">
          <div className="space-y-3">
            <p className="text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
              {copy.type}
            </p>
            <h1 className="max-w-2xl text-[2rem] leading-[1.15] font-semibold tracking-tight text-balance text-white sm:text-[2.4rem]">
              {copy.title}
            </h1>
            <p className="max-w-xl text-[16px] leading-7 text-white/65">{copy.short}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.categories
              .filter((c) => c !== "systems")
              .map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/60"
                >
                  {t.projects.filters[category]}
                </span>
              ))}
            <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/45">
              {project.year}
            </span>
          </div>

          <div>
            <p className="text-[11px] font-medium tracking-wide text-white/40 uppercase">
              {t.projects.labels.contribution}
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-2">
              {project.roles.map((role) => (
                <li
                  key={role}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12px] text-white/70"
                >
                  <Check className="h-3 w-3 text-[var(--accent)]" />
                  {t.projects.roles[role]}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.14] px-4 text-[13px] text-white/85 transition-colors hover:border-[var(--accent)]/40 hover:text-white"
              >
                {t.projects.labels.visitProduct}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
            {project.links?.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/[0.14] px-4 text-[13px] text-white/85 transition-colors hover:border-[var(--accent)]/40 hover:text-white"
              >
                {t.projects.labels.code}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>

          <StoreBadges
            appStore={project.links?.appStore}
            playStore={project.links?.playStore}
          />
        </div>

        <div className="relative order-1 min-w-0 lg:order-2">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[6%] rounded-[40%] blur-3xl"
            style={{ background: accent }}
          />
          <div className="relative px-2 pb-4 sm:px-4 lg:px-0">
            {isMobileFirst ? (
              <PhoneCluster
                shots={phoneShots}
                alt={copy.title}
                accent={accent}
                priority
              />
            ) : hasDuo && browserShots[0] && phoneShots[0] ? (
              <DeviceDuo
                browser={browserShots[0]}
                phone={phoneShots[0]}
                alt={copy.title}
                accent={accent}
                priority
              />
            ) : browserShots[0] ? (
              <ProjectShot
                shot={browserShots[0]}
                alt={copy.title}
                natural
                priority
                sizes="(max-width: 1024px) 92vw, 520px"
              />
            ) : phoneShots.length > 0 ? (
              <PhoneCluster shots={phoneShots} alt={copy.title} accent={accent} priority />
            ) : null}
          </div>
        </div>
      </motion.header>

      {/* ── Need ── */}
      <section className="mt-16 max-w-2xl lg:mt-20">
        <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
          {t.projects.labels.need}
        </h2>
        <p className="mt-4 text-[16px] leading-8 text-white/70">{copy.need}</p>
      </section>

      {/* ── Solution + screenshots ── */}
      <section className="mt-16 lg:mt-20">
        <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
          {t.projects.labels.solution}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {copy.solution.map((item, index) => {
            const shot = solutionShots[index % solutionShots.length];
            return (
              <div
                key={item.title}
                className={cn(
                  "overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]",
                  index === 0 && copy.solution.length > 2 ? "sm:col-span-2 sm:grid sm:grid-cols-2" : "",
                )}
              >
                {shot && index < 3 ? (
                  <div className="relative border-b border-white/[0.06] bg-black/30 p-4 sm:border-b-0 sm:border-r">
                    {shot.frame === "phone" ? (
                      <div className="mx-auto w-[42%] max-w-[140px] sm:w-[55%]">
                        <PhoneCluster shots={[shot]} alt={item.title} accent="transparent" />
                      </div>
                    ) : (
                      <ProjectShot
                        shot={shot}
                        alt={item.title}
                        natural
                        sizes="(max-width: 640px) 90vw, 360px"
                      />
                    )}
                  </div>
                ) : null}
                <div className="flex flex-col justify-center p-5 sm:p-6">
                  <h3 className="text-[16px] font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-6 text-white/60">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Admin panel secondary (mobile-first products) ── */}
      {isMobileFirst && browserShots.length > 0 ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.labels.adminPanel}
          </h2>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-7 text-white/55">
            {copy.solution.find((s) =>
              s.title.toLowerCase().includes("panel") ||
              s.title.toLowerCase().includes("admin"),
            )?.body ?? copy.about[copy.about.length - 1]}
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 sm:p-5">
            <ProjectShot
              shot={browserShots[0]}
              alt={`${copy.title} — ${t.projects.labels.adminPanel}`}
              natural
              sizes="(max-width: 1024px) 92vw, 900px"
            />
          </div>
        </section>
      ) : !isMobileFirst && browserShots.length > 1 ? (
        <section className="mt-16 lg:mt-20" aria-label={t.projects.labels.screenshots}>
          <div className="grid gap-4">
            {browserShots.slice(1).map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 sm:p-5"
              >
                <ProjectShot
                  shot={shot}
                  alt={copy.title}
                  natural
                  sizes="(max-width: 1024px) 92vw, 900px"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* ── My contribution ── */}
      <section className="mt-16 lg:mt-20">
        <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
          {t.projects.labels.contribution}
        </h2>
        <p className="mt-4 max-w-2xl text-[15.5px] leading-8 text-white/70">
          {copy.contributionNote}
        </p>
        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {project.roles.map((role) => (
            <li
              key={role}
              className="flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-[14px] text-white/75"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[var(--accent)]/15 text-[var(--accent)]">
                <Check className="h-3 w-3" />
              </span>
              {t.projects.roles[role]}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Technical quality ── */}
      {copy.technical.length > 0 ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.labels.technical}
          </h2>
          <ul className="mt-6 space-y-4">
            {copy.technical.map((item) => (
              <li
                key={item.problem}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6"
              >
                <p className="text-[13px] font-medium text-white/45">
                  {item.problem}
                </p>
                <p className="mt-2 text-[15px] leading-7 text-white/80">
                  {item.solution}
                </p>
                <p className="mt-2 text-[13.5px] leading-6 text-white/50">
                  {item.meaning}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {project.architecture ? (
        <section className="mt-16 lg:mt-20">
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.labels.architecture}
          </h2>
          <div className="mt-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 sm:p-6">
            <ProjectArchitectureDiagram
              nodes={project.architecture.nodes}
              edges={project.architecture.edges}
            />
          </div>
        </section>
      ) : null}

      <section className="mt-16 lg:mt-20">
        <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
          {t.projects.labels.stack}
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={String(tech)} technology={tech} size="md" />
          ))}
        </div>
      </section>

      {/* ── Result ── */}
      <section className="mt-16 rounded-2xl border border-white/[0.09] bg-white/[0.03] px-5 py-7 sm:px-8 lg:mt-20">
        <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
          {t.projects.labels.result}
        </h2>
        <p className="mt-3 max-w-2xl text-[16px] leading-8 text-white/75">{copy.result}</p>
      </section>

      {/* ── Contact CTA ── */}
      <section className="mt-12 rounded-2xl border border-dashed border-white/15 px-5 py-8 sm:px-8">
        <h2 className="text-[1.25rem] font-semibold tracking-tight text-white">
          {t.projects.labels.caseCtaTitle}
        </h2>
        <p className="mt-2 max-w-lg text-[14.5px] leading-7 text-white/55">
          {copy.caseCta} {t.projects.labels.caseCtaBody}
        </p>
        <Link
          href="/#contact"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 text-[13.5px] font-medium text-white transition-colors hover:border-[var(--accent)]/40"
        >
          {t.projects.cta.action}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>

      {related.length > 0 ? (
        <section className="mt-20 lg:mt-28">
          <h2 className="text-[11px] font-medium tracking-[0.2em] text-white/35 uppercase">
            {t.projects.labels.related}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {related.map((item) => (
              <ProjectCard key={item.id} project={{ ...item, size: "normal" }} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
