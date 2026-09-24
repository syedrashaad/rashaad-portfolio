import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { TechMark } from "./BrandMark";
import { FadeUp, MaskedLines } from "./Reveal";
import { TECH_ROW_ONE, TECH_ROW_TWO } from "@/lib/brand";
import { cn } from "@/lib/utils";

const TOOLKIT_CATEGORIES = [
  {
    title: "AI & ML",
    skills: [
      "LLM & RAG Architectures",
      "Vector DBs & Embeddings",
      "Document AI & Vision",
      "PyTorch & scikit-learn",
      "XGBoost Forecasting",
      "Explainable AI (XAI)",
    ],
  },
  {
    title: "Product & Strategy",
    skills: [
      "Product Discovery & Research",
      "Voice UX & Interaction Flow",
      "Roadmap & Requirement Scoping",
      "User Feedback Loops",
      "Figma & Rapid Prototyping",
      "Stakeholder Management",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "SQL & Data Pipelines",
      "Python (Pandas / NumPy)",
      "Customer Segmentation (K-Means)",
      "Time-Series & Revenue Views",
      "Power BI & Dashboards",
      "Behavioural Regime Analysis",
    ],
  },
  {
    title: "Engineering & Cloud",
    skills: [
      "TypeScript & JavaScript",
      "Node.js & React",
      "Azure & Google Cloud",
      "Docker & Containerization",
      "Stripe Payments Integration",
      "Git & CI/CD Pipelines",
    ],
  },
];

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: typeof TECH_ROW_ONE;
  direction: "left" | "right";
  duration: number;
}) {
  const [slow, setSlow] = useState(false);
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      onPointerEnter={() => setSlow(true)}
      onPointerLeave={() => setSlow(false)}
    >
      <div
        className={cn(
          "flex w-max items-center gap-12 md:gap-20",
          direction === "left" ? "marquee-track-left" : "marquee-track-right",
        )}
        style={
          { "--marquee-duration": `${slow ? duration * 2.2 : duration}s` } as React.CSSProperties
        }
      >
        {repeated.map((brand, i) => (
          <TechMark key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper to-transparent md:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper to-transparent md:w-48" />
    </div>
  );
}

export function Technology() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [22, -22]);

  return (
    <section id="stack" ref={ref} className="relative overflow-hidden pb-14 pt-16 md:pb-16 md:pt-24">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <FadeUp>
              <div className="mb-4 flex items-center gap-4">
                <span className="h-px w-8 bg-forest/60" />
                <span className="eyebrow text-forest">The toolkit behind it</span>
              </div>
            </FadeUp>
            <MaskedLines
              className="display text-[clamp(1.7rem,3.6vw,2.6rem)]"
              lines={[
                <span key="a">The tools change.</span>,
                <span key="b" className="text-ink-faint">
                  The way I work{" "}
                  <span className="font-editorial italic font-normal text-forest">doesn't.</span>
                </span>,
              ]}
            />
          </div>
          <FadeUp delay={0.08}>
            <p className="max-w-sm text-[0.95rem] text-ink-soft">
              Across AI, product, data, and engineering, these are the core capabilities and toolsets applied across real-world enterprise and commercial systems.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOOLKIT_CATEGORIES.map((cat, idx) => (
            <FadeUp key={cat.title} delay={0.05 * idx}>
              <div className="h-full rounded-sm border border-hairline/70 bg-paper-deep/20 p-6 flex flex-col justify-between hover:border-hairline transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest" />
                    <h3 className="eyebrow text-ink tracking-[0.12em]">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="text-[0.88rem] text-ink-soft flex items-center gap-2">
                        <span className="text-forest/60 text-[0.7rem]">→</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <motion.div style={{ y: drift }} className="mt-14 md:mt-16">
        <MarqueeRow items={TECH_ROW_ONE} direction="left" duration={52} />
        <MarqueeRow items={TECH_ROW_TWO} direction="right" duration={58} />
      </motion.div>
    </section>
  );
}
