"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { DeviceDuo } from "@/components/projects/device-duo";
import { ProjectShot } from "@/components/projects/project-shot";
import { TechBadge } from "@/components/tech/tech-badge";
import type { Project, ProjectCategory } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCardVariant = "spotlight" | "tile" | "row" | "mini";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  variant?: ProjectCardVariant;
};

const PLATFORM_ORDER: ProjectCategory[] = ["web", "mobile", "wordpress", "plugins", "systems"];

function projectPlatforms(categories: Project["categories"]): ProjectCategory[] {
  const unique = new Set<ProjectCategory>();
  for (const category of categories) {
    if (category === "systems") continue;
    if (category === "plugins") {
      unique.add("wordpress");
      continue;
    }
    unique.add(category);
  }
  return PLATFORM_ORDER.filter((platform) => unique.has(platform));
}

function ProjectRowCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const browser = project.shots.find((s) => s.frame === "browser");
  const phone = project.shots.find((s) => s.frame === "phone");
  const shot = browser ?? project.shots[0];
  const platforms = projectPlatforms(project.categories);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6, scale: 0.99 }}
      transition={{ duration: 0.28, ease }}
      className="min-w-0"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${copy.title} — ${t.projects.labels.viewProject}`}
        className={cn(
          "group flex min-h-[7.25rem] items-stretch overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]",
          "transition-[border-color,background-color] duration-300",
          "hover:border-white/[0.16] hover:bg-white/[0.045]",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
        )}
      >
        <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-between gap-2 p-3.5 pr-2.5">
          <div className="min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <h3 className="truncate text-[14px] font-medium tracking-tight text-white">
                  {copy.title}
                </h3>
                <p className="mt-0.5 truncate text-[11px] text-white/45">
                  {copy.type}
                  <span className="text-white/20"> · </span>
                  {project.year}
                </p>
              </div>
              <span
                aria-hidden
                className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 text-white/35 transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
              >
                <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
            <p className="mt-1.5 line-clamp-2 text-[12px] leading-snug text-white/55">
              {copy.short}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {platforms.map((platform) => (
              <span
                key={platform}
                className="rounded-full border border-white/[0.1] bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/55"
              >
                {t.projects.filters[platform]}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-[42%] max-w-[11rem] shrink-0 overflow-hidden sm:w-[34%] sm:max-w-[13rem]">
          {browser && phone ? (
            <div className="absolute inset-0 p-2 pr-1 pb-1.5">
              <DeviceDuo
                browser={browser}
                phone={phone}
                alt=""
                accent="transparent"
                compact
              />
            </div>
          ) : (
            <>
              <Image
                src={shot.src}
                alt=""
                fill
                sizes="(max-width: 640px) 42vw, 220px"
                priority={priority}
                quality={85}
                className={cn(
                  "object-cover transition-transform duration-500",
                  "group-hover:scale-[1.04] motion-reduce:transform-none",
                  shot.frame === "phone" ? "object-top" : "object-[center_12%]",
                )}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0a0d14] via-[#0a0d14]/50 to-transparent"
              />
            </>
          )}
        </div>
      </Link>
    </motion.article>
  );
}

/** Compact card for homepage “more featured” 2×2 grid */
function ProjectMiniCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const browser = project.shots.find((s) => s.frame === "browser");
  const phone = project.shots.find((s) => s.frame === "phone");
  const shot = browser ?? project.shots[0];
  const hasDuo = Boolean(browser && phone);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6, scale: 0.99 }}
      transition={{ duration: 0.28, ease }}
      className="min-w-0"
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${copy.title} — ${t.projects.labels.viewProject}`}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]",
          "transition-[border-color,background-color] duration-300",
          "hover:border-white/[0.16] hover:bg-white/[0.045]",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent">
          {hasDuo && browser && phone ? (
            <div className="absolute inset-0 p-2.5 pb-3 sm:p-3 sm:pb-3.5">
              <DeviceDuo
                browser={browser}
                phone={phone}
                alt={copy.title}
                accent={project.accent ?? "rgba(94,233,255,0.1)"}
                priority={priority}
                compact
                className="transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
              />
            </div>
          ) : (
            <Image
              src={shot.src}
              alt={copy.title}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={priority}
              quality={85}
              className={cn(
                "object-cover object-top transition-transform duration-500",
                "group-hover:scale-[1.03] motion-reduce:transform-none",
              )}
            />
          )}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#080b11] to-transparent"
          />
        </div>

        <div className="flex flex-1 items-start justify-between gap-2 border-t border-white/[0.06] px-3.5 py-3 sm:px-4 sm:py-3.5">
          <div className="min-w-0">
            <h3 className="truncate text-[13.5px] font-medium tracking-tight text-white sm:text-[14px]">
              {copy.title}
            </h3>
            <p className="mt-0.5 truncate text-[11px] text-white/45">
              {copy.type}
              <span className="text-white/20"> · </span>
              {project.year}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.highlights.slice(0, 2).map((tech) => (
                <TechBadge key={String(tech)} technology={tech} size="sm" />
              ))}
            </div>
          </div>
          <span
            aria-hidden
            className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 text-white/35 transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
          >
            <ArrowUpRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export function ProjectCard({
  project,
  priority,
  variant = "tile",
}: ProjectCardProps) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const browser = project.shots.find((s) => s.frame === "browser");
  const phone = project.shots.find((s) => s.frame === "phone");
  const shot = project.shots[0];
  const platforms = projectPlatforms(project.categories);
  const hasDuo = Boolean(browser && phone);

  if (variant === "row") {
    return <ProjectRowCard project={project} priority={priority} />;
  }

  if (variant === "mini") {
    return <ProjectMiniCard project={project} priority={priority} />;
  }

  const wide = project.size === "wide";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.985 }}
      transition={{ duration: 0.3, ease }}
      className={cn("min-w-0", wide && "sm:col-span-2")}
    >
      <div className="sm:hidden">
        <ProjectRowCard project={project} priority={priority} />
      </div>

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${copy.title} — ${t.projects.labels.viewProject}`}
        className={cn(
          "group hidden h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] sm:flex",
          "transition-[border-color,background-color] duration-300 ease-out",
          "hover:border-white/[0.16] hover:bg-white/[0.045]",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent",
            hasDuo
              ? "aspect-[5/4] p-4 pb-5"
              : wide
                ? "aspect-[2/1]"
                : "aspect-[4/3]",
          )}
        >
          {hasDuo && browser && phone ? (
            <div className="flex h-full items-end">
              <DeviceDuo
                browser={browser}
                phone={phone}
                alt={copy.title}
                accent={project.accent ?? "rgba(94,233,255,0.12)"}
                priority={priority}
                compact
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.015] motion-reduce:transform-none"
              />
            </div>
          ) : (
            <div
              className={cn(
                "absolute inset-x-4 top-5 bottom-0 transition-transform duration-300",
                "group-hover:-translate-y-1 group-hover:scale-[1.02] motion-reduce:transform-none",
                shot.frame === "phone"
                  ? "left-1/2 flex w-[42%] -translate-x-1/2 justify-center"
                  : "",
              )}
            >
              <ProjectShot
                shot={shot}
                alt={copy.title}
                priority={priority}
                sizes={
                  wide
                    ? "(max-width: 1024px) 92vw, 50vw"
                    : "(max-width: 1024px) 46vw, 30vw"
                }
              />
            </div>
          )}

          {platforms.length > 0 ? (
            <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="rounded-full border border-white/15 bg-black/45 px-2 py-0.5 text-[10px] text-white/80 backdrop-blur-sm"
                >
                  {t.projects.filters[platform]}
                </span>
              ))}
            </div>
          ) : null}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080b11] via-[#080b11]/60 to-transparent"
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 border-t border-white/[0.06] p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-[15px] font-medium tracking-tight text-white">
                {copy.title}
              </h3>
              <p className="mt-1 text-[12px] text-white/45">{copy.type}</p>
            </div>
            <span
              aria-hidden
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-white/40 transition-colors group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <p className="line-clamp-2 text-[13px] leading-5 text-white/55">{copy.short}</p>

          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {project.highlights.slice(0, 3).map((tech) => (
              <TechBadge key={String(tech)} technology={tech} size="sm" />
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
