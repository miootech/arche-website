"use client";

import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  size?: number;
  className?: string;
  interactive?: boolean;
  onChange?: (rating: number) => void;
}

/**
 * Sterne-Bewertung — 0.5 bis 5.0 in 0.5 Schritten.
 */
export function StarRating({
  rating,
  size = 14,
  className,
  interactive = false,
  onChange,
}: StarRatingProps) {
  const pct = Math.max(0, Math.min(5, rating)) / 5;

  const handleClick = (e: React.MouseEvent, idx: number) => {
    if (!interactive || !onChange) return;
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const half = x < rect.width / 2;
    onChange(half ? idx + 0.5 : idx + 1);
  };

  return (
    <div
      className={cn("inline-flex items-center", className)}
      role={interactive ? "radiogroup" : "img"}
      aria-label={`${rating} von 5 Sternen`}
    >
      <div className="relative inline-flex" style={{ height: size }}>
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={`bg-${i}`}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white/15"
            >
              <path d="M12 2l2.39 7.36h7.74l-6.26 4.55 2.39 7.36L12 16.72l-6.26 4.55 2.39-7.36L1.87 9.36h7.74z" />
            </svg>
          ))}
        </div>
        <div
          className="absolute inset-0 flex gap-0.5 overflow-hidden"
          style={{ width: `${pct * 100}%` }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={`fg-${i}`}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[oklch(0.62_0.24_295)] shrink-0"
            >
              <path d="M12 2l2.39 7.36h7.74l-6.26 4.55 2.39 7.36L12 16.72l-6.26 4.55 2.39-7.36L1.87 9.36h7.74z" />
            </svg>
          ))}
        </div>
        {interactive && (
          <div className="absolute inset-0 flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={`btn-${i}`}
                type="button"
                onClick={(e) => handleClick(e, i - 1)}
                className="cursor-pointer"
                style={{ width: size, height: size }}
                aria-label={`${i} ${i === 1 ? "Stern" : "Sterne"}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
