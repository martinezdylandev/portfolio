import React from "react";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_TITLE } from "./data/projectRelatedContainerConentData";

const ProjectRelatedContainerContent = (): React.ReactElement => {
   return (
      <div className={`project__related-container-content`} aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <h2 className={`project__related-container-content-title font-hanken-grotesk font-bold text-heading text-display-lg leading-none text-right`}>{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
      </div>
   );
};

export default ProjectRelatedContainerContent;
