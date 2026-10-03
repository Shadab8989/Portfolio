interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeader({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-3">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.15] text-fg mb-3">
        {title}
      </h2>
      <p className="text-fg-sub text-base leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
}
