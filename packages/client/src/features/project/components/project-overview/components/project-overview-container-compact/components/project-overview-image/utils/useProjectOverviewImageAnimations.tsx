import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export interface UseProjectOverviewImageAnimationsReturn {
   containerRef: React.RefObject<HTMLDivElement | null>;
   leftHalfX: MotionValue<string>;
   rightHalfX: MotionValue<string>;
}

export const useProjectOverviewImageAnimations = (): UseProjectOverviewImageAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end center"],
   });

   const leftHalfX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
   const rightHalfX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

   return { containerRef, leftHalfX, rightHalfX };
};
