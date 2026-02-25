import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery/useMediaQuery";
import ProjectsListDetailedHeaderCompact from "./components/projects-list-detailed-header-compact/ProjectsListDetailedHeaderCompact";
import ProjectsListDetailedHeaderDesktop from "./components/projects-list-detailed-header-desktop/ProjectsListDetailedHeaderDesktop";
import ProjectsListDetailedProjectCompact from "./components/projects-list-detailed-project-compact/ProjectsListDetailedProjectCompact";
import ProjectsListDetailedProjectDesktop from "./components/projects-list-detailed-project-desktop/ProjectsListDetailedProjectDesktop";
import { isOdd } from "./data/isOdd";
import type { ProjectInterface } from "./data/projectsListDetailedData";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListDetailedData";
import { useProjectsListDetailedHeaderAnimations } from "./utils/useProjectsListDetailedAnimations";

const ProjectsListDetailed = () => {
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("projects");
   const headerAnimation = useProjectsListDetailedHeaderAnimations();
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   if (loading) {
      return (
         <span className="projects-list-detailed__loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_LOADING_ARIA_LABEL}>
            {PROJECTS_LIST_LOADING_TEXT}
         </span>
      );
   }

   if (error) {
      return (
         <span className="projects-list-detailed__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_ERROR_TEXT} {error.message}
         </span>
      );
   }

   if (!projects || !Array.isArray(projects)) {
      return (
         <span className="projects-list-detailed__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
            {PROJECTS_LIST_NO_DATA_TEXT}
         </span>
      );
   }

   return (
      <div id="projects" className="projects-list-detailed__container flex flex-col gap-25 pb-25 overflow-hidden bg-page" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
         {isDesktop ? <ProjectsListDetailedHeaderDesktop animation={headerAnimation} /> : <ProjectsListDetailedHeaderCompact animation={headerAnimation} />}
         <ul className="projects-list-detailed__list flex flex-col gap-10 px-5" data-testid={PROJECTS_LIST_UL_TEST_ID}>
            {projects.map((project, index) => {
               const isOddProject = isOdd(index);
               return isDesktop ? <ProjectsListDetailedProjectDesktop key={project.project_id} project={project} isOddProject={isOddProject} /> : <ProjectsListDetailedProjectCompact key={project.project_id} project={project} isOddProject={isOddProject} />;
            })}
         </ul>
      </div>
   );
};

export default ProjectsListDetailed;
