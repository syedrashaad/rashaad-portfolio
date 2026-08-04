import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { FadeUp, MaskedLines } from "./Reveal";
import { COMPANY_BRAND } from "@/lib/brand";
import { EXPERIENCES } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const SIGNAL: Record<string, { pillars: string[]; metric?: { value: string; label: string } }> = {
  nexus: {
    pillars: ["Discovery", "Matching logic", "Evaluation loops"],
    metric: { value: "0→1", label: "shipped MVP" },
  },
  harrods: {
    pillars: ["Forecasting", "Segmentation", "Commercial intelligence"],
    metric: { value: "30M+", label: "transactions" },
  },
  perficient: {
    pillars: ["LLM assistants", "Retrieval", "Cloud AI infra"],
    metric: { value: "10K+", label: "daily queries" },
  },
  "code-facts": { pillars: ["Feature delivery", "Code review", "Version control"] },
  vit: {
    pillars: ["Deep CNNs", "Cryo-ET imaging", "Explainable AI"],
    metric: { value: "3D", label: "volumetric data" },
  },
};

function Item({ item, index }: { item: (typeof EXPERIENCES)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const brand = COMPANY_BRAND[item.id];
  const signal = SIGNAL[item.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-14% 0px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="group relative py-14 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <div className="flex items-center gap-4">
            <span className="eyebrow tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-6 bg-hairline" />
            <span className="text-[0.75rem] tabular-nums text-ink-faint">{item.period}</span>
          </div>
          <h3
            style={brand ? ({ ["--brand" as string]: `#${brand.hex}` } as React.CSSProperties) : undefined}
            className="display mt-5 text-[clamp(2rem,5.2vw,3.6rem)] transition-colors duration-700 group-hover:text-[var(--brand)]"
          >
            {item.company}
          </h3>
          <p className="mt-5 text-sm text-ink-soft">
            {item.role} <span className="text-ink-faint">· {item.location}</span>
          </p>
        </div>

        <div>
          <p className="max-w-xl text-[clamp(1.05rem,1.9vw,1.35rem)] leading-[1.5] tracking-[-0.02em]">
            {item.narrative}
          </p>

          <div className="mt-9 flex flex-wrap items-end gap-x-12 gap-y-6">
            {signal?.metric ? (
              <div>
                <div className="display text-[clamp(2rem,4.5vw,3.4rem)] text-forest">
                  {signal.metric.value}
                </div>
                <div className="eyebrow mt-1">{signal.metric.label}</div>
              </div>
            ) : null}
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.82rem] tracking-[0.06em] uppercase text-ink-faint">
              {signal?.pillars.map((p) => (
                <li key={p} className="transition-colors duration-500 group-hover:text-ink-soft">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="mt-9 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.08em] uppercase text-ink-faint transition-colors hover:text-forest"
          >
            {open ? "Close" : "View work"}
            <span
              className={cn(
                "inline-block transition-transform duration-500",
                open ? "rotate-90" : "group-hover:translate-x-1",
              )}
            >
              →
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.65, ease: EASE }}
                className="overflow-hidden"
              >
                <ul className="mt-7 grid max-w-2xl gap-3 border-l border-forest/25 pl-6">
                  {item.details.map((d) => (
                    <li key={d} className="text-[0.92rem] leading-relaxed text-ink-soft">
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="shell relative pb-16 pt-8 md:pb-24">
      <div className="max-w-2xl">
        <FadeUp>
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-ink-faint/60" />
            <span className="eyebrow">Where the thinking was formed</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="display text-[clamp(2rem,5vw,3.6rem)]"
          lines={[
            <span key="a">Research, engineering,</span>,
            <span key="b" className="text-ink-faint">
              then{" "}
              <span className="font-editorial italic font-normal text-forest">product.</span>
            </span>,
          ]}
        />
      </div>

      <div className="mt-8 divide-y divide-hairline/70">
        {EXPERIENCES.map((item, i) => (
          <Item key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
