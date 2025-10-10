import React from "react";
import { motion } from "framer-motion";

export const CardBackground = ({
  children,
  className,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={"relative p-[4px] group"}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-md transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#98E2C6,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#49416D,transparent),radial-gradient(circle_farthest-side_at_0_0,#A882DD,transparent)]"
        }
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={
          "absolute inset-0 rounded-3xl z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#082F49,transparent),radial-gradient(circle_farthest-side_at_100%_0,#676394,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#A882DD,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        }
      />

      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
};
