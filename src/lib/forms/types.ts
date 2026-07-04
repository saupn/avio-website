/** Result codes returned by the form server actions; the client maps them to
 *  localized messages (keeps all user-facing copy in next-intl). */
export type FormCode = "idle" | "success" | "invalid" | "rate_limited" | "error";

export type FormResult = { code: FormCode };
