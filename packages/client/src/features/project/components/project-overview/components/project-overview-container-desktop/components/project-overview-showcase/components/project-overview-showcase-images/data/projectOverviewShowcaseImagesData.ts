export type ProjectOverviewShowcaseImagesSide = "left" | "right";

export interface ProjectOverviewShowcaseFloatingImage {
   key: string;
   side: ProjectOverviewShowcaseImagesSide;
   basePosition: {
      top: string;
      left: string;
      width: string;
   };
   baseRotate: number;
   driftKeyframes: {
      x: number[];
      y: number[];
      rotate: number[];
   };
   duration: number;
}

export const PROJECTS_WITHOUT_FLOATERS: number[] = [4, 5];

export const PROJECT_OVERVIEW_SHOWCASE_FLOATING_IMAGES: ProjectOverviewShowcaseFloatingImage[] = [
   {
      key: "top-left",
      side: "left",
      basePosition: { top: "8%", left: "12%", width: "18%" },
      baseRotate: -6,
      driftKeyframes: {
         x: [0, 22, -14, 28, -8, 0],
         y: [0, -18, 26, -10, 16, 0],
         rotate: [-6, -2, -10, -4, -8, -6],
      },
      duration: 26,
   },
   {
      key: "bottom-left",
      side: "left",
      basePosition: { top: "58%", left: "30%", width: "14%" },
      baseRotate: 5,
      driftKeyframes: {
         x: [0, -20, 24, -10, 18, 0],
         y: [0, 18, -14, 24, -8, 0],
         rotate: [5, 9, 2, 8, 3, 5],
      },
      duration: 32,
   },
   {
      key: "top-right",
      side: "right",
      basePosition: { top: "14%", left: "65%", width: "12%" },
      baseRotate: 7,
      driftKeyframes: {
         x: [0, -24, 14, -30, 8, 0],
         y: [0, 20, -16, 10, -22, 0],
         rotate: [7, 3, 11, 4, 9, 7],
      },
      duration: 29,
   },
   {
      key: "bottom-right",
      side: "right",
      basePosition: { top: "55%", left: "76%", width: "14%" },
      baseRotate: -4,
      driftKeyframes: {
         x: [0, 16, -26, 10, -14, 0],
         y: [0, -14, 22, -18, 8, 0],
         rotate: [-4, -9, -1, -7, -3, -4],
      },
      duration: 34,
   },
];
