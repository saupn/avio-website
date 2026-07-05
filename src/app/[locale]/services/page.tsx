import { Check, FileCheck, PlaneTakeoff, GraduationCap } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { createLocalizedMetadata } from "@/lib/seo";

type ServicesRouteProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ServicesRouteProps) {
  const { locale } = await params;
  return createLocalizedMetadata({ locale, page: "services" });
}

const layers = [
  { key: "regulatory", Icon: FileCheck },
  { key: "operational", Icon: PlaneTakeoff },
  { key: "workforce", Icon: GraduationCap },
] as const;

const engagementKeys = ["teaming", "directAdvisory", "lenderAdvisor"] as const;

export default async function ServicesPage({ params }: ServicesRouteProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tNav = await getTranslations("Nav");
  const tSummary = await getTranslations("Home.services");
  const t = await getTranslations("ServicesPage");

  return (
    <>
      <section className="border-b border-neutral-200 py-16 md:py-20 dark:border-white/10">
        <Container>
          <h1 className="font-heading max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground md:text-5xl">
            {tNav("services")}
          </h1>
        </Container>
      </section>

      {layers.map(({ key, Icon }, index) => {
        const deliverables = t.raw(`layers.${key}.deliverables`) as string[];
        const tinted = index % 2 === 1;
        return (
          <section
            className={`py-16 md:py-24 ${tinted ? "bg-surface" : ""}`}
            key={key}
          >
            <Container>
              <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Icon aria-hidden className="size-5" />
                  </div>
                  <h2 className="font-heading mt-5 text-2xl font-semibold text-foreground md:text-3xl">
                    {tSummary(`${key}.title`)}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-400">
                    {t(`layers.${key}.intro`)}
                  </p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-accent">
                      {t("typicalEngagementLabel")}
                    </span>
                    <span className="mt-1 block">
                      {t(`layers.${key}.typicalEngagement`)}
                    </span>
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {deliverables.map((item) => (
                      <li className="flex gap-3 text-base text-foreground" key={item}>
                        <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 border-l-2 border-accent pl-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {t(`layers.${key}.whoFor`)}
                  </p>
                </div>
              </Reveal>
            </Container>
          </section>
        );
      })}

      <section className="border-t border-neutral-200 py-16 md:py-24 dark:border-white/10">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {engagementKeys.map((key, index) => (
              <Reveal className="h-full" delay={index * 0.08} key={key}>
                <div className="h-full rounded-lg border border-neutral-200 bg-background p-6 dark:border-white/10">
                  <h3 className="font-heading text-lg font-semibold text-foreground md:text-xl">
                    {t(`engagementModels.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {t(`engagementModels.${key}.body`)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
