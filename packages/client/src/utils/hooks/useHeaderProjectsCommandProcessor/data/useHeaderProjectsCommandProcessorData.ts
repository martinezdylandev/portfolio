import type { ProjectInterface } from "../../../../types/projectInterface";

export interface UseHeaderProjectsCommandProcessorProps {
   projects: ProjectInterface[] | null | undefined;
   setProjectsAreVisible: (isVisible: boolean) => void;
   setProjectsAreClosing: (isClosing: boolean) => void;
}
