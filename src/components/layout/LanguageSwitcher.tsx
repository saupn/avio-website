"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";

type LanguageSwitcherProps = {
  className?: string;
  compact?: boolean;
};

/** Switches UI locale while preserving the current path. */
export function LanguageSwitcher({
  className = "",
  compact = false,
}: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div
      className={`flex items-center gap-2 text-sm ${className}`}
    >
      {!compact ? <Globe className="size-4 text-neutral-500" aria-hidden /> : null}
      <label className="sr-only" htmlFor="language-switcher">
        Language
      </label>
      <select
        className="rounded-md border border-neutral-300 bg-background px-2 py-1 font-medium text-foreground shadow-sm transition-colors duration-200 hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/20"
        id="language-switcher"
        onChange={(e) => handleChange(e.target.value)}
        value={locale}
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc === "en" ? "English" : "Tiếng Việt"}
          </option>
        ))}
      </select>
    </div>
  );
}
