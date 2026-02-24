import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeDetailedToolCategoryCompact from "./components/about-me-detailed-tool-category-compact/AboutMeDetailedToolCategoryCompact";
import AboutMeDetailedToolCategoryDesktop from "./components/about-me-detailed-tool-category-desktop/AboutMeDetailedToolCategoryDesktop";
import { ABOUT_ME_DETAILED_TOOL_CATEGORIES } from "./data/aboutMeDetailedToolsData";

const AboutMeDetailedTools = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");
   const categories = ABOUT_ME_DETAILED_TOOL_CATEGORIES;
   const lastIndex = categories.length - 1;

   return isDesktop ? (
      <>
         {categories.map((category) => (
            <AboutMeDetailedToolCategoryDesktop key={category.title} category={category} />
         ))}
      </>
   ) : (
      <>
         {categories.map((category, index) => (
            <AboutMeDetailedToolCategoryCompact key={category.title} category={category} isFirst={index === 0} isLast={index === lastIndex} />
         ))}
      </>
   );
};

export default AboutMeDetailedTools;
