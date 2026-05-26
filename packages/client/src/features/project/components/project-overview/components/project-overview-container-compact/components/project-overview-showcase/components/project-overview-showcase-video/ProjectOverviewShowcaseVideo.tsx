import { PROJECT_OVERVIEW_SHOWCASE_VIDEO_ARIA_LABEL, PROJECT_OVERVIEW_SHOWCASE_VIDEO_FALLBACK_TEXT, ProjectOverviewShowcaseProps } from "../../data/projectOverviewShowcaseData";
import React from "react";

const ProjectOverviewShowcaseVideo = ({ project }: ProjectOverviewShowcaseProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const videoSrc = `/projects/${idPadded}/overview/main.mp4`;

   return (
      <video className="project__overview-showcase-video w-full h-full object-cover" src={videoSrc} autoPlay muted loop playsInline preload="metadata" aria-label={PROJECT_OVERVIEW_SHOWCASE_VIDEO_ARIA_LABEL}>
         {PROJECT_OVERVIEW_SHOWCASE_VIDEO_FALLBACK_TEXT}
      </video>
   );
};

export default ProjectOverviewShowcaseVideo;
