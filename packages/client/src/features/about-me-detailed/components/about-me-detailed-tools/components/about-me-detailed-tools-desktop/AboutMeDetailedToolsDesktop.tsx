import { motion } from "framer-motion";
import React from "react";
import AboutMeDetailedToolCategoryDesktop from "../about-me-detailed-tool-category/components/about-me-detailed-tool-category-desktop/AboutMeDetailedToolCategoryDesktop";
import { ABOUT_ME_DETAILED_TOOL_CATEGORIES, ABOUT_ME_DETAILED_TOOLS_DESCRIPTION, ABOUT_ME_DETAILED_TOOLS_TITLE } from "../../data/aboutMeDetailedToolsData";
import { useAboutMeDetailedToolsHeaderAnimations } from "../../utils/useAboutMeDetailedToolsHeaderAnimations";

const AboutMeDetailedToolsDesktop = (): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolsHeaderAnimations();

   return (
      <div className="about-me-detailed__tools about-me-detailed__tools--desktop hidden lg:flex flex-col py-25 bg-card">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__tools-header flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__tools-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_TOOLS_TITLE}</h3>
            <div className="about-me-detailed__tools-icon-container flex flex-col h-full self-center items-center justify-center">
               <span className="about-me-detailed__tools-icon block w-[200px] h-[200px] rounded-full bg-heading"></span>
               <span className="about-me-detailed__tools-description font-hanken-grotesk font-semibold text-2xl text-accent mt-4">{ABOUT_ME_DETAILED_TOOLS_DESCRIPTION}</span>
            </div>
         </motion.div>
         {ABOUT_ME_DETAILED_TOOL_CATEGORIES.map((category) => (
            <AboutMeDetailedToolCategoryDesktop key={category.title} category={category} />
         ))}
      </div>
   );
};

export default AboutMeDetailedToolsDesktop;
