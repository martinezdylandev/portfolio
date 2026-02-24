import { motion } from "framer-motion";
import React from "react";
import type { ToolCategory } from "../../../../../about-me/data/aboutMeData";
import { useAboutMeDetailedToolCategoryAnimations } from "../../utils/useAboutMeDetailedToolCategoryAnimations";

interface AboutMeDetailedToolCategoryCompactProps {
   category: ToolCategory;
   isFirst?: boolean;
   isLast?: boolean;
}

const AboutMeDetailedToolCategoryCompact = ({ category, isFirst = false, isLast = false }: AboutMeDetailedToolCategoryCompactProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolCategoryAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className={`about-me-detailed__tools-category about-me-detailed__tools-category--compact relative flex flex-col items-center p-6 border-b border-heading/30 last:border-b-0 ${isFirst ? "pt-12.5" : "pt-6"} ${isLast ? "pb-0" : "pb-6"}`}>
         <h4 className="about-me-detailed__tools-category-title font-hanken-grotesk font-semibold text-2xl md:text-[60px] text-accent mb-4">{category.title}</h4>
         <span className="about-me-detailed__tools-category-description font-hanken-grotesk text-base md:text-lg text-center max-w-full text-heading">{category.description}</span>
      </motion.div>
   );
};

export default AboutMeDetailedToolCategoryCompact;
