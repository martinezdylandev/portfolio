import { Link } from "react-router";
import { PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL, PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE, PROJECT_RELATED_CONTAINER_CONTENT_TITLE } from "./data/projectRelatedContainerConentData";

interface ProjectRelatedContainerContentProps {
   compact?: boolean;
}

const ProjectRelatedContainerContent = ({ compact = false }: ProjectRelatedContainerContentProps) => {
   return (
      <div className={`project__related-container-content flex justify-between items-end ${compact ? "mb-8 flex-col gap-4" : "mb-12"}`} aria-label={PROJECT_RELATED_CONTAINER_CONTENT_ARIA_LABEL}>
         <Link to={`/projects/`} className="project__related-container-content-link" aria-label={PROJECT_RELATED_CONTAINER_CONTENT_LINK_ARIA_LABEL}>
            <span className="project__related-container-content-text relative group font-hanken-grotesk text-lg sm:text-2xl font-medium text-heading">
               {PROJECT_RELATED_CONTAINER_CONTENT_SUBTITLE}
               <span className="project__related-container-content-text-underline absolute left-0 bottom-0 h-[2px] bg-current w-0 group-hover:w-full transition-all duration-300" aria-hidden="true"></span>
            </span>
         </Link>
         <h2 className={`project__related-container-content-title font-hanken-grotesk font-bold text-heading ${compact ? "text-4xl sm:text-5xl" : "text-8xl"}`}>{PROJECT_RELATED_CONTAINER_CONTENT_TITLE}</h2>
      </div>
   );
};

export default ProjectRelatedContainerContent;
