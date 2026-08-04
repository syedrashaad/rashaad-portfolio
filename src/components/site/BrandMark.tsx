import { motion } from "motion/react";

import type { Brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * A technology mark. Muted by default; the real brand colour arrives on hover.
 * Falls back to a refined wordmark where no legitimate logo asset exists.
 */
export function TechMark({ brand }: { brand: Brand }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group/mark relative flex shrink-0 select-none items-center gap-3"
      style={{ ["--brand" as string]: `#${brand.hex}` }}
    >
      {brand.path ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-6 w-6 shrink-0 fill-ink-faint/55 transition-[fill,filter] duration-500 group-hover/mark:fill-[var(--brand)] md:h-7 md:w-7"
        >
          <path d={brand.path} />
        </svg>
      ) : null}
      {brand.iconOnly ? null : (
      <span
        className={cn(
          "whitespace-nowrap text-[0.95rem] tracking-[-0.02em] transition-colors duration-500 md:text-[1.05rem]",
          brand.path
            ? "text-ink-faint/60 group-hover/mark:text-ink"
            : "font-medium text-ink-faint/70 group-hover/mark:text-[var(--brand)]",
        )}
      >
        {brand.wordmark ?? brand.name}
      </span>
      )}
    </motion.span>
  );
}

/** Typographic company mark with a restrained brand-colour reveal. */
export function CompanyMark({
  mark,
  hex,
  className,
  tracking = "0.14em",
}: {
  mark: string;
  hex: string;
  className?: string;
  tracking?: string;
}) {
  return (
    <span
      style={{ ["--brand" as string]: `#${hex}`, letterSpacing: tracking }}
      className={cn(
        "inline-block font-medium text-ink-faint transition-colors duration-700 group-hover:text-[var(--brand)]",
        className,
      )}
    >
      {mark}
    </span>
  );
}
