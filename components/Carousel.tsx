"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";

/** Grid on desktop; a swipeable row with position dots on mobile (per the 390 Figma). */
export function Carousel({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = Children.count(children);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 16;
      setActive(Math.min(count - 1, Math.round(el.scrollLeft / step)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [count]);
  return (
    <>
      <div ref={ref} className={`${className ?? ""} carousel`}>
        {children}
      </div>
      <div className="carousel-dots m-flex" aria-hidden="true">
        {Array.from({ length: count }, (_, i) => (
          <i key={i} className={i === active ? "on" : undefined} />
        ))}
      </div>
    </>
  );
}
