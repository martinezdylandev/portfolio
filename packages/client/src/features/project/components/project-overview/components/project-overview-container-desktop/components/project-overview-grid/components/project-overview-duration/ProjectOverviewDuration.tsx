import { PROJECT_OVERVIEW_DURATION_ARIA_LABEL, PROJECT_OVERVIEW_DURATION_TITLE_TEXT, ProjectOverviewDurationProps } from "./data/projectOverviewDurationData";
import React from "react";

const ProjectOverviewDuration = ({ project }: ProjectOverviewDurationProps): React.ReactElement => {
   return (
      <div className="project__overview-grid-duration flex flex-col max-w-1/2" aria-label={PROJECT_OVERVIEW_DURATION_ARIA_LABEL}>
         <span className="text-lg font-medium mb-6 text-muted">{PROJECT_OVERVIEW_DURATION_TITLE_TEXT}</span>
         <span className="project__overview-grid-duration text-xl font-bold text-body">{project.project_overview_duration}</span>
      </div>
   );
};

export default ProjectOverviewDuration;
