import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeDetailedToolsCompact from "./components/about-me-detailed-tools-compact/AboutMeDetailedToolsCompact";
import AboutMeDetailedToolsDesktop from "./components/about-me-detailed-tools-desktop/AboutMeDetailedToolsDesktop";

const AboutMeDetailedTools = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <AboutMeDetailedToolsDesktop /> : <AboutMeDetailedToolsCompact />;
};

export default AboutMeDetailedTools;
