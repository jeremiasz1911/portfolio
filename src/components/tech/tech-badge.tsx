import { TechIcon, techLabel } from "@/components/tech/tech-icon";
import type { TechId } from "@/content/technologies";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
  technology: TechId | string;
  /** Show the brand name next to the icon. */
  label?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Emphasise primary stack tools. */
  emphasis?: "primary" | "secondary";
};

const sizeMap = {
  sm: { icon: 13, pad: "gap-1.5 px-2 py-1 text-[11px]", radius: "rounded-md" },
  md: { icon: 15, pad: "gap-2 px-2.5 py-1.5 text-[12.5px]", radius: "rounded-lg" },
  lg: { icon: 18, pad: "gap-2.5 px-3.5 py-2.5 text-[13.5px]", radius: "rounded-xl" },
} as const;

export function TechBadge({
  technology,
  label = true,
  size = "md",
  className,
  emphasis = "primary",
}: TechBadgeProps) {
  const name = techLabel(technology);
  const s = sizeMap[size];

  return (
    <span
      title={name}
      className={cn(
        "inline-flex max-w-full items-center border transition-colors",
        s.pad,
        s.radius,
        emphasis === "primary"
          ? "border-white/[0.12] bg-white/[0.055] text-white/85"
          : "border-white/[0.07] bg-transparent text-white/50",
        className,
      )}
    >
      <TechIcon technology={technology} size={s.icon} />
      {label ? <span className="truncate">{name}</span> : null}
    </span>
  );
}
