import { PROJECT_OVERVIEW_CONTENT_ARIA_LABEL, PROJECT_OVERVIEW_CONTENT_TITLE_TEXT, ProjectOverviewContentProps } from "./data/projectOverviewContentData";

const ProjectOverviewContent = ({ project, compact = false }: ProjectOverviewContentProps) => {
   return (
      <div className={`project__overview-content gap-6 font-hanken-grotesk text-body text-justify ${compact ? "flex flex-col" : "row-start-2 grid col-span-2 gap-25"}`} aria-label={PROJECT_OVERVIEW_CONTENT_ARIA_LABEL}>
         <h2 className="project__overview-container-title font-hanken-grotesk text-4xl text-center text-heading font-bold">{PROJECT_OVERVIEW_CONTENT_TITLE_TEXT}</h2>
         <p className="project__overview-content-description text-md font-normal">{project.project_overview_description_part_01}</p>
         <p className={`project__overview-content-description font-normal ${compact ? "text-base sm:text-xl" : "col-start-2 row-start-2 text-xl"}`}>{project.project_overview_description_part_02}</p>
      </div>
   );
};

export default ProjectOverviewContent;
