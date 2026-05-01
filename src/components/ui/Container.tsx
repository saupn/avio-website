import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Max-width page wrapper with responsive horizontal padding. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
