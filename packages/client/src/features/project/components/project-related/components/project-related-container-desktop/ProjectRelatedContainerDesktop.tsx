import ProjectRelatedContainerContent from "./components/project-related-container-content/ProjectRelatedContainerContent";
import ProjectRelatedContainerProjects from "./components/project-related-container-projects/ProjectRelatedContainerProjects";
import { PROJECT_RELATED_CONTAINER_ARIA_LABEL } from "./data/projectRelatedContainerData";

const ProjectRelatedContainerDesktop = () => {
   return (
      <div className="project__related-container project__related-container--desktop flex flex-col gap-12.5 p-25 min-h-screen" aria-label={PROJECT_RELATED_CONTAINER_ARIA_LABEL}>
         <ProjectRelatedContainerContent />
         <ProjectRelatedContainerProjects />
      </div>
   );
};

export default ProjectRelatedContainerDesktop;
