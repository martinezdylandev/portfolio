import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useFetchData from "../../../../../../../../../utils/hooks/useFetchData/useFetchData";
import type { ProjectInterface } from "../../../../../../../../../types/projectInterface";
import { getRandomProjects } from "../data/projectRelatedContainerProjectsData";

export interface UseRelatedProjectsReturn {
   relatedProjects: ProjectInterface[];
   loading: boolean;
   error: Error | null;
}

export const useRelatedProjects = (): UseRelatedProjectsReturn => {
   const { projectSlug } = useParams<{ projectSlug: string }>();
   const { data: allProjects, loading, error } = useFetchData<ProjectInterface[]>("/projects");
   const [relatedProjects, setRelatedProjects] = useState<ProjectInterface[]>([]);

   useEffect(() => {
      if (!loading && !error && allProjects && Array.isArray(allProjects) && allProjects.length > 0) {
         const otherProjects = allProjects.filter((p) => p.project_slug !== projectSlug);
         const randomProjects = getRandomProjects(otherProjects, 2);
         setRelatedProjects(randomProjects);
      } else if (!loading && !error && !allProjects) {
         setRelatedProjects([]);
      }
   }, [allProjects, loading, error, projectSlug]);

   return {
      relatedProjects,
      loading,
      error,
   };
};
