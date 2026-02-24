import React from "react";
import { ABOUT_ME_DETAILED_PHILOSOPHY_PRINCIPLES } from "../../../../data/aboutMeDetailedPhilosophyData";

const AboutMeDetailedPrinciplesListCompact = (): React.ReactElement => {
   return (
      <div className="about-me-detailed__philosophy-principles-list about-me-detailed__philosophy-principles-list--compact flex flex-col justify-center px-6 md:px-25">
         <ul className="about-me-detailed__philosophy-principles-list-items font-hanken-grotesk text-base md:text-lg text-left text-heading list-none p-0 m-0 flex flex-col gap-3 border-t-2 border-b-2 border-heading py-4">
            {ABOUT_ME_DETAILED_PHILOSOPHY_PRINCIPLES.map((text, index) => (
               <li key={index} className="about-me-detailed__philosophy-principles-list-item border-b border-heading/30 last:border-b-0 pb-3 last:pb-0">
                  {text}
               </li>
            ))}
         </ul>
      </div>
   );
};

export default AboutMeDetailedPrinciplesListCompact;
