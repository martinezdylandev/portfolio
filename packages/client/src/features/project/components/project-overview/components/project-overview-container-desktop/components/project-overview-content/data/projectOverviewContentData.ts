export const PROJECT_OVERVIEW_CONTENT_ARIA_LABEL: string = "Project overview content";
export const PROJECT_OVERVIEW_CONTENT_TITLE_TEXT: string = "OVERVIEW";
export const PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_01_ALT_TEXT: string = "Project overview description image 1";
export const PROJECT_OVERVIEW_CONTENT_DESCRIPTION_MEDIA_02_ALT_TEXT: string = "Project overview description image 2";

// REFACTOR: Use the global interface to avoid duplication.
import type { ProjectInterface } from "../../../../../../../data/projectData";

export interface ProjectOverviewContentProps {
   project: ProjectInterface;
}
