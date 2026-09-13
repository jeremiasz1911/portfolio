import { cn } from "@/lib/utils";

type StoreBadgesProps = {
  appStore?: string;
  playStore?: string;
  className?: string;
  appStoreLabel?: string;
  playStoreLabel?: string;
};

/** Official-style store buttons — only rendered when a real URL is provided. */
export function StoreBadges({
  appStore,
  playStore,
  className,
  appStoreLabel = "App Store",
  playStoreLabel = "Google Play",
}: StoreBadgesProps) {
  if (!appStore && !playStore) return null;

  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {appStore ? (
        <a
          href={appStore}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-white/15 bg-black px-3.5 text-white transition-colors hover:border-white/35"
        >
          <AppleGlyph />
          <span className="flex flex-col leading-none">
            <span className="text-[9px] tracking-wide text-white/55">Download on the</span>
            <span className="text-[13px] font-semibold tracking-tight">{appStoreLabel}</span>
          </span>
        </a>
      ) : null}
      {playStore ? (
        <a
          href={playStore}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-11 items-center gap-2.5 rounded-xl border border-white/15 bg-black px-3.5 text-white transition-colors hover:border-white/35"
        >
          <PlayGlyph />
          <span className="flex flex-col leading-none">
            <span className="text-[9px] tracking-wide text-white/55">Get it on</span>
            <span className="text-[13px] font-semibold tracking-tight">{playStoreLabel}</span>
          </span>
        </a>
      ) : null}
    </div>
  );
}

function AppleGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="shrink-0 fill-current">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.18 3.02-.8.88-2.12 1.56-3.24 1.46-.14-1.1.44-2.26 1.2-3.08.82-.9 2.22-1.56 3.22-1.4zM20.5 17.2c-.56 1.28-.84 1.86-1.56 3-.1.16-1.22 1.74-2.52 1.74-1.04 0-1.38-.64-2.74-.64-1.34 0-1.76.66-2.78.66-1.32 0-2.32-1.54-3.18-3.06C6.4 16.96 5.7 14.2 5.7 11.6c0-4.22 2.74-6.46 5.44-6.46 1.42 0 2.6.94 3.48.94.84 0 2.16-1 3.76-.86.62.02 2.36.24 3.48 1.86-.1.06-2.08 1.22-2.06 3.64.02 2.88 2.52 3.84.7 6.48z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden className="shrink-0">
      <path fill="#EA4335" d="M3.6 2.2 13.4 12 3.6 21.8c-.4-.3-.6-.8-.6-1.3V3.5c0-.5.2-1 .6-1.3z" />
      <path fill="#FBBC04" d="m13.4 12 2.7-2.7 4.6 2.6c.7.4.7 1.4 0 1.8l-4.6 2.6L13.4 12z" />
      <path fill="#4285F4" d="M13.4 12 3.6 2.2c.3-.2.6-.3 1-.3.4 0 .8.1 1.1.3l10.4 5.9L13.4 12z" />
      <path fill="#34A853" d="M13.4 12 15.7 14.3 5.7 21.8c-.3.2-.7.3-1.1.3-.4 0-.7-.1-1-.3L13.4 12z" />
    </svg>
  );
}
