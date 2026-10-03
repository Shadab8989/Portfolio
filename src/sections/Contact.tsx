import { ArrowRight, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { siteConfig } from "../data/content";
import { getContactHref, getFallbackMailto } from "../lib/contact";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="contact">
      <div className="max-w-xl">
        <p className="font-mono text-xs uppercase tracking-wider text-fg-muted mb-3">
          06 — Contact
        </p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight leading-[1.15] text-fg mb-4">
          Have a project in mind?
        </h2>
        <p className="text-fg-sub text-base leading-relaxed mb-8">
          Tell me what you're trying to build, automate or connect — I'll tell you how I can help.
        </p>

        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button href={getContactHref()}>
              Discuss a project
              <ArrowRight size={15} />
            </Button>

            <div className="flex items-center gap-3 ml-1 sm:ml-4">
              <Mail size={14} className="text-fg-muted shrink-0" />
              <span className="text-fg-sub text-sm font-mono">
                {siteConfig.email}
              </span>
              <button
                onClick={copyEmail}
                className="p-1.5 rounded-[6px] border border-border text-fg-muted hover:text-fg hover:bg-bg-sub transition-colors duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer active:scale-95"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <Check size={13} className="text-success" />
                ) : (
                  <Copy size={13} />
                )}
              </button>
            </div>
          </div>
          <a
            href={getFallbackMailto()}
            className="text-[13px] text-fg-muted hover:text-fg hover:underline transition-colors mt-[-4px]"
          >
            Use your default email app instead
          </a>
        </div>
      </div>
    </Section>
  );
}
