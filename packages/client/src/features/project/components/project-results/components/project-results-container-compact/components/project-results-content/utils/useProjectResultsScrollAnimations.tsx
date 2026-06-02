import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
import { useRef } from "react";

export interface ProjectResultsScrollTransforms {
   fontSize: MotionValue<string>;
   blur: MotionValue<string>;
}

export interface UseProjectResultsScrollAnimationsReturn {
   containerRef: RefObject<HTMLDivElement | null>;
   transforms: ProjectResultsScrollTransforms[];
}

export const useProjectResultsScrollAnimations = (): UseProjectResultsScrollAnimationsReturn => {
   const containerRef = useRef<HTMLDivElement>(null);

   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });

   const driver = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

   // 1st span — 3.75rem (step-10/display-sm) → 0.625rem (step-0/caption)
   const fontSize1 = useTransform(driver, [0, 1], ["3.75rem", "0.625rem"]);
   const blur1 = useTransform(driver, [0, 1], ["blur(0px)", "blur(2.5px)"]);

   // 2nd span (starts at 0.2) — → 0.75rem (step-1/label)
   const secondProgress = useTransform(driver, [0, 0.2, 1], [0, 0, 1]);
   const fontSize2 = useTransform(secondProgress, [0, 1], ["3.75rem", "0.75rem"]);
   const blur2 = useTransform(secondProgress, [0, 1], ["blur(0px)", "blur(2.25px)"]);

   // 3rd span (starts at 0.3) — → 1rem (step-3/body)
   const thirdProgress = useTransform(driver, [0, 0.3, 1], [0, 0, 1]);
   const fontSize3 = useTransform(thirdProgress, [0, 1], ["3.75rem", "1rem"]);
   const blur3 = useTransform(thirdProgress, [0, 1], ["blur(0px)", "blur(2px)"]);

   // 4th span (starts at 0.4) — → 1.125rem (step-4/body-lg)
   const fourthProgress = useTransform(driver, [0, 0.4, 1], [0, 0, 1]);
   const fontSize4 = useTransform(fourthProgress, [0, 1], ["3.75rem", "1.125rem"]);
   const blur4 = useTransform(fourthProgress, [0, 1], ["blur(0px)", "blur(1.75px)"]);

   // 5th span (starts at 0.5) — → 1.5rem (step-6/heading-sm)
   const fifthProgress = useTransform(driver, [0, 0.5, 1], [0, 0, 1]);
   const fontSize5 = useTransform(fifthProgress, [0, 1], ["3.75rem", "1.5rem"]);
   const blur5 = useTransform(fifthProgress, [0, 1], ["blur(0px)", "blur(1.50px)"]);

   // 6th span (starts at 0.6) — → 1.875rem (step-7/heading)
   const sixthProgress = useTransform(driver, [0, 0.6, 1], [0, 0, 1]);
   const fontSize6 = useTransform(sixthProgress, [0, 1], ["3.75rem", "1.875rem"]);
   const blur6 = useTransform(sixthProgress, [0, 1], ["blur(0px)", "blur(1.25px)"]);

   // 7th span (starts at 0.7) — → 3rem (step-9/heading-xl)
   const seventhProgress = useTransform(driver, [0, 0.7, 1], [0, 0, 1]);
   const fontSize7 = useTransform(seventhProgress, [0, 1], ["3.75rem", "3rem"]);
   const blur7 = useTransform(seventhProgress, [0, 1], ["blur(0px)", "blur(1px)"]);

   const transforms: ProjectResultsScrollTransforms[] = [
      { fontSize: fontSize1, blur: blur1 },
      { fontSize: fontSize2, blur: blur2 },
      { fontSize: fontSize3, blur: blur3 },
      { fontSize: fontSize4, blur: blur4 },
      { fontSize: fontSize5, blur: blur5 },
      { fontSize: fontSize6, blur: blur6 },
      { fontSize: fontSize7, blur: blur7 },
   ];

   return {
      containerRef,
      transforms,
   };
};
