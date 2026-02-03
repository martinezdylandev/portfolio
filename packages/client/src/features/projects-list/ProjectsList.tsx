import { motion } from "framer-motion";
import React from "react";
import useFetchData from "../../utils/hooks/useFetchData/useFetchData";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery/useMediaQuery";
import type { ProjectInterface } from "../project/data/projectData";
import ProjectsListProjectCompact from "./components/projects-list-project-compact/ProjectsListProjectCompact";
import ProjectsListProjectDesktop from "./components/projects-list-project-desktop/ProjectsListProjectDesktop";
import { PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT, PROJECTS_LIST_ERROR_ARIA_LABEL, PROJECTS_LIST_ERROR_TEXT, PROJECTS_LIST_LOADING_ARIA_LABEL, PROJECTS_LIST_LOADING_TEXT, PROJECTS_LIST_NO_DATA_TEXT, PROJECTS_LIST_SCROLLING_TEXT_PROJECTS, PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER, PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS, PROJECTS_LIST_UL_TEST_ID } from "./data/projectsListData";
import { useProjectsListListAnimation, useProjectsListScrollAnimation } from "./utils/useProjectsListAnimations";

const ProjectsList = (): React.ReactElement => {
   const { data: projects, loading, error } = useFetchData<ProjectInterface[]>("projects");
   const { animate, transition: scrollTransition } = useProjectsListScrollAnimation();
   const { initial, whileInView, transition: listTransition, viewport } = useProjectsListListAnimation();
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   if (loading) {
      return (
         <div role="status" aria-live="polite">
            <span className="projects-list__loading-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_LOADING_ARIA_LABEL}>
               {PROJECTS_LIST_LOADING_TEXT}
            </span>
         </div>
      );
   }

   if (error) {
      return (
         <div role="status" aria-live="polite">
            <span className="projects-list__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
               {PROJECTS_LIST_ERROR_TEXT} {error.message}
            </span>
         </div>
      );
   }

   if (!projects || !Array.isArray(projects)) {
      return (
         <div role="status" aria-live="polite">
            <span className="projects-list__error-message text-center text-2xl font-semibold pt-48 text-heading" aria-label={PROJECTS_LIST_ERROR_ARIA_LABEL}>
               {PROJECTS_LIST_NO_DATA_TEXT}
            </span>
         </div>
      );
   }

   return (
      <div id="projects" className="projects-list__container bg-page py-25" aria-label={PROJECTS_LIST_CONTAINER_ARIA_LABEL_TEXT}>
         <div className="projects-list__content-wrapper flex flex-col gap-25 overflow-hidden">
            <motion.div className="projects-list__scrolling-text flex gap-2.5" animate={animate} transition={scrollTransition}>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJEKTER}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROJECTS}</span>
               <span className="projects-list__scrolling-text-item font-hanken-grotesk text-8xl lg:text-[160px] text-heading font-bold leading-none m-0 whitespace-nowrap">{PROJECTS_LIST_SCROLLING_TEXT_PROYECTOS}</span>
            </motion.div>
            <motion.ul initial={initial} whileInView={whileInView} transition={listTransition} viewport={viewport} aria-label="Projects list" className="projects-list__list flex flex-col gap-10 px-5" data-testid={PROJECTS_LIST_UL_TEST_ID}>
               {projects.map((project, index) => {
                  return isDesktop ? <ProjectsListProjectDesktop key={project.project_id} project={project} index={index} /> : <ProjectsListProjectCompact key={project.project_id} project={project} index={index} />;
               })}
            </motion.ul>
         </div>
      </div>
   );
};

export default ProjectsList;
