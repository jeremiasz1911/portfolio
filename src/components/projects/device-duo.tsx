import Image from "next/image";

import type { ProjectShot } from "@/content/projects";
import { cn } from "@/lib/utils";

type DeviceDuoProps = {
  browser: ProjectShot;
  phone: ProjectShot;
  alt: string;
  accent?: string;
  priority?: boolean;
  className?: string;
  /** Compact variant for grid tiles */
  compact?: boolean;
};

/**
 * Overlapping laptop + phone composition.
 * Browser stays large and readable; phone sits on the front-right edge.
 */
export function DeviceDuo({
  browser,
  phone,
  alt,
  accent = "rgba(94,233,255,0.14)",
  priority,
  className,
  compact,
}: DeviceDuoProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full",
        compact ? "pb-[10%]" : "pb-[8%]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[8%] top-[12%] bottom-[18%] -z-0 rounded-[40%] blur-3xl"
        style={{ background: accent }}
      />

      {/* Laptop / browser — main stage */}
      <div
        className={cn(
          "relative z-[1] overflow-hidden rounded-xl border border-white/12 bg-[#0a0d14] shadow-[0_28px_50px_-28px_rgba(0,0,0,0.95)]",
          compact ? "mr-[16%]" : "mr-[18%] sm:mr-[20%]",
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.04] px-2.5 py-1.5">
          <span className="flex gap-1" aria-hidden>
            <span className="h-[5px] w-[5px] rounded-full bg-[#ff5f57]/70" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#febc2e]/70" />
            <span className="h-[5px] w-[5px] rounded-full bg-[#28c840]/70" />
          </span>
          {browser.url ? (
            <span className="truncate rounded bg-black/35 px-1.5 py-0.5 text-[8px] text-white/35">
              {browser.url}
            </span>
          ) : null}
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: compact ? "16 / 10" : "16 / 10.5" }}
        >
          <Image
            src={browser.src}
            alt={alt}
            fill
            sizes={
              compact
                ? "(max-width: 1024px) 46vw, 30vw"
                : "(max-width: 1024px) 92vw, 560px"
            }
            priority={priority}
            quality={90}
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Phone — overlapping front-right */}
      <div
        className={cn(
          "absolute z-[2] origin-bottom-right drop-shadow-[0_24px_40px_rgba(0,0,0,0.75)]",
          compact
            ? "right-0 bottom-[-4%] w-[34%] rotate-[4deg]"
            : "right-0 bottom-[-2%] w-[32%] rotate-[5deg] sm:w-[30%]",
        )}
      >
        <div
          className="relative overflow-hidden rounded-[1.35rem] border-[4px] border-[#15181f] bg-black ring-1 ring-white/12"
          style={{ aspectRatio: "9 / 19.2" }}
        >
          <span
            aria-hidden
            className="absolute top-1.5 left-1/2 z-10 h-[4px] w-10 -translate-x-1/2 rounded-full bg-black/70"
          />
          <Image
            src={phone.src}
            alt=""
            fill
            sizes={compact ? "120px" : "(max-width: 640px) 28vw, 160px"}
            quality={88}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
