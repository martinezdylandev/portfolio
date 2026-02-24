import { motion } from "framer-motion";
import React from "react";
import { ABOUT_ME_DETAILED_INTRO_TEXTS, ABOUT_ME_DETAILED_INTRO_TITLE } from "../../data/aboutMeDetailedIntroData";
import { useAboutMeDetailedIntroTextAnimations, useAboutMeDetailedIntroTitleAnimations } from "../../utils/useAboutMeDetailedIntroAnimations";

const AboutMeDetailedIntroCompact = (): React.ReactElement => {
   const { initial: titleInitial, whileInView: titleWhileInView, transition: titleTransition, viewport: titleViewport } = useAboutMeDetailedIntroTitleAnimations();
   const textAnimations0 = useAboutMeDetailedIntroTextAnimations(0);
   const textAnimations1 = useAboutMeDetailedIntroTextAnimations(0.2);
   const textAnimations2 = useAboutMeDetailedIntroTextAnimations(0.4);
   const textAnimations3 = useAboutMeDetailedIntroTextAnimations(0.6);
   return (
      <div className="about-me-detailed__intro--compact lg:hidden relative py-25 min-w-screen min-h-screen bg-page">
         <motion.h3 initial={titleInitial} whileInView={titleWhileInView} transition={titleTransition} viewport={titleViewport} className="about-me-detailed__intro-title font-hanken-grotesk text-center text-6xl mb-12.5 text-accent font-bold leading-none">
            {ABOUT_ME_DETAILED_INTRO_TITLE}
         </motion.h3>
         <div className="about-me-detailed__intro-texts flex flex-col gap-6 mx-6">
            <motion.span initial={textAnimations0.initial} whileInView={textAnimations0.whileInView} transition={textAnimations0.transition} viewport={textAnimations0.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-lg text-heading">
               {ABOUT_ME_DETAILED_INTRO_TEXTS[0]}
            </motion.span>
            <motion.span initial={textAnimations1.initial} whileInView={textAnimations1.whileInView} transition={textAnimations1.transition} viewport={textAnimations1.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-lg text-heading">
               {ABOUT_ME_DETAILED_INTRO_TEXTS[1]}
            </motion.span>
            <motion.span initial={textAnimations2.initial} whileInView={textAnimations2.whileInView} transition={textAnimations2.transition} viewport={textAnimations2.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-lg text-heading">
               {ABOUT_ME_DETAILED_INTRO_TEXTS[2]}
            </motion.span>
            <motion.span initial={textAnimations3.initial} whileInView={textAnimations3.whileInView} transition={textAnimations3.transition} viewport={textAnimations3.viewport} className="about-me-detailed__intro-text font-hanken-grotesk font-medium text-justify text-lg text-heading">
               {ABOUT_ME_DETAILED_INTRO_TEXTS[3]}
            </motion.span>
         </div>
      </div>
   );
};

export default AboutMeDetailedIntroCompact;
