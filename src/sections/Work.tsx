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
              <div className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 mb-2">
                <h3 className="text-fg font-semibold text-base sm:text-lg leading-snug">
                  {cs.title}
                </h3>
                {cs.badge && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-accent/10 text-accent uppercase tracking-wider border border-accent/20">
                    {cs.badge}
                  </span>
                )}
              </div>
              <p className="text-fg-sub text-sm leading-relaxed mb-4 max-w-2xl">
                {cs.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px]">
                {cs.metrics.length > 0 && (
                  <div className="flex gap-3 text-fg">
                    {cs.metrics.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 text-fg-muted uppercase tracking-wider">
                  {cs.tags.slice(0, 3).map((t, idx) => (
                    <span key={t}>
                      {idx > 0 && <span className="mr-2">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {cs.longDescription && (
                <details className="mt-4 max-w-2xl">
                  <summary className="w-fit rounded-sm font-mono text-xs text-fg-sub cursor-pointer hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
                    Project details
                  </summary>
                  <div className="mt-4 space-y-4">
                    {cs.client && (
                      <p className="font-mono text-xs text-fg-muted">Client: {cs.client}</p>
                    )}
                    <p className="text-fg-sub text-sm leading-relaxed">
                      {cs.longDescription}
                    </p>
                    {cs.highlights && cs.highlights.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-semibold text-fg uppercase tracking-wider mb-3 font-mono">Highlights</h4>
                        <ul className="text-fg-sub text-sm leading-relaxed space-y-2 list-disc pl-4 marker:text-fg-muted">
                          {cs.highlights.map((highlight) => (
                            <li key={highlight} className="pl-1">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {cs.techStack && cs.techStack.length > 0 && (
                      <div>
                        <h4 className="text-[11px] font-semibold text-fg uppercase tracking-wider mb-2 font-mono">Tech stack</h4>
                        <p className="font-mono text-xs text-fg-sub leading-relaxed">
                          {cs.techStack.join(", ")}
                        </p>
                      </div>
                    )}
                  </div>
                </details>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
