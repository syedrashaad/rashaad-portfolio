import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { CaseStudyProvider } from "@/components/site/CaseStudy";
import { Contact } from "@/components/site/Contact";
import { Education } from "@/components/site/Education";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { Hero } from "@/components/site/Hero";
import { Nav } from "@/components/site/Nav";
import { PerficientShowcase } from "@/components/site/PerficientShowcase";
import { Philosophy } from "@/components/site/Philosophy";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { SelectedWork } from "@/components/site/SelectedWork";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Technology } from "@/components/site/Technology";

const TITLE = "Rashaad Syed — AI Product, Product & Technology";
const DESCRIPTION =
  "Rashaad Syed builds products where AI meets real-world problems — product strategy, intelligent systems and enterprise delivery. London, UK.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <CaseStudyProvider>
      <SmoothScroll />
      <ScrollProgress />
      <Nav />
      <main>
        <h1 className="sr-only">
          Rashaad Syed — AI product builder working across product, AI and technology
        </h1>
        <Hero />
        <About />
        <ExperienceSection />
        <PerficientShowcase />
        <SelectedWork />
        <Technology />
        <Philosophy />
        <Education />
        <Contact />
      </main>
    </CaseStudyProvider>
  );
}
