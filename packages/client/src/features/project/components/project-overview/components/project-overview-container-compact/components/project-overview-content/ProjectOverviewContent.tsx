import React from "react";
import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, PROJECT_OVERVIEW_CONTENT_TITLE_TEXT, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project }: ProjectOverviewContentProps): React.ReactElement => {
   return (
      <div className="project__overview-content relative flex flex-col gap-6 font-hanken-grotesk text-body text-justify" aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <h2 className="project__overview-container-title font-hanken-grotesk text-display-sm text-center text-heading font-bold">{PROJECT_OVERVIEW_CONTENT_TITLE_TEXT}</h2>
         <div className="px-6">
            <p className="project__overview-content-description text-body-md font-normal">{project.project_overview_description_part_01}</p>
            <p className="project__overview-content-description text-body-md font-normal">{project.project_overview_description_part_02}</p>
         </div>
      </div>
   );
};

export default ProjectOverviewContent;
