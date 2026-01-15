import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery/useMediaQuery";

export interface UseAboutMeCompactScrollAnimationsReturn {
   y: MotionValue<number>;
   textBottom: MotionValue<string>;
   textOpacity: MotionValue<number>;
}

export const useAboutMeCompactScrollAnimations = (): UseAboutMeCompactScrollAnimationsReturn => {
   const { scrollY } = useScroll();

   const isMobileM = useMediaQuery("(min-width: 375px)");
   const isMobileL = useMediaQuery("(min-width: 425px)");
   const isTablet = useMediaQuery("(min-width: 768px)");

   const ySize = isTablet ? 200 : isMobileL ? 140 : isMobileM ? 130 : 110;

   // Animations for upper aboutMe
   const y = useTransform(scrollY, [0, 100], [0, ySize]);
   const textBottom = useTransform(scrollY, [0, 50], ["0", "10%"]);
   const textOpacity = useTransform(scrollY, [25, 100], [0, 1]);

   return {
      y,
      textBottom,
      textOpacity,
   };
};
