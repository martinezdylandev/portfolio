import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export interface UseContactPageHeaderTitleAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseContactPageHeaderPolaroidAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseContactPageIntroAnimationsReturn {
   initial: TargetAndTransition;
   whileInView: TargetAndTransition;
   transition: Transition;
   viewport: ViewportOptions;
}

export interface UseContactPageAnimationsReturn {
   headerTitle: UseContactPageHeaderTitleAnimationsReturn;
   headerPolaroid: UseContactPageHeaderPolaroidAnimationsReturn;
   intro: UseContactPageIntroAnimationsReturn;
}

export const useContactPageAnimations = (): UseContactPageAnimationsReturn => {
   const headerTitleInitial: TargetAndTransition = { y: 40, opacity: 0 };
   const headerTitleWhileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const headerTitleTransition: Transition = { duration: 0.5, ease: "easeOut", delay: 0.2 };
   const headerTitleViewport: ViewportOptions = { once: true, amount: 0.2 };

   const headerPolaroidInitial: TargetAndTransition = { y: 80, opacity: 0, rotate: -2 };
   const headerPolaroidWhileInView: TargetAndTransition = { y: 0, opacity: 1, rotate: 0 };
   const headerPolaroidTransition: Transition = { duration: 0.6, ease: "easeOut" };
   const headerPolaroidViewport: ViewportOptions = { once: true, amount: 0.2 };

   const introInitial: TargetAndTransition = { y: 30, opacity: 0 };
   const introWhileInView: TargetAndTransition = { y: 0, opacity: 1 };
   const introTransition: Transition = { duration: 0.5, ease: "easeOut" };
   const introViewport: ViewportOptions = { once: true, amount: 0.2 };

   return {
      headerTitle: {
         initial: headerTitleInitial,
         whileInView: headerTitleWhileInView,
         transition: headerTitleTransition,
         viewport: headerTitleViewport,
      },
      headerPolaroid: {
         initial: headerPolaroidInitial,
         whileInView: headerPolaroidWhileInView,
         transition: headerPolaroidTransition,
         viewport: headerPolaroidViewport,
      },
      intro: {
         initial: introInitial,
         whileInView: introWhileInView,
         transition: introTransition,
         viewport: introViewport,
      },
   };
};
