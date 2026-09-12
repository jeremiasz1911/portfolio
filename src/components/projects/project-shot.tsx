import Image from "next/image";

import type { ProjectShot as Shot } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectShotProps = {
  shot: Shot;
  alt: string;
  sizes: string;
  priority?: boolean;
  natural?: boolean;
  className?: string;
};

const frameSize = {
  browser: { width: 1920, height: 1279 },
  phone: { width: 828, height: 1792 },
} as const;

/**
 * Real screenshots from /public/assets/projects — framed as browser or phone.
 * Uses intrinsic width/height (not fill) so the image never collapses to 0px.
 */
export function ProjectShot({
  shot,
  alt,
  sizes,
  priority,
  natural,
  className,
}: ProjectShotProps) {
  const size = frameSize[shot.frame];

  if (shot.frame === "phone") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.75rem] border-[5px] border-[#15181f] bg-black ring-1 ring-white/10",
          natural ? "w-full" : "h-full w-auto max-w-full",
          className,
        )}
        style={{
          aspectRatio: `${size.width} / ${size.height}`,
          boxShadow: "0 30px 60px -30px rgba(0,0,0,0.95)",
        }}
      >
        <span
          aria-hidden
          className="absolute top-2 left-1/2 z-10 h-[5px] w-16 -translate-x-1/2 rounded-full bg-black/70"
        />
        <Image
          src={shot.src}
          alt={alt}
          width={size.width}
          height={size.height}
          sizes={sizes}
          priority={priority}
          quality={90}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0a0d14]",
        natural ? "h-auto" : "h-full",
        className,
      )}
      style={{ boxShadow: "0 30px 60px -34px rgba(0,0,0,0.95)" }}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.07] bg-white/[0.04] px-2.5 py-[7px]">
        <span className="flex gap-1" aria-hidden>
          <span className="h-[6px] w-[6px] rounded-full bg-[#ff5f57]/70" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#febc2e]/70" />
          <span className="h-[6px] w-[6px] rounded-full bg-[#28c840]/70" />
        </span>
        {shot.url ? (
          <span className="truncate rounded bg-black/40 px-2 py-[3px] text-[9px] text-white/35">
            {shot.url}
          </span>
        ) : null}
      </div>

      <div
        className={cn("relative w-full overflow-hidden", natural ? "" : "min-h-0 flex-1")}
        style={
          natural
            ? { aspectRatio: `${size.width} / ${size.height}` }
            : undefined
        }
      >
        <Image
          src={shot.src}
          alt={alt}
          width={size.width}
          height={size.height}
          sizes={sizes}
          priority={priority}
          quality={90}
          className={cn(
            "w-full object-cover object-top",
            natural ? "h-auto" : "h-full",
          )}
        />
      </div>
    </div>
  );
}
