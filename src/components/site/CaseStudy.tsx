import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import { TECH_BY_NAME } from "@/lib/brand";
import { CASE_STUDIES } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

type Ctx = { open: (id: string) => void; close: () => void; activeId: string | null };
const CaseStudyContext = createContext<Ctx>({ open: () => {}, close: () => {}, activeId: null });

export function useCaseStudy() {
  return useContext(CaseStudyContext);
}

export function CaseStudyProvider({ children }: { children: ReactNode }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  const open = useCallback((id: string) => setActiveId(id), []);
  const close = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (!activeId) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeId, close]);

  const value = useMemo(() => ({ open, close, activeId }), [open, close, activeId]);

  return (
    <CaseStudyContext.Provider value={value}>
      {children}
      <CaseStudySheet id={activeId} onClose={close} />
    </CaseStudyContext.Provider>
  );
}

function ToolChip({ name }: { name: string }) {
  const brand = TECH_BY_NAME[name];
  return (
    <span
      style={
        brand ? ({ ["--brand" as string]: `#${brand.hex}` } as React.CSSProperties) : undefined
      }
      className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-[0.78rem] text-ink-soft"
    >
      {brand?.path ? (
        <svg viewBox="0 0 24 24" aria-hidden className="h-3.5 w-3.5 fill-[var(--brand)]">
          <path d={brand.path} />
        </svg>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand,var(--forest))]" />
      )}
      {name}
    </span>
  );
}

function CaseStudySheet({ id, onClose }: { id: string | null; onClose: () => void }) {
  const study = id ? CASE_STUDIES[id] : null;

  return (
    <AnimatePresence>
      {study ? (
        <motion.div key="wrap" className="fixed inset-0 z-[70] flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/25 backdrop-blur-[2px]"
          />

          <motion.section
            role="dialog"
            aria-modal="true"
            aria-label={study.title}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: EASE }}
            data-lenis-prevent="true"
            className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full flex-col bg-paper md:w-[min(46rem,92vw)] md:shadow-[-40px_0_120px_-60px_rgba(20,20,18,0.5)]"
          >
            <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 border-b border-hairline bg-paper/90 px-6 py-4 backdrop-blur-xl md:px-12">
              <span className="eyebrow">{study.context}</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="group flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-ink/[0.05]"
              >
                <X
                  className="h-4 w-4 text-ink-soft transition-transform duration-500 group-hover:rotate-90"
                  strokeWidth={1.6}
                />
              </button>
            </div>

            <div
              data-lenis-prevent="true"
              className="custom-scrollbar flex-1 min-h-0 w-full overflow-y-auto overflow-x-hidden overscroll-contain px-6 pb-24 pt-10 md:px-12 md:pt-14"
            >
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.14, duration: 0.7, ease: EASE }}
                className="display text-[clamp(2.4rem,7vw,4.2rem)]"
              >
                {study.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.7, ease: EASE }}
                className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-[0.82rem] text-ink-soft"
              >
                <span>{study.role}</span>
                <span className="text-ink-faint">{study.year}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                className="mt-12 flex flex-col gap-12"
              >
                <div>
                  <div className="eyebrow mb-4 text-forest">The situation</div>
                  <p className="max-w-prose text-[1.02rem] leading-[1.65] text-ink-soft">
                    {study.situation}
                  </p>
                </div>

                <div>
                  <div className="eyebrow mb-4 text-forest">What I did</div>
                  <p className="max-w-prose text-[1.02rem] leading-[1.65]">{study.what}</p>
                </div>

                <div>
                  <div className="eyebrow mb-5 text-forest">How I approached it</div>
                  <ol className="grid gap-0 border-t border-hairline">
                    {study.approach.map((a, i) => (
                      <li
                        key={a.step}
                        className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-hairline py-4 md:grid-cols-[2rem_9rem_minmax(0,1fr)]"
                      >
                        <span className="eyebrow tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.95rem] tracking-[-0.01em]">{a.step}</span>
                        <span className="col-span-2 text-[0.92rem] leading-relaxed text-ink-soft md:col-span-1">
                          {a.body}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="eyebrow mb-5 text-forest">Outcome</div>
                  <div className="flex flex-wrap gap-x-12 gap-y-6">
                    {study.outcome.map((o) => (
                      <div key={o.label}>
                        <div className="display text-[clamp(1.6rem,4vw,2.6rem)] text-forest">
                          {o.value}
                        </div>
                        <div className="eyebrow mt-1">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="eyebrow mb-5">Tools</div>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((t) => (
                      <ToolChip key={t} name={t} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function ViewWork({ id, className }: { id: string; className?: string }) {
  const { open } = useCaseStudy();
  return (
    <motion.button
      type="button"
      onClick={() => open(id)}
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      className={
        "group/vw inline-flex items-center gap-2.5 text-[0.78rem] tracking-[0.08em] uppercase text-ink-soft transition-colors hover:text-forest " +
        (className ?? "")
      }
    >
      View work
      <motion.span
        variants={{ hover: { x: 5 } }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
        className="inline-block"
      >
        →
      </motion.span>
    </motion.button>
  );
}
