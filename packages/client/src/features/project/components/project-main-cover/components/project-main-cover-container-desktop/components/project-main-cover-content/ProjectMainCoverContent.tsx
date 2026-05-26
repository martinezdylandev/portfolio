import { motion } from "framer-motion";
import React from "react";
import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";
import { parseProjectName } from "./utils/parseProjectName";
import { useProjectMainCoverScrollAnimations } from "./utils/useProjectMainCoverScrollAnimations";

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps): React.ReactElement => {
   const { y, opacity } = useProjectMainCoverScrollAnimations();
   const { firstPart, secondPart } = parseProjectName(project.project_name);

   return (
      <div className="project__main-cover-content flex flex-col max-w-1/2" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         {secondPart && (
            <motion.span style={{ y, opacity }} className="project__main-cover-content-subtitle font-bold text-heading-sm text-heading" data-testid="Second part name">
               {secondPart}
            </motion.span>
         )}
         <motion.span className="project__main-cover-content-title text-display-lg mb-5 leading-none text-heading font-bold" data-testid="First part name">
            {firstPart}
         </motion.span>
         <p className="project__main-cover-content-description font-normal text-heading-xs lg:text-body-lg text-justify text-body" data-testid="Project description">
            {project.project_description}
         </p>
      </div>
   );
};

export default ProjectMainCoverContent;
