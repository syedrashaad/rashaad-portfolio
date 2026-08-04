import { useEffect, useRef } from "react";

import { CompanyMark } from "./BrandMark";
import { FadeUp, MaskedLines } from "./Reveal";
import { CLIENT_BRAND } from "@/lib/brand";
import { PERFICIENT_PROJECTS } from "@/lib/portfolio-data";

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
    <section className="relative py-16 md:py-24">
      <div className="shell">
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-forest/60" />
            <span className="eyebrow text-forest">Perficient — client work</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="mt-7 display text-[clamp(2rem,5.2vw,4.2rem)]"
          lines={[
            <span key="1">Enterprise AI, ML</span>,
            <span key="2" className="text-ink-faint">
              &amp; <span className="font-editorial italic font-normal text-forest">data</span>,
              in production.
            </span>,
          ]}
        />
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-md text-ink-soft">
            Four client contexts. Each one a different shape of the same problem — making
            intelligence dependable inside a business that already works a certain way.
          </p>
        </FadeUp>
      </div>

      <div ref={sectionRef} className="mt-14 lg:mt-20 lg:h-screen lg:overflow-hidden">
        <div
          ref={trackRef}
          className="flex flex-col gap-16 px-6 md:px-12 lg:h-screen lg:flex-row lg:items-center lg:gap-[9vw] lg:pl-[8vw] lg:pr-[35vw] lg:will-change-transform"
        >
          {PERFICIENT_PROJECTS.map((p, i) => {
            const brand = CLIENT_BRAND[p.id];
            return (
              <article
                key={p.id}
                className="group flex w-full shrink-0 flex-col justify-center lg:w-[40vw]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="eyebrow tabular-nums">
                    {String(i + 1).padStart(2, "0")} / {PERFICIENT_PROJECTS.length}
                  </span>
                  <span className="h-px w-10 bg-hairline" />
                  <span className="eyebrow">{p.kicker}</span>
                </div>

                <div className="mt-7">
                  {brand ? (
                    <CompanyMark
                      mark={brand.mark}
                      hex={brand.hex}
                      tracking={brand.kind === "platform" ? "0.3em" : "0.16em"}
                      className="text-[clamp(1.4rem,2.6vw,2.2rem)]"
                    />
                  ) : (
                    <span className="display text-3xl">{p.client}</span>
                  )}
                </div>

                <p className="mt-8 max-w-lg text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.5] tracking-[-0.02em]">
                  {p.challenge}
                </p>

                <p className="mt-6 max-w-lg text-[0.92rem] leading-relaxed text-ink-soft">
                  {p.work}
                </p>

                <div className="mt-9 max-w-lg border-t border-hairline pt-5">
                  <div className="eyebrow mb-2 text-forest">Outcome</div>
                  <p className="text-[0.95rem] leading-relaxed text-ink-soft">{p.outcome}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
