import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import React from "react";
import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL, ProjecOverviewGridProps } from "./data/projectOverviewGridData";

const ProjectOverviewGrid = ({ project }: ProjecOverviewGridProps): React.ReactElement => {
   return (
      <div className="project__overview-grid row-start-3 col-start-1 col-span-2" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <div className="flex self-center gap-12 h-fit">
            <ProjectOverviewTechnologies project={project} />
            <div className="project__overview-grid-divider max-h-full w-[2px] self-stretch border border-solid border-border-subtle" data-testid="divider" aria-hidden="true"></div>
            <ProjectOverviewDuration project={project} />
         </div>
      </div>
   );
};

export default ProjectOverviewGrid;
