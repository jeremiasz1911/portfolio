import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const keyRows = [14, 14, 13, 12, 11];

type LaptopProps = {
  children: ReactNode;
  className?: string;
  /** Cinematic angle. Disabled for the flatter presentation used inside project rows. */
  angled?: boolean;
};

export function Laptop({ children, className, angled = true }: LaptopProps) {
  return (
    <div className={cn("relative pb-[9%]", className)} style={{ perspective: "2000px" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 z-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(94,233,255,0.10),transparent_65%)] blur-2xl"
      />

      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: angled
            ? "rotateX(8deg) rotateY(-7deg) rotateZ(0.4deg)"
            : "rotateX(3deg)",
        }}
      >
        <div
          className="relative rounded-t-[14px] rounded-b-[5px] p-[1.1%] pb-[1.9%]"
          style={{
            background:
              "linear-gradient(158deg,#4c5464 0%,#272d38 18%,#1b202a 62%,#333a47 100%)",
            boxShadow:
              "0 40px 70px -34px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.16)",
          }}
        >
          <div className="relative overflow-hidden rounded-[8px] bg-[#04060a] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.85)]">
            <div className="relative z-20 flex h-[2.2%] min-h-[9px] items-center justify-center">
              <span className="h-[3px] w-[3px] rounded-full bg-[#1d242f] shadow-[0_0_0_0.5px_rgba(255,255,255,0.10)]">
                <span className="block h-[1px] w-[1px] translate-x-[1px] translate-y-[1px] rounded-full bg-cyan-200/25" />
              </span>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070a11]">
              {children}
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-30"
              style={{
                background:
                  "linear-gradient(112deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.035) 13%, rgba(255,255,255,0) 32%, rgba(255,255,255,0) 72%, rgba(255,255,255,0.022) 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-30 rounded-[8px] shadow-[inset_0_0_28px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="flex h-[1.4%] min-h-[6px] items-center justify-center">
            <span className="text-[4px] tracking-[0.3em] text-white/20">◗</span>
          </div>
        </div>

        <div
          className="absolute inset-x-[-3.5%] top-full origin-top"
          style={{ transform: "rotateX(74deg)", transformStyle: "preserve-3d" }}
        >
          <div
            className="rounded-b-[10px] rounded-t-[3px] px-[3%] pt-[1.4%] pb-[2.2%]"
            style={{
              background:
                "linear-gradient(180deg,#181d26 0%,#333a47 6%,#3d4453 34%,#2a303b 100%)",
              boxShadow:
                "0 26px 40px -18px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <div className="space-y-[3px]">
              {keyRows.map((count, rowIndex) => (
                <div key={rowIndex} className="flex justify-center gap-[3px]">
                  {Array.from({ length: count }).map((_, keyIndex) => (
                    <span
                      key={keyIndex}
                      className="h-[7px] flex-1 rounded-[1.5px] bg-[#12161d] shadow-[inset_0_-1px_0_rgba(0,0,0,0.6),0_0.5px_0_rgba(255,255,255,0.05)]"
                    />
                  ))}
                </div>
              ))}
              <div className="flex justify-center gap-[3px]">
                <span className="h-[7px] w-[8%] rounded-[1.5px] bg-[#12161d]" />
                <span className="h-[7px] w-[42%] rounded-[1.5px] bg-[#141920] shadow-[inset_0_-1px_0_rgba(0,0,0,0.6)]" />
                <span className="h-[7px] w-[8%] rounded-[1.5px] bg-[#12161d]" />
              </div>
            </div>

            <div className="mt-[2%] flex justify-center">
              <div
                className="h-[26px] w-[30%] rounded-[4px]"
                style={{
                  background: "linear-gradient(180deg,#2f3542,#262c36)",
                  boxShadow:
                    "inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 2px 6px rgba(0,0,0,0.45)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-[8%] bottom-0 h-6 rounded-[50%] bg-black/60 blur-xl"
      />
    </div>
  );
}
