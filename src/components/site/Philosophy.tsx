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
    <section ref={ref} className="shell relative py-12 md:py-16">
      <div className="max-w-4xl">
        <h2 className="display flex flex-wrap text-[clamp(2rem,5.5vw,4.4rem)] leading-[1.08]">
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
