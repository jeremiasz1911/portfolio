"use client";

import { useEffect, useState } from "react";

import { trackedSections, type NavId } from "@/content/navigation";

/**
 * Tracks which section sits in the middle band of the viewport.
 * Hero keeps nav idle — no pill until a real section enters the band.
 */
export function useActiveSection() {
  const [active, setActive] = useState<NavId | null>(null);

  useEffect(() => {
    const lookup = new Map(
      trackedSections.map(({ sectionId, navId }) => [sectionId, navId]),
    );

    const elements = trackedSections
      .map(({ sectionId }) => document.getElementById(sectionId))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const commit = () => {
      if (window.scrollY < 120) {
        setActive(null);
        return;
      }

      let bestId: string | null = null;
      let bestRatio = 0;

      for (const [id, ratio] of visible) {
        if (ratio >= bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      setActive((bestId ? lookup.get(bestId) : undefined) ?? null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        }
        commit();
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6, 1],
      },
    );

    const onScroll = () => {
      if (window.scrollY < 120) setActive(null);
    };

    elements.forEach((element) => observer.observe(element));
    window.addEventListener("scroll", onScroll, { passive: true });
    commit();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return active;
}
