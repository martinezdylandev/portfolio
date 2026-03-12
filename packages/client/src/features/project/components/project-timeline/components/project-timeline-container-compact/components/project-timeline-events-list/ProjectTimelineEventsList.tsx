// TODO: Turn divs into cards that can be read to see more details of project's events.
// TODO: Check transition of colors while changing the theme of the site.
import { motion } from "framer-motion";
import { PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL, ProjectTimelineEventsListProps } from "./data/projectTimelineEventsListData";
import { useProjectTimelineScrollAnimations } from "./utils/useProjectTimelineScrollAnimations";

const ProjectTimelineEventsList = ({ project }: ProjectTimelineEventsListProps) => {
   const { containerRef, verticalBarHeight, bars } = useProjectTimelineScrollAnimations();

   return (
      <div ref={containerRef} className="project__timeline-events-list min-h-150 relative" aria-label={PROJECT_TIMELINE_EVENTS_LIST_ARIA_LABEL}>
         <motion.div className="project__timeline-events-list-vertical-bar w-0.75 absolute z-10 top-0 left-1/2 -translate-x-1/2 bg-heading" style={{ height: verticalBarHeight }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-1.5 bg-heading rounded-full" />
         </motion.div>

         <div className="project__timeline-events-list-bars absolute min-w-40 inset-0">
            <motion.div className="project__timeline-events-list-bar project__timeline-events-list-bar--1 absolute origin-left bg-heading flex items-center" style={{ top: "15%", width: bars[0].width, opacity: bars[0].opacity }}>
               <div className="project__timeline-events-list-bar project__timeline-events-list-bar--1 h-0.75 origin-left bg-heading"></div>
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--1 absolute left-full flex flex-col w-30 border-[1.5px] border-body p-0.5" style={{ opacity: bars[0].opacity }}>
                  <span className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-xs text-left text-heading">{project.project_timeline_event_01_title}</span>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-[10px]">{project.project_timeline_event_01}</span>
               </motion.div>
            </motion.div>

            <motion.div className="project__timeline-events-list-bar project__timeline-events-list-bar--2 right-full absolute origin-right bg-heading flex items-center" style={{ top: "30%", width: bars[1].width, opacity: bars[1].opacity }}>
               <div className="project__timeline-events-list-bar project__timeline-events-list-bar--2 h-0.75 origin-right bg-heading"></div>
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--2 absolute right-full flex flex-col w-30 border-[1.5px] border-body p-0.5" style={{ opacity: bars[1].opacity }}>
                  <span className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-sm text-left text-heading">{project.project_timeline_event_02_title}</span>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-left text-[10px]">{project.project_timeline_event_02}</span>
               </motion.div>
            </motion.div>

            <motion.div className="project__timeline-events-list-bar project__timeline-events-list-bar--3 absolute origin-left bg-heading flex items-center" style={{ top: "50%", width: bars[2].width, opacity: bars[2].opacity }}>
               <div className="project__timeline-events-list-bar project__timeline-events-list-bar--3 h-0.75 origin-left bg-heading"></div>
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--1 absolute left-full flex flex-col w-30 border-[1.5px] border-body p-0.5" style={{ opacity: bars[2].opacity }}>
                  <span className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-xs text-left text-heading">{project.project_timeline_event_03_title}</span>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-[10px]">{project.project_timeline_event_03}</span>
               </motion.div>
            </motion.div>

            <motion.div className="project__timeline-events-list-bar project__timeline-events-list-bar--4 right-full absolute origin-right bg-heading flex items-center" style={{ top: "70%", width: bars[3].width, opacity: bars[3].opacity }}>
               <div className="project__timeline-events-list-bar project__timeline-events-list-bar--4 h-0.75 origin-right bg-heading"></div>
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--2 absolute right-full flex flex-col w-30 border-[1.5px] border-body p-0.5" style={{ opacity: bars[3].opacity }}>
                  <span className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-sm text-left text-heading">{project.project_timeline_event_04_title}</span>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-left text-[10px]">{project.project_timeline_event_04}</span>
               </motion.div>
            </motion.div>

            <motion.div className="project__timeline-events-list-bar project__timeline-events-list-bar--5 absolute origin-left bg-heading flex items-center" style={{ top: "85%", width: bars[4].width, opacity: bars[4].opacity }}>
               <div className="project__timeline-events-list-bar project__timeline-events-list-bar--5 h-0.75 origin-left bg-heading"></div>
               <motion.div className="project__timeline-events-list-event project__timeline-events-list-event--1 absolute left-full flex flex-col w-30 border-[1.5px] border-body p-0.5" style={{ opacity: bars[4].opacity }}>
                  <span className="project__timeline-events-list-event-title font-hanken-grotesk font-bold text-xs text-left text-heading">{project.project_timeline_event_05_title}</span>
                  <span className="project__timeline-events-list-event-description font-hanken-grotesk font-medium text-muted text-[10px]">{project.project_timeline_event_05}</span>
               </motion.div>
            </motion.div>
         </div>
      </div>
   );
};

export default ProjectTimelineEventsList;
