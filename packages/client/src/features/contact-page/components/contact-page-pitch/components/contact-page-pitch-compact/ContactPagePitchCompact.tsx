import { useMediaQuery } from "@/utils/hooks/useMediaQuery/useMediaQuery";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";
import { CONTACT_PAGE_PITCH_END_PRODUCT, CONTACT_PAGE_PITCH_IDEA, CONTACT_PAGE_PITCH_IMPLEMENTATION } from "../../../../data/contactPageData";
import { useContactPageAnimations } from "../../../../utils/useContactPageAnimations";

const dotVariants: Variants = {
   pulse: {
      scale: [1, 1.5, 1],
      transition: {
         duration: 1.2,
         repeat: Infinity,
         ease: "easeInOut",
      },
   },
};

const ContactPagePitchCompact = ({ isContactFormLoaded }: { isContactFormLoaded: boolean }): React.ReactElement => {
   const { intro } = useContactPageAnimations();
   const isTablet = useMediaQuery("(min-width: 768px)");

   return (
      <>
         <motion.div initial={intro.initial} whileInView={intro.whileInView} transition={intro.transition} viewport={intro.viewport} className="contact-page-pitch contact-page-pitch--compact flex flex-col md:items-center gap-6 md:gap-12 my-25 px-6">
            <span className={`${isTablet ? "hidden" : "block"} text-heading-lg text-heading font-bold self-center font-hanken-grotesk`}>THE METHOD</span>
            {isTablet && (
               <div className="flex justify-between w-2/3">
                  <span className="text-heading text-heading font-bold self-center font-hanken-grotesk">THE_</span>
                  <span className="text-heading text-heading font-bold self-center font-hanken-grotesk">_METHOD</span>
               </div>
            )}
            <div className="contact-page-pitch__text-box flex flex-col md:w-2/3">
               <span className="contact-page-pitch__box-header p-4 text-body-lg font-semibold text-center text-body">IDEA</span>
               <p className="font-hanken-grotesk text-body-md p-6 text-body text-justify bg-card indent-8">{CONTACT_PAGE_PITCH_IDEA}</p>
            </div>
            <div className="contact-page-pitch__text-box flex flex-col md:w-2/3">
               <span className="contact-page-pitch__box-header p-4 text-body-lg font-semibold text-center text-accent">IMPLEMENTATION</span>
               <p className="font-hanken-grotesk text-body-md p-6 text-accent text-justify bg-card indent-8">{CONTACT_PAGE_PITCH_IMPLEMENTATION}</p>
            </div>
            <div className="contact-page-pitch__text-box flex flex-col md:w-2/3">
               <span className="contact-page-pitch__box-header p-4 text-body-lg font-semibold text-center text-body">END PRODUCT</span>
               <p className="font-hanken-grotesk text-body-md p-6 text-body text-justify bg-card indent-8">{CONTACT_PAGE_PITCH_END_PRODUCT}</p>
            </div>
         </motion.div>
         <motion.div initial={intro.initial} whileInView={intro.whileInView} transition={intro.transition} viewport={intro.viewport} className="flex flex-col px-6 gap-8">
            <span className="text-heading-lg md:text-display-sm md:w-2/3 md:self-center text-heading text-center font-bold">GOT A PROJECT IN MIND ?</span>
            <AnimatePresence>
               {!isContactFormLoaded && (
                  <motion.div animate="pulse" exit={{ opacity: 0, y: 20 }} transition={{ staggerChildren: -0.2, staggerDirection: -1, duration: 0.4 }} className="contact-page-pitch__dots contact-page-pitch__dots--compact">
                     <motion.div className="dot" variants={dotVariants} />
                     <motion.div className="dot" variants={dotVariants} />
                     <motion.div className="dot" variants={dotVariants} />
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.div>
      </>
   );
};

export default ContactPagePitchCompact;
