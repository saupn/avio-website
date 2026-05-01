import { setRequestLocale } from "next-intl/server";
import { AboutSnapshot } from "@/components/sections/About";
import { CTASection } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { PhilosophySection } from "@/components/sections/Philosophy";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { StatsSection } from "@/components/sections/Stats";
import { createLocalizedMetadata } from "@/lib/seo";

type HomeProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: HomeProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "home" });
}

export default async function HomePage({ params }: HomeProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <AboutSnapshot />
      <ProductShowcase />
      <PhilosophySection />
      <StatsSection />
      <CTASection />
    </>
  );
}
