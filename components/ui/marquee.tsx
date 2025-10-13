// components/ui/marquee.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
}

export function Marquee({
  className,
  pauseOnHover = false,
  reverse = false,
  children,
  ...props
}: MarqueeProps) {
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    if (marqueeRef.current) {
      setWidth(marqueeRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      ref={marqueeRef}
      className={cn(
        "relative flex overflow-hidden [--duration:40s] [--gap:1rem]",
        className
      )}
      {...props}
    >
      <motion.div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        animate={{
          x: reverse ? [0, width * -1] : [width * -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex shrink-0 items-center gap-[var(--gap)]"
        animate={{
          x: reverse ? [0, width * -1] : [width * -1, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
