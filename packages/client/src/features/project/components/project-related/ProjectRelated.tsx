import ProjectRelatedContainerCompact from "./components/project-related-container-compact/ProjectRelatedContainerCompact";
import ProjectRelatedContainerDesktop from "./components/project-related-container-desktop/ProjectRelatedContainerDesktop";
import { PROJECT_RELATED_ARIA_LABEL, ProjectRelatedProps } from "./data/projectRelatedData";

const ProjectRelated = ({ isDesktop }: ProjectRelatedProps) => {
   return (
      <section className="project__related min-w-screen bg-card" aria-label={PROJECT_RELATED_ARIA_LABEL}>
         {isDesktop ? <ProjectRelatedContainerDesktop /> : <ProjectRelatedContainerCompact />}
      </section>
   );
};

export default ProjectRelated;
