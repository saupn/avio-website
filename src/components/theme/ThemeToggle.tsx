"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  className?: string;
};

/**
 * Light/dark switch. Both icons render server-side; the active one is shown via the
 * `.dark` class (set pre-paint by next-themes), so there is no hydration mismatch
 * and no mount-guard effect.
 */
export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const t = useTranslations("Nav");
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label={t("themeToggle")}
      className={`inline-flex size-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 transition-colors hover:border-accent hover:text-accent dark:border-white/15 dark:text-neutral-300 ${className}`}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      type="button"
    >
      <Moon className="size-4 dark:hidden" />
      <Sun className="hidden size-4 dark:block" />
    </button>
  );
}
