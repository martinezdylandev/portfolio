import { motion } from "framer-motion";
import React from "react";
import { CONTACT_PAGE_HEADER_ARIA_LABEL, CONTACT_PAGE_HEADER_TEXT, CONTACT_PAGE_IMAGE_ALT_TEXT, CONTACT_PAGE_IMAGE_SRC, CONTACT_PAGE_MARKER_NAME } from "../../../../data/contactPageData";
import { useContactPageAnimations } from "../../../../utils/useContactPageAnimations";
import "./styles/contact-page-header-desktop-styles.css";

const ContactPageHeaderDesktop = (): React.ReactElement => {
   const { headerPolaroid, headerTitle } = useContactPageAnimations();

   return (
      <div aria-label={CONTACT_PAGE_HEADER_ARIA_LABEL} className="contact-page-header contact-page-header--desktop hidden bg-page lg:block pt-25">
         <div className="flex items-center justify-center gap-10">
            <motion.h2 initial={headerTitle.initial} whileInView={headerTitle.whileInView} transition={headerTitle.transition} viewport={headerTitle.viewport} className="text-heading font-bold leading-none m-0 text-display-xl">
               {CONTACT_PAGE_HEADER_TEXT}
            </motion.h2>

            <motion.div initial={headerPolaroid.initial} whileInView={headerPolaroid.whileInView} transition={headerPolaroid.transition} viewport={headerPolaroid.viewport} className="contact-page-header__polaroid relative p-6 bg-page border border-(--border-subtle) rotate-15">
               <div className="w-[160px] h-[160px] xl:w-[240px] xl:h-[240px] bg-card">
                  <img className="rounded-xl grayscale" src={CONTACT_PAGE_IMAGE_SRC} alt={CONTACT_PAGE_IMAGE_ALT_TEXT} />
               </div>
               <div className="contact-page-header__marker">
                  <svg className="contact-page-header__marker-arrow" viewBox="20 15 93 68" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                     <path d="M25 20 C 60 20, 100 40, 100 78" />
                     <path d="M100 78 L92 60" />
                     <path d="M100 78 L108 60" />
                  </svg>
                  <span className="contact-page-header__marker-name">{CONTACT_PAGE_MARKER_NAME}</span>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default ContactPageHeaderDesktop;
