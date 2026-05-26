import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_BUSINESS_SECONDARY_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL, ProjectMainCoverLogosProps } from "./data/projectMainCoverLogosData";

const ProjectMainCoverLogos = ({ project }: ProjectMainCoverLogosProps): React.ReactElement => {
   const [isHovered, setIsHovered] = useState(false);

   const idPadded = String(project.project_id).padStart(2, "0");
   const businessLogo = `/projects/${idPadded}/logos/primary.webp`;
   const businessSecondaryLogo = `/projects/${idPadded}/logos/secondary.webp`;

   return (
      <div className="project__main-cover-logos flex items-center relative max-w-1/2" aria-label={PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL}>
         <motion.a href={project.project_external_url ?? undefined} target="_blank" rel="noopener noreferrer" onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} whileHover={{ scale: 1.1, borderWidth: 2 }} animate={{ borderWidth: 1 }} transition={{ scale: { duration: 0.3 }, borderWidth: { duration: 0.3 } }} className="project__main-cover-logos-company-logo w-75 h-75 cursor-pointer flex flex-col justify-center items-center overflow-hidden border border-solid border-border-default bg-page rounded-[50%] relative z-10">
            <img
               className="project__main-cover-logos-company-logo-image h-[40%] w-[80%] object-contain"
               src={businessLogo}
               onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/error_icon.svg";
               }}
               alt={PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT}
            />
         </motion.a>
         <motion.div initial={{ left: "25%" }} animate={{ left: isHovered ? "50%" : "25%" }} transition={{ duration: 0.3 }} className="project__main-cover-logos-own-logo w-50 h-50 flex flex-col justify-center items-center overflow-hidden border border-solid border-border-subtle bg-heading rounded-[50%] absolute">
            <img
               className="project__main-cover-logos-own-logo-image h-full w-full"
               src={businessSecondaryLogo}
               onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/error_icon.svg";
               }}
               alt={PROJECT_MAIN_COVER_BUSINESS_SECONDARY_LOGO_ALT_TEXT}
            />
         </motion.div>
      </div>
   );
};

export default ProjectMainCoverLogos;
