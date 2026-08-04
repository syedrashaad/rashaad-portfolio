import { motion } from "motion/react";
import { ArrowDownToLine, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";

import { CONTACT } from "@/lib/brand";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type Action = {
  label: string;
  href: string;
  icon: ReactNode;
  hex: string;
  external?: boolean;
  download?: boolean;
};

const ACTIONS: Action[] = [
  {
    label: "LinkedIn",
    href: CONTACT.linkedin,
    icon: <Linkedin className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />,
    hex: "#0A66C2",
    external: true,
  },
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    icon: <Mail className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />,
    hex: "var(--forest)",
  },
  {
    label: "Download CV",
    href: "/rashaad-syed-cv.pdf",
    icon: <ArrowDownToLine className="h-[1.05rem] w-[1.05rem]" strokeWidth={1.6} />,
    hex: "var(--forest)",
    download: true,
  },
];

export function SocialActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {ACTIONS.map((a) => (
        <motion.a
          key={a.label}
          href={a.href}
          {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
          {...(a.download ? { download: "" } : {})}
          aria-label={a.label}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.45, ease: EASE }}
          style={{ ["--brand" as string]: a.hex }}
          className="group/act relative flex h-11 w-11 items-center justify-center rounded-full text-ink-soft transition-colors duration-500 hover:text-[var(--brand)]"
        >
          <span className="absolute inset-0 scale-75 rounded-full bg-ink/[0.045] opacity-0 transition-all duration-500 group-hover/act:scale-100 group-hover/act:opacity-100" />
          <span className="relative">{a.icon}</span>
          <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full bg-ink px-2.5 py-1 text-[0.65rem] tracking-[0.06em] text-paper opacity-0 transition-all duration-400 group-hover/act:translate-y-0 group-hover/act:opacity-100">
            {a.label}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
