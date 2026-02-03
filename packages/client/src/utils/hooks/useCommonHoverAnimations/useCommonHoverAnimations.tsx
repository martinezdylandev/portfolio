import type { Transition } from "framer-motion";

export interface UseCommonHoverAnimationsReturn {
   whileHover: { scale: number };
   whileTap: { scale: number };
   transition: Transition;
}

// Fix animation, so when tapping the hoover one does not interact with the tap.

export const useCommonHoverAnimations = (): UseCommonHoverAnimationsReturn => {
   const whileHover = { scale: 1.05 };
   const whileTap = { scale: 0.85 };
   const transition: Transition = { duration: 0.2, ease: "easeOut" as const };

   return {
      whileHover,
      whileTap,
      transition,
   };
};
