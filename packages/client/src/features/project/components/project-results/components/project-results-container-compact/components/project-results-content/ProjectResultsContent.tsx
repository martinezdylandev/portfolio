import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "../../../../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { PROJECT_RESULTS_CONTENT_ARIA_LABEL, PROJECT_RESULTS_CONTENT_SPAN, PROJECT_RESULTS_CONTENT_TITLE, ProjectResultsContentProps } from "./data/projectResultsContentData";
import { useProjectResultsBodyAnimations } from "./utils/useProjectResultsBodyAnimations";
import { useProjectResultsScrollAnimations } from "./utils/useProjectResultsScrollAnimations";

const ProjectResultsContent = ({ project }: ProjectResultsContentProps): React.ReactElement => {
   const { containerRef, transforms } = useProjectResultsScrollAnimations();
   const { initial, whileInView, transition, viewport } = useProjectResultsBodyAnimations();
   const isTablet = useMediaQuery("(min-width: 768px)");
   return (
      <div ref={containerRef} className="project__results-content flex flex-col" aria-label={PROJECT_RESULTS_CONTENT_ARIA_LABEL}>
         <div className="project__results-content-header flex flex-col gap-3 mb-6 text-center" data-testid="results-content-header">
            <motion.span style={{ fontSize: transforms[0].fontSize, filter: transforms[0].blur }} className="project__results-content-header-title self-center font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_TITLE.split(" ")[0]} <br /> {PROJECT_RESULTS_CONTENT_TITLE.split(" ")[1]}
            </motion.span>
            <motion.span style={{ fontSize: transforms[1].fontSize, filter: transforms[1].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>

            <motion.span style={{ fontSize: transforms[2].fontSize, filter: transforms[2].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[3].fontSize, filter: transforms[3].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[4].fontSize, filter: transforms[4].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[5].fontSize, filter: transforms[5].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span style={{ fontSize: transforms[6].fontSize, filter: transforms[6].blur }} className="project__results-content-header-span font-hanken-grotesk font-bold leading-none text-heading">
               {PROJECT_RESULTS_CONTENT_SPAN}
            </motion.span>
            <motion.span className="project__results-content-header-final font-hanken-grotesk text-display-sm font-bold leading-none text-heading">{PROJECT_RESULTS_CONTENT_SPAN}</motion.span>
         </div>
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className={`project__results-content-body ${isTablet ? "grid grid-cols-4" : "flex flex-col"} gap-12`}>
            <p className="project__results-content-paragraph text-base h-fit text-justify font-hanken-grotesk font-normal col-start-1 col-end-4 row-start-1 text-body" data-testid="results-content-paragraph">
               {project.project_final_results_description_part_01}
            </p>
            <div className={`project__results-content-stat col-start-2 md:col-start-3 md:col-span-2 row-start-2 ${isTablet ? "" : "items-center"} flex flex-col`} data-testid="results-content-inner-container">
               <span className="project__results-content-stat-title text-body-md font-hanken-grotesk font-medium text-muted">{project.project_final_results_stat_01_title}</span>
               <span className="project__results-content-stat-value text-heading-xs font-hanken-grotesk font-bold text-body">{project.project_final_results_stat_01}</span>
            </div>
            <p className="project__results-content-paragraph text-base h-fit text-justify font-hanken-grotesk font-normal col-start-1 col-end-4 row-start-3 text-body" data-testid="results-content-paragraph">
               {project.project_final_results_description_part_02}
            </p>
            <div className={`project__results-content-stat flex flex-col col-start-1 col-span-2 row-start-4 ${isTablet ? "" : "items-center"} ${project.project_final_results_stat_03 ? "text-start" : "text-left"}`} data-testid="results-content-inner-container">
               <span className="project__results-content-stat-title text-body-md font-hanken-grotesk font-medium text-muted">{project.project_final_results_stat_02_title}</span>
               <span className="project__results-content-stat-value text-heading-xs font-hanken-grotesk font-bold text-body">{project.project_final_results_stat_02}</span>
            </div>
         </motion.div>
      </div>
   );
};

export default ProjectResultsContent;
