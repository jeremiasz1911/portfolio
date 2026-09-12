"use client";

import { motion } from "framer-motion";

import { Laptop } from "@/components/devices/laptop";
import { Phone } from "@/components/devices/phone";
import { DashboardScreen } from "@/components/devices/screens/dashboard-screen";
import { MobileAppScreen } from "@/components/devices/screens/mobile-app-screen";
import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { ease } from "@/lib/motion";

/** Laptop + phone cluster. Width comes from the right hero column. */
export function DeviceComposition() {
  const animate = useMotionEnabled();

  return (
    <div className="hero-device-cluster relative w-full min-w-0 max-w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[10%] top-1/4 z-0 h-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(94,233,255,0.14),transparent_68%)] blur-2xl"
      />

      <motion.div
        initial={animate ? { opacity: 0, y: 16 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animate ? 0.8 : 0, delay: animate ? 0.12 : 0, ease }}
        className="relative w-full min-w-0"
      >
        <Laptop>
          <DashboardScreen />
        </Laptop>
      </motion.div>

      <motion.div
        initial={animate ? { opacity: 0, y: 20 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: animate ? 0.75 : 0, delay: animate ? 0.22 : 0, ease }}
        className="hero-phone absolute bottom-0 min-w-0"
      >
        <Phone>
          <MobileAppScreen />
        </Phone>
      </motion.div>
    </div>
  );
}
