import {
  Zap,
  Layout,
  Globe,
  Plug,
  Smartphone,
  Database,
} from "lucide-react";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { services } from "../data/content";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  Database,
  Zap,
  Layout,
  Globe,
  Plug,
  Smartphone,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow="03 — Services"
        title="What I can build."
        description="Custom software and automation built around how your business actually works."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-border">
        {services.map((svc) => {
          const Icon = iconMap[svc.icon];
          return (
            <div key={svc.title} className="p-6 md:p-8 border-b border-r border-border hover:bg-bg-sub/30 transition-colors">
              <div className="w-10 h-10 rounded-[8px] border border-border bg-bg flex items-center justify-center mb-5">
                {Icon && <Icon size={18} className="text-fg-sub" />}
              </div>
              <h3 className="text-fg font-semibold text-sm mb-2">
                {svc.title}
              </h3>
              <p className="text-fg-sub text-xs leading-relaxed">
                {svc.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
