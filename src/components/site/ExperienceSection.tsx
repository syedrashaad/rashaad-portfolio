import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { FadeUp, SectionHeading } from "./Reveal";
import { EXPERIENCES } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

function Item({ item, index }: { item: (typeof EXPERIENCES)[number]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="group relative grid gap-6 border-t border-hairline py-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-12 md:py-14"
    >
      {/* timeline rail */}
      <div className="absolute left-0 top-0 hidden h-full w-px bg-hairline md:block md:left-[4.5rem]" />
      <div className="relative flex shrink-0 items-start gap-6 md:w-[9rem]">
        <span className="eyebrow pt-1 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
        <motion.span
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-25% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-[0.45rem] hidden h-2 w-2 shrink-0 rounded-full bg-forest md:block"
        />
      </div>

      <div>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 sm:flex sm:justify-between">
          <motion.h3
            initial={{ x: -14, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="display min-w-0 text-[clamp(1.9rem,5.5vw,3.4rem)]"
          >
            {item.company}
          </motion.h3>
          <span className="shrink-0 text-[0.8rem] tabular-nums text-ink-faint">{item.period}</span>
        </div>

        <FadeUp delay={0.08}>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
            <span>{item.role}</span>
            <span className="h-3 w-px bg-hairline" />
            <span className="text-ink-faint">{item.location}</span>
          </div>
          <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-ink-soft">
            {item.narrative}
          </p>
        </FadeUp>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-7 inline-flex items-center gap-2 text-[0.78rem] tracking-[0.06em] uppercase text-ink-faint transition-colors hover:text-forest"
        >
          {open ? "Close" : "Explore"}
          <span
            className={cn(
              "inline-block transition-transform duration-500",
              open ? "rotate-45" : "",
            )}
          >
            +
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-7 grid max-w-3xl gap-3 border-l border-forest/30 pl-6">
                {item.details.map((d) => (
                  <li key={d} className="text-[0.92rem] leading-relaxed text-ink-soft">
                    {d}
                  </li>
                ))}
              </div>
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="shell py-24 md:py-36">
      <SectionHeading
        eyebrow="02 — Experience"
        title="Experience"
        sub="Building across AI, data, engineering and product."
      />
      <div className="mt-16 md:mt-24">
        {EXPERIENCES.map((item, i) => (
          <Item key={item.id} item={item} index={i} />
        ))}
        <div className="border-t border-hairline" />
      </div>
    </section>
  );
}
