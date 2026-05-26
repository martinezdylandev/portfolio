import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export interface UseProjectOverviewShowcaseAnimationsReturn {
   containerRef: React.RefObject<HTMLDivElement | null>;
   leftHalfX: MotionValue<string>;
   rightHalfX: MotionValue<string>;
   mediaOpacity: MotionValue<number>;
}

export const useProjectOverviewShowcaseAnimations = (): UseProjectOverviewShowcaseAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end center"],
   });

   const leftHalfX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
   const rightHalfX = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
   const mediaOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.1, 1]);

   return { containerRef, leftHalfX, rightHalfX, mediaOpacity };
};
