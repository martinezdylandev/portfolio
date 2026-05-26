import { motion } from "framer-motion";
import React from "react";
import type { ToolCategory } from "../../data/aboutMeDetailedToolsData";
import { useAboutMeDetailedToolCategoryAnimations } from "../../utils/useAboutMeDetailedToolCategoryAnimations";

interface AboutMeDetailedToolCategoryDesktopProps {
   category: ToolCategory;
}

const AboutMeDetailedToolCategoryDesktop = ({ category }: AboutMeDetailedToolCategoryDesktopProps): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedToolCategoryAnimations();

   return (
      <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__tools-category about-me-detailed__tools-category--desktop flex flex-col items-center justify-center">
         <span className="about-me-detailed__tools-category-title font-hanken-grotesk font-extrabold text-[clamp(var(--font-size-display-sm),10vw,var(--font-size-display-xl))] text-accent">{category.title}</span>
         <span className="about-me-detailed__tools-category-description font-hanken-grotesk font-semibold text-[clamp(var(--font-size-heading-sm),2.5vw,var(--font-size-heading-lg))] text-balance absolute border-none z-10 text-heading">{category.description}</span>
      </motion.div>
   );
};

export default AboutMeDetailedToolCategoryDesktop;
