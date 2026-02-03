import type { ProjectInterface } from "../../project/data/projectData";

const DUMMY_LOGO_IMAGE_URL_1: string = "projectLists/south_america_24dp_EDF2FB_FILL0_wght400_GRAD0_opsz24.svg";
const PROJECT_LOGO_ALT_TEXT: string = "Project logo";

const HOVER_CARD_OFFSET: number = 0;
const HOVER_CARD_WIDTH_PX: number = 256; // w-64 in pixels
const HOVER_CARD_HEIGHT_PX: number = 350; // Approximate height with all content
const VIEWPORT_WIDTH: number = window.innerWidth;
const VIEPORT_HEIGHT: number = window.innerHeight;

// Array of letters in "PROJECT" for character-by-character rendering
export const PROJECT_LETTERS = ["P", "R", "O", "J", "E", "C", "T"];

export interface ProjectsListProjectProps {
   project: ProjectInterface;
   index: number;
}

export { DUMMY_LOGO_IMAGE_URL_1, HOVER_CARD_HEIGHT_PX, HOVER_CARD_OFFSET, HOVER_CARD_WIDTH_PX, PROJECT_LOGO_ALT_TEXT, VIEPORT_HEIGHT, VIEWPORT_WIDTH };
