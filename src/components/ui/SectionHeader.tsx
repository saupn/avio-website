type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

/** Eyebrow + heading + optional subtitle for marketing sections. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleAs = "h2",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";
  const TitleTag = titleAs;

  return (
    <div className={`max-w-3xl space-y-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      ) : null}
      <TitleTag
        className={
          titleAs === "h1"
            ? "font-heading text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl"
            : "font-heading text-2xl font-bold text-neutral-900 md:text-3xl lg:text-4xl"
        }
      >
        {title}
      </TitleTag>
      {description ? (
        <p className="text-lg font-normal leading-relaxed text-neutral-600 md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
