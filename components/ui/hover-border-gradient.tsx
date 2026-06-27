"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const idx = dirs.indexOf(current);
    return clockwise
      ? dirs[(idx - 1 + dirs.length) % dirs.length]
      : dirs[(idx + 1) % dirs.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP:    "radial-gradient(20% 50% at 50% 0%,   #a78bfa 0%, transparent 100%)",
    LEFT:   "radial-gradient(17% 50% at 0%   50%, #a78bfa 0%, transparent 100%)",
    BOTTOM: "radial-gradient(20% 50% at 50% 100%, #a78bfa 0%, transparent 100%)",
    RIGHT:  "radial-gradient(17% 50% at 100% 50%, #a78bfa 0%, transparent 100%)",
  };

  const highlight =
    "radial-gradient(circle at 50% 50%, #c4b5fd 0%, #7c3aed 60%, transparent 100%)";

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setDirection(prev => rotateDirection(prev));
    }, duration * 1000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full items-center justify-center p-[2px] w-fit overflow-visible",
        containerClassName
      )}
      {...props}
    >
      {/* rotating gradient border layer */}
      <motion.div
        className="absolute inset-0 rounded-full z-0"
        style={{ filter: "blur(3px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered ? highlight : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: hovered ? 0.4 : duration }}
      />

      {/* solid dark fill to create border illusion */}
      <div className="absolute inset-[2px] rounded-full z-[1]"
           style={{ background: 'rgba(9,5,20,0.92)' }} />

      {/* content */}
      <div className={cn("relative z-[2] rounded-full", className)}>
        {children}
      </div>
    </Tag>
  );
}
