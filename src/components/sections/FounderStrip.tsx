import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";

const chipKeys = ["regulator", "operator", "investor"] as const;

/** Home founder strip: three-seats credibility, role chips only (no names yet). */
export async function FounderStrip() {
  const t = await getTranslations("Home.founder");
  const tNav = await getTranslations("Nav");

  return (
    <section className="bg-surface py-20 md:py-28">
      <Container>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
          {/* [PLACEHOLDER: founder name + photo — monogram avatar until provided] */}
          <div className="flex size-20 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-background dark:border-white/15">
            <Image
              alt={tNav("logoAlt")}
              className="h-9 w-auto dark:hidden"
              height={36}
              src="/images/logo/avio-logo.svg"
              style={{ width: "auto", height: "auto" }}
              width={40}
            />
            <Image
              alt={tNav("logoAlt")}
              className="hidden h-9 w-auto dark:block"
              height={36}
              src="/images/logo/avio-logo-white.svg"
              style={{ width: "auto", height: "auto" }}
              width={40}
            />
          </div>

          <div className="max-w-2xl">
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
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
