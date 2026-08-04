import { useEffect, useRef } from "react";

import { FadeUp, MaskedLines } from "./Reveal";
import { PERFICIENT_PROJECTS } from "@/lib/portfolio-data";

const STEPS: { key: keyof StepMap; label: string; num: string }[] = [
  { key: "context", label: "Context", num: "01" },
  { key: "challenge", label: "Challenge", num: "02" },
  { key: "work", label: "What I worked on", num: "03" },
  { key: "outcome", label: "Outcome", num: "04" },
];

type StepMap = {
  context: string;
  challenge: string;
  work: string;
  outcome: string;
};

export function PerficientShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        ctx = gsap.context(() => {
          const distance = () => track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.6,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
        }, section);
      },
    );

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="relative bg-paper-deep/60 py-24 md:py-32">
      <div className="shell">
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-forest/60" />
            <span className="eyebrow text-forest">Perficient — Client work</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="mt-7 display text-[clamp(2.1rem,5.5vw,4.4rem)]"
          lines={[
            <span key="1">Enterprise AI, ML</span>,
            <span key="2">
              &amp;{" "}
              <span className="font-editorial italic font-normal text-forest">Data</span>
            </span>,
          ]}
        />
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-lg text-ink-soft">
            Four client contexts, June 2023 — October 2024. Each one a different
            shape of the same problem: making intelligence dependable inside a
            business that already works a certain way.
          </p>
        </FadeUp>
      </div>

      <div ref={sectionRef} className="mt-16 lg:mt-24 lg:h-screen lg:overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col gap-6 px-6 md:px-12 lg:h-screen lg:flex-row lg:items-center lg:gap-10 lg:pl-[4.5rem] lg:pr-[30vw] lg:will-change-transform"
        >
          {PERFICIENT_PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="group flex w-full shrink-0 flex-col justify-between rounded-lg border border-hairline bg-paper p-7 transition-colors duration-500 hover:border-forest/40 md:p-10 lg:h-[62vh] lg:w-[46vw]"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {PERFICIENT_PROJECTS.length}
                  </span>
                  <span className="eyebrow text-forest">{p.kicker}</span>
                </div>
                <h3 className="display mt-6 text-[clamp(1.8rem,3.4vw,3rem)]">{p.client}</h3>
              </div>

              <dl className="mt-8 grid gap-5 md:grid-cols-2">
                {STEPS.map((s) => (
                  <div key={s.key} className="border-t border-hairline pt-4">
                    <dt className="eyebrow mb-2 flex items-center gap-2">
                      <span className="tabular-nums text-forest">{s.num}</span>
                      {s.label}
                    </dt>
                    <dd className="text-[0.88rem] leading-relaxed text-ink-soft">
                      {p[s.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
