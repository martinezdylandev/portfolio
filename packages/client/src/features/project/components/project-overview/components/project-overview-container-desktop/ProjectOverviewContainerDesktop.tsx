import { motion } from "framer-motion";
import React from "react";
import { useProjectOverviewScrollAnimations } from "../../utils/useProjectOverviewScrollAnimations";
import { PROJECT_OVERVIEW_CONTENT_TITLE_TEXT } from "./components/project-overview-content/data/projectOverviewContentData";
import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import ProjectOverviewShowcase from "./components/project-overview-showcase/ProjectOverviewShowcase";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL, ProjectOvervierContainerProps } from "./data/projectOverviewContainerData";

const ProjectOverviewContainerDesktop = ({ project }: ProjectOvervierContainerProps): React.ReactElement => {
   const { containerRef, scale } = useProjectOverviewScrollAnimations();

   return (
      <motion.div ref={containerRef} style={{ scale }} className="project__overview-container project__overview-container--desktop flex flex-col rounded-sm bg-section p-25 min-h-screen" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewShowcase project={project} />
         <div className="project__overview-container-inner grid grid-cols-2 min-h-screen gap-y-25">
            <h2 className="project__overview-container-title font-hanken-grotesk row-start-1 col-start-1 col-span-2 text-display-lg text-end text-heading font-bold pt-25">{PROJECT_OVERVIEW_CONTENT_TITLE_TEXT}</h2>
            <ProjectOverviewContent project={project} />
            <ProjectOverviewGrid project={project} />
         </div>
      </motion.div>
   );
};

export default ProjectOverviewContainerDesktop;
