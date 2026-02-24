import { motion } from "framer-motion";
import React from "react";
import AboutMeDetailedPrinciplesListDesktop from "../about-me-detailed-principles-list/components/about-me-detailed-principles-list-desktop/AboutMeDetailedPrinciplesListDesktop";
import { ABOUT_ME_DETAILED_PHILOSOPHY_DESCRIPTION, ABOUT_ME_DETAILED_PHILOSOPHY_DISCLAIMER, ABOUT_ME_DETAILED_PHILOSOPHY_TITLE } from "../../data/aboutMeDetailedPhilosophyData";
import { useAboutMeDetailedPhilosophyAnimations } from "../../utils/useAboutMeDetailedPhilosophyAnimations";

const AboutMeDetailedPhilosophyDesktop = (): React.ReactElement => {
   const { initial: headerInitial, whileInView: headerWhileInView, transition: headerTransition, viewport: headerViewport } = useAboutMeDetailedPhilosophyAnimations();
   const { initial: contentInitial, whileInView: contentWhileInView, transition: contentTransition, viewport: contentViewport } = useAboutMeDetailedPhilosophyAnimations();

   return (
      <motion.div className="about-me-detailed__philosophy about-me-detailed__philosophy--desktop hidden lg:flex flex-col text-right py-25 bg-section">
         <motion.div initial={headerInitial} whileInView={headerWhileInView} transition={headerTransition} viewport={headerViewport} className="about-me-detailed__philosophy-header flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__philosophy-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_PHILOSOPHY_TITLE}</h3>
            <div className="about-me-detailed__philosophy-icon-container flex flex-col h-full self-center items-center justify-center">
               <span className="about-me-detailed__philosophy-icon block w-[100px] h-[200px] bg-heading"></span>
               <span className="about-me-detailed__philosophy-description font-hanken-grotesk font-semibold text-2xl text-accent mt-4">{ABOUT_ME_DETAILED_PHILOSOPHY_DESCRIPTION}</span>
            </div>
         </motion.div>
         <motion.div initial={contentInitial} whileInView={contentWhileInView} transition={contentTransition} viewport={contentViewport} className="about-me-detailed__philosophy-content flex flex-col">
            <span className="about-me-detailed__philosophy-disclaimer font-hanken-grotesk font-medium max-w-1/2 pb-25 self-start text-left text-2xl text-muted mt-4">{ABOUT_ME_DETAILED_PHILOSOPHY_DISCLAIMER}</span>
            <AboutMeDetailedPrinciplesListDesktop />
         </motion.div>
      </motion.div>
   );
};

export default AboutMeDetailedPhilosophyDesktop;
