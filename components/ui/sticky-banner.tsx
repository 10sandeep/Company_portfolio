"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function StickyBanner({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const h = bannerRef.current ? bannerRef.current.offsetHeight : 0;
      document.documentElement.style.setProperty("--banner-h", isVisible ? `${h}px` : "0px");
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
      document.documentElement.style.setProperty("--banner-h", "0px");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={bannerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] flex w-full items-center justify-center px-4 py-2 text-center text-sm font-medium",
        className
      )}
    >
      {children}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 opacity-70 transition hover:opacity-100"
        aria-label="Dismiss banner"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-3.5 w-3.5 text-white">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
