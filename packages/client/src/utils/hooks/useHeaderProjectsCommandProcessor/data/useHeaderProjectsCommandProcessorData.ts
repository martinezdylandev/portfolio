import type { ProjectInterface } from "../../../../features/project/data/projectData";

export interface UseHeaderProjectsCommandProcessorProps {
   projects: ProjectInterface[] | null | undefined;
   setProjectsAreVisible: (isVisible: boolean) => void;
   setProjectsAreClosing: (isClosing: boolean) => void;
}
