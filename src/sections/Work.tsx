import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { caseStudies } from "../data/content";

export function Work() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow="04 — Selected Work"
        title="Real systems, real results."
        description="Proof from real business systems. Confidential details omitted."
      />

      <div className="divide-y divide-border border-y border-border">
        {caseStudies.map((cs, i) => (
          <div
            key={cs.title}
            className="py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
          >
            {/* Number */}
            <span className="font-mono text-xs text-fg-muted shrink-0 pt-1">
              0{i + 1}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-fg font-semibold text-base sm:text-lg leading-snug mb-2">
                {cs.title}
              </h3>
              <p className="text-fg-sub text-sm leading-relaxed mb-4 max-w-2xl">
                {cs.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px]">
                <div className="flex gap-3 text-fg">
                  {cs.metrics.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className="flex gap-2 text-fg-muted uppercase tracking-wider">
                  {cs.tags.slice(0, 3).map((t, idx) => (
                    <span key={t}>
                      {idx > 0 && <span className="mr-2">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
