import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setCondensed(v > 80));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between gap-4 transition-all duration-500",
          condensed
            ? "mt-3 w-[calc(100%-1.5rem)] max-w-4xl rounded-full border border-hairline/80 bg-paper/80 px-4 py-2.5 backdrop-blur-xl md:px-6"
            : "mt-0 w-full max-w-none rounded-none border border-transparent bg-transparent px-6 py-6 md:px-12",
        )}
      >
        <a
          href="#top"
          className="flex min-w-0 items-baseline gap-2 font-medium tracking-[-0.03em]"
        >
          <span className={cn("transition-all duration-500", condensed ? "text-sm" : "text-base")}>
            Rashaad Syed
          </span>
          <span className="hidden text-[0.65rem] tracking-[0.2em] text-ink-faint sm:inline">
            RS.
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[0.8rem] tracking-[-0.01em] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[0.75rem] tracking-[-0.01em] text-paper transition-colors hover:bg-forest"
            >
              CV <span aria-hidden>↗</span>
            </a>
          </Magnetic>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={cn(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-ink transition-transform duration-300",
              open && "-translate-y-[3px] -rotate-45",
            )}
          />
        </button>
      </motion.div>

      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pointer-events-auto fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-paper px-6"
        >
          {[...LINKS, { label: "CV ↗", href: "#contact" }].map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="display border-b border-hairline py-4 text-4xl"
            >
              {l.label}
            </motion.a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
