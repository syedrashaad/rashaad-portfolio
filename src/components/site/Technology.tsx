import { useState } from "react";

import { FadeUp, MaskedLines } from "./Reveal";
import { MARQUEE_ROW_ONE, MARQUEE_ROW_TWO, STACK } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
}) {
  const [paused, setPaused] = useState(false);
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-5"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div
        className={cn(
          "flex w-max items-center gap-14 md:gap-24",
          direction === "left" ? "marquee-track-left" : "marquee-track-right",
        )}
        style={
          {
            "--marquee-duration": `${paused ? duration * 3 : duration}s`,
          } as React.CSSProperties
        }
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="shrink-0 cursor-default text-[clamp(1.1rem,2.4vw,1.9rem)] font-medium tracking-[-0.03em] text-ink-faint/70 transition-all duration-500 hover:scale-110 hover:text-forest"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper to-transparent md:w-40" />
    </div>
  );
}

export function Technology() {
  return (
    <section id="stack" className="relative pt-24 md:pt-36">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <FadeUp>
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-8 bg-ink-faint/60" />
                <span className="eyebrow">04 — Technology</span>
              </div>
            </FadeUp>
            <MaskedLines
              className="display text-[clamp(2.4rem,6.5vw,5.2rem)]"
              lines={[
                <span key="1">Tools change.</span>,
                <span key="2" className="text-ink-faint">
                  Foundations{" "}
                  <span className="font-editorial italic font-normal text-forest">don't.</span>
                </span>,
              ]}
            />
          </div>
          <FadeUp delay={0.1}>
            <p className="max-w-sm text-ink-soft lg:pb-3">
              A technical toolkit spanning AI, product, data and engineering.
            </p>
          </FadeUp>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-14 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {STACK.map((group, gi) => (
            <FadeUp key={group.title} delay={gi * 0.07}>
              <div>
                <h3 className="eyebrow mb-6">{group.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="group flex items-center gap-3 text-[0.95rem] tracking-[-0.01em] text-ink-soft transition-colors duration-300 hover:text-ink"
                    >
                      <span className="h-px w-0 bg-forest transition-all duration-500 group-hover:w-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      <div className="mt-24 border-y border-hairline py-6 md:mt-32">
        <MarqueeRow items={MARQUEE_ROW_ONE} direction="left" duration={38} />
        <div className="mx-6 h-px bg-hairline md:mx-12" />
        <MarqueeRow items={MARQUEE_ROW_TWO} direction="right" duration={46} />
      </div>
    </section>
  );
}
