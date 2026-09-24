import { motion } from "motion/react";
import { ArrowRight, Layers } from "lucide-react";

import { CompanyMark } from "./BrandMark";
import { useCaseStudy, DecisionCallout } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { WORKS, CASE_STUDIES } from "@/lib/portfolio-data";

export function SelectedWork() {
  const { open } = useCaseStudy();

  const magpieWork = WORKS.find((w) => w.id === "magpie")!;
  const harrodsWork = WORKS.find((w) => w.id === "harrods")!;
  const perficientWork = WORKS.find((w) => w.id === "perficient")!;

  const magpieStudy = CASE_STUDIES.magpie;
  const harrodsStudy = CASE_STUDIES.harrods;
  const perficientStudy = CASE_STUDIES.perficient;

  return (
    <section id="work" className="shell relative pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="max-w-2xl">
        <FadeUp>
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-forest/60" />
            <span className="eyebrow text-forest">Selected Work</span>
          </div>
        </FadeUp>
        <MaskedLines
          className="display text-[clamp(2.1rem,4.6vw,3.4rem)]"
          lines={[
            <span key="a">Product thinking.&nbsp;</span>,
            <span key="b" className="text-ink-faint">
              AI depth &{" "}
              <span className="font-editorial italic font-normal text-forest">measurable impact.</span>
            </span>,
          ]}
        />
      </div>

      {/* 3 Substantial Case Studies */}
      <div className="mt-12 flex flex-col gap-12">
        
        {/* 01: Talk to Magpie AI */}
        <FadeUp>
          <article className="group relative rounded-sm border border-hairline/80 bg-paper p-8 transition-colors duration-500 hover:border-forest/40 md:p-11">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-forest font-mono">
                  <span>01</span>
                  <span>·</span>
                  <span>{magpieWork.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{magpieWork.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="Talk to Magpie AI" hex="1C7C6B" className="!text-ink" />
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{magpieWork.role}</p>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{magpieStudy.situation}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["User research", "Voice UX friction", "Scenario recovery", "Roadmap decisions"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.78rem] text-ink-soft bg-paper-deep/20">
                      <span className="h-1 w-1 rounded-full bg-forest" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <DecisionCallout statement={magpieStudy.decision.statement} why={magpieStudy.decision.why} />
                </div>

                <button
                  type="button"
                  onClick={() => open("magpie")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View full case study →
                </button>
              </div>
            </div>
          </article>
        </FadeUp>

        {/* 02: Harrods */}
        <FadeUp>
          <article className="group relative rounded-sm border border-hairline/80 bg-paper p-8 transition-colors duration-500 hover:border-forest/40 md:p-11">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-forest font-mono">
                  <span>02</span>
                  <span>·</span>
                  <span>{harrodsWork.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{harrodsWork.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="HARRODS" hex="7A6320" className="!text-ink" />
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{harrodsWork.role}</p>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{harrodsStudy.situation}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["13M+ transactions", "K-Means segmentation", "2026 revenue view", "Senior stakeholder pitch"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.78rem] text-ink-soft bg-paper-deep/20">
                      <span className="h-1 w-1 rounded-full bg-forest" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/60">
                      <div className="display text-3xl text-forest font-semibold">13M+</div>
                      <div className="eyebrow mt-1 text-[0.72rem]">transactions analysed</div>
                    </div>
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/60">
                      <div className="display text-3xl text-forest font-semibold">£239M</div>
                      <div className="eyebrow mt-1 text-[0.72rem]">2026 revenue view</div>
                    </div>
                  </div>
                  <DecisionCallout statement={harrodsStudy.decision.statement} why={harrodsStudy.decision.why} />
                </div>

                <button
                  type="button"
                  onClick={() => open("harrods")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View full case study →
                </button>
              </div>
            </div>
          </article>
        </FadeUp>

        {/* 03: Perficient (One Unified Enterprise Case Study with 4 Client Context Chapters) */}
        <FadeUp>
          <article className="group relative rounded-sm border border-hairline/80 bg-paper p-8 transition-colors duration-500 hover:border-forest/40 md:p-11">
            <div className="flex items-center justify-between border-b border-hairline/60 pb-5">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-forest font-mono">
                  <span>03</span>
                  <span>·</span>
                  <span>{perficientWork.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{perficientWork.date}</span>
                </div>
                <h3 className="mt-2 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="Perficient" hex="C8102E" className="!text-ink" />
                  <span className="text-ink-soft text-lg font-normal ml-3">· Enterprise AI & Automation</span>
                </h3>
                <p className="mt-1 text-[0.88rem] text-ink-soft">{perficientWork.role}</p>
              </div>
              <button
                type="button"
                onClick={() => open("perficient")}
                className="hidden md:inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
              >
                View case study →
              </button>
            </div>

            <p className="mt-6 text-[1.05rem] leading-relaxed text-ink-soft max-w-3xl">
              Sixteen months working across AI, ML, automation and B2B digital products for enterprise clients. Sitting between business requirements and technical implementation.
            </p>

            {/* 4 Client Context Chapters inside Perficient */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Chapter 1: Core GenAI */}
              <div className="rounded-sm border border-hairline/60 bg-paper-deep/20 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[0.7rem] uppercase font-mono tracking-wider text-forest mb-1">Chapter 01</div>
                  <h4 className="font-semibold text-ink text-base">Core GenAI Platform</h4>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">RAG pipelines serving LLM assistants under heavy load.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/50 flex flex-wrap gap-2 text-[0.72rem] font-semibold text-forest">
                  <span>10K+ queries/day</span>
                  <span>·</span>
                  <span>&lt;2s latency</span>
                  <span>·</span>
                  <span>99.9% uptime</span>
                </div>
              </div>

              {/* Chapter 2: Caterpillar */}
              <div className="rounded-sm border border-hairline/60 bg-paper-deep/20 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[0.7rem] uppercase font-mono tracking-wider text-forest mb-1">Chapter 02</div>
                  <h4 className="font-semibold text-ink text-base">Caterpillar</h4>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">Enterprise knowledge retrieval searchable in workflow.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/50 text-[0.72rem] font-medium text-ink-soft">
                  Grounded documentation retrieval
                </div>
              </div>

              {/* Chapter 3: Aristocrat */}
              <div className="rounded-sm border border-hairline/60 bg-paper-deep/20 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[0.7rem] uppercase font-mono tracking-wider text-forest mb-1">Chapter 03</div>
                  <h4 className="font-semibold text-ink text-base">Aristocrat</h4>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">Google Document AI invoice data extraction & automation.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/50 text-[0.72rem] font-semibold text-forest">
                  80%+ manual entry cut · 1,200+ hrs/mo
                </div>
              </div>

              {/* Chapter 4: NorthShore Care Supply */}
              <div className="rounded-sm border border-hairline/60 bg-paper-deep/20 p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[0.7rem] uppercase font-mono tracking-wider text-forest mb-1">Chapter 04</div>
                  <h4 className="font-semibold text-ink text-base">NorthShore Care Supply</h4>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">B2B eCommerce discovery, purchasing, checkout & Stripe.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-hairline/50 text-[0.72rem] font-medium text-ink-soft">
                  Discovery → Checkout → Payments
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-hairline/60 flex items-center justify-between">
              <DecisionCallout statement={perficientStudy.decision.statement} why={perficientStudy.decision.why} />
              <button
                type="button"
                onClick={() => open("perficient")}
                className="md:hidden inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink mt-4"
              >
                View full case study →
              </button>
            </div>
          </article>
        </FadeUp>

      </div>
    </section>
  );
}
