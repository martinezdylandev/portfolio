import { motion } from "framer-motion";
import React from "react";
import { ABOUT_ME_DETAILED_STORY_DESCRIPTION, ABOUT_ME_DETAILED_STORY_IMAGES, ABOUT_ME_DETAILED_STORY_TITLE } from "../../data/aboutMeDetailedStoryData";
import { useAboutMeDetailedStoryAnimations } from "../../utils/useAboutMeDetailedStoryAnimations";

const AboutMeDetailedStoryDesktop = (): React.ReactElement => {
   const { initial, whileInView, transition, viewport } = useAboutMeDetailedStoryAnimations();

   return (
      <div className="about-me-detailed__story about-me-detailed__story--desktop hidden lg:flex flex-col text-right py-25 bg-page">
         <motion.div initial={initial} whileInView={whileInView} transition={transition} viewport={viewport} className="about-me-detailed__story-content flex flex-col gap-12.5 min-w-screen min-h-screen">
            <h3 className="about-me-detailed__story-title font-hanken-grotesk text-[200px] text-heading font-bold leading-none">{ABOUT_ME_DETAILED_STORY_TITLE}</h3>
            <div className="about-me-detailed__story-images-container flex flex-col gap-12.5 h-full self-center items-center justify-center">
               <div className="about-me-detailed__story-images flex gap-12.5">
                  {ABOUT_ME_DETAILED_STORY_IMAGES.map((image) => (
                     <img key={image.src} className="about-me-detailed__story-image max-w-48 max-h-42 blur-xs cursor-pointer" src={image.src} alt={image.alt} />
                  ))}
               </div>
               <span className="about-me-detailed__story-description font-hanken-grotesk font-medium text-4xl text-accent">{ABOUT_ME_DETAILED_STORY_DESCRIPTION}</span>
            </div>
         </motion.div>
      </div>
   );
};

export default AboutMeDetailedStoryDesktop;
