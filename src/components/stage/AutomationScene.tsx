import { FileText, Mail, FormInput, Settings2, Bell, CheckCircle2 } from "lucide-react";

interface Props {
  step: number;
}

export function AutomationScene({ step }: Props) {
  // 0: Request arrives, 1: Your rules, 2: Handled, 3: Saved, 4: Team notified
  const s = Math.min(step, 4);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8 md:gap-10 animate-fade-in py-4">

      {/* Horizontal Flow */}
      <div className="flex items-center w-full max-w-3xl justify-between relative">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-border-strong -translate-y-1/2 z-0" />

        {/* Accent flow segment */}
        {s > 0 && (
          <div
            className="absolute top-1/2 left-0 h-[1.5px] bg-accent/40 -translate-y-1/2 z-[1] transition-all duration-700 ease-in-out"
            style={{ width: `${(s / 4) * 100}%` }}
          />
        )}

        {/* 1. Input */}
        <div className={`relative z-20 flex flex-col items-center gap-2 transition-opacity duration-300 ${s >= 0 ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-12 h-12 rounded-full bg-bg-card border flex items-center justify-center depth-highlight light-shadow transition-colors duration-300 ${s === 0 ? "border-accent" : "border-border"}`}>
            <FileText size={18} className="text-fg-sub" />
          </div>
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">Arrives</span>
        </div>

        {/* 2. Rules */}
        <div className={`relative z-20 flex flex-col items-center gap-2 transition-opacity duration-300 ${s >= 1 ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-12 h-12 rounded-[8px] bg-bg-card border flex items-center justify-center depth-highlight light-shadow transition-colors duration-300 ${s === 1 ? "border-accent" : "border-border"}`}>
            <Settings2 size={18} className="text-accent" />
          </div>
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">Your rules</span>
        </div>

        {/* 3. Handled */}
        <div className={`relative z-20 flex flex-col items-center gap-2 transition-opacity duration-300 ${s >= 2 ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-12 h-12 rounded-[8px] bg-bg-card border flex items-center justify-center depth-highlight light-shadow transition-colors duration-300 ${s === 2 ? "border-accent" : "border-border"}`}>
            {s >= 2 ? <CheckCircle2 size={18} className="text-accent" /> : <Settings2 size={18} className="text-fg-muted" />}
          </div>
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">Handled</span>
        </div>

        {/* 4. Saved */}
        <div className={`relative z-20 flex flex-col items-center gap-2 transition-opacity duration-300 ${s >= 3 ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-12 h-12 rounded-[8px] bg-bg-card border flex items-center justify-center depth-highlight light-shadow transition-colors duration-300 ${s === 3 ? "border-accent" : "border-border"}`}>
            <CheckCircle2 size={18} className={s >= 3 ? "text-fg-sub" : "text-fg-muted"} />
          </div>
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">Saved</span>
        </div>

        {/* 5. Notified */}
        <div className={`relative z-20 flex flex-col items-center gap-2 transition-opacity duration-300 ${s >= 4 ? "opacity-100" : "opacity-40"}`}>
          <div className={`w-12 h-12 rounded-full bg-bg-card border flex items-center justify-center depth-highlight light-shadow transition-colors duration-300 ${s === 4 ? "border-accent" : "border-border"}`}>
            <Bell size={18} className={s >= 4 ? "text-success" : "text-fg-muted"} />
          </div>
          <span className="font-mono text-[10px] text-fg-muted uppercase tracking-wider">Notified</span>
        </div>
      </div>

      {/* Detail Panel */}
      <div className="w-full max-w-xl bg-bg-card rounded-[8px] border border-border p-4 depth-highlight light-shadow min-h-[120px] flex items-center justify-center">
        {s === 0 && (
          <div className="flex gap-3 animate-fade-in flex-wrap justify-center">
            <span className="px-3 py-1.5 border border-border rounded-[6px] text-xs font-mono text-fg-sub flex items-center gap-2 bg-bg depth-highlight"><Mail size={12}/> Email</span>
            <span className="px-3 py-1.5 border border-accent/40 rounded-[6px] text-xs font-mono text-accent flex items-center gap-2 bg-bg depth-highlight"><FileText size={12}/> Invoice</span>
            <span className="px-3 py-1.5 border border-border rounded-[6px] text-xs font-mono text-fg-sub flex items-center gap-2 bg-bg depth-highlight"><FormInput size={12}/> Form</span>
          </div>
        )}
        {s === 1 && (
          <div className="flex flex-col gap-2 font-mono text-[11px] text-fg-sub animate-fade-in w-full text-left">
            <div><span className="text-accent font-medium">IF</span> it's an invoice <span className="text-accent font-medium">→</span> send to Finance</div>
            <div><span className="text-accent font-medium">IF</span> amount &gt; $1,000 <span className="text-accent font-medium">→</span> flag for approval</div>
            <div className="text-fg-muted text-[10px] mt-1">Matched: invoice, $1,450</div>
          </div>
        )}
        {s === 2 && (
          <div className="flex flex-col gap-3 font-mono text-[11px] text-fg-sub animate-fade-in w-full">
            <div className="flex items-center justify-between">
              <span>Reading document...</span>
              <span className="text-accent font-medium">Done</span>
            </div>
            <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-accent rounded-full w-full" />
            </div>
            <div>Found: <span className="text-fg font-medium">Invoice #9982 · $1,450.00</span></div>
          </div>
        )}
        {s === 3 && (
          <div className="flex flex-col font-mono text-[11px] w-full animate-fade-in">
            <div className="grid grid-cols-4 border-b border-border pb-1 mb-2 text-fg-muted">
              <span>ID</span><span>Type</span><span>Amount</span><span>Status</span>
            </div>
            <div className="grid grid-cols-4 text-fg-sub">
              <span>9981</span><span>Invoice</span><span>$450</span><span>Saved</span>
            </div>
            <div className="grid grid-cols-4 text-fg bg-accent/8 px-1 -mx-1 py-1 rounded-sm mt-1 border-l-2 border-accent">
              <span>9982</span><span>Invoice</span><span>$1,450</span><span>Pending</span>
            </div>
          </div>
        )}
        {s === 4 && (
          <div className="flex flex-col items-center gap-2 animate-fade-in">
            <Bell className="text-success" size={20} />
            <span className="text-fg text-sm font-semibold">Finance team notified</span>
            <span className="text-fg-sub text-xs">Message sent to finance channel</span>
          </div>
        )}
      </div>
    </div>
  );
}
