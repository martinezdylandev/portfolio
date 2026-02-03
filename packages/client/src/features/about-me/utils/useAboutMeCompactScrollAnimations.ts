import type { MotionValue } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
export interface UseAboutMeCompactScrollAnimationsReturn {
   y: MotionValue<number>;
   textBottom: MotionValue<string>;
   textOpacity: MotionValue<number>;
}

const Y_SIZE_TABLET = 200;
const Y_SIZE_MOBILE_L = 140;
const Y_SIZE_MOBILE_M = 130;
const Y_SIZE_DEFAULT = 110;

const getCompactScrollYSize = (): number => {
   if (typeof window === "undefined") return Y_SIZE_DEFAULT;
   const isTablet = window.matchMedia("(min-width: 768px)").matches;
   const isMobileL = window.matchMedia("(min-width: 425px)").matches;
   const isMobileM = window.matchMedia("(min-width: 375px)").matches;
   return isTablet ? Y_SIZE_TABLET : isMobileL ? Y_SIZE_MOBILE_L : isMobileM ? Y_SIZE_MOBILE_M : Y_SIZE_DEFAULT;
};

export const useAboutMeCompactScrollAnimations = (): UseAboutMeCompactScrollAnimationsReturn => {
   const { scrollY } = useScroll();
   const [ySize, setYSize] = useState(() => getCompactScrollYSize());

   useEffect(() => {
      const update = (): void => {
         setYSize(() => getCompactScrollYSize());
      };

      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
   }, []);

   //Animations for upper aboutMe
   const y = useTransform(scrollY, [0, 100], [0, ySize]);
   const textBottom = useTransform(scrollY, [0, 50], ["0", "10%"]);
   const textOpacity = useTransform(scrollY, [25, 100], [0, 1]);

   return {
      y,
      textBottom,
      textOpacity,
   };
};
