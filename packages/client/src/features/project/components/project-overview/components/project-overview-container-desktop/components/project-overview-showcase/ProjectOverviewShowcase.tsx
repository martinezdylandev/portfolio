import ProjectOverviewShowcaseImages from "./components/project-overview-showcase-images/ProjectOverviewShowcaseImages";
import React from "react";
import ProjectOverviewShowcaseVideo from "./components/project-overview-showcase-video/ProjectOverviewShowcaseVideo";
import { PROJECT_OVERVIEW_SHOWCASE_CONTAINER_ARIA_LABEL, PROJECT_OVERVIEW_SHOWCASE_WRAPPER_ARIA_LABEL, ProjectOverviewShowcaseProps } from "./data/projectOverviewShowcaseData";

const ProjectOverviewShowcase = ({ project }: ProjectOverviewShowcaseProps): React.ReactElement => {
   const isVideo = project.project_overview_main_media_type === "video";

   return (
      <div className="project__overview-showcase-wrapper" aria-label={PROJECT_OVERVIEW_SHOWCASE_WRAPPER_ARIA_LABEL}>
         <div className="project__overview-showcase-container" aria-label={PROJECT_OVERVIEW_SHOWCASE_CONTAINER_ARIA_LABEL}>
            {isVideo ? <ProjectOverviewShowcaseVideo project={project} /> : <ProjectOverviewShowcaseImages project={project} />}
         </div>
      </div>
   );
};

export default ProjectOverviewShowcase;
