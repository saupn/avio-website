import { type ReactNode } from "react";
import { Link } from "@/i18n/routing";

type ButtonVariant = "primary" | "secondary" | "inverse";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  type?: never;
};

type ButtonNativeProps = ButtonBaseProps & {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
};

export type ButtonProps = ButtonLinkProps | ButtonNativeProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent-strong focus-visible:ring-accent",
  secondary:
    "border border-neutral-300 bg-transparent text-foreground hover:border-accent hover:text-accent focus-visible:ring-accent dark:border-white/20",
  inverse:
    "border border-white/40 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white",
};

/** Accessible button or `Link` styled consistently. */
export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
  } = props;
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles = `${base} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link className={styles} href={props.href}>
        {children}
      </Link>
    );
  }

  const native = props as ButtonNativeProps;
  return (
    <button
      className={styles}
      disabled={native.disabled}
      type={native.type ?? "button"}
    >
      {children}
    </button>
  );
}
