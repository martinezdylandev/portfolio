import React from "react";
import ProjectResultsContent from "./components/project-results-content/ProjectResultsContent";
import { PROJECT_RESULTS_CONTAINER_ARIA_LABEL, ProjectResultsContainerProps } from "./data/projectResultsContainerData";

const ProjectResultsContainerCompact = ({ project }: ProjectResultsContainerProps): React.ReactElement => {
   return (
      <div className="project__results-container project__results-container--compact p-6 py-12 px-5" aria-label={PROJECT_RESULTS_CONTAINER_ARIA_LABEL}>
         <ProjectResultsContent project={project} />
      </div>
   );
};

export default ProjectResultsContainerCompact;
