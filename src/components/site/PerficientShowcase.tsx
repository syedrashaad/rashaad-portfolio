import { motion } from "motion/react";

import { CompanyMark } from "./BrandMark";
import { useCaseStudy } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { CLIENT_BRAND } from "@/lib/brand";
import { PERFICIENT_PROJECTS } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function PerficientShowcase() {
  const { open } = useCaseStudy();

  return (
    <section className="relative py-16 md:py-24">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div>
            <FadeUp>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-forest/60" />
                <span className="eyebrow text-forest">Perficient, client work</span>
              </div>
            </FadeUp>
            <MaskedLines
              className="mt-5 display text-[clamp(1.9rem,4.4vw,3.2rem)]"
              lines={[
                <span key="1">Enterprise AI, ML</span>,
                <span key="2" className="text-ink-faint">
                  and <span className="font-editorial italic font-normal text-forest">data</span>, in
                  production.
                </span>,
              ]}
            />
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-md text-ink-soft">
              Four client contexts. Each one a different version of the same problem: making
              something intelligent dependable inside a business that already works a certain way.
            </p>
          </FadeUp>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-sm bg-hairline/70 sm:grid-cols-2">
          {PERFICIENT_PROJECTS.map((p, i) => {
            const brand = CLIENT_BRAND[p.id];
            return (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => open(p.id)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
                whileHover="hover"
                whileTap={{ scale: 0.995 }}
                className="group relative flex flex-col items-start gap-4 bg-paper p-7 text-left transition-colors duration-500 hover:bg-paper-deep/40 md:p-9"
              >
                <span className="eyebrow">{p.kicker}</span>

                <span className="text-[clamp(1.15rem,2.2vw,1.7rem)]">
                  {brand ? (
                    <CompanyMark
                      mark={brand.mark}
                      hex={brand.hex}
                      tracking={brand.kind === "platform" ? "0.28em" : "0.14em"}
                    />
                  ) : (
                    p.client
                  )}
                </span>

                <span className="max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                  {p.line}
                </span>

                <span className="mt-2 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.08em] uppercase text-ink-faint transition-colors group-hover:text-forest">
                  View work
                  <motion.span
                    variants={{ hover: { x: 5 } }}
                    transition={{ type: "spring", stiffness: 420, damping: 18 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
