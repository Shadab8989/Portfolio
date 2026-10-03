import { CheckCircle2 } from "lucide-react";
import { useInView } from "../lib/useInView";
import { siteConfig, heroLogSteps } from "../data/content";

export function HeroLog() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="w-full max-w-sm rounded-[12px] border border-border bg-bg-card p-6 md:p-8 depth-highlight light-shadow"
    >
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
        <span className="text-fg text-sm font-semibold">
          {siteConfig.hero.logTitle}
        </span>
        <span className="font-mono text-[10px] text-fg-muted uppercase tracking-widest bg-bg-sub px-2 py-1 rounded-sm border border-border">
          {siteConfig.hero.logBadge}
        </span>
      </div>

      <div className="flex flex-col gap-5 relative before:absolute before:top-2 before:bottom-2 before:left-[5px] before:w-px before:bg-border">
        {heroLogSteps.map((s, i) => (
          <div key={i} className="flex gap-4 relative z-10">
            <div
              className={`w-[10px] h-[10px] rounded-full mt-1 shrink-0 border-2 border-bg-card transition-colors duration-300 ${
                isInView ? "bg-accent" : "bg-border-strong"
              }`}
              style={{
                transitionDelay: isInView ? `${i * 400}ms` : "0ms",
              }}
            />
            <div>
              <span className="text-fg text-sm font-medium block mb-0.5">
                {s.label}
              </span>
              <p className="text-fg-sub text-xs leading-relaxed">
                {s.detail}
              </p>
            </div>
          </div>
        ))}
        <div className="flex gap-4 relative z-10">
          <div className="shrink-0 mt-0.5">
            <CheckCircle2
              size={12}
              className={`transition-colors duration-300 ${
                isInView ? "text-success" : "text-border-strong"
              }`}
              style={{ transitionDelay: isInView ? `${heroLogSteps.length * 400}ms` : "0ms" }}
            />
          </div>
          <span className="text-fg-sub text-xs font-medium">Done</span>
        </div>
      </div>
    </div>
  );
}
