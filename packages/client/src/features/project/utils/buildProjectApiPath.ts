export const buildProjectApiPath = (projectSlug: string | undefined): string | null => {
   return projectSlug ? `projects/${projectSlug}` : null;
};
