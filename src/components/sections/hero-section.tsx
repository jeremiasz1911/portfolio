"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { SocialLinks } from "@/components/layout/social-links";
import { DeviceComposition } from "@/components/sections/hero/device-composition";
import { Button } from "@/components/ui/button";
import { profilePhoto } from "@/content/profile";
import { useMotionEnabled } from "@/hooks/use-motion-enabled";
import { useLanguage } from "@/i18n/language-provider";
import { ease } from "@/lib/motion";

export function HeroSection() {
  const { t } = useLanguage();
  const motionOn = useMotionEnabled();

  const fadeUp = (delay = 0) =>
    motionOn
      ? {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease },
        }
      : { initial: false, animate: { opacity: 1, y: 0 } };

  return (
    <section
      id="hero"
      className="relative isolate flex flex-col py-8 min-[1200px]:min-h-[calc(100svh-var(--nav-height))] min-[1200px]:justify-center min-[1200px]:py-0"
    >
      <div
        aria-hidden
        className="hero-bg pointer-events-none absolute inset-0"
      />

      <div className="hero-frame">
        <div className="hero-grid">
          <div className="hero-slot" aria-hidden />

          <div className="hero-copy">
            <div className="hero-portrait" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profilePhoto.src}
                alt=""
                width={profilePhoto.width}
                height={profilePhoto.height}
                decoding="async"
              />
            </div>

            <div className="hero-copy-content">
              <motion.p {...fadeUp(0)} className="hero-badge">
                <span className="hero-badge-dot" aria-hidden />
                {t.hero.badge}
              </motion.p>

              <motion.h1 {...fadeUp(0.05)} className="hero-title">
                {t.hero.title}
              </motion.h1>

              <motion.p {...fadeUp(0.1)} className="hero-subtitle">
                {t.hero.subtitle}
              </motion.p>

              <motion.p {...fadeUp(0.14)} className="hero-intro">
                {t.hero.intro}
              </motion.p>

              <motion.div {...fadeUp(0.2)} className="hero-actions">
                <div className="hero-cta">
                  <Button href="#work" className="hero-cta-btn">
                    {t.hero.primaryCta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button
                    href="#contact"
                    variant="secondary"
                    className="hero-cta-btn"
                  >
                    {t.hero.secondaryCta}
                  </Button>
                </div>

                <SocialLinks size="sm" className="hero-social" />
              </motion.div>
            </div>
          </div>

          <div className="hero-devices">
            <DeviceComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
