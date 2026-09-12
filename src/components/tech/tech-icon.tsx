import { cn } from "@/lib/utils";
import {
  brandFill,
  resolveTech,
  type TechDefinition,
  type TechId,
} from "@/content/technologies";

type TechIconProps = {
  technology: TechId | string;
  size?: number;
  className?: string;
  title?: string;
};

/** Vector brand mark from the central registry — never a Lucide stand-in when a logo exists. */
export function TechIcon({ technology, size = 16, className, title }: TechIconProps) {
  const tech = resolveTech(technology);

  if (!tech?.brand) {
    return (
      <span
        aria-hidden
        className={cn(
          "inline-grid place-items-center rounded-[3px] bg-white/10 text-[9px] font-semibold tracking-wide text-white/55 uppercase",
          className,
        )}
        style={{ width: size, height: size }}
      >
        {(tech?.name ?? technology).slice(0, 2)}
      </span>
    );
  }

  return (
    <svg
      role="img"
      aria-label={title ?? tech.name}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      fill={brandFill(tech)}
    >
      <title>{title ?? tech.name}</title>
      <path d={tech.brand.path} />
    </svg>
  );
}

export function techLabel(technology: TechId | string): string {
  return resolveTech(technology)?.name ?? technology;
}

export type { TechDefinition, TechId };
