import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { useProjectsListDetailedListAnimation } from "../../utils/useProjectsListDetailedAnimations";
import type { ProjectsListProjectProps } from "../data/projectsListDetailedProjectData";
import { PROJECT_LOGO_ALT_TEXT } from "../data/projectsListDetailedProjectData";

const ProjectsListDetailedProjectCompact = ({ project, isOddProject }: ProjectsListProjectProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectPrimaryLogo = `/projects/${idPadded}/logos/primary.webp`;

   const { initial, whileInView, transition: listTransition, viewport } = useProjectsListDetailedListAnimation(isOddProject);

   const projectNameParts = project.project_name.split(":");
   const firstPartName = projectNameParts[0]?.toUpperCase() || "";
   const secondPartName = projectNameParts[1]?.trim() || "";

   return (
      <motion.li initial={initial} whileInView={whileInView} transition={listTransition} viewport={viewport} className="projects-list-detailed__list-item projects-list-detailed__list-item--compact flex flex-col rounded-xs border-0 group bg-card p-6 transition duration-300 ease-in-out" aria-label={`Project list item: ${project.project_name}`}>
         <Link className="projects-list-detailed__link contents" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
            <div className="flex flex-col items-center gap-5">
               <div className="projects-list-detailed__second-wrapper flex shrink-0 size-40 items-center justify-center rounded-[50%] bg-card" aria-label={`Project ${project.project_name} logo`}>
                  <img src={projectPrimaryLogo} className="h-[50%] w-[70%] object-contain" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
               </div>
               <div className="projects-list-detailed__first-wrapper flex flex-col items-center text-center" aria-label={`Project ${project.project_name} details`}>
                  <h2 className="text-heading-sm font-bold transition-colors duration-300 text-heading leading-tight">{firstPartName}</h2>
                  {secondPartName ? <h3 className="text-body-md font-semibold text-body transition-colors duration-300 text-header leading-tight">{secondPartName}</h3> : null}
                  <span className="text-caption text-body transition-colors duration-300 mt-1 line-clamp-2">{project.project_overview_technologies || "Techstack like this... and this, you know"}</span>
               </div>
            </div>
         </Link>
      </motion.li>
   );
};

export default ProjectsListDetailedProjectCompact;
