import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Homepage snapshot explaining Avio Group’s mission and credentials. */
export async function AboutSnapshot() {
  const t = await getTranslations("Home.whoWeAre");

  const paragraphs = ["p1", "p2", "p3"] as const;

  return (
    <section className="bg-white py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in-section space-y-6">
            <SectionHeader
              eyebrow={t("eyebrow")}
              title={t("title")}
              titleAs="h2"
            />
            <div className="space-y-4 text-base font-normal leading-relaxed text-neutral-600">
              {paragraphs.map((key) => (
                <p key={key}>{t(key)}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-md animate-in-section">
            <Image
              alt={t("imageAlt")}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src="/images/sections/about-mission.jpg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
