import ProjectMainCoverContainerCompact from "./components/project-main-cover-container-compact/ProjectMainCoverContainerCompact";
import ProjectMainCoverContainerDesktop from "./components/project-main-cover-container-desktop/ProjectMainCoverContainerDesktop";
import { PROJECT_MAIN_COVER_ARIA_LABEL, ProjectMainCoverProps } from "./data/projectMainCoverData";

const ProjectMainCover = ({ project, isDesktop }: ProjectMainCoverProps) => {
   return (
      <section className={`project__main-cover flex min-w-screen bg-page`} aria-label={PROJECT_MAIN_COVER_ARIA_LABEL}>
         {isDesktop ? <ProjectMainCoverContainerDesktop project={project} /> : <ProjectMainCoverContainerCompact project={project} />}
      </section>
   );
};

export default ProjectMainCover;
