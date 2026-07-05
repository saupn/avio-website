import { setRequestLocale } from "next-intl/server";
import { AudiencesBand } from "@/components/sections/AudiencesBand";
import { BenchStrip } from "@/components/sections/BenchStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { ExpertsStrip } from "@/components/sections/ExpertsStrip";
import { Hero } from "@/components/sections/Hero";
import { MarketMoment } from "@/components/sections/MarketMoment";
import { ServiceLayers } from "@/components/sections/ServiceLayers";
import { TheGap } from "@/components/sections/TheGap";
import { WhyNow } from "@/components/sections/WhyNow";
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
      <MarketMoment />
      <TheGap />
      <ServiceLayers />
      <AudiencesBand />
      <WhyNow />
      <ExpertsStrip />
      <BenchStrip />
      <CtaBand />
    </>
  );
}
