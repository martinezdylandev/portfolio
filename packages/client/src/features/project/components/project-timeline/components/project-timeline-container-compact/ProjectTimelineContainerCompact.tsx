import { motion } from "framer-motion";
import React from "react";
import ProjectTimelineEventsList from "./components/project-timeline-events-list/ProjectTimelineEventsList";
import { PROJECT_TIMELINE_CONTAINER_ARIA_LABEL, PROJECT_TIMELINE_CONTAINER_TITLE_TEXT, ProjectTimelineContainerProps } from "./data/projectTimelineContainerData";
import { useProjectTimelineContainerAnimations } from "./utils/useProjectTimelineContainerAnimations";

const ProjectTimelineContainerCompact = ({ project }: ProjectTimelineContainerProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useProjectTimelineContainerAnimations();
   const [firstWord, secondWord] = PROJECT_TIMELINE_CONTAINER_TITLE_TEXT.split(" ");

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="project__timeline-container project__timeline-container--compact flex flex-col px-6 gap-6 py-25 items-center" aria-label={PROJECT_TIMELINE_CONTAINER_ARIA_LABEL}>
         <h2 className="project__timeline-container-title font-hanken-grotesk text-4xl font-bold text-heading">
            {firstWord} <br /> {secondWord}
         </h2>
         <div className="project__timeline-container-inner" data-testid="timeline-inner-container">
            <ProjectTimelineEventsList project={project} />
         </div>
      </motion.div>
   );
};

export default ProjectTimelineContainerCompact;
