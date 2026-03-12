import { motion } from "framer-motion";
import { useProjectOverviewInnerAnimations } from "../../utils/useProjectOverviewInnerAnimations";
import { useProjectOverviewScrollAnimations } from "../../utils/useProjectOverviewScrollAnimations";
import { PROJECT_OVERVIEW_CONTENT_TITLE_TEXT } from "./components/project-overview-content/data/projectOverviewContentData";
import ProjectOverviewContent from "./components/project-overview-content/ProjectOverviewContent";
import ProjectOverviewGrid from "./components/project-overview-grid/ProjectOverviewGrid";
import ProjectOverviewImage from "./components/project-overview-image/ProjectOverviewImage";
import { PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL, ProjectOvervierContainerProps } from "./data/projectOverviewContainerData";

const ProjectOverviewContainerDesktop = ({ project }: ProjectOvervierContainerProps) => {
   const { containerRef, scale } = useProjectOverviewScrollAnimations();
   const { initial, whileInView, transition, viewport } = useProjectOverviewInnerAnimations();

   return (
      <motion.div ref={containerRef} style={{ scale }} className="project__overview-container project__overview-container--desktop flex flex-col rounded-sm bg-section p-25 min-h-screen" aria-label={PROJECT_OVERVIEW_CONTAINER_ARIA_LABEL}>
         <ProjectOverviewImage />
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__overview-container-inner grid grid-cols-2 min-h-screen">
            <h2 className="project__overview-container-title font-hanken-grotesk row-start-1 col-start-2 text-8xl mt-25 mb-12 text-end text-heading font-bold">{PROJECT_OVERVIEW_CONTENT_TITLE_TEXT}</h2>
            <ProjectOverviewContent project={project} />
            <ProjectOverviewGrid project={project} />
         </motion.div>
      </motion.div>
   );
};

export default ProjectOverviewContainerDesktop;
