import { FileCheck, PlaneTakeoff, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const layers = [
  { key: "regulatory", Icon: FileCheck },
  { key: "operational", Icon: PlaneTakeoff },
  { key: "workforce", Icon: GraduationCap },
] as const;

/** Home summary of the three service layers (details live on /services). */
export async function ServiceLayers() {
  const t = await getTranslations("Home.services");

  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {layers.map(({ key, Icon }, index) => (
            <Reveal className="h-full" delay={index * 0.08} key={key}>
              <div className="h-full rounded-lg border border-neutral-200 bg-background p-6 transition-transform duration-200 hover:-translate-y-0.5 dark:border-white/10">
                <div className="flex size-11 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon aria-hidden className="size-5" />
                </div>
                <h3 className="font-heading mt-5 text-lg font-semibold text-foreground md:text-xl">
                  {t(`${key}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {t(`${key}.summary`)}
                </p>
                <p className="mt-4 border-t border-neutral-200 pt-4 text-sm leading-relaxed text-neutral-700 dark:border-white/10 dark:text-neutral-300">
                  {t(`${key}.inPractice`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
