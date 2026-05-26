import ProjectTimelineContainerCompact from "./components/project-timeline-container-compact/ProjectTimelineContainerCompact";
import React from "react";
import ProjectTimelineContainerDesktop from "./components/project-timeline-container-desktop/ProjectTimelineContainerDesktop";
import { PROJECT_TIMELINE_ARIA_LABEL, ProjectTimelineProps } from "./data/projectTimelineData";

const ProjectTimeline = ({ project, isDesktop }: ProjectTimelineProps): React.ReactElement => {
   return (
      <section className="project__timeline min-h-screen bg-card" aria-label={PROJECT_TIMELINE_ARIA_LABEL}>
         {isDesktop ? <ProjectTimelineContainerDesktop project={project} /> : <ProjectTimelineContainerCompact project={project} />}
      </section>
   );
};

export default ProjectTimeline;
