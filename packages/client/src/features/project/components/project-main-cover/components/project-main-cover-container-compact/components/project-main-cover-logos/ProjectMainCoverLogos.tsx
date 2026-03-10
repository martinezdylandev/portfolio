import { motion } from "framer-motion";
import { PROJECT_MAIN_COVER_BUSINESS_LOGO_ALT_TEXT, PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL, ProjectMainCoverLogosProps } from "./data/projectMainCoverLogosData";

const ProjectMainCoverLogos = ({ project }: ProjectMainCoverLogosProps) => {
   const idPadded = String(project.project_id).padStart(2, "0");
   const businessLogo = `/project/business-logos/${idPadded}/logo.webp`;

   // TODO: Add custom image depending on the project
   return (
      <div className="project__main-cover-logos flex items-center justify-center" aria-label={PROJECT_MAIN_COVER_LOGOS_ARIA_LABEL}>
         <motion.a href={project.project_external_url ?? undefined} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, borderWidth: 2 }} animate={{ borderWidth: 1 }} transition={{ scale: { duration: 0.5 }, borderWidth: { duration: 0.2 } }} className="project__main-cover-logos-company-logo size-75 cursor-pointer flex flex-col justify-center items-center border border-solid border-border-default bg-page rounded-[50%]">
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
      </div>
   );
};

export default ProjectMainCoverLogos;
