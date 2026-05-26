import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import React from "react";
import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL, ProjecOverviewGridProps } from "./data/projectOverviewGridData";

const ProjectOverviewGrid = ({ project }: ProjecOverviewGridProps): React.ReactElement => {
   return (
      <div className="project__overview-grid flex flex-col md:flex-row gap-6 px-6" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <ProjectOverviewTechnologies project={project} />
         <div className="project__overview-grid-divider hidden md:inline max-h-full w-[2px] self-stretch border border-solid border-border-subtle" data-testid="divider" aria-hidden="true"></div>
         <ProjectOverviewDuration project={project} />
      </div>
   );
};

export default ProjectOverviewGrid;
