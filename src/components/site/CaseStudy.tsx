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
import { X, ArrowRight, Lightbulb, Scale } from "lucide-react";

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
      <CaseStudySheet id={activeId} onClose={close} onNavigate={open} />
    </CaseStudyContext.Provider>
  );
}

export function DecisionCallout({ statement, why }: { statement: string; why: string }) {
  return (
    <div className="rounded-sm border-l-2 border-forest bg-forest/[0.04] p-6 shadow-xs my-2">
      <div className="eyebrow text-forest mb-2 font-mono tracking-widest uppercase">The Decision</div>
      <blockquote className="display text-[clamp(1.1rem,2.2vw,1.4rem)] text-ink leading-snug font-normal">
        "{statement}"
      </blockquote>
      <div className="mt-3.5 pt-3 border-t border-forest/15 flex items-start gap-2.5 text-[0.88rem] text-ink-soft">
        <span className="font-semibold text-forest uppercase tracking-wider text-[0.72rem] shrink-0 mt-0.5">WHY</span>
        <span>{why}</span>
      </div>
    </div>
  );
}

function ToolChip({ name }: { name: string }) {
  const brand = TECH_BY_NAME[name];
  return (
    <span
      style={
        brand ? ({ ["--brand" as string]: `#${brand.hex}` } as React.CSSProperties) : undefined
      }
      className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1.5 text-[0.78rem] text-ink-soft bg-paper"
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

function CaseStudySheet({
  id,
  onClose,
  onNavigate,
}: {
  id: string | null;
  onClose: () => void;
  onNavigate: (nextId: string) => void;
}) {
  const study = id ? CASE_STUDIES[id] : null;
  const nextStudy = study?.nextId ? CASE_STUDIES[study.nextId] : null;

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
            className="relative z-10 flex h-[100dvh] max-h-[100dvh] w-full flex-col bg-paper md:w-[min(48rem,94vw)] md:shadow-[-40px_0_120px_-60px_rgba(20,20,18,0.5)]"
          >
            <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-4 border-b border-hairline bg-paper/90 px-6 py-4 backdrop-blur-xl md:px-12">
              <span className="eyebrow text-forest">{study.context}</span>
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
                className="display text-[clamp(2.4rem,6.5vw,4rem)]"
              >
                {study.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.7, ease: EASE }}
                className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-[0.85rem] text-ink-soft font-medium"
              >
                <span>{study.role}</span>
                <span className="text-ink-faint">·</span>
                <span className="text-ink-faint">{study.year}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                className="mt-10 flex flex-col gap-10"
              >
                {/* 01 THE PROBLEM */}
                <div className="border-t border-hairline/70 pt-6">
                  <div className="eyebrow mb-3 text-forest">01 · The Problem</div>
                  <p className="max-w-prose text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-ink font-normal">
                    {study.situation}
                  </p>
                </div>

                {/* 02 WHY IT MATTERED */}
                <div>
                  <div className="eyebrow mb-3 text-forest">02 · Why It Mattered</div>
                  <p className="max-w-prose text-[0.98rem] leading-[1.65] text-ink-soft">
                    {study.whyItMattered}
                  </p>
                </div>

                {/* 03 MY ROLE */}
                <div>
                  <div className="eyebrow mb-3 text-forest">03 · My Role</div>
                  <p className="max-w-prose text-[0.98rem] leading-[1.65] text-ink-soft">
                    {study.what}
                  </p>
                </div>

                {/* 04 THE DECISION (Signature Component) */}
                {study.decision && (
                  <div>
                    <div className="eyebrow mb-3 text-forest">04 · Key Product Decision</div>
                    <DecisionCallout statement={study.decision.statement} why={study.decision.why} />
                  </div>
                )}

                {/* 05 THE APPROACH */}
                <div>
                  <div className="eyebrow mb-5 text-forest">05 · The Approach</div>
                  <ol className="grid gap-0 border-t border-hairline">
                    {study.approach.map((a, i) => (
                      <li
                        key={a.step}
                        className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 border-b border-hairline py-4 md:grid-cols-[2rem_9rem_minmax(0,1fr)]"
                      >
                        <span className="eyebrow tabular-nums text-forest">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.95rem] font-medium tracking-[-0.01em]">{a.step}</span>
                        <span className="col-span-2 text-[0.92rem] leading-relaxed text-ink-soft md:col-span-1">
                          {a.body}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* 06 THE TRADE-OFF */}
                {study.tradeoff && (
                  <div>
                    <div className="eyebrow mb-3 text-forest flex items-center gap-2">
                      <Scale className="h-3.5 w-3.5 text-forest" />
                      <span>06 · The Trade-Off</span>
                    </div>
                    <div className="rounded-sm bg-paper-deep/40 p-5 border border-hairline/60 text-[0.95rem] leading-relaxed text-ink-soft">
                      {study.tradeoff}
                    </div>
                  </div>
                )}

                {/* 07 OUTCOME (Evidence Metrics) */}
                <div>
                  <div className="eyebrow mb-4 text-forest">07 · Outcome & Evidence</div>
                  <div className="grid grid-cols-2 gap-4">
                    {study.outcome.map((o) => (
                      <div key={o.label} className="rounded-sm bg-paper-deep/30 p-5 border border-hairline/60">
                        <div className="display text-[clamp(1.8rem,4vw,2.8rem)] text-forest font-semibold">
                          {o.value}
                        </div>
                        <div className="eyebrow mt-1 text-[0.75rem]">{o.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 08 WHAT I LEARNED */}
                {study.lesson && (
                  <div>
                    <div className="eyebrow mb-3 text-forest flex items-center gap-2">
                      <Lightbulb className="h-3.5 w-3.5 text-forest" />
                      <span>08 · What I Learned</span>
                    </div>
                    <div className="rounded-sm bg-forest/[0.05] border border-forest/20 p-5 text-[0.95rem] font-medium leading-relaxed text-ink">
                      "{study.lesson}"
                    </div>
                  </div>
                )}

                {/* Tools */}
                <div>
                  <div className="eyebrow mb-3">Capabilities & Toolkit</div>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((t) => (
                      <ToolChip key={t} name={t} />
                    ))}
                  </div>
                </div>

                {/* NEXT PROJECT CONTINUITY */}
                {nextStudy && (
                  <div className="mt-6 border-t border-hairline pt-8">
                    <div className="eyebrow mb-3 text-ink-faint">Next Case Study</div>
                    <button
                      type="button"
                      onClick={() => onNavigate(study.nextId)}
                      className="group flex w-full items-center justify-between rounded-sm border border-hairline/80 bg-paper-deep/20 p-6 text-left transition-colors hover:border-forest/50 hover:bg-paper-deep/50"
                    >
                      <div>
                        <div className="text-xs uppercase font-mono text-forest mb-1">{nextStudy.context}</div>
                        <div className="text-xl font-medium text-ink group-hover:text-forest transition-colors">
                          {nextStudy.title}
                        </div>
                      </div>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper border border-hairline text-forest transition-transform group-hover:translate-x-1">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  </div>
                )}
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
