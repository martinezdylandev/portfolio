import ProjectOverviewContainerCompact from "./components/project-overview-container-compact/ProjectOverviewContainerCompact";
import React from "react";
import ProjectOverviewContainerDesktop from "./components/project-overview-container-desktop/ProjectOverviewContainerDesktop";
import { PROJECT_OVERVIEW_ARIA_LABEL, ProjectOverviewProps } from "./data/projectOverviewData";

const ProjectOverview = ({ project, isDesktop }: ProjectOverviewProps): React.ReactElement => {
   return (
      <section className="project__overview bg-page" aria-label={PROJECT_OVERVIEW_ARIA_LABEL}>
         {isDesktop ? <ProjectOverviewContainerDesktop project={project} /> : <ProjectOverviewContainerCompact project={project} />}
      </section>
   );
};

export default ProjectOverview;
