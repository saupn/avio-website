import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const base = "https://aviogroup.eco";

const staticPaths = [
  "",
  "/services",
  "/team",
  "/insights",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );
}
