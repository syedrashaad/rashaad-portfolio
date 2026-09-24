import { motion } from "motion/react";

import { CompanyMark } from "./BrandMark";
import { ViewWork } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { COMPANY_BRAND } from "@/lib/brand";
import { EXPERIENCES } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const SIGNAL: Record<string, { value: string; label: string }> = {
  magpie: { value: "AI × Product", label: "roadmap & user insights" },
  nexus: { value: "0 → 1", label: "shipped MVP" },
  harrods: { value: "13M+", label: "transactions" },
  perficient: { value: "10K+", label: "daily queries" },
  "code-facts": { value: "First", label: "production codebase" },
  vit: { value: "3D", label: "volumetric imaging" },
};

function Item({ item, index }: { item: (typeof EXPERIENCES)[number]; index: number }) {
  const brand = COMPANY_BRAND[item.id];
  const signal = SIGNAL[item.id];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative grid gap-6 py-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-14 md:py-11"
    >
      <div>
        <div className="flex items-center gap-3">
          <span className="eyebrow tabular-nums">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-5 bg-hairline" />
          <span className="text-[0.72rem] tabular-nums text-ink-faint">{item.period}</span>
        </div>

        <h3 className="mt-4 text-[clamp(1.7rem,3.6vw,2.6rem)]">
          {brand ? (
            <CompanyMark
              mark={brand.mark}
              hex={brand.hex}
              className="!text-ink"
              tracking={brand.mark === brand.mark.toUpperCase() ? "0.14em" : "-0.03em"}
            />
          ) : (
            item.company
          )}
        </h3>

        <p className="mt-3 text-[0.85rem] text-ink-soft">
          {item.role} <span className="text-ink-faint">· {item.location}</span>
        </p>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <p className="max-w-xl text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.5] tracking-[-0.02em]">
          {item.narrative}
        </p>

        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          {signal ? (
            <div>
              <div className="display text-[clamp(1.6rem,3.4vw,2.4rem)] text-forest">
                {signal.value}
              </div>
              <div className="eyebrow mt-1">{signal.label}</div>
            </div>
          ) : null}
          <ViewWork id={item.id} />
        </div>
      </div>
    </motion.article>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="shell relative pb-16 pt-4 md:pb-20">
      <div className="max-w-2xl">
        <FadeUp>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-8 bg-ink-faint/60" />
            <span className="eyebrow">Where the thinking was formed</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="display text-[clamp(1.9rem,4.4vw,3.1rem)]"
          lines={[
            <span key="a">Research, engineering,</span>,
            <span key="b" className="text-ink-faint">
              then <span className="font-editorial italic font-normal text-forest">product.</span>
            </span>,
          ]}
        />
      </div>

      <div className="mt-6 divide-y divide-hairline/70">
        {EXPERIENCES.map((item, i) => (
          <Item key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
