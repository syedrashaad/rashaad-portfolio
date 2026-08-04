import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

import portrait from "@/assets/rashaad-portrait.png.asset.json";
import { HeroVisual } from "./HeroVisual";
import { SocialActions } from "./SocialActions";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const soft = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  const portraitY = useTransform(soft, [0, 1], ["0%", "-9%"]);
  const portraitScale = useTransform(soft, [0, 1], [1, 1.06]);
  const typeY = useTransform(soft, [0, 1], ["0%", "26%"]);
  const typeOpacity = useTransform(soft, [0, 0.75], [1, 0]);
  const ghostX = useTransform(soft, [0, 1], ["0%", "-8%"]);
  const fieldScale = useTransform(soft, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] overflow-hidden pb-24 pt-28 md:pb-32 md:pt-24"
    >
      {/* soft abstract field */}
      <motion.div
        style={{ scale: fieldScale }}
        className="pointer-events-none absolute inset-x-[-10%] top-[-10%] bottom-0 opacity-[0.55]"
      >
        <HeroVisual />
      </motion.div>
      <div className="pointer-events-none absolute right-[-10%] top-[6%] h-[62vh] w-[62vh] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--forest)_16%,transparent),transparent_68%)] blur-2xl" />

      <div className="shell relative grid min-h-[calc(100svh-10rem)] items-center gap-2 md:grid-cols-[1.05fr_0.95fr] md:gap-6">
        {/* ——— type column ——— */}
        <motion.div style={{ y: typeY, opacity: typeOpacity }} className="relative z-20 order-2 md:order-1">
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
            className="text-[0.95rem] text-ink-soft"
          >
            Hey, I'm
          </motion.p>

          <span className="mask-line mt-2 block">
            <motion.span
              initial={reduced ? { opacity: 0 } : { y: "110%" }}
              animate={reduced ? { opacity: 1 } : { y: "0%" }}
              transition={{ delay: 0.35, duration: 1.05, ease: EASE }}
              className="display block text-[clamp(3.1rem,8.4vw,7rem)]"
            >
              Rashaad Syed
            </motion.span>
          </span>

          <div className="mt-7 md:mt-9">
            {[
              <>I build products</>,
              <>
                where{" "}
                <span className="font-editorial italic font-normal tracking-[-0.02em] text-forest">
                  AI
                </span>{" "}
                meets
              </>,
              <span className="text-ink-faint">real-world problems.</span>,
            ].map((line, i) => (
              <span key={i} className="mask-line block">
                <motion.span
                  initial={reduced ? { opacity: 0 } : { y: "110%" }}
                  animate={reduced ? { opacity: 1 } : { y: "0%" }}
                  transition={{ delay: 0.75 + i * 0.08, duration: 0.95, ease: EASE }}
                  className="block text-[clamp(1.35rem,3vw,2.35rem)] font-normal leading-[1.18] tracking-[-0.035em]"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.9, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.8rem] tracking-[0.16em] uppercase text-ink-faint"
          >
            <span>AI Product</span>
            <span className="h-1 w-1 rounded-full bg-forest/70" />
            <span>Product</span>
            <span className="h-1 w-1 rounded-full bg-forest/70" />
            <span>Technology</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.9, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5"
          >
            <SocialActions className="-ml-2.5" />
            <span className="flex items-center gap-2.5 text-[0.8rem] text-ink-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-forest opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-forest" />
              </span>
              London, UK
            </span>
          </motion.div>
        </motion.div>

        {/* ——— portrait column ——— */}
        <div className="relative order-1 flex justify-center md:order-2 md:justify-end">
          {/* oversized ghost type sitting behind the cutout */}
          <motion.span
            aria-hidden
            style={{ x: ghostX }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.4, ease: EASE }}
            className="display pointer-events-none absolute left-1/2 top-[46%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(5rem,17vw,15rem)] leading-none text-ink/[0.055]"
          >
            RS
          </motion.span>

          <motion.div
            style={{ y: portraitY, scale: portraitScale }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 34, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1, duration: 1.25, ease: EASE }}
            className="relative z-10 w-[min(84vw,30rem)] md:w-[min(38vw,34rem)]"
          >
            <img
              src={portrait.url}
              alt="Rashaad Syed"
              width={500}
              height={500}
              fetchPriority="high"
              decoding="async"
              style={{
                maskImage:
                  "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 88%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 68%, rgba(0,0,0,0.55) 88%, transparent 100%)",
              }}
              className="h-auto w-full select-none object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* no hard boundary — the hero dissolves downward */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="shell relative z-10 mt-4 flex items-center justify-between text-[0.7rem] tracking-[0.2em] uppercase text-ink-faint"
      >
        <span>Scroll</span>
        <span className="h-px flex-1 mx-6 bg-hairline" />
        <span>Product × AI × Technology</span>
      </motion.div>
    </section>
  );
}
