import { PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL, PROJECT_OVERVIEW_TECHNOLOGIES_TITLE, ProjectOverviewTechnologiesProps } from "./data/projectOverviewTechnologiesData";
import React from "react";

const ProjectOverviewTechnologies = ({ project }: ProjectOverviewTechnologiesProps): React.ReactElement => {
   return (
      <div className="project__overview-grid-technologies flex flex-col max-w-1/2" aria-label={PROJECT_OVERVIEW_TECHNOLOGIES_ARIA_LABEL}>
         <span className="project__overview-grid-technologies-title text-lg font-medium mb-10 text-muted">{PROJECT_OVERVIEW_TECHNOLOGIES_TITLE}</span>
         <span className="project__overview-grid-technologies-list text-xl font-bold text-body">{project.project_overview_technologies}</span>
      </div>
   );
};

export default ProjectOverviewTechnologies;
