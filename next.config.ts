import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/webp"],
  },
  /**
   * Permanent redirects for routes removed in the airport-advisory repositioning.
   * Next emits 308 (permanent) — the modern, method-preserving equivalent of a 301.
   * `redirects()` runs before the next-intl proxy, so both the bare path and the
   * locale-prefixed path are covered; locale-prefixed hits keep the visitor's locale.
   */
  async redirects() {
    const removed = ["about", "products", "philosophy"];
    return removed.flatMap((path) => [
      { source: `/${path}`, destination: "/", permanent: true },
      {
        source: `/:locale(en|vi)/${path}`,
        destination: "/:locale",
        permanent: true,
      },
    ]);
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
