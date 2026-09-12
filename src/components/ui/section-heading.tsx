import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  badge: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <p className="text-[11px] font-medium tracking-[0.22em] text-cyan-300/80 uppercase">
        {badge}
      </p>
      <h2 className="max-w-3xl text-2xl leading-tight font-semibold text-balance text-white sm:text-3xl lg:text-[2.1rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-xl text-sm leading-6 text-white/55">{subtitle}</p>
      ) : null}
    </div>
  );
}
