import { motion } from "framer-motion";
import React from "react";
import AboutMeDetailedIntro from "./components/about-me-detailed-intro/AboutMeDetailedIntro";
import AboutMeDetailedPhilosophy from "./components/about-me-detailed-philosophy/AboutMeDetailedPhilosophy";
import AboutMeDetailedStory from "./components/about-me-detailed-story/AboutMeDetailedStory";
import AboutMeDetailedTools from "./components/about-me-detailed-tools/AboutMeDetailedTools";
import { ABOUT_ME_DETAILED_ARIA_LABEL } from "./data/aboutMeDetailedData";

const AboutMeDetailed = (): React.ReactElement => {
   return (
      <motion.section id="about" className="about-me-detailed" aria-label={ABOUT_ME_DETAILED_ARIA_LABEL}>
         <AboutMeDetailedIntro />
         <AboutMeDetailedPhilosophy />
         <AboutMeDetailedTools />
         <AboutMeDetailedStory />
      </motion.section>
   );
};

export default AboutMeDetailed;
