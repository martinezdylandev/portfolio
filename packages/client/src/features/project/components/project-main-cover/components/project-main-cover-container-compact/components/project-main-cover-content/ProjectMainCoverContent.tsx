import { motion } from "framer-motion";
import { PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL, ProjectMainCoverContentProps } from "./data/projectMainCoverContentData";
import { parseProjectName } from "./utils/parseProjectName";

// TODO: Implement y, progress and opacity based on container instead of fixed pixels.

const ProjectMainCoverContent = ({ project }: ProjectMainCoverContentProps) => {
   const { firstPart, secondPart } = parseProjectName(project.project_name);

   return (
      <div className="project__main-cover-content flex flex-col" aria-label={PROJECT_MAIN_COVER_CONTENT_ARIA_LABEL}>
         <div className="flex flex-col items-center justify-center text-center mb-12.5">
            <motion.h2 className="project__main-cover-content-title text-4xl text-heading font-bold" data-testid="First part name">
               {firstPart}
            </motion.h2>
            {secondPart && (
               <motion.h3 className="project__main-cover-content-subtitle font-bold text-xl text-heading" data-testid="Second part name">
                  {secondPart}
               </motion.h3>
            )}
         </div>
         <p className="project__main-cover-content-description text-md text-justify text-body px-6" data-testid="Project description">
            {project.project_description}
         </p>
      </div>
   );
};

export default ProjectMainCoverContent;
