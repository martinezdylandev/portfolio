import type { MotionValue } from "framer-motion";
import { useTransform } from "framer-motion";

export interface BarTransforms {
   width: MotionValue<string>;
   opacity: MotionValue<number>;
}

export const useBarTransforms = (scrollYProgress: MotionValue<number>, start: number, endWidth: string): BarTransforms => {
   const width = useTransform(scrollYProgress, [start, Math.min(start + 0.15, 1)], ["0%", endWidth]);
   const opacity = useTransform(scrollYProgress, [start, Math.min(start + 0.1, 1)], [0, 1]);
   return { width, opacity };
};
