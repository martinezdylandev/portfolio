import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeDetailedStoryCompact from "./components/about-me-detailed-story-compact/AboutMeDetailedStoryCompact";
import AboutMeDetailedStoryDesktop from "./components/about-me-detailed-story-desktop/AboutMeDetailedStoryDesktop";

const AboutMeDetailedStory = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <AboutMeDetailedStoryDesktop /> : <AboutMeDetailedStoryCompact />;
};

export default AboutMeDetailedStory;
