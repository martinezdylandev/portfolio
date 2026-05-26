import { motion } from "framer-motion";
import React from "react";
import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";
import { parseProjectName } from "./utils/parseProjectName";

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps): React.ReactElement => {
   const { firstPart, secondPart } = parseProjectName(project.project_name);

   return (
      <div className="project__main-cover-content flex flex-col" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         <div className="flex flex-col items-center justify-center text-center mb-12.5">
            <motion.span className="project__main-cover-content-title text-display-sm text-heading leading-none font-bold" data-testid="First part name">
               {firstPart}
            </motion.span>
            {secondPart && (
               <motion.span className="project__main-cover-content-subtitle font-medium text-heading-sm text-heading" data-testid="Second part name">
                  {secondPart}
               </motion.span>
            )}
         </div>
         <p className="project__main-cover-content-description text-body-md text-justify text-body px-6" data-testid="Project description">
            {project.project_description}
         </p>
      </div>
   );
};

export default ProjectMainCoverContent;
