import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { FadeUp, MaskedLines } from "./Reveal";
import { TIMELINE_STAGES } from "@/lib/portfolio-data";

const STORY =
  "I started in machine learning research — deep networks, scientific imaging, the unglamorous work of making a model behave. Engineering came next: shipping software, then enterprise AI systems that had to hold up in production. Somewhere between the data pipelines and the stakeholder rooms I realised the hardest question was never can we build it. It was should we, for whom, and how will we know it worked. That question moved me into analytics, consulting, and eventually owning products end to end.";

function EmphasisParagraph({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });
  const words = text.split(" ");

  return (
    <p
      ref={ref}
      className="flex flex-wrap text-[clamp(1.15rem,2.4vw,1.85rem)] leading-[1.45] tracking-[-0.02em]"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <EmphasisWord key={i} progress={scrollYProgress} range={[start, end]} word={word} />;
      })}
    </p>
  );
}

function EmphasisWord({
  progress,
  range,
  word,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  word: string;
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <span className="mr-[0.28em]">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="shell relative pb-20 pt-24 md:pb-28 md:pt-40">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <FadeUp>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-ink-faint/60" />
              <span className="eyebrow">About</span>
            </div>
          </FadeUp>
          <MaskedLines
            className="display text-[clamp(2.1rem,5vw,3.8rem)]"
            lines={[
              <span key="a">Engineer by</span>,
              <span key="b">foundation.</span>,
              <span key="c" className="text-ink-faint">
                Product builder
              </span>,
              <span key="d" className="text-ink-faint">
                by{" "}
                <span className="font-editorial italic font-normal text-forest">
                  evolution.
                </span>
              </span>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-16">
          <EmphasisParagraph text={STORY} />

          <div>
            <FadeUp>
              <div className="eyebrow mb-6">The progression</div>
            </FadeUp>
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-4">
              {TIMELINE_STAGES.map((stage, i) => (
                <li key={stage} className="flex items-center gap-3">
                  <FadeUp delay={i * 0.08}>
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-hairline px-3.5 py-1.5 text-[0.78rem] tracking-[-0.01em] text-ink-soft transition-colors duration-500 hover:border-forest/50 hover:text-ink">
                      <span className="h-1 w-1 rounded-full bg-forest/70" />
                      {stage}
                    </span>
                  </FadeUp>
                  {i < TIMELINE_STAGES.length - 1 ? (
                    <span aria-hidden className="text-ink-faint">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
