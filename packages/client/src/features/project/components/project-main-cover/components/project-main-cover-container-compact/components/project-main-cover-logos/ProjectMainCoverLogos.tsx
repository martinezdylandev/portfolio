import { PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL, ProjectMainCoverLogosProps } from "./data/projectMainCoverLogosData";
import React from "react";

const ProjectMainCoverLogos = ({ project }: ProjectMainCoverLogosProps): React.ReactElement => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const businessLogo = `/projects/${idPadded}/logos/primary.webp`;

   return (
      <div className="project__main-cover-logos flex items-center justify-center" aria-label={PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL}>
         <a href={project.project_external_url ?? undefined} target="_blank" rel="noopener noreferrer" className="project__main-cover-logos-company-logo size-75 cursor-pointer flex flex-col justify-center items-center border border-solid border-border-default bg-page rounded-[50%]">
            <img
               className="project__main-cover-logos-company-logo-image h-[40%] w-[80%] object-contain"
               src={businessLogo}
               onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/error_icon.svg";
               }}
               alt={PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT}
            />
         </a>
      </div>
   );
};

export default ProjectMainCoverLogos;
