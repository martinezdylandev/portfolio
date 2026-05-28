import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import type { relatedProjectsProjectProps } from "./data/projectRelatedContainerProjectsProjectData";
import { PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT, PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER } from "./data/projectRelatedContainerProjectsProjectData";

const ProjectRelatedContainerProjectsProject = ({ firstPart, secondPart, project }: relatedProjectsProjectProps): React.ReactElement => {
   const { theme } = useThemeContext();
   const containerRef = useRef<HTMLLIElement>(null);

   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end center"] });

   const y = useTransform(scrollYProgress, [0, 0.5], [200, 0]);

   // reads CSS palette vars to drive scroll-based background color transform
   const startBg = theme === "light" ? getComputedStyle(document.documentElement).getPropertyValue("--palette-primary").trim() : getComputedStyle(document.documentElement).getPropertyValue("--palette-secondary").trim();
   const endBg = theme === "light" ? getComputedStyle(document.documentElement).getPropertyValue("--palette-secondary").trim() : getComputedStyle(document.documentElement).getPropertyValue("--palette-primary").trim();

   const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
   const backgroundColor = useTransform(progress, [0, 1], [startBg, endBg]);

   const idPadded = String(project.project_id).padStart(2, "0");
   const projectSecondaryLogo = `/projects/${idPadded}/logos/secondary.webp`;

   return (
      <motion.li ref={containerRef} style={{ y, backgroundColor }} className="project__related-container-projects-project" data-testid="related-project">
         <Link key={project.project_id} to={`/projects/${project.project_slug}`} className="project__related-container-projects-project-link">
            <div className="project__related-container-projects-project-content flex flex-col relative h-fit overflow-hidden">
               <div className="project__related-container-projects-project-upper-part">
                  <img className="project__related-container-projects-project-image min-w-[272px] md:max-w-[320px] md:max-h-[320px]" src={projectSecondaryLogo} alt={PROJECT_RELATED_CONTAINER_PROJECTS_IMAGE_ALT_TEXT} />
               </div>
               <motion.div className="project__related-container-projects-project-lower-part flex flex-col w-full overflow-hidden p-3 bg-page" data-testid="related-project-lower-part">
                  <motion.span className="project__related-container-projects-project-second-part text-muted font-medium" data-testid="project-second-part-name">
                     {secondPart || PROJECT_RELATED_CONTAINER_PROJECTS_SECOND_PART_NAME_PLACEHOLDER}
                  </motion.span>
                  <motion.h3 className="project__related-container-projects-project-first-part text-heading text-heading-sm font-bold">{firstPart}</motion.h3>
               </motion.div>
            </div>
         </Link>
      </motion.li>
   );
};

export default ProjectRelatedContainerProjectsProject;
