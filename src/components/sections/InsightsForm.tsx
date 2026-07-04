"use client";

import { useTranslations } from "next-intl";
import { type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

/**
 * Report waitlist capture skeleton (email only).
 * Submission to Firestore `report_waitlist` + success/error states are wired in T8.
 */
export function InsightsForm() {
  const t = useTranslations("InsightsPage.form");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="flex max-w-md flex-col gap-3 sm:flex-row" noValidate onSubmit={handleSubmit}>
      <div className="flex-1">
        <label className="sr-only" htmlFor="report-email">
          {t("email")}
        </label>
        <input
          autoComplete="email"
          className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          id="report-email"
          name="email"
          placeholder={t("email")}
          required
          type="email"
        />
      </div>
      <Button className="shrink-0" type="submit">
        {t("submit")}
      </Button>
    </form>
  );
}
