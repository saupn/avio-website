import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Full-viewport marketing hero with background imagery and primary CTAs. */
export async function Hero() {
  const t = await getTranslations("Home.hero");

  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden">
      <Image
        alt={t("imageAlt")}
        className="absolute inset-0 h-full w-full object-cover"
        fill
        priority
        sizes="100vw"
        src="/images/hero/hero-bg.jpg"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-neutral-900/40"
      />
      <Container className="relative z-10 flex min-h-[85vh] flex-col justify-center py-24 md:py-28 lg:py-32">
        <div className="max-w-3xl animate-in-section text-white">
          <p className="text-xs font-medium uppercase tracking-wider text-white/80">
            {t("eyebrow")}
          </p>
          <h1 className="font-heading mt-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg font-normal leading-relaxed text-white/90 md:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button className="min-w-[180px]" href="/products">
              {t("primaryCta")}
            </Button>
            <Button className="min-w-[180px]" href="/about" variant="inverse">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
