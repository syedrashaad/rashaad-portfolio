import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { TechMark } from "./BrandMark";
import { FadeUp, MaskedLines } from "./Reveal";
import { TECH_ROW_ONE, TECH_ROW_TWO } from "@/lib/brand";
import { cn } from "@/lib/utils";

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
      className="relative overflow-hidden py-5"
      onPointerEnter={() => setSlow(true)}
      onPointerLeave={() => setSlow(false)}
    >
      <div
        className={cn(
          "flex w-max items-center gap-12 md:gap-20",
          direction === "left" ? "marquee-track-left" : "marquee-track-right",
        )}
        style={
          { "--marquee-duration": `${slow ? duration * 2.4 : duration}s` } as React.CSSProperties
        }
      >
        {repeated.map((brand, i) => (
          <TechMark key={`${brand.name}-${i}`} brand={brand} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent md:w-56" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent md:w-56" />
    </div>
  );
}

export function Technology() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="stack" ref={ref} className="relative overflow-hidden py-24 md:py-36">
      <div className="shell">
        <div className="max-w-xl">
          <FadeUp>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-8 bg-forest/60" />
              <span className="eyebrow text-forest">The toolkit behind it</span>
            </div>
          </FadeUp>
          <MaskedLines
            className="display text-[clamp(1.8rem,4vw,3rem)]"
            lines={[
              <span key="a">What the work is</span>,
              <span key="b" className="text-ink-faint">
                actually{" "}
                <span className="font-editorial italic font-normal text-forest">built on.</span>
              </span>,
            ]}
          />
        </div>
      </div>

      <motion.div style={{ y: drift }} className="mt-14 md:mt-20">
        <MarqueeRow items={TECH_ROW_ONE} direction="left" duration={52} />
        <MarqueeRow items={TECH_ROW_TWO} direction="right" duration={58} />
      </motion.div>
    </section>
  );
}
