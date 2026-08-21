"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "article" | "div";
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

/**
 * Sektion — konsistentes Spacing: py-20 mobile, py-32 desktop.
 * Container: max-w-6xl mit px-5 sm:px-8.
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
  as: As = "section",
  ariaLabel,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <As
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn("relative w-full py-20 md:py-32 scroll-mt-20", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-5 sm:px-8",
          containerClassName,
        )}
      >
        {children}
      </div>
    </As>
  );
}
