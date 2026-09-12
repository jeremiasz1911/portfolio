import Link from "next/link";

import { TechBadge } from "@/components/tech/tech-badge";
import { TechIcon, techLabel } from "@/components/tech/tech-icon";
import type { TechId } from "@/content/technologies";
import { cn } from "@/lib/utils";

type TechStackProps = {
  technologies: Array<TechId | string>;
  /** Cap visible icons; remainder becomes +N (useful on project tiles). */
  limit?: number;
  size?: "sm" | "md" | "lg";
  /** icon-only | badge with label | large card */
  variant?: "icons" | "badges" | "cards";
  className?: string;
  /** Optional filter link target, e.g. /projects?tech=firebase */
  linkToProjects?: boolean;
};

export function TechStack({
  technologies,
  limit,
  size = "md",
  variant = "badges",
  className,
  linkToProjects = false,
}: TechStackProps) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  const rest = limit ? Math.max(0, technologies.length - limit) : 0;

  if (variant === "icons") {
    return (
      <ul className={cn("flex flex-wrap items-center gap-2", className)}>
        {visible.map((tech) => {
          const name = techLabel(tech);
          const inner = (
            <span
              title={name}
              aria-label={name}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/[0.1] bg-white/[0.04]"
            >
              <TechIcon technology={tech} size={15} />
            </span>
          );

          return (
            <li key={`${tech}`}>
              {linkToProjects ? (
                <Link href={`/projects?tech=${encodeURIComponent(String(tech))}`}>{inner}</Link>
              ) : (
                inner
              )}
            </li>
          );
        })}
        {rest > 0 ? (
          <li className="t-meta px-1 text-white/40" title={technologies.slice(limit).map(techLabel).join(", ")}>
            +{rest}
          </li>
        ) : null}
      </ul>
    );
  }

  if (variant === "cards") {
    return (
      <ul className={cn("grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4", className)}>
        {visible.map((tech) => {
          const name = techLabel(tech);
          const card = (
            <span className="flex flex-col items-center gap-2.5 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-4 text-center transition-colors hover:border-white/[0.16] hover:bg-white/[0.05]">
              <TechIcon technology={tech} size={28} />
              <span className="text-[12.5px] leading-4 text-white/75">{name}</span>
            </span>
          );

          return (
            <li key={`${tech}`}>
              {linkToProjects ? (
                <Link href={`/projects?tech=${encodeURIComponent(String(tech))}`}>{card}</Link>
              ) : (
                card
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {visible.map((tech) => (
        <li key={`${tech}`}>
          {linkToProjects ? (
            <Link href={`/projects?tech=${encodeURIComponent(String(tech))}`}>
              <TechBadge technology={tech} size={size} />
            </Link>
          ) : (
            <TechBadge technology={tech} size={size} />
          )}
        </li>
      ))}
      {rest > 0 ? (
        <li
          className="inline-flex items-center rounded-lg border border-white/[0.08] px-2.5 py-1.5 text-[12px] text-white/40"
          title={technologies.slice(limit).map(techLabel).join(", ")}
        >
          +{rest}
        </li>
      ) : null}
    </ul>
  );
}
