"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProjectShot } from "@/components/projects/project-shot";
import { TechStack } from "@/components/tech/tech-stack";
import type { Project, ProjectCategory } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ProjectCardVariant = "spotlight" | "tile" | "row";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  /** spotlight = featured hero tile; tile = grid card; row = compact strip */
  variant?: ProjectCardVariant;
};

const PLATFORM_ORDER: ProjectCategory[] = [
  "web",
  "mobile",
  "wordpress",
  "plugins",
  "systems",
];

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

function PlatformChips({
  platforms,
  labels,
  tone = "quiet",
}: {
  platforms: ProjectCategory[];
  labels: Partial<Record<ProjectCategory | "all", string>>;
  tone?: "quiet" | "overlay";
}) {
  if (platforms.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {platforms.map((platform) => (
        <span
          key={platform}
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] tracking-wide",
            tone === "overlay"
              ? "border border-white/15 bg-black/45 text-white/80 backdrop-blur-sm"
              : "border border-white/[0.1] bg-white/[0.04] text-white/55",
          )}
        >
          {labels[platform] ?? platform}
        </span>
      ))}
    </div>
  );
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
  const shot = project.shots[0];
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
          "group flex min-h-[7rem] items-stretch overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]",
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

          <PlatformChips platforms={platforms} labels={t.projects.filters} />
        </div>

        <div className="relative w-[38%] max-w-[9.5rem] shrink-0 overflow-hidden sm:w-[30%] sm:max-w-[12rem]">
          <Image
            src={shot.src}
            alt=""
            fill
            sizes="(max-width: 640px) 38vw, 200px"
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
  const shot = project.shots[0];
  const platforms = projectPlatforms(project.categories);
  const live = project.links?.live;

  if (variant === "row") {
    return <ProjectRowCard project={project} priority={priority} />;
  }

  const wide = variant === "spotlight" || project.size === "wide";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, scale: 0.985 }}
      transition={{ duration: 0.3, ease }}
      className={cn("min-w-0", wide && variant === "tile" && "sm:col-span-2")}
    >
      {/* Mobile: compact strip with short + platforms */}
      <div className="sm:hidden">
        <ProjectRowCard project={project} priority={priority} />
      </div>

      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${copy.title} — ${t.projects.labels.viewProject}`}
        className={cn(
          "group hidden h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] sm:flex",
          "transition-[border-color,background-color,transform] duration-300 ease-out",
          "hover:border-white/[0.16] hover:bg-white/[0.045]",
          "focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none",
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-b from-white/[0.05] to-transparent",
            variant === "spotlight"
              ? "aspect-[16/10] lg:min-h-[220px] lg:aspect-[2/1]"
              : wide
                ? "aspect-[2/1] lg:min-h-[200px] lg:flex-1 lg:aspect-auto"
                : "aspect-[4/3]",
          )}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-60 [background:radial-gradient(120%_80%_at_50%_-10%,rgba(94,233,255,0.14),transparent_70%)]"
          />

          <div
            className={cn(
              "absolute top-6 bottom-0 transition-transform duration-300 ease-out",
              "group-hover:-translate-y-1.5 group-hover:scale-[1.025] motion-reduce:transform-none",
              shot.frame === "phone"
                ? "left-1/2 flex -translate-x-1/2 justify-center"
                : "inset-x-5 sm:inset-x-7",
            )}
          >
            <ProjectShot
              shot={shot}
              alt={copy.title}
              priority={priority}
              sizes={
                wide
                  ? "(max-width: 1024px) 92vw, 62vw"
                  : "(max-width: 1024px) 46vw, 31vw"
              }
            />
          </div>

          <div className="absolute top-3 left-3 z-10">
            <PlatformChips
              platforms={platforms}
              labels={t.projects.filters}
              tone="overlay"
            />
          </div>

          {project.needsInfo && process.env.NODE_ENV !== "production" ? (
            <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400/15 px-2 py-1 text-[10px] text-amber-200/90">
              {t.projects.labels.needsInfo}
            </span>
          ) : null}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080b11] via-[#080b11]/65 to-transparent"
          />
        </div>

        <div
          className={cn(
            "flex flex-1 flex-col border-t border-white/[0.06]",
            variant === "spotlight" ? "gap-3.5 p-5 sm:p-6" : "gap-3 p-5",
          )}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <h3
                  className={cn(
                    "font-medium tracking-tight text-white",
                    variant === "spotlight" ? "text-[17px]" : "text-[15px]",
                  )}
                >
                  {copy.title}
                </h3>
                <span className="text-[11px] text-white/35">{project.year}</span>
              </div>
              <p className="mt-1 text-[12px] text-white/45">{copy.type}</p>
            </div>

            <span
              aria-hidden
              className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-white/40 transition-colors duration-300 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)]"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <p
            className={cn(
              "text-white/55",
              variant === "spotlight"
                ? "line-clamp-3 text-[13.5px] leading-6"
                : "line-clamp-2 text-[13px] leading-5",
            )}
          >
            {copy.short}
          </p>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-1">
            <TechStack
              technologies={project.highlights}
              variant="icons"
              limit={variant === "spotlight" ? 4 : 3}
            />

            <span className="inline-flex items-center gap-1.5 text-[12px] text-white/50 transition-colors group-hover:text-[var(--accent)]">
              {t.projects.labels.viewProject}
              {live ? <ExternalLink className="h-3 w-3" aria-hidden /> : null}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
