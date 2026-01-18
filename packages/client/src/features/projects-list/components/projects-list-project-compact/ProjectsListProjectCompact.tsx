import { motion } from "framer-motion";
import { Link } from "react-router";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { PROJECT_LOGO_ALT_TEXT, ProjectsListProjectProps } from "../../data/ProjectsListProjectData";

const ProjectsListProjectCompact = ({ project }: ProjectsListProjectProps) => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/project/business-secondary-logos/${idPadded}/logo.webp`;
   const isTablet = useMediaQuery("(min-width: 768px)");

   return (
      <>
         <li className="projects-list__list-item flex flex-col justify-center items-center gap-5 p-5 cursor-pointer border-0 rounded-xs transition duration-500 ease-in-out bg-card hover:bg-accent group" aria-label={`Project list item: ${project.project_name}`}>
            <Link className="projects-list__link contents" to={`/projects/${project.project_name}`} aria-label={`View ${project.project_name}`}>
               {isTablet ? (
                  <div className="grid grid-cols-2">
                     <div className={`projects-list__list-item-content ${project.project_id % 2 ? "order-1" : "order-2"}`}>
                        <motion.img key={project.project_id} src={projectSecondaryLogo} className="projects-list__list-item-logo object-contain transition-all duration-800" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
                     </div>
                     <div className={`flex flex-col p-5 gap-5 ${project.project_id % 2 ? "order-2" : "order-1"}`}>
                        <motion.span key={project.project_id} className="projects-list__list-item-letter font-hanken-grotesk text-heading text-2xl font-bold leading-none transition-all duration-800 group-hover:text-white">
                           {project.project_name}
                        </motion.span>
                        <motion.span key={project.project_id} className="projects-list__list-item-letter font-hanken-grotesk text-muted text-xl text-justify leading-none transition-all duration-800">
                           {project.project_description}
                        </motion.span>
                     </div>
                  </div>
               ) : (
                  <div className="flex flex-col gap-5">
                     <div className={`projects-list__list-item-content`}>
                        <motion.img key={project.project_id} src={projectSecondaryLogo} className="projects-list__list-item-logo object-contain transition-all duration-800" alt={`${PROJECT_LOGO_ALT_TEXT} for ${project.project_name}`} />
                     </div>
                     <div className="grid grid-cols-2 gap-5">
                        <motion.span key={project.project_id} className={`projects-list__list-item-letter col-span-2 font-hanken-grotesk text-2xl font-bold leading-none transition-all duration-800 text-heading group-hover:text-white`}>
                           {project.project_name}
                        </motion.span>
                        <motion.span key={project.project_id} className={`projects-list__list-item-letter row-start-2 col-start-2 font-hanken-grotesk text-xl font-base text-muted text-right leading-none transition-all duration-800 group-hover:text-white`}>
                           See more
                        </motion.span>
                     </div>
                  </div>
               )}
            </Link>
         </li>
      </>
   );
};

export default ProjectsListProjectCompact;
