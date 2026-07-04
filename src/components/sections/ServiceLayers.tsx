import { FileCheck, PlaneTakeoff, GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";
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
          {layers.map(({ key, Icon }) => (
            <div
              className="rounded-lg border border-neutral-200 p-6 animate-in-section"
              key={key}
            >
              <div className="flex size-11 items-center justify-center rounded-md bg-primary-pale text-primary">
                <Icon aria-hidden className="size-5" />
              </div>
              <h3 className="font-heading mt-5 text-lg font-semibold text-neutral-900 md:text-xl">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                {t(`${key}.summary`)}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
