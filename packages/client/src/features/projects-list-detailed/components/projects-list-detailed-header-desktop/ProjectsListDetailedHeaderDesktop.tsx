import { motion } from "framer-motion";
import React from "react";
import { PROJECTS_LIST_DETAILED_HEADER_SPAN_01, PROJECTS_LIST_DETAILED_HEADER_SPAN_02, PROJECTS_LIST_DETAILED_HEADER_SPAN_03, PROJECTS_LIST_DETAILED_HEADER_SPAN_04, PROJECTS_LIST_DETAILED_HEADER_SPAN_05, PROJECTS_LIST_DETAILED_HEADER_SPAN_06, PROJECTS_LIST_DETAILED_HEADER_TITLE } from "../../data/projectsListDetailedData";
import type { UseProjectsListDetailedHeaderAnimationsReturn } from "../../utils/useProjectsListDetailedAnimations";

interface ProjectsListDetailedHeaderDesktopProps {
   animation: UseProjectsListDetailedHeaderAnimationsReturn;
}

const ProjectsListDetailedHeaderDesktop = ({ animation }: ProjectsListDetailedHeaderDesktopProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = animation;

   return (
      <motion.div className="projects-list-detailed__header projects-list-detailed__header--desktop grid grid-cols-8 gap-y-25 w-full min-w-screen min-h-screen pt-25">
         <motion.h3 initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-title col-start-1 col-span-7 font-hanken-grotesk text-[200px] mb-12.5 text-heading font-bold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_TITLE}
         </motion.h3>
         <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-2 col-start-2 col-span-2 text-justify font-hanken-grotesk text-2xl text-body font-semibold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_SPAN_01}
         </motion.span>
         <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-2 col-start-6 col-span-2 text-right font-hanken-grotesk text-6xl text-heading font-bold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_SPAN_02}
         </motion.span>
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="flex flex-col gap-5 row-start-3 col-start-3 col-span-4">
            <span className="projects-list-detailed__header-description text-left italic font-hanken-grotesk text-2xl text-muted leading-none">{PROJECTS_LIST_DETAILED_HEADER_SPAN_03}</span>
            <span className="projects-list-detailed__header-description text-right font-hanken-grotesk text-2xl text-accent font-semibold leading-none">{PROJECTS_LIST_DETAILED_HEADER_SPAN_04}</span>
         </motion.div>
         <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-4 col-start-6 col-span-2 text-justify font-hanken-grotesk text-2xl text-body font-semibold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_SPAN_05}
         </motion.span>
         <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description row-start-4 col-start-2 col-span-2 text-left font-hanken-grotesk text-6xl text-heading font-bold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_SPAN_06}
         </motion.span>
      </motion.div>
   );
};

export default ProjectsListDetailedHeaderDesktop;
