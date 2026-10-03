import { Layout, Smartphone, PenTool, CheckCircle2 } from "lucide-react";

interface Props {
  step: number;
}

export function WebMobileScene({ step }: Props) {
  // 0: Your idea, 1: Wireframe, 2: Interface, 3: Finished product
  const s = Math.min(step, 3);

  return (
    <div className="w-full h-full flex items-center justify-center animate-fade-in relative">

      {/* 0: Your idea */}
      {s === 0 && (
        <div className="flex flex-col items-center gap-4 animate-fade-in">
          <PenTool size={28} className="text-fg-muted" />
          <p className="font-mono text-xs uppercase tracking-widest text-fg-sub">Your workflow</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-xs mt-2">
            <span className="px-3 py-1.5 rounded-[6px] border border-border text-xs text-fg-sub bg-bg-card depth-highlight">Capture data</span>
            <span className="px-3 py-1.5 rounded-[6px] border border-border text-xs text-fg-sub bg-bg-card depth-highlight">Review process</span>
            <span className="px-3 py-1.5 rounded-[6px] border border-border text-xs text-fg-sub bg-bg-card depth-highlight">Dashboard view</span>
          </div>
        </div>
      )}

      {/* 1: Wireframe */}
      {s === 1 && (
        <div className="flex flex-col md:flex-row gap-6 animate-fade-in items-center">
          <div className="w-64 h-40 border-2 border-dashed border-border-strong rounded-[8px] p-4 flex flex-col gap-3 bg-bg-card">
            <div className="w-1/3 h-2.5 bg-border-strong rounded-full" />
            <div className="w-full h-12 bg-border rounded-sm" />
            <div className="w-full h-12 bg-border rounded-sm" />
          </div>
          <div className="w-24 h-40 border-2 border-dashed border-border-strong rounded-[12px] p-2 flex flex-col gap-2 bg-bg-card">
            <div className="w-full h-16 bg-border rounded-sm" />
            <div className="w-1/2 h-2 bg-border-strong rounded-full" />
            <div className="w-3/4 h-2 bg-border-strong rounded-full" />
          </div>
        </div>
      )}

      {/* 2: Interface & 3: Finished product */}
      {s >= 2 && (
        <div className="flex flex-col md:flex-row gap-8 animate-fade-in items-center">
          {/* Web App */}
          <div className={`w-72 h-48 border rounded-[8px] bg-bg depth-highlight light-shadow flex flex-col overflow-hidden transition-all duration-500 ${s === 3 ? "border-border-strong" : "border-border"}`}>
            <div className="h-6 border-b border-border bg-bg-sub/50 flex items-center px-2 gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
              <span className="w-1.5 h-1.5 rounded-full bg-border-strong" />
            </div>
            <div className="p-3 flex gap-3 h-full">
              <div className="w-12 h-full border-r border-border flex flex-col gap-2">
                <div className="w-6 h-6 rounded bg-bg-sub mb-2" />
                <div className="w-4 h-4 rounded-sm bg-accent/20 text-accent flex items-center justify-center"><Layout size={8} /></div>
                <div className="w-4 h-4 rounded-sm bg-bg-sub" />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="w-1/2 h-2 bg-fg-muted rounded-full mb-1" />
                <div className="w-full h-10 border border-border rounded-sm bg-bg-card p-1.5 flex items-center justify-between">
                  <div className="flex flex-col gap-1"><div className="w-12 h-1 bg-fg-sub rounded-full"/><div className="w-8 h-1 bg-fg-muted rounded-full"/></div>
                  <span className="w-4 h-4 rounded-full bg-success/15 flex items-center justify-center"><CheckCircle2 size={8} className="text-success" /></span>
                </div>
                <div className="w-full h-10 border border-border rounded-sm bg-bg-card p-1.5 flex items-center justify-between">
                  <div className="flex flex-col gap-1"><div className="w-16 h-1 bg-fg-sub rounded-full"/><div className="w-6 h-1 bg-fg-muted rounded-full"/></div>
                  <span className="w-4 h-4 rounded-full bg-success/15 flex items-center justify-center"><CheckCircle2 size={8} className="text-success" /></span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className={`w-32 h-56 border-[3px] border-fg/80 rounded-[20px] bg-bg overflow-hidden flex flex-col transition-all duration-500`}>
            <div className="h-4 w-full flex justify-center mt-1"><div className="w-10 h-2 bg-fg/50 rounded-full" /></div>
            <div className="p-3 flex flex-col gap-2 flex-1 mt-2">
              <div className="w-2/3 h-2 bg-fg-muted rounded-full mb-2" />
              <div className="w-full h-12 bg-accent rounded-[6px] p-2 flex flex-col justify-between">
                <Smartphone size={10} className="text-bg" />
                <div className="w-1/2 h-1 bg-bg/40 rounded-full" />
              </div>
              <div className="flex gap-2">
                <div className="w-full h-10 border border-border rounded-[6px] bg-bg-card" />
                <div className="w-full h-10 border border-border rounded-[6px] bg-bg-card" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
