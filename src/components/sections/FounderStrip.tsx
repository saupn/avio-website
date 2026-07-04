import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";

const chipKeys = ["regulator", "operator", "investor"] as const;

/** Home founder strip: three-seats credibility, role chips only (no names yet). */
export async function FounderStrip() {
  const t = await getTranslations("Home.founder");

  return (
    <section className="bg-primary-pale py-20 md:py-28">
      <Container>
        <div className="max-w-3xl animate-in-section">
          {/* [PLACEHOLDER: founder name + photo — use monogram avatar until provided] */}
          <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
            {t("lead")}
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {chipKeys.map((key) => (
              <li
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                key={key}
              >
                {t(`chips.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
