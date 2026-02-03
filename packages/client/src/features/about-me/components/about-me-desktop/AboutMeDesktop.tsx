import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { useCommonHoverAnimations } from "../../../../utils/hooks/useCommonHoverAnimations/useCommonHoverAnimations";
import { ABOUT_ME_ABOUT_CONTACT_NAVIGATION_ARIA_LABEL, ABOUT_ME_ABOUT_DETAILED_NAVIGATION_ARIA_LABEL, ABOUT_ME_CONTENT_LINK_CONTACT_TEXT, ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT, ABOUT_ME_CONTENT_TEXT_FIRST, ABOUT_ME_CONTENT_TEXT_SECOND, ABOUT_ME_HEADER_IMAGE_ALT_TEXT, ABOUT_ME_HEADER_IMAGE_SRC, ABOUT_ME_HEADER_IMAGE_TEXT, ABOUT_ME_HEADER_TITLE } from "../../data/aboutMeData";
import { useAboutMeDesktopScrollAnimations } from "../../utils/useAboutMeDesktopScrollAnimations";
import { useAboutMeContentAnimations, useAboutMeHeaderImageAnimations, useAboutMeHeaderTitleAnimations } from "../../utils/useAboutMeHeaderAnimations";

const MotionLink = motion.create(Link);

const AboutMeDesktop = (): React.ReactElement => {
   const { y, textBottom, textOpacity } = useAboutMeDesktopScrollAnimations();
   const { initial: headerTitleInitial, whileInView: headerTitleWhileInView, transition: headerTitleTransition, viewport: headerTitleViewport } = useAboutMeHeaderTitleAnimations();
   const { initial: headerImageInitial, whileInView: headerImageWhileInView, transition: headerImageTransition, viewport: headerImageViewport } = useAboutMeHeaderImageAnimations();
   const { initial: contentInitial, whileInView: contentWhileInView, transition: contentTransition, viewport: contentViewport } = useAboutMeContentAnimations();
   const { whileHover, whileTap, transition: hoverTransition } = useCommonHoverAnimations();

   return (
      <div className="about-me-desktop hidden lg:flex">
         <div className="about-me-desktop__container min-w-screen min-h-screen pt-25 flex flex-col">
            <div className="about-me-desktop__header bg-page -z-20 relative flex flex-col items-center justify-between">
               <motion.h3 initial={headerTitleInitial} whileInView={headerTitleWhileInView} transition={headerTitleTransition} viewport={headerTitleViewport} className="about-me-desktop__header-title relative top-20 text-[160px] text-center text-heading font-bold leading-none m-0">
                  {ABOUT_ME_HEADER_TITLE}
               </motion.h3>
               <motion.div initial={headerImageInitial} whileInView={headerImageWhileInView} transition={headerImageTransition} viewport={headerImageViewport} className="about-me-desktop__header-image-container -z-10 flex flex-col w-[80%] items-center justify-center bg-page relative">
                  <motion.img style={{ y }} className="about-me-desktop__header-image grayscale w-1/2 cursor-pointer" src={ABOUT_ME_HEADER_IMAGE_SRC} alt={ABOUT_ME_HEADER_IMAGE_ALT_TEXT} />
                  <motion.span style={{ bottom: textBottom, opacity: textOpacity }} className="about-me-desktop__header-image-text absolute bottom-0 left-4/6 text-2xl text-accent font-bold leading-none m-0">
                     {ABOUT_ME_HEADER_IMAGE_TEXT}
                  </motion.span>
               </motion.div>
            </div>
            <article className="about-me-desktop__content z-20 bg-section py-25">
               <motion.div initial={contentInitial} whileInView={contentWhileInView} transition={contentTransition} viewport={contentViewport} className="about-me-desktop__content-inner flex flex-col gap-25 justify-center">
                  <div className="about-me-desktop__content-row flex justify-evenly">
                     <span className="about-me-desktop__content-text font-hanken-grotesk max-w-1/2 text-xl text-justify text-body">{ABOUT_ME_CONTENT_TEXT_FIRST}</span>
                     <MotionLink to="/about" role="button" aria-label={ABOUT_ME_ABOUT_DETAILED_NAVIGATION_ARIA_LABEL} className="about-me-desktop__content-link about-me-desktop__content-link--know-more flex items-center justify-center" whileHover={whileHover} whileTap={whileTap} transition={hoverTransition}>
                        <span className="about-me-desktop__content-link-text font-hanken-grotesk text-4xl cursor-pointer p-2.5 text-section bg-heading hover:bg-accent font-bold leading-none m-0">{ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT}</span>
                     </MotionLink>
                  </div>
                  <div className="about-me-desktop__content-row flex justify-evenly">
                     <MotionLink to="/contact" role="button" aria-label={ABOUT_ME_ABOUT_CONTACT_NAVIGATION_ARIA_LABEL} className="about-me-desktop__content-link about-me-desktop__content-link--contact flex items-center justify-center" whileHover={whileHover} whileTap={whileTap} transition={hoverTransition}>
                        <span className="about-me-desktop__content-link-text font-hanken-grotesk text-4xl cursor-pointer p-2.5 text-section bg-heading hover:bg-accent font-bold leading-none m-0">{ABOUT_ME_CONTENT_LINK_CONTACT_TEXT}</span>
                     </MotionLink>
                     <span className="about-me-desktop__content-text font-hanken-grotesk max-w-1/2 text-xl text-justify text-body">{ABOUT_ME_CONTENT_TEXT_SECOND}</span>
                  </div>
               </motion.div>
            </article>
         </div>
      </div>
   );
};

export default AboutMeDesktop;
