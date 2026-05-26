import { motion } from "framer-motion";
import React from "react";
import { ABOUT_ME_DETAILED_STORY_DESCRIPTION, ABOUT_ME_DETAILED_STORY_IMAGES, ABOUT_ME_DETAILED_STORY_TITLE } from "../../data/aboutMeDetailedStoryData";
import { useAboutMeDetailedStoryAnimations } from "../../utils/useAboutMeDetailedStoryAnimations";

const AboutMeDetailedStoryCompact = (): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedStoryAnimations();

   return (
      <div className="about-me-detailed__story about-me-detailed__story--compact lg:hidden flex flex-col text-right py-25 bg-page">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__story-content flex flex-col min-w-screen min-h-[70vh]">
            <h3 className="about-me-detailed__story-title font-hanken-grotesk text-center text-[clamp(var(--font-size-display-sm),12vw,var(--font-size-display-xl))] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_STORY_TITLE}</h3>
            <div className="about-me-detailed__story-images-container flex flex-col h-full self-center items-center justify-center px-6">
               <span className="about-me-detailed__story-description font-hanken-grotesk font-bold text-[clamp(var(--font-size-body),1.5vw,var(--font-size-heading-sm))] text-center text-accent">{ABOUT_ME_DETAILED_STORY_DESCRIPTION}</span>
               <div className="about-me-detailed__story-images flex flex-col sm:flex-row py-12.5 items-center justify-center">
                  {ABOUT_ME_DETAILED_STORY_IMAGES.map((image) => (
                     <img key={image.src} className="about-me-detailed__story-image my-3 max-w-36 max-h-32 md:max-w-48 md:max-h-42 blur-xs cursor-pointer" src={image.src} alt={image.alt} />
                  ))}
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default AboutMeDetailedStoryCompact;
