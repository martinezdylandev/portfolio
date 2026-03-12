import { motion } from "framer-motion";
import { PROJECT_OVERVIEW_IMAGE_ALT_TEXT, PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL, PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL } from "./data/projectOverviewImageData";
import { useProjectOverviewImageAnimations } from "./utils/useProjectOverviewImageAnimations";

const IMAGE_SRC = "../../../../../../../../../public/prairie-dog-9569847_1920.jpg";

const ProjectOverviewImage = () => {
   const { containerRef, leftHalfX, rightHalfX } = useProjectOverviewImageAnimations();

   return (
      <div className="project__overview-image-wrapper pb-12.5" aria-label={PROJECT_OVERVIEW_IMAGE_WRAPPER_ARIA_LABEL}>
         <div ref={containerRef} className="project__overview-image-container relative overflow-hidden" aria-label={PROJECT_OVERVIEW_IMAGE_CONTAINER_ARIA_LABEL}>
            <img className="project__overview-image w-full invisible" src={IMAGE_SRC} alt="" aria-hidden="true" />
            <motion.div className="absolute inset-0 [clip-path:inset(0_50%_0_0)]" style={{ x: leftHalfX }}>
               <img className="project__overview-image w-full h-full object-cover" src={IMAGE_SRC} alt={PROJECT_OVERVIEW_IMAGE_ALT_TEXT} />
            </motion.div>
            <motion.div className="absolute inset-0 [clip-path:inset(0_0_0_50%)]" style={{ x: rightHalfX }}>
               <img className="project__overview-image w-full h-full object-cover" src={IMAGE_SRC} alt="" aria-hidden="true" />
            </motion.div>
         </div>
      </div>
   );
};

export default ProjectOverviewImage;
