import ProjectResultsContainerCompact from "./components/project-results-container-compact/ProjectResultsContainerCompact";
import ProjectResultsContainerDesktop from "./components/project-results-container-desktop/ProjectResultsContainerDesktop";
import { PROJECT_RESULTS_ARIA_LABEL, ProjectResultsProps } from "./data/projectResultsData";

const ProjectResults = ({ project, isDesktop }: ProjectResultsProps) => {
   return (
      <section className="project__results min-w-screen bg-section" aria-label={PROJECT_RESULTS_ARIA_LABEL}>
         {isDesktop ? <ProjectResultsContainerDesktop project={project} /> : <ProjectResultsContainerCompact project={project} />}
      </section>
   );
};

export default ProjectResults;
