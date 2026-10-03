import { Stage } from "../components/stage/Stage";
import { Section } from "../components/ui/Section";
import { SectionHeader } from "../components/ui/SectionHeader";
import { siteConfig } from "../data/content";

export function Demo() {
  return (
    <Section id="demo">
      <SectionHeader
        eyebrow="02 — Demo"
        title={siteConfig.demoIntro.title}
        description={siteConfig.demoIntro.description}
      />
      <Stage />
    </Section>
  );
}
