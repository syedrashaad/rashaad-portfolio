import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { FadeUp, MaskedLines, SectionHeading } from "./Reveal";
import { WORKS, type Work } from "@/lib/portfolio-data";

function WorkPanel({ work, i, total }: { work: Work; i: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const align = i % 2 === 0;

  return (
    <div ref={ref} className="sticky top-0 h-[100svh] pt-16">
      <motion.div
        style={{ scale, opacity }}
        className="flex h-full flex-col justify-center overflow-hidden rounded-t-2xl border-t border-hairline bg-paper shadow-[0_-24px_60px_-40px_rgba(20,20,18,0.35)]"
      >
        <div className="shell grid w-full gap-10 py-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className={align ? "" : "lg:order-2"}>
            <div className="flex items-center gap-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="display text-[clamp(2.4rem,6vw,4.5rem)] leading-none text-hairline"
              >
                {work.index}
              </motion.span>
              <span className="eyebrow text-forest">{work.label}</span>
            </div>

            <MaskedLines
              className="mt-5 display text-[clamp(2.6rem,7vw,6rem)]"
              lines={[work.title]}
            />

            <FadeUp delay={0.08}>
              <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
                {work.lede}
              </p>
            </FadeUp>

            {work.metrics ? (
              <FadeUp delay={0.14}>
                <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6">
                  {work.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="display text-[clamp(1.9rem,4vw,3.2rem)] text-forest">
                        {m.value}
                      </div>
                      <div className="eyebrow mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            ) : null}
          </div>

          <div className={align ? "" : "lg:order-1"}>
            <FadeUp delay={0.12}>
              <ul className="grid gap-0 border-t border-hairline">
                {work.points.map((p, idx) => (
                  <li
                    key={p}
                    className="group flex items-baseline gap-5 border-b border-hairline py-4 text-[0.92rem] text-ink-soft transition-colors duration-500 hover:text-ink"
                  >
                    <span className="eyebrow tabular-nums transition-colors group-hover:text-forest">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 eyebrow tabular-nums">
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
      <div className="shell py-24 md:py-36">
        <SectionHeading
          eyebrow="03 — Selected Work"
          title="Selected Work"
          sub="Four projects, four different distances between an idea and something people actually use."
        />
      </div>
      <div className="relative">
        {WORKS.map((w, i) => (
          <WorkPanel key={w.title} work={w} i={i} total={WORKS.length} />
        ))}
      </div>
    </section>
  );
}
