import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { ABOUT_ME_ABOUT_CONTACT_NAVIGATION_ARIA_LABEL, ABOUT_ME_ABOUT_DETAILED_NAVIGATION_ARIA_LABEL, ABOUT_ME_CONTENT_LINK_CONTACT_TEXT, ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT, ABOUT_ME_CONTENT_TEXT_FIRST, ABOUT_ME_CONTENT_TEXT_SECOND, ABOUT_ME_HEADER_IMAGE_ALT_TEXT, ABOUT_ME_HEADER_IMAGE_SRC, ABOUT_ME_HEADER_IMAGE_TEXT, ABOUT_ME_HEADER_TITLE } from "../../data/aboutMeData";
import { useAboutMeCompactScrollAnimations } from "../../utils/useAboutMeCompactScrollAnimations";
import { useAboutMeContentAnimations, useAboutMeHeaderImageAnimations, useAboutMeHeaderTitleAnimations } from "../../utils/useAboutMeHeaderAnimations";

const MotionLink = motion.create(Link);

const AboutMeCompact = (): React.ReactElement => {
   const { y, textBottom, textOpacity } = useAboutMeCompactScrollAnimations();
   const { initial: headerTitleInitial, whileInView: headerTitleWhileInView, transition: headerTitleTransition, viewport: headerTitleViewport } = useAboutMeHeaderTitleAnimations();
   const { initial: headerImageInitial, whileInView: headerImageWhileInView, transition: headerImageTransition, viewport: headerImageViewport } = useAboutMeHeaderImageAnimations();
   const { initial: contentInitial, whileInView: contentWhileInView, transition: contentTransition, viewport: contentViewport } = useAboutMeContentAnimations();

   return (
      <div className="about-me-compact lg:hidden relative">
         <div className="about-me-compact__container min-w-screen min-h-screen pt-25 flex flex-col">
            <div className="about-me-compact__header bg-page -z-20 relative flex flex-col items-center justify-between">
               <motion.h3 initial={headerTitleInitial} whileInView={headerTitleWhileInView} transition={headerTitleTransition} viewport={headerTitleViewport} className="about-me-compact__header-title relative text-[clamp(var(--font-size-display-sm),10vw,var(--font-size-display))] text-center text-heading font-bold leading-none m-0">
                  {ABOUT_ME_HEADER_TITLE}
               </motion.h3>
               <motion.div initial={headerImageInitial} whileInView={headerImageWhileInView} transition={headerImageTransition} viewport={headerImageViewport} className="about-me-compact__header-image-container -z-10 flex flex-col items-center justify-center bg-page relative">
                  <motion.img style={{ y }} className="about-me-compact__header-image grayscale w-1/2" src={ABOUT_ME_HEADER_IMAGE_SRC} alt={ABOUT_ME_HEADER_IMAGE_ALT_TEXT} />
                  <motion.span style={{ bottom: textBottom, opacity: textOpacity }} className="about-me-compact__header-image-text absolute bottom-0 left-6/10 text-[clamp(var(--font-size-label),0.875rem,var(--font-size-body))] md:text-[clamp(var(--font-size-body),1.25rem,var(--font-size-heading-sm))] text-accent font-bold leading-none m-0">
                     {ABOUT_ME_HEADER_IMAGE_TEXT}
                  </motion.span>
               </motion.div>
            </div>
            <article className="about-me-compact__content z-20 bg-section py-25 px-6 md:px-0">
               <motion.div initial={contentInitial} whileInView={contentWhileInView} transition={contentTransition} viewport={contentViewport} className="about-me-compact__content-inner flex flex-col gap-25 justify-center">
                  <div className="about-me-compact__content-row flex flex-col gap-10 md:flex-row md:gap-0 md:justify-evenly">
                     <span className="about-me-compact__content-text font-hanken-grotesk text-[clamp(var(--font-size-body),2.5vw,var(--font-size-heading-xs))] md:text-[clamp(var(--font-size-body),1rem,var(--font-size-body-lg))] text-justify text-body md:max-w-1/2">{ABOUT_ME_CONTENT_TEXT_FIRST}</span>
                     <MotionLink to="/contact" role="button" aria-label={ABOUT_ME_ABOUT_CONTACT_NAVIGATION_ARIA_LABEL} className="about-me-compact__content-link about-me-compact__content-link--contact flex items-center justify-center">
                        <span className="about-me-compact__content-link-text font-hanken-grotesk text-[clamp(var(--font-size-heading),5vw,var(--font-size-heading-lg))] md:text-[clamp(var(--font-size-heading),2rem,var(--font-size-heading-lg))] p-2.5 text-page bg-heading font-bold leading-none m-0">{ABOUT_ME_CONTENT_LINK_CONTACT_TEXT}</span>
                     </MotionLink>
                  </div>
                  <div className="about-me-compact__content-row flex flex-col gap-10 md:flex-row md:gap-0 md:justify-evenly">
                     <span className="about-me-compact__content-text font-hanken-grotesk text-[clamp(var(--font-size-body),2.5vw,var(--font-size-heading-xs))] md:text-[clamp(var(--font-size-body),1rem,var(--font-size-body-lg))] text-justify text-body md:max-w-1/2 md:order-2">{ABOUT_ME_CONTENT_TEXT_SECOND}</span>
                     <MotionLink to="/about" role="button" aria-label={ABOUT_ME_ABOUT_DETAILED_NAVIGATION_ARIA_LABEL} className="about-me-compact__content-link about-me-compact__content-link--know-more flex items-center justify-center">
                        <span className="about-me-compact__content-link-text font-hanken-grotesk text-[clamp(var(--font-size-heading),5vw,var(--font-size-heading-lg))] md:text-[clamp(var(--font-size-heading),2rem,var(--font-size-heading-lg))] p-2.5 text-page bg-heading font-bold leading-none m-0">{ABOUT_ME_CONTENT_LINK_KNOW_MORE_TEXT}</span>
                     </MotionLink>
                  </div>
               </motion.div>
            </article>
         </div>
      </div>
   );
};

export default AboutMeCompact;
