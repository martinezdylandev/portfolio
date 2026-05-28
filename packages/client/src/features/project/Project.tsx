import HttpErrorFallback from "@/components/http-error-fallback/HttpErrorFallback";
import React from "react";
import { useParams } from "react-router";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery/useMediaQuery";
import ProjectMainCover from "./components/project-main-cover/ProjectMainCover";
import ProjectOverview from "./components/project-overview/ProjectOverview";
import ProjectRelated from "./components/project-related/ProjectRelated";
import ProjectResults from "./components/project-results/ProjectResults";
import ProjectTimeline from "./components/project-timeline/ProjectTimeline";
import type { ProjectInterface } from "./data/projectData";
import { PROJECT_ARIA_LABEL, PROJECT_ERROR_ARIA_LABEL, PROJECT_LOADING_ARIA_LABEL, PROJECT_LOADING_TEXT, PROJECT_NO_DATA_TEXT } from "./data/projectData";
import { buildProjectApiPath } from "./utils/buildProjectApiPath";

const Project = (): React.ReactElement => {
   const { projectSlug } = useParams<{ projectSlug: string }>();
   const apiPath = buildProjectApiPath(projectSlug);
   const { data: project, loading, error } = useFetchData<ProjectInterface>(apiPath);
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   if (loading) {
      return (
         <div role="status" aria-live="polite">
            <span className="project__loading-message text-center text-heading-sm font-semibold pt-48 text-heading" aria-label={PROJECT_LOADING_ARIA_LABEL}>
               {PROJECT_LOADING_TEXT}
            </span>
         </div>
      );
   }

   if (error) {
      return <HttpErrorFallback error={error} />;
   }

   if (!project) {
      return (
         <div role="status" aria-live="polite">
            <span className="project__error-message text-center text-heading-sm font-semibold pt-48 text-heading" aria-label={PROJECT_ERROR_ARIA_LABEL}>
               {PROJECT_NO_DATA_TEXT}
            </span>
         </div>
      );
   }

   return (
      <div className="project__container flex flex-col" aria-label={PROJECT_ARIA_LABEL}>
         <ProjectMainCover project={project} isDesktop={isDesktop} />
         <ProjectOverview project={project} isDesktop={isDesktop} />
         <ProjectTimeline project={project} isDesktop={isDesktop} />
         <ProjectResults project={project} isDesktop={isDesktop} />
         <ProjectRelated isDesktop={isDesktop} />
      </div>
   );
};

export default Project;
