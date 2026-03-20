import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Keep the existing client API paths (`/auth/*` and `/tasks/*`)
    // while routing them to Next API handlers.
    return [
      // Explicitly handle the exact path (no trailing slash) too.
      { source: "/auth", destination: "/api/auth" },
      { source: "/tasks", destination: "/api/tasks" },
      { source: "/auth/:path*", destination: "/api/auth/:path*" },
      { source: "/tasks/:path*", destination: "/api/tasks/:path*" },
    ];
  },
};

export default nextConfig;
