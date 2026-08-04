import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const WORDS = [
  "Technology",
  "matters.",
  "But",
  "the",
  "product",
  "still",
  "has",
  "to",
  "matter",
  "to",
  "people.",
];

function Word({
  word,
  progress,
  range,
  accent,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, [8, 0]);
  return (
    <motion.span
      style={{ opacity, y }}
      className={accent ? "mr-[0.25em] font-editorial italic font-normal text-forest" : "mr-[0.25em]"}
    >
      {word}
    </motion.span>
  );
}

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });

  return (
    <section ref={ref} className="relative bg-paper-deep/50 py-32 md:py-48">
      <div className="shell flex min-h-[70svh] items-center">
        <h2 className="display flex max-w-5xl flex-wrap text-[clamp(2.2rem,7vw,5.6rem)] leading-[1.02]">
          {WORDS.map((w, i) => (
            <Word
              key={i}
              word={w}
              accent={w === "people."}
              progress={scrollYProgress}
              range={[i / WORDS.length, i / WORDS.length + 1 / WORDS.length]}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
