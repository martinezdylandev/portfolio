import { motion } from "framer-motion";
import React from "react";
import { CONTACT_PAGE_ACCOMPLISHMENTS_ROWS } from "../../../../data/contactPageData";
import { useContactPageAnimations } from "../../../../utils/useContactPageAnimations";

const ContactPageAccomplishmentsDesktop = (): React.ReactElement => {
   const { intro } = useContactPageAnimations();

   return (
      <motion.div initial={intro.initial} whileInView={intro.whileInView} transition={intro.transition} viewport={intro.viewport} className="contact-page-accomplishments__grid contact-page-accomplishments__grid--desktop font-hanken-grotesk flex flex-col">
         {CONTACT_PAGE_ACCOMPLISHMENTS_ROWS.map((row) => {
            const mainTerms = row.terms.filter((term) => term.variant === "main");
            const minorTerms = row.terms.filter((term) => term.variant !== "main");

            return (
               <div key={row.id} className="contact-page-accomplishments__row flex gap-x-2">
                  {mainTerms.map((term) => (
                     <span key={term.id} className="contact-page-accomplishments__term contact-page-accomplishments__term--main text-body font-bold text-display-sm xl:text-display-md leading-none tracking-tight whitespace-nowrap">
                        {term.text}
                     </span>
                  ))}

                  {minorTerms.length > 0 && (
                     <div className="contact-page-accomplishments__term-group flex flex-col self-center">
                        {minorTerms.map((term) => (
                           <span key={term.id} className="contact-page-accomplishments__term contact-page-accomplishments__term--minor text-body font-semibold text-sm leading-none tracking-tight">
                              {term.text}
                           </span>
                        ))}
                     </div>
                  )}
               </div>
            );
         })}
      </motion.div>
   );
};

export default ContactPageAccomplishmentsDesktop;
