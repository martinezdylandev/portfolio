import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeDetailedIntroCompact from "./components/about-me-detailed-intro-compact/AboutMeDetailedIntroCompact";
import AboutMeDetailedIntroDesktop from "./components/about-me-detailed-intro-desktop/AboutMeDetailedIntroDesktop";

const AboutMeDetailedIntro = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <AboutMeDetailedIntroDesktop /> : <AboutMeDetailedIntroCompact />;
};

export default AboutMeDetailedIntro;
