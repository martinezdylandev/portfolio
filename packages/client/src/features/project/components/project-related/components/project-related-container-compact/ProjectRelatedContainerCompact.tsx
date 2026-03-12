import React from "react";
import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import { PROJECT_RELATED_CONTAINER_ARIA_LABEL } from "./data/projectRelatedContainerData";

const ProjectRelatedContainerCompact = (): React.ReactElement => {
   return (
      <div className="project__related-container project__related-container--compact flex flex-col py-25" aria-label={PROJECT_RELATED_CONTAINER_ARIA_LABEL}>
         <ProjectRelatedContainerContent />
      </div>
   );
};

export default ProjectRelatedContainerCompact;
