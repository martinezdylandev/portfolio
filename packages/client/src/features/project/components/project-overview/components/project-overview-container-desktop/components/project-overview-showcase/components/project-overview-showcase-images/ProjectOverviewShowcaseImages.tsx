import { motion } from "framer-motion";
import React from "react";
import { PROJECT_OVERVIEW_SHOWCASE_IMAGES_ARIA_LABEL, PROJECT_OVERVIEW_SHOWCASE_IMAGE_CENTER_ALT_TEXT, PROJECT_OVERVIEW_SHOWCASE_IMAGE_LEFT_ALT_TEXT, PROJECT_OVERVIEW_SHOWCASE_IMAGE_RIGHT_ALT_TEXT, ProjectOverviewShowcaseProps } from "../../data/projectOverviewShowcaseData";
import { PROJECT_OVERVIEW_SHOWCASE_FLOATING_IMAGES } from "./data/projectOverviewShowcaseImagesData";

const ProjectOverviewShowcaseImages = ({ project }: ProjectOverviewShowcaseProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const base = `/projects/${idPadded}/overview`;

   return (
      <div className="project__overview-showcase-images relative flex justify-center items-center w-full" aria-label={PROJECT_OVERVIEW_SHOWCASE_IMAGES_ARIA_LABEL}>
         {PROJECT_OVERVIEW_SHOWCASE_FLOATING_IMAGES.map((floater) => {
            const src = `${base}/main-${floater.key}.webp`;
            const altText = floater.side === "left" ? PROJECT_OVERVIEW_SHOWCASE_IMAGE_LEFT_ALT_TEXT : PROJECT_OVERVIEW_SHOWCASE_IMAGE_RIGHT_ALT_TEXT;

            return (
               <motion.img
                  key={floater.key}
                  className={`project__overview-showcase-image project__overview-showcase-image--${floater.side} absolute object-cover z-10 will-change-transform shadow-lg bg-accent`}
                  style={{ top: floater.basePosition.top, left: floater.basePosition.left, width: floater.basePosition.width }}
                  src={src}
                  alt={altText}
                  initial={{ x: 0, y: 0, rotate: floater.baseRotate }}
                  whileInView={{
                     x: floater.driftKeyframes.x,
                     y: floater.driftKeyframes.y,
                     rotate: floater.driftKeyframes.rotate,
                  }}
                  viewport={{ amount: 0.2, once: false }}
                  transition={{
                     duration: floater.duration,
                     repeat: Infinity,
                     repeatType: "mirror",
                     ease: "easeInOut",
                     times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  }}
               />
            );
         })}
         <img className="project__overview-showcase-image project__overview-showcase-image--center self-center w-full aspect-video object-cover relative shadow-lg" src={`${base}/main-center.webp`} alt={PROJECT_OVERVIEW_SHOWCASE_IMAGE_CENTER_ALT_TEXT} />
      </div>
   );
};

export default ProjectOverviewShowcaseImages;
