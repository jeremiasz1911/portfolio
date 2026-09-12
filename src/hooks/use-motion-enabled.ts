"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getSnapshot() {
  return window.matchMedia(query).matches;
}

/**
 * False when the visitor asked the OS to reduce motion — every looping animation checks this.
 * Read through an external store so hydration starts from the server value and settles after,
 * instead of tearing the tree on first paint.
 */
export function useMotionEnabled() {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, () => false);
  return !reduced;
}
