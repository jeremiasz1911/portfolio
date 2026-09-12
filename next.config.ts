import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // LAN preview (phone / another machine) — without this, /_next/image and chunks are blocked.
  allowedDevOrigins: ["192.168.1.19", "127.0.0.1"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
