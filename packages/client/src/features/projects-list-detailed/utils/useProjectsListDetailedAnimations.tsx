import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseProjectsListDetailedHeaderAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseProjectsListScrollAnimationReturn {
   animate: TargetAndTransition;
   transition: Transition;
}

export interface UseProjectsListListAnimationReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export const useProjectsListDetailedHeaderAnimations = (): UseProjectsListDetailedHeaderAnimationsReturn => {
   const initial: TargetAndTransition = { y: 50, opacity: 0 };
   const whileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const transition: Transition = { duration: 0.6, ease: "easeOut" as const };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};

export const useProjectsListDetailedListAnimation = (isOddProject: boolean): UseProjectsListListAnimationReturn => {
   const initial: TargetAndTransition = { x: isOddProject ? -250 : 250, opacity: 0 };
   const whileInView: TargetAndTransition = { x: 0, opacity: 1 };
   const transition: Transition = { duration: 0.3, ease: "easeOut" as const };
   const viewport: ViewportOptions = { once: true, amount: 0.1 };

   return {
      initial,
      whileInView,
      transition,
      viewport,
   };
};
