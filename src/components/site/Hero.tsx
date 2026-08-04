import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { HeroVisual } from "./HeroVisual";
import { Magnetic } from "./Magnetic";
import { MaskedLines } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-32 md:pb-20"
    >
      {/* intro mask */}
      {!reduced ? (
        <motion.div
          aria-hidden
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.1 }}
          className="pointer-events-none absolute inset-0 z-40 origin-top bg-paper"
        />
      ) : null}

      <motion.div
        style={{ scale: visualScale }}
        className="pointer-events-none absolute inset-y-0 right-[-18%] hidden w-[72%] opacity-90 md:block"
      >
        <HeroVisual />
      </motion.div>
      <div className="pointer-events-none absolute inset-x-0 top-24 h-[46vh] opacity-60 md:hidden">
        <HeroVisual />
      </div>

      <motion.div style={{ y, opacity }} className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-8 bg-forest/60" />
          <span className="eyebrow text-forest">Product × AI × Technology</span>
        </motion.div>

        <MaskedLines
          play="mount"
          delay={0.9}
          className="mt-8 display text-[clamp(2.9rem,9.2vw,8.2rem)] md:mt-10"
          lines={[
            <span key="1">I build intelligent</span>,
            <span key="2">
              <span className="font-editorial italic font-normal tracking-[-0.02em] text-forest">
                products
              </span>{" "}
              that move
            </span>,
            <span key="3" className="text-ink-soft">
              from idea to impact.
            </span>,
          ]}
        />

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9, ease: EASE }}
            className="max-w-md text-[0.95rem] leading-relaxed text-ink-soft md:text-base"
          >
            Product builder with a technical foundation in AI, machine learning and
            software engineering — working across product strategy, intelligent
            systems and real-world delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.9, ease: EASE }}
            className="flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <Magnetic strength={0.3}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3.5 text-sm text-paper transition-colors hover:bg-forest"
              >
                Explore my work
                <span className="transition-transform duration-500 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </Magnetic>
            <a
              href="#contact"
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              Download CV ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
          className="mt-14 flex items-center gap-3 hairline-top pt-5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest" />
          </span>
          <span className="eyebrow">London, UK</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
