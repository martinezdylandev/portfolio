import { motion } from "framer-motion";
import React from "react";
import { useProjectOverviewInnerAnimations } from "../../utils/useProjectOverviewInnerAnimations";
import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import ProjectOverviewShowcase from "./components/project-overview-showcase/ProjectOverviewShowcase";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL, ProjectOvervierContainerProps } from "./data/projectOverviewContainerData";

const ProjectOverviewContainerCompact = ({ project }: ProjectOvervierContainerProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useProjectOverviewInnerAnimations();

   return (
      <div className="project__overview-container project__overview-container--compact flex flex-col rounded-sm bg-section py-25" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewShowcase project={project} />
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__overview-container-inner project__overview-container-inner--compact flex flex-col gap-12.5">
            <ProjectOverviewContent project={project} />
            <ProjectOverviewGrid project={project} />
         </motion.div>
      </div>
   );
};

export default ProjectOverviewContainerCompact;
