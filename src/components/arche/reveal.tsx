"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "fade";
  amount?: number;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Scroll-Reveal — sanft, schnell, unaufdringlich.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  amount = 0.2,
}: RevealProps) {
  const v =
    variant === "fade"
      ? {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, ease: EASE, delay } },
        }
      : {
          hidden: { opacity: 0, y: 16 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE, delay } },
        };

  return (
    <motion.div
      className={cn(className)}
      variants={v}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
