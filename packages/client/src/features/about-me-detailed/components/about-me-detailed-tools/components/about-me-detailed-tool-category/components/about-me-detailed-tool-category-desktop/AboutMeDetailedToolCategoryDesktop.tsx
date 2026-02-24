import { motion } from "framer-motion";
import React from "react";
import type { ToolCategory } from "../../../../../../../about-me/data/aboutMeData";
import { useAboutMeDetailedToolCategoryAnimations } from "../../utils/useAboutMeDetailedToolCategoryAnimations";

interface AboutMeDetailedToolCategoryDesktopProps {
   category: ToolCategory;
}

const AboutMeDetailedToolCategoryDesktop = ({ category }: AboutMeDetailedToolCategoryDesktopProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolCategoryAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__tools-category about-me-detailed__tools-category--desktop relative flex flex-col items-center">
         <h4 className="about-me-detailed__tools-category-title font-hanken-grotesk font-semibold text-[160px] blur-sm text-accent">{category.title}</h4>
         <span className="about-me-detailed__tools-category-description font-hanken-grotesk font-medium text-4xl max-w-1/2 text-justify absolute top-1/4 z-10 text-heading">{category.description}</span>
      </motion.div>
   );
};

export default AboutMeDetailedToolCategoryDesktop;
