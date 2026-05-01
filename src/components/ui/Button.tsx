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
    "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary",
  secondary:
    "border border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400 focus-visible:ring-neutral-400",
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
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

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
