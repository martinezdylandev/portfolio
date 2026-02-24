import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeDetailedPhilosophyCompact from "./components/about-me-detailed-philosophy-compact/AboutMeDetailedPhilosophyCompact";
import AboutMeDetailedPhilosophyDesktop from "./components/about-me-detailed-philosophy-desktop/AboutMeDetailedPhilosophyDesktop";

const AboutMeDetailedPhilosophy = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <AboutMeDetailedPhilosophyDesktop /> : <AboutMeDetailedPhilosophyCompact />;
};

export default AboutMeDetailedPhilosophy;
