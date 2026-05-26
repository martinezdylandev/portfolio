import { motion } from "framer-motion";
import React from "react";
import type { ToolCategory } from "../../data/aboutMeDetailedToolsData";
import { useAboutMeDetailedToolCategoryAnimations } from "../../utils/useAboutMeDetailedToolCategoryAnimations";

interface AboutMeDetailedToolCategoryCompactProps {
   category: ToolCategory;
   isFirst?: boolean;
   isLast?: boolean;
}

const AboutMeDetailedToolCategoryCompact = ({ category, isFirst = false, isLast = false }: AboutMeDetailedToolCategoryCompactProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolCategoryAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className={`about-me-detailed__tools-category about-me-detailed__tools-category--compact relative flex flex-col items-center p-6 border-b border-heading/30 ${isFirst ? "pt-12.5" : "pt-6"}`}>
         <h4 className="about-me-detailed__tools-category-title font-hanken-grotesk font-semibold text-[clamp(var(--font-size-heading-sm),5vw,var(--font-size-display-sm))] text-accent mb-4">{category.title}</h4>
         <span className="about-me-detailed__tools-category-description font-hanken-grotesk text-[clamp(var(--font-size-body),1.5vw,var(--font-size-body-lg))] text-center max-w-full text-heading">{category.description}</span>
      </motion.div>
   );
};

export default AboutMeDetailedToolCategoryCompact;
