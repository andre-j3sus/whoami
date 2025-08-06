import { useRef } from "react";
import { useInView, Variants } from "motion/react";

type Direction = "up" | "down" | "left" | "right";

export const useScrollAnimation = (direction: Direction = "up") => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: 50, x: 0 };
      case "down":
        return { y: -50, x: 0 };
      case "left":
        return { x: 50, y: 0 };
      case "right":
        return { x: -50, y: 0 };
      default:
        return { x: 0, y: 50 };
    }
  };

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, x: 0, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 },
      }
    : {
        hidden: {
          opacity: 0,
          ...getInitialTransform(),
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.1,
          },
        },
      };

  return { ref, isInView, variants };
};
