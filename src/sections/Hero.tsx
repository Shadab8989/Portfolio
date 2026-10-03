import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "../components/ui/Button";
import { HeroLog } from "../components/HeroLog";
import { siteConfig } from "../data/content";
import { getContactHref } from "../lib/contact";

export function Hero() {
  const scrollToDemo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="container-main">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[13px] uppercase tracking-wider text-fg-muted mb-4">
              {siteConfig.hero.eyebrow}
            </p>
            <h1 
              className="text-[clamp(2.5rem,6vw,4.25rem)] font-bold tracking-tight leading-[1.05] text-fg mb-6"
              dangerouslySetInnerHTML={{ __html: siteConfig.hero.h1 }}
            />
            <p className="text-fg-sub text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {siteConfig.hero.subtext}
            </p>

            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3">
                <Button href={getContactHref()}>
                  Discuss a project
                  <ArrowRight size={15} />
                </Button>
                <Button variant="ghost" href="#demo" onClick={scrollToDemo}>
                  See how it works
                  <ArrowDown size={15} />
                </Button>
              </div>
              <div className="mt-5 text-[13.5px] text-fg-sub flex flex-wrap items-center gap-1.5 leading-snug">
                <span>Discuss a problem</span>
                <ArrowRight size={13} className="text-fg-muted mx-0.5" />
                <span>See a prototype</span>
                <ArrowRight size={13} className="text-fg-muted mx-0.5" />
                <span>Agree on the build</span>
              </div>
            </div>

            <p className="font-mono text-[12px] text-fg-muted">
              {siteConfig.hero.proof}
            </p>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroLog />
          </div>
        </div>
      </div>
    </section>
  );
}
