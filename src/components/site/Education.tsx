import { FadeUp } from "./Reveal";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section className="shell pb-14 pt-16 md:pb-16 md:pt-24">
      <FadeUp>
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-8 bg-ink-faint/60" />
          <span className="eyebrow">Education</span>
        </div>
      </FadeUp>

      <div>
        {EDUCATION.map((e, i) => (
          <FadeUp key={e.school} delay={i * 0.08}>
            <div className="group grid gap-3 border-t border-hairline py-9 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:py-12">
              <h3 className="display text-[clamp(1.7rem,4.6vw,3.4rem)] transition-colors duration-500 group-hover:text-forest">
                {e.school}
              </h3>
              <p className="text-[0.95rem] text-ink-soft">{e.degree}</p>
              <div className="flex items-center gap-4 text-[0.8rem] tabular-nums text-ink-faint">
                <span>{e.period}</span>
                <span className="h-3 w-px bg-hairline" />
                <span>{e.location}</span>
              </div>
            </div>
          </FadeUp>
        ))}
        <div className="border-t border-hairline" />
      </div>
    </section>
  );
}
