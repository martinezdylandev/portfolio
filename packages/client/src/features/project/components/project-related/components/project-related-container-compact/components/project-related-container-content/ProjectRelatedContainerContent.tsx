import { motion } from "framer-motion";
import { Link } from "react-router";
import ProjectsRelatedContainerProjects from "../project-related-container-projects/ProjectRelatedContainerProjects";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE, PROJECT_RELATED_CONTAINER_CONTENT_TITLE } from "./data/projectRelatedContainerConentData";
import { useProjectRelatedContainerContentAnimations } from "./utils/useProjectRelatedContainerContentAnimations";

const ProjectRelatedContainerContent = () => {
   const { initial, whileInView, transition, viewport } = useProjectRelatedContainerContentAnimations();

   return (
      <div className={`project__related-container-content flex flex-col px-6`} aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <h2 className={`project__related-container-content-title font-hanken-grotesk font-bold text-center text-heading mb-6 text-4xl`}>{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
         <ProjectsRelatedContainerProjects />
         <Link to={`/projects/`} className="project__related-container-content-link text-center mt-12.5" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL}>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__related-container-content-text font-hanken-grotesk text-xl font-medium text-heading">
               {PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}
            </motion.span>
         </Link>
      </div>
   );
};

export default ProjectRelatedContainerContent;
