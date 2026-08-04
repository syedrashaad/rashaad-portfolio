import { motion } from "motion/react";

import type { Brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * A technology mark. Brand colour is present by default at controlled
 * saturation; hover lifts it to full strength with a small physical lift.
 */
export function TechMark({ brand }: { brand: Brand }) {
  return (
    <motion.span
      whileHover={{ scale: 1.06, y: -3 }}
      transition={{ type: "spring", stiffness: 340, damping: 20 }}
      className="group/mark relative flex shrink-0 select-none items-center gap-3"
      style={{ ["--brand" as string]: `#${brand.hex}` }}
    >
      {brand.path ? (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="h-6 w-6 shrink-0 fill-[var(--brand)] opacity-[0.78] saturate-[0.82] transition-[opacity,filter] duration-500 group-hover/mark:opacity-100 group-hover/mark:saturate-100 md:h-7 md:w-7"
        >
          <path d={brand.path} />
        </svg>
      ) : (
        <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand)] opacity-80 saturate-[0.85] transition duration-500 group-hover/mark:opacity-100 group-hover/mark:saturate-100" />
      )}
      {brand.iconOnly ? null : (
        <span
          className={cn(
            "whitespace-nowrap text-[0.95rem] tracking-[-0.02em] transition-colors duration-500 md:text-[1.05rem]",
            brand.path
              ? "text-ink-soft group-hover/mark:text-ink"
              : "font-medium text-[var(--brand)] opacity-85 saturate-[0.85] group-hover/mark:opacity-100 group-hover/mark:saturate-100",
          )}
        >
          {brand.wordmark ?? brand.name}
        </span>
      )}
    </motion.span>
  );
}

/** Typographic company mark. Brand colour present by default, deepened on hover. */
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
        "inline-block font-medium text-[var(--brand)] opacity-[0.78] saturate-[0.8] transition duration-500 group-hover:opacity-100 group-hover:saturate-100",
        className,
      )}
    >
      {mark}
    </span>
  );
}
