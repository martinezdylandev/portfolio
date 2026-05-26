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

const ContactPagePitchDesktop = ({ isContactFormLoaded }: { isContactFormLoaded: boolean }): React.ReactElement => {
   const { intro } = useContactPageAnimations();

   return (
      <>
         <motion.div initial={intro.initial} whileInView={intro.whileInView} transition={intro.transition} viewport={intro.viewport} className="contact-page-pitch contact-page-pitch--desktop grid gap-12.5 my-50 px-12.5">
            <div className="flex justify-between col-start-1 col-end-4">
               <span className="text-display-sm text-heading font-bold font-hanken-grotesk">THE_</span>
               <span className="text-display-sm text-heading font-bold font-hanken-grotesk">_METHOD</span>
            </div>
            <div className="contact-page-pitch__text-box flex flex-col col-start-1">
               <span className="contact-page-pitch__box-header p-4 text-body-md font-semibold text-center text-body">IDEA</span>
               <p className="font-hanken-grotesk text-body-md p-8 text-body text-justify bg-card self-center indent-8">{CONTACT_PAGE_PITCH_IDEA}</p>
            </div>
            <div className="contact-page-pitch__text-box flex flex-col col-start-2">
               <span className="contact-page-pitch__box-header p-4 text-body-md font-semibold text-center text-accent">IMPLEMENTATION</span>
               <p className="font-hanken-grotesk text-body-md p-8 text-accent text-justify bg-card self-center indent-8">{CONTACT_PAGE_PITCH_IMPLEMENTATION}</p>
            </div>
            <div className="contact-page-pitch__text-box flex flex-col col-start-3">
               <span className="contact-page-pitch__box-header p-4 text-body-md font-semibold text-center text-body">END PRODUCT</span>
               <p className="font-hanken-grotesk text-body-md p-8 text-body text-justify bg-card self-center indent-8">{CONTACT_PAGE_PITCH_END_PRODUCT}</p>
            </div>
         </motion.div>
         <motion.div initial={intro.initial} whileInView={intro.whileInView} transition={intro.transition} viewport={intro.viewport} className="flex flex-col max-w-1/2 self-center gap-12.5">
            <span className="flex text-display-xl text-heading text-center self-start font-bold">GOT A PROJECT IN MIND ?</span>
            <AnimatePresence>
               {!isContactFormLoaded && (
                  <motion.div animate="pulse" exit={{ opacity: 0, y: 20 }} transition={{ staggerChildren: -0.2, staggerDirection: -1, duration: 0.4 }} className="contact-page-pitch__dots">
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

export default ContactPagePitchDesktop;
