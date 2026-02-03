import React from "react";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery/useMediaQuery";
import AboutMeCompact from "./components/about-me-compact/AboutMeCompact";
import AboutMeDesktop from "./components/about-me-desktop/AboutMeDesktop";
import { ABOUT_ME_ARIA_LABEL } from "./data/aboutMeData";

const AboutMe = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return (
      <section id="about" aria-label={ABOUT_ME_ARIA_LABEL} className="about-me">
         {isDesktop ? <AboutMeDesktop /> : <AboutMeCompact />}
      </section>
   );
};

export default AboutMe;
