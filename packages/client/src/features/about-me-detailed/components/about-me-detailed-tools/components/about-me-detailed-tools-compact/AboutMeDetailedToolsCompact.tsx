import { motion } from "framer-motion";
import React from "react";
import { ABOUT_ME_DETAILED_TOOL_CATEGORIES, ABOUT_ME_DETAILED_TOOLS_DESCRIPTION, ABOUT_ME_DETAILED_TOOLS_TITLE } from "../../data/aboutMeDetailedToolsData";
import { useAboutMeDetailedToolsHeaderAnimations } from "../../utils/useAboutMeDetailedToolsHeaderAnimations";
import AboutMeDetailedToolCategoryCompact from "../about-me-detailed-tool-category/components/about-me-detailed-tool-category-compact/AboutMeDetailedToolCategoryCompact";

const AboutMeDetailedToolsCompact = (): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolsHeaderAnimations();

   return (
      <div className="about-me-detailed__tools about-me-detailed__tools--compact lg:hidden flex flex-col py-25 bg-card">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__tools-header flex flex-col min-w-screen">
            <h3 className="about-me-detailed__tools-title font-hanken-grotesk text-center text-4xl mb-12.5 md:text-[120px] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_TOOLS_TITLE}</h3>
            <div className="about-me-detailed__tools-icon-container flex flex-col h-full items-center justify-center">
               <span className="about-me-detailed__tools-icon block w-[120px] h-[120px] rounded-full bg-heading"></span>
               <span className="about-me-detailed__tools-description font-hanken-grotesk font-semibold text-2xl text-accent mt-4">{ABOUT_ME_DETAILED_TOOLS_DESCRIPTION}</span>
            </div>
         </motion.div>
         {ABOUT_ME_DETAILED_TOOL_CATEGORIES.map((category, index) => (
            <AboutMeDetailedToolCategoryCompact key={category.title} category={category} isFirst={index === 0} isLast={index === ABOUT_ME_DETAILED_TOOL_CATEGORIES.length - 1} />
         ))}
      </div>
   );
};

export default AboutMeDetailedToolsCompact;
