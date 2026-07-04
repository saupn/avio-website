"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";
import { submitReportWaitlist } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import type { FormResult } from "@/lib/forms/types";

const initialState: FormResult = { code: "idle" };

/** Report waitlist capture (email only) → Firestore, with honeypot + states. */
export function InsightsForm() {
  const t = useTranslations("InsightsPage.form");
  const [state, formAction, pending] = useActionState(submitReportWaitlist, initialState);

  if (state.code === "success") {
    return (
      <p
        className="rounded-md border border-accent/40 bg-accent/5 p-4 text-sm font-medium text-foreground"
        role="status"
      >
        {t("success")}
      </p>
    );
  }

  const errorMessage =
    state.code === "invalid"
      ? t("invalid")
      : state.code === "rate_limited"
        ? t("rateLimited")
        : state.code === "error"
          ? t("error")
          : null;

  return (
    <form action={formAction} className="max-w-md" noValidate>
      {/* Honeypot */}
      <div
        aria-hidden
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label htmlFor="company_website_i">Company website</label>
        <input autoComplete="off" id="company_website_i" name="company_website" tabIndex={-1} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label className="sr-only" htmlFor="report-email">
            {t("email")}
          </label>
          <input
            autoComplete="email"
            className="w-full rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:border-white/20"
            id="report-email"
            name="email"
            placeholder={t("email")}
            required
            type="email"
          />
        </div>
        <Button className={`shrink-0 ${pending ? "opacity-70" : ""}`} disabled={pending} type="submit">
          {pending ? t("sending") : t("submit")}
        </Button>
      </div>

      {errorMessage ? (
        <p className="mt-3 text-sm font-medium text-red-600 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
