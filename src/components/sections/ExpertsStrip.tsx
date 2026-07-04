import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const chipKeys = ["regulators", "operators", "investors"] as const;

/** Home experts strip: collective credibility, role chips only (no names). */
export async function ExpertsStrip() {
  const t = await getTranslations("Home.experts");

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <Reveal className="max-w-3xl">
          <p className="text-lg leading-relaxed text-foreground md:text-xl">
            {t("lead")}
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {chipKeys.map((key) => (
              <li
                className="rounded-full border border-neutral-300 bg-background px-4 py-2 text-sm font-medium text-neutral-700 dark:border-white/15 dark:text-neutral-300"
                key={key}
              >
                {t(`chips.${key}`)}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
