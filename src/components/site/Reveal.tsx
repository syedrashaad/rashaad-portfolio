import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const lineVariants: Variants = {
  hidden: { y: "108%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.06 * i, ease: EASE },
  }),
};

/** Line-masked heading reveal. Each child string animates from behind a mask. */
export function MaskedLines({
  lines,
  className,
  lineClassName,
  play = "inView",
  delay = 0,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  play?: "inView" | "mount";
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={className}>
      {lines.map((line, i) => (
        <span key={i} className="mask-line">
          <motion.span
            className={cn("block", lineClassName)}
            custom={i + delay * 10}
            variants={reduced ? undefined : lineVariants}
            initial={reduced ? { opacity: 0 } : "hidden"}
            {...(play === "mount"
              ? { animate: reduced ? { opacity: 1 } : "show" }
              : {
                  whileInView: reduced ? { opacity: 1 } : "show",
                  viewport: { once: true, margin: "-10% 0px" },
                })}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  className,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <FadeUp>
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-ink-faint/60" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </FadeUp>
      <MaskedLines
        lines={[title]}
        className="display text-[clamp(2.6rem,7vw,5.5rem)]"
      />
      {sub ? (
        <FadeUp delay={0.1}>
          <p className="max-w-xl text-base text-ink-soft md:text-lg">{sub}</p>
        </FadeUp>
      ) : null}
    </div>
  );
}
