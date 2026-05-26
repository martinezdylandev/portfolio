import { Link } from "react-router";
import React from "react";
import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import ProjectRelatedContainerProjects from "./components/project-related-container-projects/ProjectRelatedContainerProjects";
import { PROJECT_RELATED_CONTAINER_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE } from "./data/projectRelatedContainerData";

const ProjectRelatedContainerDesktop = (): React.ReactElement => {
   return (
      <div className="project__related-container project__related-container--desktop flex flex-col gap-12.5 p-25 min-h-screen" aria-label={PROJECT_RELATED_CONTAINER_ARIA_LABEL}>
         <ProjectRelatedContainerContent />
         <ProjectRelatedContainerProjects />
         <Link to={`/projects/`} className="project__related-container-content-link" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL}>
            <span className="project__related-container-content-text relative group font-hanken-grotesk text-xl font-bold text-heading">
               {PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}
               <span className="project__related-container-content-text-underline absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </span>
         </Link>
      </div>
   );
};

export default ProjectRelatedContainerDesktop;
