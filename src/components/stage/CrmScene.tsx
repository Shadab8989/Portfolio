import { Mail, CheckCircle2, User, Sparkles, Tag, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "../../data/content";

interface Props {
  step: number;
}

export function CrmScene({ step }: Props) {
  // Step 0: Emails arrive (0.0s → 2.5s)
  // Step 1: Sorted (2.5s → 4.0s)
  // Step 2: Request created (4.0s → 6.0s)
  // Step 3: Assigned (6.0s → 8.0s)
  // Step 4: Reply & follow-up (8.0s → 12.0s)

  const [isResolved, setIsResolved] = useState(false);
  useEffect(() => {
    if (step === 4) {
      const timer = setTimeout(() => setIsResolved(true), 2500);
      return () => clearTimeout(timer);
    } else {
      setIsResolved(false);
    }
  }, [step]);

  const clampedStep = Math.min(step, 4);

  return (
    <div className="w-full h-full flex items-center justify-center relative animate-fade-in">
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-10 w-full max-w-4xl relative">

        {/* Left: 3 Source Inboxes */}
        <div className="flex md:flex-col justify-center gap-4 relative z-10 shrink-0">
          {["Support", "Sales", "Billing"].map((lbl, i) => (
            <div key={lbl} className="flex items-center gap-2.5 p-3 rounded-[8px] bg-bg-card border border-border depth-highlight light-shadow relative">
              <Mail size={14} className="text-fg-muted" />
              <span className="text-sm font-medium text-fg hidden md:inline">{lbl}</span>

              {/* Animated email chip token */}
              {clampedStep === 0 && (
                <div
                  className="absolute top-1/2 -right-3 h-[24px] w-[28px] rounded-[4px] bg-bg-card border border-border flex items-center justify-center -translate-y-1/2 overflow-hidden depth-highlight"
                  style={{
                    animation: `crmFlow 1.8s ease-in-out ${i * 0.35}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent rounded-l-[4px]" />
                  <Mail size={10} className="text-fg-muted ml-1" />
                </div>
              )}
            </div>
          ))}
          {/* Connector lines */}
          <div className="hidden md:block absolute top-1/2 -right-10 w-10 h-[1.5px] bg-border-strong -translate-y-1/2 -z-10" />
          <div className="hidden md:block absolute top-[18%] -right-10 w-10 h-[1.5px] bg-border-strong -z-10 origin-left rotate-[22deg]" />
          <div className="hidden md:block absolute bottom-[18%] -right-10 w-10 h-[1.5px] bg-border-strong -z-10 origin-left -rotate-[22deg]" />
        </div>

        {/* Center: Unified inbox panel */}
        <div
          className={`flex-1 w-full bg-bg-card rounded-[12px] border transition-all duration-300 depth-highlight light-shadow flex flex-col relative z-20 ${
            clampedStep === 0 ? "border-accent/40 ring-2 ring-accent/10" : "border-border"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-bg-sub/30 rounded-t-[12px]">
            <span className="text-[12px] font-medium text-fg-muted uppercase tracking-wider font-mono">
              All requests in one place
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-fg-sub">New</span>
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-mono font-medium transition-all duration-300">
                {clampedStep === 0 ? "4" : isResolved ? "0" : "1"}
              </span>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-3">
            {/* Active email row → ticket */}
            <div className={`p-4 rounded-[8px] border transition-all duration-500 ease-in-out bg-bg ${
              clampedStep >= 1 ? "border-border-strong ring-1 ring-border" : "border-border"
            }`}>
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-fg text-sm font-semibold">Sarah Mitchell</span>
                    {/* Classification (Step 1+) */}
                    <div className={`flex items-center gap-2 transition-all duration-400 ${clampedStep >= 1 ? "opacity-100" : "opacity-0 hidden"}`}>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-bg-sub border border-border text-[10px] font-medium text-fg-sub uppercase tracking-wider font-mono">
                        <Tag size={9} /> Order issue
                      </span>
                      <span className="w-2 h-2 rounded-full bg-warning" />
                    </div>
                  </div>
                  <span className="text-fg-sub text-xs">Wrong item shipped. I ordered BLU-4820 but received...</span>
                </div>
                <span className="text-fg-muted font-mono text-[10px] whitespace-nowrap">2m ago</span>
              </div>

              {/* Ticket expansion (Step 2+) */}
              <div className={`grid grid-cols-3 gap-4 pt-3 mt-3 border-t border-border transition-all duration-600 ease-in-out overflow-hidden ${clampedStep >= 2 ? "max-h-24 opacity-100" : "max-h-0 opacity-0 pt-0 mt-0 border-t-0"}`}>
                <div className="flex flex-col gap-1" style={{ transitionDelay: "0ms" }}>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fg-muted">Request ID</span>
                  <span className="text-xs font-medium text-fg font-mono">#T-2041</span>
                </div>
                <div className="flex flex-col gap-1" style={{ transitionDelay: "150ms" }}>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fg-muted">Order No.</span>
                  <span className="text-xs font-medium text-fg font-mono">ORD-8821</span>
                </div>
                <div className="flex flex-col gap-1" style={{ transitionDelay: "300ms" }}>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-fg-muted">Issue</span>
                  <span className="text-xs font-medium text-fg font-mono">Wrong item</span>
                </div>
              </div>

              {/* AI Draft (Step 4+) */}
              <div className={`mt-3 p-3 bg-accent/5 border border-accent/15 rounded-[8px] transition-all duration-600 ease-in-out overflow-hidden ${clampedStep >= 4 ? "max-h-40 opacity-100" : "max-h-0 opacity-0 mt-0 p-0 border-transparent"}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={12} className="text-accent" />
                  <span className="text-[11px] font-semibold text-fg uppercase tracking-wider font-mono">{siteConfig.crmDemo.draftLabel}</span>
                  <span className={`ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-[6px] bg-bg-card border border-border text-[10px] font-mono text-fg-sub transition-opacity duration-500 ${isResolved ? "opacity-100" : "opacity-0"}`}>
                    <Clock size={10} /> Follow-up 24h
                  </span>
                </div>
                <p className="text-fg-sub text-xs leading-relaxed border-l-2 border-accent/25 pl-3">
                  Hi Sarah, I apologise for the mix-up. I've started a replacement shipment for BLU-4820 right away. You'll receive a return label shortly.
                </p>
              </div>
            </div>

            {/* Other dimmed row */}
            <div className={`flex items-center justify-between p-3 rounded-[8px] border border-border bg-bg-sub/20 transition-opacity duration-500 ${clampedStep >= 1 ? "opacity-30" : "opacity-70"}`}>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-bg-card border border-border flex items-center justify-center text-[10px] text-fg-muted font-medium">JD</div>
                <div className="flex flex-col">
                  <span className="text-fg text-sm font-medium">Jason Davis</span>
                  <span className="text-fg-sub text-[11px]">Billing inquiry regarding invoice...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Agent Lane (Step 3+) */}
        <div className={`shrink-0 w-44 bg-bg-card border border-border rounded-[12px] flex flex-col transition-all duration-600 ease-in-out depth-highlight light-shadow ${
          clampedStep >= 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none hidden md:flex"
        }`}>
          <div className="p-3 border-b border-border bg-bg-sub/30 rounded-t-[12px]">
            <span className="font-mono text-[10px] uppercase tracking-wider text-fg-muted">Customer support</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center gap-3 flex-1">
            <div className="w-11 h-11 rounded-full bg-bg border-2 border-border-strong flex items-center justify-center text-base font-medium text-fg relative">
              AK
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-success border-2 border-bg-card" />
            </div>
            <span className="text-xs font-medium text-fg">Agent A</span>
            <div className={`w-full py-1.5 flex items-center justify-center gap-1.5 text-[10px] font-mono uppercase tracking-wider rounded-[6px] transition-colors duration-500 mt-2 ${
              isResolved ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
            }`}>
              {isResolved ? <CheckCircle2 size={11} /> : <User size={11} />}
              {isResolved ? "Resolved" : "Assigned"}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes crmFlow {
          0% { transform: translate(0, -50%); opacity: 0; }
          15% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translate(50px, -50%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
