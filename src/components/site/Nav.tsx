import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { Magnetic } from "./Magnetic";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const last = useRef(0);

  useMotionValueEvent(scrollY, "change", (v) => {
    setCondensed(v > 80);
    const delta = v - last.current;
    if (Math.abs(delta) > 6) {
      setHidden(delta > 0 && v > 240);
      last.current = v;
    }
  });

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => !!el,
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{ y: hidden && !open ? "-140%" : "0%" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto mx-auto flex items-center justify-between gap-4 transition-all duration-700",
          condensed
            ? "mt-3 w-[calc(100%-1.5rem)] max-w-2xl rounded-full border border-hairline/70 bg-paper/70 px-4 py-1.5 backdrop-blur-xl md:px-5"
            : "mt-0 w-full max-w-none rounded-none border border-transparent bg-transparent px-6 py-6 md:px-12",
        )}
      >
        <a href="#top" className="font-medium tracking-[-0.03em]">
          <span className={cn("transition-all duration-500", condensed ? "text-sm" : "text-base")}>
            {condensed ? "RS." : "Rashaad Syed"}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "relative rounded-full px-3 py-1.5 text-[0.8rem] tracking-[-0.01em] transition-colors duration-500",
                active === l.id ? "text-ink" : "text-ink-faint hover:text-ink",
              )}
            >
              {active === l.id ? (
                <motion.span
                  layoutId="nav-active"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  className="absolute inset-0 -z-10 rounded-full bg-forest/10"
                />
              ) : null}
              {l.label}
            </a>
          ))}
          <Magnetic strength={0.25}>
            <a
              href="/rashaad-syed-cv.pdf"
              download=""
              className="ml-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-[0.75rem] text-paper transition-colors hover:bg-forest"
            >
              CV <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.8} />
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
          {LINKS.map((l, i) => (
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
