import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { CompanyMark } from "./BrandMark";
import { useCaseStudy, DecisionCallout } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { WORKS, CASE_STUDIES } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const { open } = useCaseStudy();

  const magpieWork = WORKS.find((w) => w.id === "magpie")!;
  const harrodsWork = WORKS.find((w) => w.id === "harrods")!;
  const enterpriseWork = WORKS.find((w) => w.id === "perficient")!;
  const northshoreWork = WORKS.find((w) => w.id === "northshore")!;

  const magpieStudy = CASE_STUDIES.magpie;
  const harrodsStudy = CASE_STUDIES.harrods;
  const enterpriseStudy = CASE_STUDIES.perficient;
  const northshoreStudy = CASE_STUDIES.northshore;
  
  const secondaryProjects = WORKS.filter(
    (w) => !["magpie", "harrods", "perficient", "northshore"].includes(w.id)
  );

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
            <span key="a">Product thinking.</span>,
            <span key="b" className="text-ink-faint">
              AI depth &{" "}
              <span className="font-editorial italic font-normal text-forest">measurable impact.</span>
            </span>,
          ]}
        />
      </div>

      {/* Featured Projects Grid - Top 4 receive primary visual treatment */}
      <div className="mt-12 flex flex-col gap-10">
        
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

        {/* 03: Enterprise AI & Automation (Perficient) */}
        <FadeUp>
          <article className="group relative rounded-sm border border-hairline/80 bg-paper p-8 transition-colors duration-500 hover:border-forest/40 md:p-11">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-forest font-mono">
                  <span>03</span>
                  <span>·</span>
                  <span>{enterpriseWork.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{enterpriseWork.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="Perficient" hex="C8102E" className="!text-ink" />
                  <span className="text-ink-soft text-lg font-normal ml-3">· Enterprise AI & Automation</span>
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{enterpriseWork.role}</p>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{enterpriseStudy.situation}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 text-center">
                    <div className="display text-xl text-forest font-semibold">10K+</div>
                    <div className="eyebrow mt-0.5 text-[0.65rem]">daily RAG queries</div>
                  </div>
                  <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 text-center">
                    <div className="display text-xl text-forest font-semibold">&lt;2s</div>
                    <div className="eyebrow mt-0.5 text-[0.65rem]">response latency</div>
                  </div>
                  <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 text-center">
                    <div className="display text-xl text-forest font-semibold">99.9%</div>
                    <div className="eyebrow mt-0.5 text-[0.65rem]">system uptime</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <DecisionCallout statement={enterpriseStudy.decision.statement} why={enterpriseStudy.decision.why} />
                </div>

                <button
                  type="button"
                  onClick={() => open("perficient")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View full case study →
                </button>
              </div>
            </div>
          </article>
        </FadeUp>

        {/* 04: NorthShore Care Supply (Major Standalone Product Feature) */}
        <FadeUp>
          <article className="group relative rounded-sm border border-forest/35 bg-paper p-8 transition-colors duration-500 hover:border-forest md:p-11 shadow-xs">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              <div>
                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-forest font-mono">
                  <span>04</span>
                  <span>·</span>
                  <span>{northshoreWork.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{northshoreWork.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="NorthShore Care" hex="2F6DA8" className="!text-ink" />
                  <span className="text-forest text-xs font-semibold uppercase tracking-wider ml-3 bg-forest/10 px-2.5 py-1 rounded-full border border-forest/20">B2B eCommerce Product</span>
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{northshoreWork.role}</p>
                <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{northshoreStudy.situation}</p>

                <div className="mt-6 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="rounded-sm bg-paper-deep/30 p-2.5 border border-hairline/50 font-medium">Product Discovery</div>
                  <div className="rounded-sm bg-paper-deep/30 p-2.5 border border-hairline/50 font-medium">Purchasing Workflow</div>
                  <div className="rounded-sm bg-paper-deep/30 p-2.5 border border-hairline/50 font-medium">Checkout Experience</div>
                  <div className="rounded-sm bg-forest/10 border border-forest/30 p-2.5 font-semibold text-forest">Stripe Payments</div>
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <DecisionCallout statement={northshoreStudy.decision.statement} why={northshoreStudy.decision.why} />
                </div>

                <button
                  type="button"
                  onClick={() => open("northshore")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View full case study →
                </button>
              </div>
            </div>
          </article>
        </FadeUp>

      </div>

      {/* Secondary Projects Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {secondaryProjects.map((p) => (
          <FadeUp key={p.id}>
            <button
              type="button"
              onClick={() => open(p.id)}
              className="group h-full w-full rounded-sm border border-hairline/70 bg-paper p-6 text-left transition-colors duration-300 hover:border-forest/40 hover:bg-paper-deep/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-ink-faint">
                  <span>{p.index}</span>
                  <span>{p.category}</span>
                </div>
                <h4 className="mt-3 text-lg font-medium text-ink group-hover:text-forest transition-colors">
                  {p.title}
                </h4>
                <p className="mt-2 text-[0.85rem] text-ink-soft line-clamp-2">
                  {p.lede}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-hairline/50 pt-4 text-xs text-ink-faint group-hover:text-forest font-medium">
                <span>View case study</span>
                <span>→</span>
              </div>
            </button>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
