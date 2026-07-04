import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Lora, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { routing } from "@/i18n/routing";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

// Body copy (C3). The vietnamese subset is required for correct vi diacritics.
const lora = Lora({
  subsets: ["latin", "vietnamese"],
  variable: "--font-lora",
  display: "swap",
});

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://aviogroup.eco"),
    title: {
      default: t("defaultTitle"),
      template: `%s | ${t("siteName")}`,
    },
    description: t("defaultDescription"),
  };
}

/** Locale-specific shell with fonts, i18n provider, and global chrome. */
export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Avio Group Company Limited",
    url: "https://aviogroup.eco",
    logo: "https://aviogroup.eco/images/logo/avio-logo.svg",
    description: t("defaultDescription"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quang Ninh",
      addressCountry: "VN",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "DUNS",
      value: "626314981",
    },
  };

  return (
    <html
      className={`${montserrat.variable} ${lora.variable} h-full font-sans`}
      lang={locale}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          type="application/ld+json"
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
            enableSystem
          >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
