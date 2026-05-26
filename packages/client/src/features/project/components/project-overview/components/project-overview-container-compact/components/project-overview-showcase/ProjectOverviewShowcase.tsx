import { motion } from "framer-motion";
import React from "react";
import ProjectOverviewShowcaseImages from "./components/project-overview-showcase-images/ProjectOverviewShowcaseImages";
import ProjectOverviewShowcaseVideo from "./components/project-overview-showcase-video/ProjectOverviewShowcaseVideo";
import { PROJECT_OVERVIEW_SHOWCASE_CONTAINER_ARIA_LABEL, PROJECT_OVERVIEW_SHOWCASE_WRAPPER_ARIA_LABEL, ProjectOverviewShowcaseProps } from "./data/projectOverviewShowcaseData";
import { useProjectOverviewShowcaseAnimations } from "./utils/useProjectOverviewShowcaseAnimations";

const ProjectOverviewShowcase = ({ project }: ProjectOverviewShowcaseProps): React.ReactElement => {
   const { containerRef, leftHalfX, rightHalfX, mediaOpacity } = useProjectOverviewShowcaseAnimations();
   const isVideo = project.project_overview_main_media_type === "video";

   // Re-rendered for each split half so video/image DOM nodes don't collide.
   const renderMedia = () => (isVideo ? <ProjectOverviewShowcaseVideo project={project} /> : <ProjectOverviewShowcaseImages project={project} />);

   return (
      <div className="project__overview-showcase-wrapper pb-12.5" aria-label={PROJECT_OVERVIEW_SHOWCASE_WRAPPER_ARIA_LABEL}>
         <div ref={containerRef} className="project__overview-showcase-container relative overflow-hidden" aria-label={PROJECT_OVERVIEW_SHOWCASE_CONTAINER_ARIA_LABEL}>
            <div className="project__overview-showcase-placeholder invisible w-full" aria-hidden="true">
               {renderMedia()}
            </div>
            <motion.div className="absolute inset-0 [clip-path:inset(0_50%_0_0)]" style={{ x: leftHalfX, opacity: mediaOpacity }}>
               {renderMedia()}
            </motion.div>
            <motion.div className="absolute inset-0 [clip-path:inset(0_0_0_50%)]" style={{ x: rightHalfX, opacity: mediaOpacity }} aria-hidden="true">
               {renderMedia()}
            </motion.div>
         </div>
      </div>
   );
};

export default ProjectOverviewShowcase;
