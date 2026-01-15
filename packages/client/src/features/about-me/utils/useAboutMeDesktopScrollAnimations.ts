import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery/useMediaQuery";

export interface UseAboutMeDesktopScrollAnimationsReturn {
   y: MotionValue<number>;
   textBottom: MotionValue<string>;
   textOpacity: MotionValue<number>;
}

export const useAboutMeDesktopScrollAnimations = (): UseAboutMeDesktopScrollAnimationsReturn => {
   const { scrollY } = useScroll();

   const isLaptop = useMediaQuery("(max-width: 1024px)");

   const ySize = isLaptop ? 275 : 400;

   // Animations for upper aboutMe
   const y = useTransform(scrollY, [0, 600], [0, ySize]);
   const textBottom = useTransform(scrollY, [300, 600], ["0", "10%"]);
   const textOpacity = useTransform(scrollY, [400, 600], [0, 1]);

   return {
      y,
      textBottom,
      textOpacity,
   };
};
