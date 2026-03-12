import ProjectResultsContent from "./components/project-results-content/ProjectResultsContent";
import { PROJECT_RESULTS_CONTAINER_ARIA_LABEL, ProjectResultsContainerProps } from "./data/projectResultsContainerData";

const ProjectResultsContainerDesktop = ({ project }: ProjectResultsContainerProps) => {
   return (
      <div className="project__results-container project__results-container--desktop p-25" aria-label={PROJECT_RESULTS_CONTAINER_ARIA_LABEL}>
         <ProjectResultsContent project={project} />
      </div>
   );
};

export default ProjectResultsContainerDesktop;
