"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { DeviceDuo } from "@/components/projects/device-duo";
import { PhoneCluster } from "@/components/projects/phone-cluster";
import { ProjectShot } from "@/components/projects/project-shot";
import { StoreBadges } from "@/components/projects/store-badges";
import { TechBadge } from "@/components/tech/tech-badge";
import type { Project } from "@/content/projects";
import { useLanguage } from "@/i18n/language-provider";
import { cn } from "@/lib/utils";

type FeaturedProjectProps = {
  project: Project;
  priority?: boolean;
  /** Alternate visual/copy sides on desktop */
  reverse?: boolean;
};

export function FeaturedProject({
  project,
  priority,
  reverse,
}: FeaturedProjectProps) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];
  const phoneShots = project.shots.filter((shot) => shot.frame === "phone");
  const browserShot = project.shots.find((shot) => shot.frame === "browser");
  const accent = project.accent ?? "rgba(94,233,255,0.14)";
  // Phone-only products (no web category) keep the phone cluster.
  // Web + mobile products get overlapping laptop/phone so the desktop UI stays readable.
  const isPhoneOnlyProduct =
    project.categories.includes("mobile") &&
    !project.categories.includes("web");
  const hasDuo = Boolean(browserShot && phoneShots[0]);

  return (
    <article
      className={cn(
        "overflow-hidden rounded-3xl border border-white/[0.08]",
        "bg-gradient-to-br from-white/[0.04] to-transparent",
      )}
      style={{
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.04), 0 0 0 1px color-mix(in srgb, ${accent} 35%, transparent)`,
      }}
    >
      <div className="grid items-center gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
        {/* Visual — first on mobile */}
        <div
          className={cn(
            "relative min-w-0 pb-4 sm:pb-5",
            reverse ? "lg:order-2" : "lg:order-1",
          )}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 rounded-2xl opacity-80 blur-2xl"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${accent}, transparent 70%)`,
            }}
          />
          <div className="relative z-[1]">
            {isPhoneOnlyProduct && phoneShots.length > 0 ? (
              <PhoneCluster
                shots={phoneShots}
                alt={copy.title}
                accent={accent}
                priority={priority}
              />
            ) : hasDuo && browserShot && phoneShots[0] ? (
              <DeviceDuo
                browser={browserShot}
                phone={phoneShots[0]}
                alt={copy.title}
                accent={accent}
                priority={priority}
              />
            ) : browserShot ? (
              <div className="mx-auto w-full max-w-xl">
                <ProjectShot
                  shot={browserShot}
                  alt={copy.title}
                  natural
                  priority={priority}
                  sizes="(max-width: 1024px) 92vw, 560px"
                />
              </div>
            ) : phoneShots.length > 0 ? (
              <PhoneCluster
                shots={phoneShots}
                alt={copy.title}
                accent={accent}
                priority={priority}
              />
            ) : null}
          </div>
        </div>

        {/* Copy */}
        <div
          className={cn(
            "min-w-0 space-y-5",
            reverse ? "lg:order-1" : "lg:order-2",
          )}
        >
          <div className="space-y-2.5">
            <p className="text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
              {copy.type}
            </p>
            <h3 className="text-[1.6rem] leading-tight font-semibold tracking-tight text-balance text-white sm:text-[1.85rem]">
              {copy.title}
            </h3>
            <p className="max-w-md text-[15px] leading-7 text-white/65">{copy.short}</p>
          </div>

          {project.links?.appStore || project.links?.playStore ? (
            <div className="space-y-2">
              <p className="text-[11px] font-medium tracking-wide text-white/40 uppercase">
                {t.projects.labels.publishedStores}
              </p>
              <StoreBadges
                appStore={project.links.appStore}
                playStore={project.links.playStore}
              />
            </div>
          ) : null}

          <div className="space-y-2">
            <p className="text-[11px] font-medium tracking-wide text-white/40 uppercase">
              {t.projects.labels.contribution}
            </p>
            <ul className="space-y-2">
              {project.roles.map((role) => (
                <li key={role} className="flex items-start gap-2.5 text-[13.5px] text-white/70">
                  <span
                    className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                    style={{
                      background: `color-mix(in srgb, ${accent} 55%, transparent)`,
                      color: "white",
                    }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {t.projects.roles[role]}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.highlights.map((tech) => (
              <TechBadge key={String(tech)} technology={tech} size="sm" />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href={`/projects/${project.slug}`}
              className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 text-[13.5px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-[var(--accent)]/60 focus-visible:outline-none"
            >
              {t.projects.labels.viewProject}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-1.5 px-2 text-[13px] text-white/55 transition-colors hover:text-white"
              >
                {t.projects.labels.visitProduct}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
