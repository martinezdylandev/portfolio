import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import { useRef } from "react";
import { useBarTransforms } from "./useBarTransforms";

export interface TimelineBarTransforms {
   width: MotionValue<string>;
   opacity: MotionValue<number>;
}

export interface UseProjectTimelineScrollAnimationsReturn {
   containerRef: RefObject<HTMLDivElement | null>;
   verticalBarHeight: MotionValue<string>;
   bars: TimelineBarTransforms[];
}

export const useProjectTimelineScrollAnimations = (): UseProjectTimelineScrollAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   // Bind progress to this section only (complete by the time viewport hits container center)
   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });

   // Vertical bar grows from 0 to full height and fades in
   const verticalBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   // Staggered branch bars — alternating right/left with distinct widths
   const bar1 = useBarTransforms(scrollYProgress, 0.2, "20%"); // right
   const bar2 = useBarTransforms(scrollYProgress, 0.4, "20%"); // left
   const bar3 = useBarTransforms(scrollYProgress, 0.55, "20%"); // right
   const bar4 = useBarTransforms(scrollYProgress, 0.7, "20%"); // left
   const bar5 = useBarTransforms(scrollYProgress, 0.85, "20%"); // right

   return {
      containerRef,
      verticalBarHeight,
      bars: [bar1, bar2, bar3, bar4, bar5],
   };
};
