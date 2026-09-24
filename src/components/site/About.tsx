import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { FadeUp, MaskedLines } from "./Reveal";
import { TIMELINE_STAGES } from "@/lib/portfolio-data";

const STORY_PART_ONE =
  "I started with software engineering and ML research, then moved closer to the problems behind the technology: understanding users, defining what to build, working with engineers, and measuring whether it actually worked.";

const STORY_PART_TWO =
  "My work has ranged from AI products and LLM systems to demand forecasting, document automation and B2B eCommerce. I like working on products where the problem is still a little messy and the solution needs both product thinking and technical depth.";

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
      className="flex flex-wrap text-[clamp(1.1rem,2.2vw,1.65rem)] leading-[1.5] tracking-[-0.015em] text-ink"
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
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <span className="mr-[0.3em] inline-block">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="shell relative pb-14 pt-16 md:pb-20 md:pt-28">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <FadeUp>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-8 bg-ink-faint/60" />
              <span className="eyebrow">About</span>
            </div>
          </FadeUp>
          <MaskedLines
            className="display text-[clamp(2.1rem,4.8vw,3.6rem)]"
            lines={[
              <span key="a">Engineer by foundation.</span>,
              <span key="b" className="text-ink-faint">
                Product builder{" "}
                <span className="font-editorial italic font-normal text-forest">by evolution.</span>
              </span>,
            ]}
          />
        </div>

        <div className="flex flex-col gap-10">
          <EmphasisParagraph text={STORY_PART_ONE} />
          <EmphasisParagraph text={STORY_PART_TWO} />

          <div className="pt-4">
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
