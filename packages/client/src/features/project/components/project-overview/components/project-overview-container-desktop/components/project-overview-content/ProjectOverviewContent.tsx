import { motion } from "framer-motion";
import React from "react";
import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_01_ALT_TEXT, PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_02_ALT_TEXT, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project }: ProjectOverviewContentProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const descriptionMedia01 = `/projects/${idPadded}/overview/description-01.webp`;
   const descriptionMedia02 = `/projects/${idPadded}/overview/description-02.webp`;

   // Depending on text size, change gap-y. Check out if translate-y is good for all screen sizes.
   return (
      <motion.div className="project__overview-content font-hanken-grotesk text-body text-justify grid grid-cols-5 gap-y-25 row-start-2 col-span-2" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <img className="project__overview-content-image col-start-2 col-span-4 row-start-1 max-w-180 justify-self-end aspect-video object-cover" src={descriptionMedia01} alt={PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_01_ALT_TEXT} />
         <div className="project__overview-content-card col-start-1 col-span-4 row-start-1 relative z-10 self-end p-5 bg-card">
            <p className="project__overview-content-description text-lg font-normal">{project.project_overview_description_part_01}</p>
         </div>
         <img className="project__overview-content-image col-start-1 col-span-4 row-start-2 max-w-180 justify-self-start aspect-video object-cover" src={descriptionMedia02} alt={PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_02_ALT_TEXT} />
         <div className="project__overview-content-card col-start-2 col-span-4 row-start-2 relative z-10 self-end p-5 bg-card">
            <p className="project__overview-content-description text-lg font-normal">{project.project_overview_description_part_02}</p>
         </div>
      </motion.div>
   );
};

export default ProjectOverviewContent;
