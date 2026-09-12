import type { ReactNode } from "react";

import { AmbientBackground } from "@/components/layout/ambient-background";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  /** Widens the content column on very large screens so the grid can hold a fourth tile. */
  wide?: boolean;
  /** Lets the homepage hero own a wider max-width than the rest of the page. */
  fullWidth?: boolean;
};

export function ContentWidth({
  children,
  wide,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-14",
        wide && "2xl:max-w-[84rem]",
      )}
    >
      {children}
    </div>
  );
}

/** Shared chrome for every route outside the single-page homepage. */
export function PageShell({ children, wide, fullWidth }: PageShellProps) {
  return (
    <div className="relative min-h-screen max-w-[100vw] overflow-x-clip bg-[#06080d] text-white">
      <AmbientBackground />
      <SiteHeader />

      {fullWidth ? (
        <>
          <main className="pt-[var(--nav-height)]">{children}</main>
          <ContentWidth>
            <SiteFooter />
          </ContentWidth>
        </>
      ) : (
        <ContentWidth wide={wide}>
          <main className="pt-[var(--nav-height)]">{children}</main>
          <SiteFooter />
        </ContentWidth>
      )}
    </div>
  );
}
