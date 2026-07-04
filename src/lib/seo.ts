import { type Locale } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

const base = new URL("https://aviogroup.eco");

type PageKey =
  | "home"
  | "services"
  | "team"
  | "insights"
  | "contact"
  | "privacy"
  | "terms";

const pathByKey: Record<PageKey, string> = {
  home: "",
  services: "services",
  team: "team",
  insights: "insights",
  contact: "contact",
  privacy: "privacy-policy",
  terms: "terms-of-service",
};

/** Builds localized SEO metadata with canonical, hreflang, and OpenGraph image. */
export async function createLocalizedMetadata(options: {
  locale: string;
  page: PageKey;
}): Promise<Metadata> {
  const locale = options.locale as Locale;
  const pathSegment = pathByKey[options.page];
  const path = pathSegment ? `/${pathSegment}` : "";
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const pageNs = options.page;
  const title = t(`${pageNs}.title`);
  const description = t(`${pageNs}.description`);
  const canonical = `${base.href}${locale}${path}`;
  const ogImage =
    locale === "vi" ? "/images/og/og-image-vi.jpg" : "/images/og/og-image-en.jpg";

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${base.href}en${path}`,
        vi: `${base.href}vi${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: t("siteName"),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
