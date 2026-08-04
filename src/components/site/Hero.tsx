import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

import p1x from "@/assets/portrait-1x.webp.asset.json";
import p2x from "@/assets/portrait-2x.webp.asset.json";
import p3x from "@/assets/portrait-3x.webp.asset.json";
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
  const portraitY = useTransform(soft, [0, 1], ["0%", "-7%"]);
  const portraitScale = useTransform(soft, [0, 1], [1, 1.045]);
  const typeY = useTransform(soft, [0, 1], ["0%", "22%"]);
  const typeOpacity = useTransform(soft, [0, 0.8], [1, 0]);
  const ghostX = useTransform(soft, [0, 1], ["0%", "-7%"]);
  const fieldScale = useTransform(soft, [0, 1], [1, 1.12]);

  // pointer depth on the portrait, capped at ~2 degrees
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rx = useSpring(tiltX, { stiffness: 140, damping: 20, mass: 0.5 });
  const ry = useSpring(tiltY, { stiffness: 140, damping: 20, mass: 0.5 });

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden pb-16 pt-24 md:pb-20 md:pt-20"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        tiltY.set(((e.clientX / window.innerWidth) * 2 - 1) * 2);
        tiltX.set(((e.clientY / window.innerHeight) * 2 - 1) * -1.4);
      }}
      onPointerLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
    >
      <motion.div
        style={{ scale: fieldScale }}
        className="pointer-events-none absolute inset-x-[-10%] top-[-10%] bottom-0 opacity-[0.6]"
      >
        <HeroVisual />
      </motion.div>
      <div className="pointer-events-none absolute left-[2%] top-[8%] h-[52vh] w-[52vh] rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--forest)_14%,transparent),transparent_68%)] blur-2xl" />

      <div className="shell relative grid min-h-[calc(100svh-9rem)] items-center gap-4 md:grid-cols-[0.98fr_1.02fr] md:gap-2">
        {/* ——— type column ——— */}
        <motion.div
          style={{ y: typeY, opacity: typeOpacity }}
          className="relative z-20 order-2 md:order-2"
        >
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
              className="display block text-[clamp(3rem,7.8vw,6.4rem)]"
            >
              Rashaad Syed
            </motion.span>
          </span>

          <div className="mt-6 md:mt-8">
            {[
              <>I build products</>,
              <>
                that put{" "}
                <span className="font-editorial italic font-normal tracking-[-0.02em] text-forest">
                  AI
                </span>{" "}
                to work
              </>,
              <span key="c" className="text-ink-faint">
                on real problems.
              </span>,
            ].map((line, i) => (
              <span key={i} className="mask-line block">
                <motion.span
                  initial={reduced ? { opacity: 0 } : { y: "110%" }}
                  animate={reduced ? { opacity: 1 } : { y: "0%" }}
                  transition={{ delay: 0.75 + i * 0.08, duration: 0.95, ease: EASE }}
                  className="block text-[clamp(1.3rem,2.8vw,2.15rem)] font-normal leading-[1.18] tracking-[-0.035em]"
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
            className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.78rem] tracking-[0.16em] uppercase text-ink-faint"
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
            className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
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

        {/* ——— portrait column, pulled toward the centre ——— */}
        <div className="relative order-1 flex justify-center md:order-2 md:-ml-[10%] md:justify-start lg:-ml-[14%]">
          <motion.span
            aria-hidden
            style={{ x: ghostX }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.4, ease: EASE }}
            className="display pointer-events-none absolute left-1/2 top-[44%] z-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[clamp(5rem,16vw,14rem)] leading-none text-ink/[0.06]"
          >
            RS
          </motion.span>

          <motion.div
            style={{
              y: portraitY,
              scale: portraitScale,
              rotateX: reduced ? 0 : rx,
              rotateY: reduced ? 0 : ry,
              transformPerspective: 1200,
            }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1.25, ease: EASE }}
            className="relative z-10 w-[min(80vw,28rem)] md:w-[min(42vw,36rem)]"
          >
            <img
              src={p2x.url}
              srcSet={`${p1x.url} 424w, ${p2x.url} 636w, ${p3x.url} 1272w`}
              sizes="(max-width: 767px) 80vw, min(42vw, 36rem)"
              alt="Rashaad Syed"
              width={424}
              height={469}
              fetchPriority="high"
              decoding="async"
              style={{
                maskImage: "linear-gradient(to bottom, #000 94%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, #000 94%, transparent 100%)",
              }}
              className="h-auto w-full select-none object-contain [image-rendering:auto]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="shell relative z-10 mt-2 flex items-center justify-between text-[0.7rem] tracking-[0.2em] uppercase text-ink-faint"
      >
        <span>Scroll</span>
        <span className="h-px flex-1 mx-6 bg-hairline" />
        <span>Product, AI, Technology</span>
      </motion.div>
    </section>
  );
}
