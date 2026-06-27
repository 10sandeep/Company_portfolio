"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  // Track scroll relative to this container only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const update = () => {
      if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Gradient window travels from top to bottom of svgHeight
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  // Path: M 1 0 V -36 l 18 24 V svgHeight*0.8 ... → the long vertical runs at x=19
  // dot is w-4 (16px) → left margin = 19 - 8 = 11px centres the dot on x=19
  const DOT_ML = 11; // px

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full", className)}
    >
      {/* Beam rail — clipped to the container so it never overflows past RecentWork */}
      <div
        className="absolute left-4 md:left-8 top-0 pointer-events-none"
        style={{ height: svgHeight || "100%", overflow: "hidden" }}
      >
        {/* Starting dot — centred on the path line (x = 10 of 20 px SVG) */}
        <motion.div
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0,0,0,0.24) 0px 3px 8px",
          }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="flex h-4 w-4 items-center justify-center rounded-full border border-neutral-300 shadow-sm bg-white"
          style={{ marginLeft: DOT_ML }}
        >
          <motion.div
            animate={{
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#7c3aed",
              borderColor:     scrollYProgress.get() > 0 ? "white" : "#5b21b6",
            }}
            transition={{ duration: 0.2, delay: 0.5 }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>

        {/* SVG rail — exactly as tall as the content, stops at RecentWork bottom */}
        {svgHeight > 0 && (
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="block"
            aria-hidden="true"
          >
            {/* Static grey track */}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
            />
            {/* Animated glowing beam */}
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#tracing-grad)"
              strokeWidth="1.5"
            />
            <defs>
              <motion.linearGradient
                id="tracing-grad"
                gradientUnits="userSpaceOnUse"
                x1="0"
                x2="0"
                y1={y1}
                y2={y2}
              >
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
        )}
      </div>

      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
