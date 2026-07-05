import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Home hero: photographic background (LCP) with a navy scrim for legibility.
 * Text is forced light in BOTH themes because it sits on the photo.
 */
export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 dark:border-white/10">
      <Image
        alt={t("imageAlt")}
        className="object-cover object-[72%_center] md:object-center"
        fill
        priority
        sizes="100vw"
        src="/images/hero/hero-bg.jpg"
      />
      {/* Scrim: ~85% navy behind the left text block, fading to ~20% on the right. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#0e1420]/85 via-[#0e1420]/60 to-[#0e1420]/20"
      />

      <Container className="relative flex min-h-[560px] flex-col justify-center py-24 md:min-h-[640px] md:py-32 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white md:text-5xl lg:text-[3.4rem]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="min-w-[180px]" href="/contact">
              {t("primaryCta")}
            </Button>
            <Button className="min-w-[180px]" href="/services" variant="inverse">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
