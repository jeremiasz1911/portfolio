import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PhoneProps = {
  children: ReactNode;
  className?: string;
  angled?: boolean;
};

export function Phone({ children, className, angled = true }: PhoneProps) {
  return (
    <div className={cn("relative", className)} style={{ perspective: "1400px" }}>
      <div
        className="relative"
        style={{
          transformStyle: "preserve-3d",
          transform: angled ? "rotateY(-9deg) rotateX(3deg)" : undefined,
        }}
      >
        <span
          aria-hidden
          className="absolute top-[19%] -left-[2px] h-[4%] w-[2px] rounded-l bg-gradient-to-b from-[#4d5565] to-[#1e232c]"
        />
        <span
          aria-hidden
          className="absolute top-[26%] -left-[2px] h-[7%] w-[2px] rounded-l bg-gradient-to-b from-[#4d5565] to-[#1e232c]"
        />
        <span
          aria-hidden
          className="absolute top-[36%] -left-[2px] h-[7%] w-[2px] rounded-l bg-gradient-to-b from-[#4d5565] to-[#1e232c]"
        />
        <span
          aria-hidden
          className="absolute top-[30%] -right-[2px] h-[11%] w-[2px] rounded-r bg-gradient-to-b from-[#4d5565] to-[#1e232c]"
        />

        <div
          className="rounded-[15%/7.5%] p-[2.5%]"
          style={{
            background:
              "linear-gradient(150deg,#646c7d 0%,#2a3039 24%,#191d25 58%,#4b5364 100%)",
            boxShadow:
              "0 40px 60px -28px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.22)",
          }}
        >
          <div className="rounded-[13%/6.5%] bg-black p-[1.4%]">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[12%/6%] bg-[#06080d]">
              <div className="absolute top-[1.4%] left-1/2 z-30 flex h-[3.1%] w-[30%] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-[8%]">
                <span className="h-[38%] w-[13%] rounded-full bg-[#0f151d] ring-[0.5px] ring-white/[0.07]">
                  <span className="mt-[22%] ml-[24%] block h-[34%] w-[34%] rounded-full bg-cyan-300/20" />
                </span>
              </div>

              <div className="absolute inset-0 z-10">{children}</div>

              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-40"
                style={{
                  background:
                    "linear-gradient(118deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 11%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 78%, rgba(255,255,255,0.03) 100%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-40 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]"
              />

              <span
                aria-hidden
                className="absolute bottom-[0.9%] left-1/2 z-40 h-[0.5%] w-[32%] -translate-x-1/2 rounded-full bg-white/45"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute inset-x-[10%] -bottom-3 h-5 rounded-[50%] bg-black/65 blur-lg"
      />
    </div>
  );
}
