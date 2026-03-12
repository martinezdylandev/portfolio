import ProjectOverviewDuration from "./components/project-overview-duration/ProjectOverviewDuration";
import ProjectOverviewTechnologies from "./components/project-overview-technologies/ProjectOverviewTechnologies";
import { PROJECT_OVERVIEW_GRID_ARIA_LABEL, ProjecOverviewGridProps } from "./data/projectOverviewGridData";

const ProjectOverviewGrid = ({ project }: ProjecOverviewGridProps) => {
   return (
      <div className="project__overview-grid flex flex-col gap-6" aria-label={PROJECT_OVERVIEW_GRID_ARIA_LABEL}>
         <ProjectOverviewTechnologies project={project} />
         <ProjectOverviewDuration project={project} />
      </div>
   );
};

export default ProjectOverviewGrid;
