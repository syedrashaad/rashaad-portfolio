import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { ViewWork } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { WORKS, type Work } from "@/lib/portfolio-data";

function WorkPanel({ work, i, total }: { work: Work; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.965]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.18]);
  const align = i % 2 === 0;

  return (
    <div ref={ref} className="sticky top-0 h-[92svh] pt-14">
      <motion.div style={{ scale, opacity }} className="flex h-full flex-col justify-center bg-paper">
        <div className="shell grid w-full gap-8 py-6 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className={align ? "" : "lg:order-2"}>
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="display text-[clamp(2rem,5vw,3.6rem)] leading-none text-hairline"
              >
                {work.index}
              </motion.span>
              <span className="eyebrow text-forest">{work.label}</span>
            </div>

            <MaskedLines
              className="mt-4 display text-[clamp(2.3rem,6vw,5rem)]"
              lines={[work.title]}
            />

            <FadeUp delay={0.08}>
              <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-ink-soft">
                {work.lede}
              </p>
            </FadeUp>

            {work.metrics ? (
              <FadeUp delay={0.12}>
                <div className="mt-7 flex flex-wrap gap-x-10 gap-y-5">
                  {work.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="display text-[clamp(1.7rem,3.6vw,2.8rem)] text-forest">
                        {m.value}
                      </div>
                      <div className="eyebrow mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            ) : null}

            <FadeUp delay={0.16}>
              <ViewWork id={work.id} className="mt-7" />
            </FadeUp>
          </div>

          <div className={align ? "" : "lg:order-1"}>
            <FadeUp delay={0.12}>
              <ul className="grid gap-0 border-t border-hairline">
                {work.points.map((p, idx) => (
                  <li
                    key={p}
                    className="group flex items-baseline gap-5 border-b border-hairline py-3.5 text-[0.92rem] text-ink-soft transition-colors duration-500 hover:text-ink"
                  >
                    <span className="eyebrow tabular-nums transition-colors group-hover:text-forest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 eyebrow tabular-nums">
                {work.index} / {String(total).padStart(2, "0")}
              </div>
            </FadeUp>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section id="work" className="relative">
      <div className="shell pb-8 pt-16 md:pb-10 md:pt-24">
        <FadeUp>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-8 bg-ink-faint/60" />
            <span className="eyebrow">Selected work</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="display text-[clamp(2.1rem,5.4vw,4rem)]"
          lines={["Four things I built."]}
        />
        <FadeUp delay={0.08}>
          <p className="mt-4 max-w-lg text-ink-soft">
            Four different distances between an idea and something people actually use.
          </p>
        </FadeUp>
      </div>
      <div className="relative">
        {WORKS.map((w, i) => (
          <WorkPanel key={w.title} work={w} i={i} total={WORKS.length} />
        ))}
      </div>
    </section>
  );
}
