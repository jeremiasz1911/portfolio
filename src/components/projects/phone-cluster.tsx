import Image from "next/image";

import type { ProjectShot } from "@/content/projects";
import { cn } from "@/lib/utils";

type PhoneClusterProps = {
  shots: ProjectShot[];
  alt: string;
  /** Soft brand glow behind the cluster */
  accent?: string;
  className?: string;
  priority?: boolean;
};

/**
 * Compact 2–3 phone composition. Height comes from the phone aspect ratio —
 * no fixed empty frame.
 */
export function PhoneCluster({
  shots,
  alt,
  accent = "rgba(94,233,255,0.16)",
  className,
  priority,
}: PhoneClusterProps) {
  const phones = shots.filter((shot) => shot.frame === "phone").slice(0, 3);

  if (phones.length === 0) return null;

  if (phones.length === 1) {
    return (
      <div className={cn("relative mx-auto w-[min(100%,220px)]", className)}>
        <Glow accent={accent} />
        <PhoneFrame shot={phones[0]} alt={alt} priority={priority} sizes="220px" />
      </div>
    );
  }

  if (phones.length === 2) {
    return (
      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[420px] items-end justify-center gap-3 sm:gap-4",
          className,
        )}
      >
        <Glow accent={accent} />
        <div className="w-[42%] origin-bottom -rotate-3">
          <PhoneFrame shot={phones[0]} alt={alt} priority={priority} sizes="180px" />
        </div>
        <div className="w-[48%] origin-bottom rotate-2">
          <PhoneFrame shot={phones[1]} alt={alt} priority={priority} sizes="200px" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative mx-auto flex w-full max-w-[520px] items-end justify-center",
        className,
      )}
    >
      <Glow accent={accent} />
      <div className="relative z-[1] w-[30%] origin-bottom -translate-y-1 -rotate-6 sm:w-[28%]">
        <PhoneFrame shot={phones[0]} alt={`${alt} — 1`} sizes="140px" />
      </div>
      <div className="relative z-[2] -mx-[4%] w-[38%] sm:w-[36%]">
        <PhoneFrame
          shot={phones[1]}
          alt={`${alt} — 2`}
          priority={priority}
          sizes="180px"
        />
      </div>
      <div className="relative z-[1] w-[30%] origin-bottom -translate-y-1 rotate-6 sm:w-[28%]">
        <PhoneFrame shot={phones[2]} alt={`${alt} — 3`} sizes="140px" />
      </div>
    </div>
  );
}

function Glow({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-[8%] top-[18%] bottom-[8%] -z-0 rounded-[50%] blur-3xl"
      style={{ background: accent }}
    />
  );
}

function PhoneFrame({
  shot,
  alt,
  priority,
  sizes,
}: {
  shot: ProjectShot;
  alt: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-[1.65rem] border-[5px] border-[#15181f] bg-black ring-1 ring-white/10"
      style={{
        aspectRatio: "9 / 19.5",
        boxShadow: "0 28px 50px -28px rgba(0,0,0,0.95)",
      }}
    >
      <span
        aria-hidden
        className="absolute top-2 left-1/2 z-10 h-[5px] w-14 -translate-x-1/2 rounded-full bg-black/70"
      />
      <Image
        src={shot.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={90}
        className="object-cover object-top"
      />
    </div>
  );
}
