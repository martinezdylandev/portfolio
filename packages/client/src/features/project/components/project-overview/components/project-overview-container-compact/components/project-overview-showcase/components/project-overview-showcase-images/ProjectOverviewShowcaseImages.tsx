import { PROJECT_OVERVIEW_SHOWCASE_IMAGES_ARIA_LABEL, PROJECT_OVERVIEW_SHOWCASE_IMAGE_CENTER_ALT_TEXT, ProjectOverviewShowcaseProps } from "../../data/projectOverviewShowcaseData";
import React from "react";

const ProjectOverviewShowcaseImages = ({ project }: ProjectOverviewShowcaseProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const base = `/projects/${idPadded}/overview`;

   return (
      <div className="project__overview-showcase-images items-end w-full h-full" aria-label={PROJECT_OVERVIEW_SHOWCASE_IMAGES_ARIA_LABEL}>
         <img className="project__overview-showcase-image project__overview-showcase-image--center w-full object-contain scale-110 -translate-y-4 relative z-10" src={`${base}/main-center.webp`} alt={PROJECT_OVERVIEW_SHOWCASE_IMAGE_CENTER_ALT_TEXT} />
      </div>
   );
};

export default ProjectOverviewShowcaseImages;
