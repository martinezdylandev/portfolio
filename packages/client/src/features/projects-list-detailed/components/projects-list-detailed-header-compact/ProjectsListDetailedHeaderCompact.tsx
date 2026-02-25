import { motion } from "framer-motion";
import React from "react";
import { PROJECTS_LIST_DETAILED_HEADER_SPAN_01, PROJECTS_LIST_DETAILED_HEADER_SPAN_02, PROJECTS_LIST_DETAILED_HEADER_SPAN_03, PROJECTS_LIST_DETAILED_HEADER_SPAN_04, PROJECTS_LIST_DETAILED_HEADER_SPAN_05, PROJECTS_LIST_DETAILED_HEADER_SPAN_06, PROJECTS_LIST_DETAILED_HEADER_TITLE } from "../../data/projectsListDetailedData";
import type { UseProjectsListDetailedHeaderAnimationsReturn } from "../../utils/useProjectsListDetailedAnimations";

interface ProjectsListDetailedHeaderCompactProps {
   animation: UseProjectsListDetailedHeaderAnimationsReturn;
}

const ProjectsListDetailedHeaderCompact = ({ animation }: ProjectsListDetailedHeaderCompactProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = animation;

   return (
      <motion.div className="projects-list-detailed__header projects-list-detailed__header--compact pt-25">
         <motion.h3 initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-title font-hanken-grotesk text-center text-6xl mb-12.5 text-heading font-bold leading-none">
            {PROJECTS_LIST_DETAILED_HEADER_TITLE}
         </motion.h3>
         <motion.div className="flex flex-col min-w-scren min-h-screen gap-6 px-6">
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description text-left font-hanken-grotesk text-4xl text-heading font-bold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_02}
            </motion.span>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description text-justify font-hanken-grotesk text-base text-body">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_01}
            </motion.span>
            <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="flex flex-col gap-3 py-6">
               <span className="projects-list-detailed__header-description self-center text-justify w-3/4 italic font-hanken-grotesk text-sm text-muted leading-snug">{PROJECTS_LIST_DETAILED_HEADER_SPAN_03}</span>
               <span className="projects-list-detailed__header-description self-center text-right w-3/4 font-hanken-grotesk text-xs text-accent font-semibold leading-snug">{PROJECTS_LIST_DETAILED_HEADER_SPAN_04}</span>
            </motion.div>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description text-right font-hanken-grotesk text-4xl text-heading font-bold leading-none">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_06}
            </motion.span>
            <motion.span initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="projects-list-detailed__header-description text-justify font-hanken-grotesk text-base text-body">
               {PROJECTS_LIST_DETAILED_HEADER_SPAN_05}
            </motion.span>
         </motion.div>
      </motion.div>
   );
};

export default ProjectsListDetailedHeaderCompact;
