import { ContentWidth, PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { CapabilitiesSection } from "@/components/sections/capabilities-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EngineeringSection } from "@/components/sections/engineering-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <PageShell fullWidth>
      <HeroSection />
      <ContentWidth>
        <ProjectsSection />
        <CapabilitiesSection />
        <EngineeringSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </ContentWidth>
    </PageShell>
  );
}
