import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import type { ProjectsListProjectProps } from "../data/projectsListDetailedProjectData";
import { PROJECT_LOGO_ALT_TEXT } from "../data/projectsListDetailedProjectData";

const ProjectsListDetailedProjectDesktop = ({ project, isOddProject }: ProjectsListProjectProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectPrimaryLogo = `/projects/${idPadded}/logos/primary.webp`;

   const projectNameParts = project.project_name.split(":");
   const firstPartName = projectNameParts[0]?.toUpperCase() || "";
   const secondPartName = projectNameParts[1]?.trim() || "";

   return (
      <motion.li initial={{ x: isOddProject ? -700 : 700, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.1, ease: "easeInOut" }} viewport={{ once: true, amount: 0.1 }} className="projects-list-detailed__list-item projects-list-detailed__list-item--desktop grid min-h-screen cursor-pointer rounded-xs border-0 group bg-card p-12 transition duration-300 ease-in-out hover:bg-accent" aria-label={`Project list item: ${project.project_name}`}>
         <Link className="projects-list-detailed__link contents" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
            <div className={`flex flex-row items-center justify-between py-12.5 ${isOddProject ? "" : "flex-row-reverse"}`}>
               <div className="projects-list-detailed__first-wrapper flex flex-col max-w-3/4 text-left" aria-label={`Project ${project.project_name} details`}>
                  <span className="text-[clamp(var(--font-size-heading-xl),5vw,var(--font-size-display))] font-bold transition-colors duration-300 text-heading leading-none group-hover:text-white">{firstPartName}</span>
                  <span className="text-[clamp(var(--font-size-heading-lg),4vw,var(--font-size-heading-xl))] font-bold transition-colors duration-300 text-heading group-hover:text-white">{secondPartName}</span>
                  <span className="text-[clamp(var(--font-size-body),2vw,var(--font-size-heading-xs))] text-body transition-colors duration-300 group-hover:text-white">{project.project_overview_technologies || "Techstack like this... and this, you know"}</span>
               </div>
               <div className="projects-list-detailed__second-wrapper size-75 flex shrink-0 items-center justify-center rounded-[50%] transition-colors duration-300 bg-card group-hover:bg-page" aria-label={`Project ${project.project_name} logo`}>
                  <img src={projectPrimaryLogo} className="h-[40%] w-[80%] object-contain" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
               </div>
            </div>
         </Link>
      </motion.li>
   );
};

export default ProjectsListDetailedProjectDesktop;
