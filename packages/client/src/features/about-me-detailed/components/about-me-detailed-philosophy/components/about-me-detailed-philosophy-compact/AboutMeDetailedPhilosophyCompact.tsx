import { motion } from "framer-motion";
import React from "react";
import { ABOUT_ME_DETAILED_PHILOSOPHY_DESCRIPTION, ABOUT_ME_DETAILED_PHILOSOPHY_DISCLAIMER, ABOUT_ME_DETAILED_PHILOSOPHY_TITLE } from "../../data/aboutMeDetailedPhilosophyData";
import { useAboutMeDetailedPhilosophyAnimations } from "../../utils/useAboutMeDetailedPhilosophyAnimations";
import AboutMeDetailedPrinciplesListCompact from "../about-me-detailed-principles-list/components/about-me-detailed-principles-list-compact/AboutMeDetailedPrinciplesListCompact";

const AboutMeDetailedPhilosophyCompact = (): React.ReactElement => {
   const { initial: headerInitial, whileInView: headerWhileInView, transition: headerTransition, viewport: headerViewport } = useAboutMeDetailedPhilosophyAnimations();
   const { initial: contentInitial, whileInView: contentWhileInView, transition: contentTransition, viewport: contentViewport } = useAboutMeDetailedPhilosophyAnimations();

   return (
      <motion.div className="about-me-detailed__philosophy about-me-detailed__philosophy--compact lg:hidden flex flex-col text-right py-25 bg-section">
         <motion.div initial={headerInitial} whileInView={headerWhileInView} transition={headerTransition} viewport={headerViewport} className="about-me-detailed__philosophy-header flex flex-col min-w-screen">
            <h3 className="about-me-detailed__philosophy-title font-hanken-grotesk text-center text-4xl mb-12.5 md:text-[120px] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_PHILOSOPHY_TITLE}</h3>
            <div className="about-me-detailed__philosophy-icon-container flex flex-col h-full self-center items-center justify-center">
               <span className="about-me-detailed__philosophy-icon block w-[60px] h-[120px] bg-heading"></span>
               <span className="about-me-detailed__philosophy-description font-hanken-grotesk font-semibold text-xl text-accent mt-4">{ABOUT_ME_DETAILED_PHILOSOPHY_DESCRIPTION}</span>
            </div>
         </motion.div>
         <motion.div initial={contentInitial} whileInView={contentWhileInView} transition={contentTransition} viewport={contentViewport} className="about-me-detailed__philosophy-content flex flex-col">
            <span className="about-me-detailed__philosophy-disclaimer font-hanken-grotesk font-medium max-w-full md:max-w-1/2 self-start text-left text-md text-muted my-12.5 px-6 md:px-0">{ABOUT_ME_DETAILED_PHILOSOPHY_DISCLAIMER}</span>
            <AboutMeDetailedPrinciplesListCompact />
         </motion.div>
      </motion.div>
   );
};

export default AboutMeDetailedPhilosophyCompact;
