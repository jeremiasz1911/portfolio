export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
      <div className="absolute top-[60%] -right-40 h-[24rem] w-[24rem] rounded-full bg-sky-500/[0.04] blur-[140px]" />
      <div className="premium-grid absolute inset-0 opacity-[0.28] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
    </div>
  );
}
