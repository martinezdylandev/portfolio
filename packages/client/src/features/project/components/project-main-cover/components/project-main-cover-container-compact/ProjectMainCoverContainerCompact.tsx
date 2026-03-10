import { motion } from "framer-motion";
import React from "react";
import ProjectMainCoverContent from "./components/project-main-cover-content/ProjectMainCoverContent";
import ProjectMainCoverLogos from "./components/project-main-cover-logos/ProjectMainCoverLogos";
import { PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL, ProjectMainCoverContainerProps } from "./data/projectMainCoverContainerData";
import { useProjectMainCoverContainerAnimations } from "./utils/useProjectMainCoverContainerAnimations";

const ProjectMainCoverContainerCompact = ({ project }: ProjectMainCoverContainerProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useProjectMainCoverContainerAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__main-cover-container project__main-cover-container--compact flex flex-col py-25 gap-6" aria-label={PROJECT_MAIN_COVER_CONTAINER_ARIA_LABEL}>
         <ProjectMainCoverLogos project={project} />
         <ProjectMainCoverContent project={project} />
      </motion.div>
   );
};

export default ProjectMainCoverContainerCompact;
