import HttpErrorFallback from "@/components/http-error-fallback/HttpErrorFallback";
import React from "react";
import ProjectRelatedContainerProjectsProject from "./components/project-related-container-projects-project/ProjectRelatedContainerProjectsProject.tsx";
import { PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL, PROJECT_RELATED_CONTAINER_PROJECTS_ERROR_ARIA_LABEL, PROJECT_RELATED_CONTAINER_PROJECTS_LOADING_ARIA_LABEL, getProjectNameParts } from "./data/projectRelatedContainerProjectsData.ts";
import { useRelatedProjects } from "./utils/useRelatedProjects";

const ProjectRelatedContainerProjects = (): React.ReactElement => {
   const { relatedProjects, loading, error } = useRelatedProjects();

   if (loading) {
      return (
         <div role="status" aria-live="polite">
            <span className="project__related-container-projects-loading-message text-center text-heading-sm font-semibold pt-48 text-heading" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_LOADING_ARIA_LABEL}>
               Loading projects...
            </span>
         </div>
      );
   }

   if (error) {
      return <HttpErrorFallback error={error} />;
   }

   if (relatedProjects.length === 0) {
      return (
         <div role="status" aria-live="polite">
            <span className="project__related-container-projects-error-message text-center text-heading-sm font-semibold pt-48 text-heading" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_ERROR_ARIA_LABEL}>
               No projects data available or unexpected format.
            </span>
         </div>
      );
   }

   return (
      <div className="project__related-container-projects" aria-label={PROJECT_RELATED_CONTAINER_PROJECTS_ARIA_LABEL}>
         <ul className="project__related-container-projects-list flex justify-between" data-testid="related-projects-list">
            {relatedProjects.map((project) => {
               const { firstPart, secondPart } = getProjectNameParts(project.project_name);
               return <ProjectRelatedContainerProjectsProject key={project.project_id} firstPart={firstPart} secondPart={secondPart} project={project} />;
            })}
         </ul>
      </div>
   );
};

export default ProjectRelatedContainerProjects;
