"use client";

import { TechIcon } from "@/components/tech/tech-icon";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

/** LinkedIn path kept locally — Simple Icons dropped the mark for trademark reasons. */
function LinkedInMark({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      role="img"
      aria-label="LinkedIn"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      fill="#0A66C2"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type SocialLinksProps = {
  size?: "sm" | "md";
  className?: string;
  /** Show text labels next to icons. */
  labels?: boolean;
  githubLabel?: string;
  linkedinLabel?: string;
};

export function SocialLinks({
  size = "md",
  className,
  labels = false,
  githubLabel = "GitHub",
  linkedinLabel = "LinkedIn",
}: SocialLinksProps) {
  const icon = size === "sm" ? 15 : 17;
  const hit = size === "sm" ? "h-9 w-9" : "h-10 w-10";

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      <li>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={githubLabel}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] text-white/70 transition-colors hover:border-white/[0.18] hover:text-white",
            labels ? "px-3.5 py-2" : cn("grid place-items-center", hit),
          )}
        >
          <TechIcon technology="github" size={icon} />
          {labels ? <span className="text-[12.5px]">{githubLabel}</span> : null}
        </a>
      </li>
      <li>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={linkedinLabel}
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] text-white/70 transition-colors hover:border-white/[0.18] hover:text-white",
            labels ? "px-3.5 py-2" : cn("grid place-items-center", hit),
          )}
        >
          <LinkedInMark size={icon} />
          {labels ? <span className="text-[12.5px]">{linkedinLabel}</span> : null}
        </a>
      </li>
    </ul>
  );
}
