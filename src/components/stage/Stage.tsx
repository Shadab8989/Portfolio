import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { capabilityTabs } from "../../data/content";
import { useInView } from "../../lib/useInView";
import { CrmScene } from "./CrmScene";
import { AutomationScene } from "./AutomationScene";
import { WebMobileScene } from "./WebMobileScene";
import { IntegrationsScene } from "./IntegrationsScene";

export function Stage() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const { ref: stageRef, isInView } = useInView({ threshold: 0.15 });

  const isReducedMotion = typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const activeData = capabilityTabs[activeTab];
  const maxSteps = activeData.steps.length;

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleStepClick = (idx: number) => {
    setCurrentStep(idx);
    setIsPlaying(false);
  };

  // Pause when tab is hidden
  useEffect(() => {
    const onVisChange = () => {
      if (document.hidden) setIsPlaying(false);
    };
    document.addEventListener("visibilitychange", onVisChange);
    return () => document.removeEventListener("visibilitychange", onVisChange);
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (isReducedMotion) {
      setCurrentStep(maxSteps - 1);
      setIsPlaying(false);
      return;
    }

    if (!isPlaying || !isInView) return;

    if (currentStep >= maxSteps) {
      // Hold final state ~2s then loop
      const loopTimer = setTimeout(() => {
        setCurrentStep(0);
      }, 2000);
      return () => clearTimeout(loopTimer);
    }

    const duration = activeData.steps[currentStep].duration || 2000;
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, duration);

    return () => clearTimeout(timer);
  }, [currentStep, isPlaying, isInView, activeData, maxSteps, isReducedMotion]);

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      {/* Tabs — desktop: horizontal row, mobile: 2×2 grid */}
      <div className="flex flex-col gap-4">
        <div
          role="tablist"
          aria-label="Capabilities"
          className="grid grid-cols-2 md:flex md:items-center gap-1.5 md:gap-1"
        >
          {capabilityTabs.map((tab, idx) => {
            const selected = activeTab === idx;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => handleTabChange(idx)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    const next = (idx + 1) % capabilityTabs.length;
                    handleTabChange(next);
                    document.getElementById(`tab-${capabilityTabs[next].id}`)?.focus();
                  } else if (e.key === "ArrowLeft") {
                    const prev = (idx - 1 + capabilityTabs.length) % capabilityTabs.length;
                    handleTabChange(prev);
                    document.getElementById(`tab-${capabilityTabs[prev].id}`)?.focus();
                  }
                }}
                className={`h-11 md:h-auto whitespace-nowrap px-4 py-2 rounded-[8px] text-sm font-medium transition-all duration-150 ease-in-out outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                  selected
                    ? "bg-bg-card text-fg border border-border-strong depth-highlight light-shadow"
                    : "text-fg-sub border border-transparent hover:text-fg hover:bg-bg-card hover:border-border"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Caption */}
        <div
          role="tabpanel"
          id={`panel-${activeData.id}`}
          aria-labelledby={`tab-${activeData.id}`}
          className="animate-fade-in"
          key={activeData.id}
        >
          <p className="text-fg-sub text-sm leading-relaxed mb-1">
            {activeData.caption}
          </p>
          <p className="text-fg-muted font-mono text-[12px] uppercase tracking-wider">
            {activeData.proof}
          </p>
        </div>
      </div>

      {/* Stage Area */}
      <div
        ref={stageRef}
        className="glass rounded-[12px] overflow-hidden flex flex-col"
        style={{ minHeight: 480 }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-sub/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
              <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg-muted">
              Concept — fictional data
            </span>
          </div>

          <div className="flex items-center gap-2">
            {!isReducedMotion && (
              <>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 rounded-[6px] text-fg-muted hover:text-fg hover:bg-bg-sub transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={isPlaying ? "Pause animation" : "Play animation"}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                </button>
                <button
                  onClick={handleReplay}
                  className="p-1.5 rounded-[6px] text-fg-muted hover:text-fg hover:bg-bg-sub transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label="Replay animation"
                >
                  <RotateCcw size={14} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Scene Container */}
        <div className="flex-1 relative bg-bg-card flex flex-col">
          {/* Step Rail */}
          <div className="px-4 md:px-8 py-4 border-b border-border bg-bg-sub/20 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-4 min-w-max">
              {activeData.steps.map((step, idx) => {
                const isPast = currentStep > idx;
                const isCurrent = currentStep === idx;
                return (
                  <button
                    key={step.label}
                    onClick={() => handleStepClick(idx)}
                    className={`flex items-center gap-2 text-xs font-medium font-mono uppercase tracking-wider transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1 -mx-1 py-0.5 ${
                      isCurrent ? "text-fg" : isPast ? "text-fg-sub" : "text-fg-muted"
                    }`}
                  >
                    <span className={`flex items-center justify-center w-5 h-5 rounded-full border text-[10px] transition-colors duration-150 ${
                      isCurrent ? "border-accent bg-accent text-bg" : isPast ? "border-border-strong text-fg-sub bg-bg-card" : "border-border text-fg-muted bg-transparent"
                    }`}>
                      {isPast ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> : idx + 1}
                    </span>
                    {step.label}
                    {idx < maxSteps - 1 && (
                      <span className={`w-6 h-px ml-1 ${isPast ? "bg-accent/40" : "bg-border"}`} />
                    )}
                  </button>
                );
              })}
            </div>
            <div aria-live="polite" className="sr-only">
               Step {Math.min(currentStep + 1, maxSteps)}: {activeData.steps[Math.min(currentStep, maxSteps - 1)].label}
            </div>
          </div>

          {/* Scene Content */}
          <div className="flex-1 relative p-4 md:p-8 overflow-hidden flex items-center justify-center">
            {activeTab === 0 && <CrmScene step={currentStep} />}
            {activeTab === 1 && <AutomationScene step={currentStep} />}
            {activeTab === 2 && <WebMobileScene step={currentStep} />}
            {activeTab === 3 && <IntegrationsScene step={currentStep} />}
          </div>
        </div>
      </div>
    </div>
  );
}
