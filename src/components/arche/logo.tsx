"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDot?: boolean;
  onClick?: () => void;
}

/**
 * arche. Wortmarke — textbasiert, scharf bei jeder Größe.
 */
export function Logo({ className, showDot = true, onClick }: LogoProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "font-semibold tracking-tight select-none cursor-pointer text-[1.0625rem]",
        className,
      )}
      aria-label="arche."
    >
      <span className="text-foreground">arche</span>
      {showDot && (
        <span
          className="inline-block ml-[0.04em] rounded-full bg-[oklch(0.62_0.24_295)] align-baseline relative top-[0.02em]"
          style={{
            width: "0.16em",
            height: "0.16em",
            boxShadow: "0 0 10px oklch(0.62 0.24 295 / 0.7)",
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
