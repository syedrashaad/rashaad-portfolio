import { Magnetic } from "./Magnetic";
import { FadeUp, MaskedLines } from "./Reveal";

const LINKS = [
  { label: "Email", value: "hello@rashaadsyed.com", href: "mailto:hello@rashaadsyed.com" },
  { label: "LinkedIn", value: "in/rashaadsyed", href: "https://www.linkedin.com/" },
  { label: "CV", value: "Download ↗", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="shell pb-14 pt-28 md:pb-16 md:pt-44">
      <FadeUp>
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-8 bg-forest/60" />
          <span className="eyebrow text-forest">06 — Contact</span>
        </div>
      </FadeUp>

      <MaskedLines
        className="display text-[clamp(2.5rem,8.5vw,7rem)]"
        lines={[
          <span key="1">Let's build something</span>,
          <span key="2">
            worth{" "}
            <span className="font-editorial italic font-normal text-forest">using.</span>
          </span>,
        ]}
      />

      <div className="mt-20 grid gap-0 border-t border-hairline md:mt-28">
        {LINKS.map((l, i) => (
          <FadeUp key={l.label} delay={i * 0.06}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-hairline py-6 transition-colors duration-500 hover:border-forest/40"
            >
              <span className="flex min-w-0 items-baseline gap-6">
                <span className="eyebrow w-20 shrink-0">{l.label}</span>
                <span className="truncate text-[clamp(1.1rem,3vw,1.9rem)] tracking-[-0.03em] transition-colors duration-500 group-hover:text-forest">
                  {l.value}
                </span>
              </span>
              <span className="shrink-0 text-ink-faint transition-transform duration-500 group-hover:translate-x-1 group-hover:text-forest">
                ↗
              </span>
            </a>
          </FadeUp>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 md:mt-24">
        <div>
          <div className="eyebrow mb-3">Based in</div>
          <Magnetic strength={0.2}>
            <span className="display text-[clamp(1.6rem,4vw,2.6rem)]">London, UK</span>
          </Magnetic>
        </div>
        <a
          href="#top"
          className="link-underline text-[0.8rem] text-ink-soft transition-colors hover:text-ink"
        >
          Back to top ↑
        </a>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6 text-[0.75rem] text-ink-faint">
        <span>Rashaad Syed © 2026</span>
        <span className="eyebrow">Product × AI × Technology</span>
      </footer>
    </section>
  );
}
