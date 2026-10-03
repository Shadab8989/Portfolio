import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { processSteps } from "../data/content";

export function Process() {
  return (
    <Section id="process">
      <SectionHeader
        eyebrow="05 — Process"
        title="How we work together."
        description="A simple path from first conversation to launch."
      />

      <div className="relative pt-4">
        {/* Connecting line — desktop only */}
        <div className="hidden lg:block absolute top-8 left-4 right-4 h-px bg-border" />
        {/* Connecting line - mobile only */}
        <div className="lg:hidden absolute top-4 bottom-4 left-[15px] w-px bg-border" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {processSteps.map((step) => (
            <div key={step.number} className="flex lg:flex-col items-start gap-4 lg:gap-0">
              <div className="w-8 h-8 rounded-full border border-border bg-bg-card flex items-center justify-center font-mono text-xs font-semibold text-fg lg:mb-5 relative z-10 shrink-0">
                {step.number}
              </div>
              <div>
                <h3 className="text-fg font-semibold text-sm mb-1.5 pt-1 lg:pt-0">
                  {step.title}
                </h3>
                <p className="text-fg-sub text-xs leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
