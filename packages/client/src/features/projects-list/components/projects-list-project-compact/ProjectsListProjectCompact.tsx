import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { PROJECT_LOGO_ALT_TEXT, ProjectsListProjectProps } from "../../data/ProjectsListProjectData";

const ProjectsListProjectCompact = ({ project, index }: ProjectsListProjectProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/projects/${idPadded}/logos/secondary.webp`;
   const isTablet = useMediaQuery("(min-width: 768px)");

   return (
      <>
         <li className="projects-list__list-item flex flex-col justify-center items-center gap-5 p-5 border-0 rounded-xs transition duration-00 ease-in-out bg-card group" aria-label={`Project ${index} list item: ${project.project_name}`}>
            <Link className="projects-list__link contents" to={`/projects/${project.project_slug}`} aria-label={`View ${project.project_name}`}>
               {isTablet ? (
                  <div className="grid grid-cols-2">
                     <div className={`projects-list__list-item-content ${project.project_id % 2 ? "order-1" : "order-2"}`}>
                        <motion.img src={projectSecondaryLogo} className="projects-list__list-item-logo object-contain transition-all duration-800" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
                     </div>
                     <div className={`flex flex-col p-5 gap-5 ${project.project_id % 2 ? "order-2" : "order-1"}`}>
                        <motion.span className="projects-list__list-item-letter font-hanken-grotesk text-heading text-[clamp(var(--font-size-heading-xs),4vw,var(--font-size-heading))] font-bold leading-none transition-all duration-800">{project.project_name}</motion.span>
                        <motion.span className="projects-list__list-item-letter font-hanken-grotesk text-muted text-[clamp(var(--font-size-body-lg),2vw,var(--font-size-heading-xs))] text-justify leading-none transition-all duration-800">{project.project_description}</motion.span>
                     </div>
                  </div>
               ) : (
                  <div className="flex flex-col gap-5">
                     <div className={`projects-list__list-item-content`}>
                        <motion.img src={projectSecondaryLogo} className="projects-list__list-item-logo object-contain transition-all duration-800" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
                     </div>
                     <div className="grid grid-cols-2 gap-5">
                        <motion.span className={`projects-list__list-item-letter col-span-2 font-hanken-grotesk text-[clamp(var(--font-size-heading-xs),4vw,var(--font-size-heading))] font-bold leading-none transition-all duration-800 text-heading`}>{project.project_name}</motion.span>
                        <motion.span className={`projects-list__list-item-letter row-start-2 col-start-2 font-hanken-grotesk text-body-sm font-base text-muted text-right leading-none transition-all duration-800`}>See more</motion.span>
                     </div>
                  </div>
               )}
            </Link>
         </li>
      </>
   );
};

export default ProjectsListProjectCompact;
