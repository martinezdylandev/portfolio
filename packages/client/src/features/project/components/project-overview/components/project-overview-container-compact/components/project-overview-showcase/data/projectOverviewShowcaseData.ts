import type { ProjectInterface } from "../../../../../../../data/projectData";

export const PROJECT_OVERVIEW_SHOWCASE_WRAPPER_ARIA_LABEL: string = "Project overview showcase wrapper";
export const PROJECT_OVERVIEW_SHOWCASE_CONTAINER_ARIA_LABEL: string = "Project overview showcase container";
export const PROJECT_OVERVIEW_SHOWCASE_VIDEO_ARIA_LABEL: string = "Project overview showcase video";
export const PROJECT_OVERVIEW_SHOWCASE_IMAGES_ARIA_LABEL: string = "Project overview showcase images";
export const PROJECT_OVERVIEW_SHOWCASE_VIDEO_FALLBACK_TEXT: string = "Your browser does not support the video tag.";
export const PROJECT_OVERVIEW_SHOWCASE_IMAGE_LEFT_ALT_TEXT: string = "Project overview showcase left image";
export const PROJECT_OVERVIEW_SHOWCASE_IMAGE_CENTER_ALT_TEXT: string = "Project overview showcase center image";
export const PROJECT_OVERVIEW_SHOWCASE_IMAGE_RIGHT_ALT_TEXT: string = "Project overview showcase right image";

export interface ProjectOverviewShowcaseProps {
   project: ProjectInterface;
}
