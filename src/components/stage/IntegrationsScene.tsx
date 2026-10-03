import { Box, Network, Layout, CheckCircle2, AlertTriangle, RefreshCcw } from "lucide-react";

interface Props {
  step: number;
}

export function IntegrationsScene({ step }: Props) {
  // 0: Your tools, 1: Connected, 2: Matched, 3: Kept in sync, 4: Updated
  const s = Math.min(step, 4);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center animate-fade-in relative py-4">
      <div className="flex w-full max-w-4xl justify-between items-center relative z-10">

        {/* Left: Your existing tools */}
        <div className={`flex flex-col gap-3 transition-opacity duration-300 ${s >= 0 ? "opacity-100" : "opacity-0"}`}>
          {["Gmail", "WhatsApp", "Shopify", "Amazon", "Zoho", "Other tools"].map((src) => (
            <div key={src} className="flex items-center gap-2 px-3 py-1.5 border border-border bg-bg-card rounded-[6px] depth-highlight light-shadow relative z-10">
              <Box size={12} className="text-fg-muted" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg">{src}</span>
              <div className="absolute top-1/2 -right-10 w-10 h-[1.5px] bg-border-strong -translate-y-1/2 -z-10" />
            </div>
          ))}
        </div>

        {/* Center: Integration Layer */}
        <div className={`flex flex-col items-center gap-4 transition-all duration-300 ${s >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="w-36 h-44 border-2 border-dashed border-accent/25 bg-accent-muted/5 rounded-[12px] flex flex-col items-center justify-center gap-4 p-4 relative">
            <Network size={22} className="text-accent mb-1" />

            <div className="flex flex-col gap-2 w-full">
              <div className={`flex items-center justify-between px-2 py-1 bg-bg-card border border-border rounded-sm transition-all duration-300 ${s >= 1 ? "opacity-100" : "opacity-30"}`}>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fg">Connect</span>
                {s >= 1 && <RefreshCcw size={10} className="text-accent animate-spin" style={{ animationDuration: "3s" }} />}
              </div>

              <div className={`flex items-center justify-between px-2 py-1 bg-bg-card border border-border rounded-sm transition-all duration-300 ${s >= 2 ? "opacity-100" : "opacity-30"}`}>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fg">Match</span>
                {s >= 2 && <span className="font-mono text-[9px] text-success">OK</span>}
              </div>

              <div className={`flex items-center justify-between px-2 py-1 bg-bg-card border border-border rounded-sm transition-all duration-300 ${s >= 3 ? "opacity-100" : "opacity-30"}`}>
                <span className="font-mono text-[9px] uppercase tracking-wider text-fg">Keep in sync</span>
                {s === 3 && <AlertTriangle size={10} className="text-warning" />}
                {s > 3 && <CheckCircle2 size={10} className="text-success" />}
              </div>
            </div>

            {s >= 4 && (
              <div className="absolute top-1/2 -right-3 w-2 h-2 bg-success rounded-full -translate-y-1/2 animate-ping" />
            )}
          </div>
        </div>

        {/* Right: Outputs */}
        <div className={`flex flex-col gap-8 transition-all duration-300 ${s >= 4 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
          <div className="flex items-center gap-3 relative z-10">
            <div className="absolute top-1/2 -left-10 w-10 h-[1.5px] bg-border-strong -translate-y-1/2 -z-10" />
            <div className="w-10 h-10 rounded-[8px] bg-bg-card border border-border depth-highlight light-shadow flex items-center justify-center">
              <Layout size={16} className="text-fg-sub" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg">Customer records</span>
          </div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="absolute top-1/2 -left-10 w-10 h-[1.5px] bg-border-strong -translate-y-1/2 -z-10" />
            <div className="w-10 h-10 rounded-[8px] bg-bg-card border border-border depth-highlight light-shadow flex items-center justify-center">
              <Layout size={16} className="text-fg-sub" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg">Orders</span>
          </div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="absolute top-1/2 -left-10 w-10 h-[1.5px] bg-border-strong -translate-y-1/2 -z-10" />
            <div className="w-10 h-10 rounded-[8px] bg-bg-card border border-border depth-highlight light-shadow flex items-center justify-center">
              <Layout size={16} className="text-fg-sub" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-fg">Dashboard</span>
          </div>
        </div>
      </div>

      {/* Status Line */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-bg-card border border-border rounded-full flex items-center gap-2 transition-opacity duration-300 depth-highlight ${s >= 4 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <CheckCircle2 size={14} className="text-success" />
        <span className="font-mono text-[11px] text-fg-sub uppercase tracking-wider">All tools in sync</span>
      </div>
    </div>
  );
}
