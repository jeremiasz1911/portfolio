"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bell, Home, Map as MapIcon, User, Vote } from "lucide-react";
import { useEffect, useState } from "react";

import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { ease } from "@/lib/motion";
import { cn } from "@/lib/utils";

const markers = [
  { left: "22%", top: "30%", delay: 0 },
  { left: "58%", top: "22%", delay: 0.5 },
  { left: "44%", top: "52%", delay: 1 },
  { left: "72%", top: "62%", delay: 1.5 },
  { left: "30%", top: "68%", delay: 2 },
];

const tabs = [MapIcon, Vote, Bell, User];

export function MobileAppScreen({ title = "Powiat Decyduje" }: { title?: string }) {
  const animate = useMotionEnabled();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!animate) return;
    const id = window.setInterval(() => setTick((value) => value + 1), 4200);
    return () => window.clearInterval(id);
  }, [animate]);

  const activeTab = tick % tabs.length;
  const showToast = animate && tick > 0 && tick % 3 === 1;

  return (
    <div className="flex h-full w-full flex-col bg-[#070a10] text-white">
      <div className="flex items-center justify-between px-[8%] pt-[3.4%] pb-[1%] text-[5.5px] text-white/55">
        <span>9:41</span>
        <div className="flex items-center gap-[3px]">
          <span className="h-[3px] w-[3px] rounded-full bg-white/50" />
          <span className="h-[3px] w-[3px] rounded-full bg-white/50" />
          <span className="h-[4px] w-[7px] rounded-[1px] border border-white/40" />
        </div>
      </div>

      <div className="px-[8%] pt-[4%]">
        <p className="text-[5px] tracking-[0.16em] text-[var(--accent)]/80 uppercase">
          budżet obywatelski
        </p>
        <h3 className="mt-[2%] text-[10px] leading-tight font-semibold">{title}</h3>
      </div>

      <div className="relative mx-[6%] mt-[4%] flex-1 overflow-hidden rounded-[8px] border border-white/[0.07] bg-[#0b1018]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,233,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(94,233,255,0.07) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
          <path
            d="M0 62 L26 48 L45 58 L68 34 L100 44"
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="2.5"
          />
          <path
            d="M18 100 L30 62 L38 30 L52 0"
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="2"
          />
        </svg>

        {markers.map((marker, index) => (
          <span
            key={index}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{ left: marker.left, top: marker.top }}
          >
            {animate ? (
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  delay: marker.delay,
                  ease: "easeInOut",
                }}
                className="block"
              >
                <MarkerPin active={index === tick % markers.length} />
              </motion.span>
            ) : (
              <MarkerPin active={index === 0} />
            )}
          </span>
        ))}

        <div className="absolute right-[6%] bottom-[6%] left-[6%] rounded-[6px] border border-white/[0.09] bg-[#0e131c]/95 p-[5%] backdrop-blur">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <span className="block h-[3px] w-[62%] rounded-full bg-white/25" />
              <span className="mt-[6px] block h-[2.5px] w-[40%] rounded-full bg-white/12" />
            </div>
            <span className="rounded-full bg-[var(--accent)]/15 px-[5px] py-[2px] text-[5px] text-[var(--accent)]">
              +12
            </span>
          </div>
          <div className="mt-[9%] h-[3px] w-full overflow-hidden rounded-full bg-white/[0.08]">
            <motion.span
              key={tick}
              initial={{ width: "12%" }}
              animate={{ width: animate ? "74%" : "74%" }}
              transition={{ duration: animate ? 1.1 : 0, ease }}
              className="block h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-violet-400"
            />
          </div>
        </div>

        <AnimatePresence>
          {showToast ? (
            <motion.div
              initial={{ y: -22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -22, opacity: 0 }}
              transition={{ duration: 0.45, ease }}
              className="absolute inset-x-[6%] top-[5%] flex items-center gap-[5px] rounded-[6px] border border-white/10 bg-[#131a25]/95 px-[5%] py-[3.5%] backdrop-blur"
            >
              <span className="grid h-[11px] w-[11px] shrink-0 place-items-center rounded-full bg-[var(--accent)]/20">
                <Bell className="h-[6px] w-[6px] text-[var(--accent)]" />
              </span>
              <span className="block h-[2.5px] flex-1 rounded-full bg-white/22" />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <nav className="mt-[4%] mb-[3%] flex items-center justify-around px-[6%]">
        {tabs.map((Icon, index) => (
          <span key={index} className="relative grid place-items-center px-[6px] py-[4px]">
            {index === activeTab ? (
              <motion.span
                layoutId="phone-tab"
                transition={{ duration: 0.4, ease }}
                className="absolute inset-0 rounded-[5px] bg-white/[0.08]"
              />
            ) : null}
            <Icon
              className={cn(
                "relative h-[9px] w-[9px] transition-colors",
                index === activeTab ? "text-[var(--accent)]" : "text-white/25",
              )}
            />
          </span>
        ))}
        <Home className="hidden" />
      </nav>
    </div>
  );
}

function MarkerPin({ active }: { active: boolean }) {
  return (
    <span className="relative block">
      <span
        className={cn(
          "block h-[9px] w-[9px] rounded-full border-2",
          active
            ? "border-[var(--accent)] bg-[var(--accent)]/40"
            : "border-white/40 bg-white/10",
        )}
      />
      {active ? (
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--accent)]/25" />
      ) : null}
    </span>
  );
}
