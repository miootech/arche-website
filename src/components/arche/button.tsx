"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ArcheButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * arche. Button — reduziert, präzise.
 * Touch-Target minimum 44px auf Mobile (via globals.css).
 */
export const ArcheButton = forwardRef<HTMLButtonElement, ArcheButtonProps>(
  function ArcheButton(
    { variant = "primary", size = "md", className, children, onClick, href, type = "button", disabled, ariaLabel },
    ref,
  ) {
    const base =
      "group relative inline-flex items-center justify-center font-medium tracking-tight rounded-full transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]";

    const sizes: Record<string, string> = {
      sm: "h-10 px-4 text-sm",
      md: "h-11 px-5 text-[0.9375rem]",
      lg: "h-12 px-6 text-[0.9375rem]",
    };

    const variants: Record<string, string> = {
      primary:
        "bg-foreground text-background hover:opacity-90",
      secondary:
        "border border-white/[0.08] text-foreground hover:bg-white/[0.04] hover:border-white/[0.12]",
      ghost:
        "text-foreground/80 hover:text-foreground px-4 min-h-[40px]",
      purple:
        "bg-[oklch(0.62_0.24_295)] text-white hover:opacity-90 shimmer-on-hover shadow-[0_8px_30px_-12px_oklch(0.62_0.24_295/0.5)] hover:shadow-[0_12px_40px_-8px_oklch(0.62_0.24_295/0.7)]",
    };

    const content = (
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    );

    const classes = cn(base, sizes[size], variants[variant], className);

    if (href) {
      return (
        <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {content}
      </button>
    );
  },
);
