import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

import { FadeUp, MaskedLines } from "./Reveal";
import { SocialActions } from "./SocialActions";
import { CONTACT } from "@/lib/brand";

const LINKS = [
  {
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: Mail,
    hex: "var(--forest)",
  },
  {
    label: "LinkedIn",
    value: "in/syed-rashaad",
    href: CONTACT.linkedin,
    icon: Linkedin,
    hex: "#0A66C2",
  },
];

export function Contact() {
  return (
    <section id="contact" className="shell pb-14 pt-16 md:pb-16 md:pt-28">
      <FadeUp>
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-8 bg-forest/60" />
          <span className="eyebrow text-forest">Contact</span>
        </div>
      </FadeUp>

      <MaskedLines
        className="display text-[clamp(2.4rem,8vw,6.6rem)]"
        lines={[
          <span key="1">Let's build something</span>,
          <span key="2">
            worth <span className="font-editorial italic font-normal text-forest">using.</span>
          </span>,
        ]}
      />

      <div className="mt-16 grid gap-0 md:mt-24">
        {LINKS.map((l, i) => (
          <FadeUp key={l.label} delay={i * 0.06}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{ ["--brand" as string]: l.hex }}
              className="group flex items-center justify-between gap-6 border-b border-hairline py-6 transition-colors duration-500 hover:border-[var(--brand)]/40"
            >
              <span className="flex min-w-0 items-center gap-5">
                <l.icon
                  className="h-[1.15rem] w-[1.15rem] shrink-0 text-ink-faint transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-[var(--brand)]"
                  strokeWidth={1.6}
                />
                <span className="truncate text-[clamp(1rem,2.4vw,1.6rem)] tracking-[-0.02em]">
                  {l.value}
                </span>
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 text-ink-faint transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--brand)]"
                strokeWidth={1.4}
              />
            </a>
          </FadeUp>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
        <SocialActions className="-ml-2.5" />
        <span className="text-[0.72rem] tracking-[0.2em] uppercase text-ink-faint">
          Rashaad Syed — London, UK
        </span>
      </div>
    </section>
  );
}
