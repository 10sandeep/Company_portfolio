"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface NumberTickerProps {
  value: number;
  /** text before the number, e.g. "0" padding */
  prefix?: string;
  /** text after the number, e.g. "+", "%" */
  suffix?: string;
  /** pad with leading zeros to this length, e.g. 2 → "01" */
  padStart?: number;
  /** delay before counting starts (ms) */
  delay?: number;
  className?: string;
  /** trigger animation once or every time it enters view */
  once?: boolean;
}

export function NumberTicker({
  value,
  prefix = "",
  suffix = "",
  padStart,
  delay = 0,
  className,
  once = true,
}: NumberTickerProps) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(spanRef, { once, amount: 0.5 });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 14, mass: 1 });

  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => mv.set(value), delay);
    return () => clearTimeout(t);
  }, [isInView, value, mv, delay]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (!spanRef.current) return;
      let num = Math.round(v).toString();
      if (padStart) num = num.padStart(padStart, "0");
      spanRef.current.textContent = prefix + num + suffix;
    });
  }, [spring, prefix, suffix, padStart]);

  const initial = padStart
    ? "0".padStart(padStart, "0")
    : "0";

  return (
    <span ref={spanRef} className={className}>
      {prefix}{initial}{suffix}
    </span>
  );
}
