"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const tabs = ["Overview", "Deploys", "Automations"];

const series = [
  [38, 52, 44, 66, 58, 79, 71, 88, 76, 94],
  [58, 42, 70, 54, 82, 63, 91, 74, 86, 68],
  [44, 61, 55, 73, 66, 85, 78, 69, 92, 81],
];

const activity = [
  { label: "build passed", tone: "bg-emerald-400" },
  { label: "function deployed", tone: "bg-sky-400" },
  { label: "report generated", tone: "bg-violet-400" },
  { label: "webhook received", tone: "bg-amber-400" },
];

export function DashboardScreen() {
  const animate = useMotionEnabled();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const id = window.setInterval(() => setTick((value) => value + 1), 3400);
    return () => window.clearInterval(id);
  }, [animate]);

  const tabIndex = tick % tabs.length;
  const bars = series[tabIndex];

  return (
    <div className="flex h-full w-full bg-[#080b11] text-white">
      <aside className="flex w-[13%] flex-col items-center gap-[9%] border-r border-white/[0.06] bg-black/30 py-[5%]">
        <span className="h-[7px] w-[7px] rounded-[2px] bg-[var(--accent)]" />
        {[0, 1, 2, 3, 4].map((item) => (
          <span
            key={item}
            className={cn(
              "h-[5px] w-[55%] rounded-full",
              item === 1 ? "bg-white/45" : "bg-white/12",
            )}
          />
        ))}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/[0.06] px-[3.5%] py-[2.4%]">
          <div className="flex items-center gap-[6px]">
            {tabs.map((tab, index) => (
              <span key={tab} className="relative px-[5px] py-[3px]">
                {index === tabIndex ? (
                  <motion.span
                    layoutId="screen-tab"
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-0 rounded-[3px] bg-white/[0.09]"
                  />
                ) : null}
                <span
                  className={cn(
                    "relative text-[6.5px] tracking-wide",
                    index === tabIndex ? "text-white/85" : "text-white/30",
                  )}
                >
                  {tab}
                </span>
              </span>
            ))}
          </div>
          <div className="flex items-center gap-[5px]">
            <span className="rounded-full bg-emerald-400/15 px-[6px] py-[2px] text-[5.5px] text-emerald-300">
              live
            </span>
            <span className="h-[9px] w-[9px] rounded-full bg-gradient-to-br from-violet-400/70 to-cyan-400/70" />
          </div>
        </header>

        <div className="grid flex-1 grid-cols-[1.65fr_1fr] gap-[3%] p-[3.5%]">
          <div className="flex min-w-0 flex-col gap-[6%]">
            <div className="grid grid-cols-3 gap-[5%]">
              {[0, 1, 2].map((card) => (
                <div
                  key={card}
                  className="rounded-[4px] border border-white/[0.07] bg-white/[0.025] p-[9%]"
                >
                  <span className="block h-[3px] w-[60%] rounded-full bg-white/12" />
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${card}-${tabIndex}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.35, ease }}
                      className="mt-[14%] block text-[9px] leading-none font-semibold text-white/90"
                    >
                      {[
                        ["1.2k", "312", "98%"],
                        ["842", "126", "99%"],
                        ["2.4k", "487", "97%"],
                      ][tabIndex][card]}
                    </motion.span>
                  </AnimatePresence>
                  <span
                    className={cn(
                      "mt-[12%] block h-[2px] w-[38%] rounded-full",
                      card === 0 && "bg-[var(--accent)]/70",
                      card === 1 && "bg-violet-400/60",
                      card === 2 && "bg-emerald-400/60",
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="flex min-h-0 flex-1 flex-col rounded-[4px] border border-white/[0.07] bg-white/[0.02] p-[4%]">
              <div className="flex items-center justify-between">
                <span className="h-[3px] w-[22%] rounded-full bg-white/15" />
                <span className="h-[3px] w-[10%] rounded-full bg-white/08" />
              </div>
              <div className="mt-auto flex h-[62%] items-end gap-[2.2%]">
                {bars.map((height, index) => (
                  <motion.span
                    key={`${tabIndex}-${index}`}
                    initial={{ height: "8%", opacity: 0.4 }}
                    animate={{ height: `${height}%`, opacity: 1 }}
                    transition={{
                      duration: animate ? 0.7 : 0,
                      delay: animate ? index * 0.045 : 0,
                      ease,
                    }}
                    className="flex-1 rounded-t-[1.5px] bg-gradient-to-t from-[var(--accent)]/25 to-[var(--accent)]/80"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-[6%]">
            <div className="rounded-[4px] border border-white/[0.07] bg-white/[0.02] p-[7%]">
              <span className="block h-[3px] w-[45%] rounded-full bg-white/15" />
              <div className="mt-[10%] space-y-[7px]">
                {activity.map((item, index) => (
                  <motion.div
                    key={`${item.label}-${tabIndex}`}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: animate ? 0.4 : 0,
                      delay: animate ? 0.1 + index * 0.09 : 0,
                      ease,
                    }}
                    className="flex items-center gap-[5px]"
                  >
                    <span className={cn("h-[3px] w-[3px] rounded-full", item.tone)} />
                    <span className="h-[2.5px] flex-1 rounded-full bg-white/10" />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex-1 rounded-[4px] border border-white/[0.07] bg-white/[0.02] p-[7%]">
              <span className="block h-[3px] w-[35%] rounded-full bg-white/15" />
              <div className="mt-[12%] space-y-[6px]">
                {[70, 52, 84, 41].map((width, index) => (
                  <div key={index} className="h-[2.5px] w-full rounded-full bg-white/[0.06]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${width}%` }}
                      transition={{
                        duration: animate ? 0.9 : 0,
                        delay: animate ? index * 0.1 : 0,
                        ease,
                      }}
                      className="h-full rounded-full bg-white/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {animate ? (
        <motion.span
          aria-hidden
          initial={{ left: "58%", top: "70%" }}
          animate={{
            left: ["58%", "34%", "76%", "58%"],
            top: ["70%", "38%", "52%", "70%"],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute z-40 h-[7px] w-[7px] rounded-full border border-white/70 bg-white/25 shadow-[0_0_8px_rgba(255,255,255,0.35)]"
        />
      ) : null}
    </div>
  );
}
