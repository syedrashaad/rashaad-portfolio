import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { CompanyMark } from "./BrandMark";
import { useCaseStudy } from "./CaseStudy";
import { FadeUp, MaskedLines } from "./Reveal";
import { COMPANY_BRAND } from "@/lib/brand";
import { WORKS } from "@/lib/portfolio-data";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SelectedWork() {
  const { open } = useCaseStudy();

  const magpie = WORKS.find((w) => w.id === "magpie")!;
  const harrods = WORKS.find((w) => w.id === "harrods")!;
  const enterprise = WORKS.find((w) => w.id === "perficient")!;
  const northshore = WORKS.find((w) => w.id === "northshore")!;
  
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
                  <span>{magpie.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{magpie.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="Talk to Magpie AI" hex="1C7C6B" className="!text-ink" />
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{magpie.role}</p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{magpie.lede}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {magpie.points.slice(0, 3).map((p, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.78rem] text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-forest" />
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <div className="eyebrow text-forest mb-3">Product Impact Visual</div>
                  <div className="flex flex-col gap-2 rounded-sm bg-paper-deep/30 p-5 border border-hairline/50">
                    <div className="text-[0.85rem] font-medium text-ink flex items-center justify-between">
                      <span>Customer insight</span>
                      <span className="text-forest text-xs">surfaced</span>
                    </div>
                    <div className="text-[0.75rem] text-ink-faint">↓</div>
                    <div className="text-[0.85rem] font-medium text-ink flex items-center justify-between">
                      <span>Product decisions</span>
                      <span className="text-forest text-xs">shaped</span>
                    </div>
                    <div className="text-[0.75rem] text-ink-faint">↓</div>
                    <div className="text-[0.85rem] font-semibold text-forest flex items-center justify-between">
                      <span>Better AI experiences</span>
                      <span className="text-forest text-xs">delivered</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open("magpie")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View work drawer →
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
                  <span>{harrods.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{harrods.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="HARRODS" hex="7A6320" className="!text-ink" />
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{harrods.role}</p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{harrods.lede}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["13M+ transactions", "K-Means segmentation", "2026 revenue view", "Senior stakeholder pitch"].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[0.78rem] text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-forest" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <div className="eyebrow text-forest mb-4">Evidence-Driven Metrics</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-sm bg-paper-deep/30 p-5 border border-hairline/50">
                      <div className="display text-[clamp(2.1rem,4vw,2.8rem)] text-forest font-semibold">13M+</div>
                      <div className="eyebrow mt-1 text-[0.75rem]">transactions analysed</div>
                    </div>
                    <div className="rounded-sm bg-paper-deep/30 p-5 border border-hairline/50">
                      <div className="display text-[clamp(2.1rem,4vw,2.8rem)] text-forest font-semibold">£239M</div>
                      <div className="eyebrow mt-1 text-[0.75rem]">2026 revenue view</div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open("harrods")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View work drawer →
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
                  <span>{enterprise.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{enterprise.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="Perficient" hex="C8102E" className="!text-ink" />
                  <span className="text-ink-soft text-lg font-normal ml-3">· Enterprise AI & Automation</span>
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{enterprise.role}</p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{enterprise.lede}</p>

                <ul className="mt-6 space-y-2 text-[0.88rem] text-ink-soft">
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-0.5">→</span>
                    <span><strong>Core GenAI Platform:</strong> RAG pipelines serving 10K+ daily queries at &lt;2s latency and 99.9% uptime.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-0.5">→</span>
                    <span><strong>Caterpillar:</strong> Knowledge retrieval system making operational documentation retrievable in flow.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-forest mt-0.5">→</span>
                    <span><strong>Aristocrat:</strong> Document AI removing 80%+ manual data entry and 1,200+ staff hours/month.</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <div className="eyebrow text-forest mb-4">Production System Metrics</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/50 text-center">
                      <div className="display text-2xl text-forest font-semibold">10K+</div>
                      <div className="eyebrow mt-1 text-[0.68rem]">daily queries</div>
                    </div>
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/50 text-center">
                      <div className="display text-2xl text-forest font-semibold">&lt;2s</div>
                      <div className="eyebrow mt-1 text-[0.68rem]">latency</div>
                    </div>
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/50 text-center">
                      <div className="display text-2xl text-forest font-semibold">99.9%</div>
                      <div className="eyebrow mt-1 text-[0.68rem]">uptime</div>
                    </div>
                  </div>
                  
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/50 text-center">
                      <div className="display text-xl text-forest font-semibold">80%+</div>
                      <div className="eyebrow mt-1 text-[0.68rem]">manual entry cut</div>
                    </div>
                    <div className="rounded-sm bg-paper-deep/30 p-4 border border-hairline/50 text-center">
                      <div className="display text-xl text-forest font-semibold">1,200+</div>
                      <div className="eyebrow mt-1 text-[0.68rem]">hours/mo saved</div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open("perficient")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View work drawer →
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
                  <span>{northshore.category}</span>
                  <span>·</span>
                  <span className="text-ink-faint">{northshore.date}</span>
                </div>
                <h3 className="mt-3 text-[clamp(1.8rem,3.8vw,2.8rem)] font-normal tracking-[-0.03em]">
                  <CompanyMark mark="NorthShore Care" hex="2F6DA8" className="!text-ink" />
                  <span className="text-forest text-sm font-semibold uppercase tracking-wider ml-3 bg-forest/10 px-2.5 py-0.5 rounded-full border border-forest/20">B2B eCommerce Product</span>
                </h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">{northshore.role}</p>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-ink-soft">{northshore.lede}</p>

                <p className="mt-4 text-[0.92rem] leading-relaxed text-ink-soft">
                  Worked across product requirements and technical implementation, managing how business customers navigate from product discovery through checkout and Stripe payment integration in close collaboration with engineering.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-6 border-t border-hairline/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <div className="eyebrow text-forest mb-3">Product Journey Flow</div>
                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 font-medium">Product Discovery</div>
                    <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 font-medium">Purchasing Workflow</div>
                    <div className="rounded-sm bg-paper-deep/30 p-3 border border-hairline/50 font-medium">Checkout Experience</div>
                    <div className="rounded-sm bg-forest/10 border border-forest/30 p-3 font-semibold text-forest">Stripe Payments</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => open("northshore")}
                  className="inline-flex items-center gap-2 text-[0.8rem] tracking-[0.1em] uppercase text-forest font-medium transition-colors hover:text-ink"
                >
                  View work drawer →
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

              <div className="mt-6 flex items-center justify-between border-t border-hairline/50 pt-4 text-xs text-ink-faint group-hover:text-forest">
                <span>View details</span>
                <span>→</span>
              </div>
            </button>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
