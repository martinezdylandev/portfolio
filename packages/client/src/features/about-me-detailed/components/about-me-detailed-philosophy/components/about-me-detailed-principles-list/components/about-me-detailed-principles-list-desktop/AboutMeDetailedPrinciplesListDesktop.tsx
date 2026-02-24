import React from "react";
import { ABOUT_ME_DETAILED_PHILOSOPHY_COLUMNS, ABOUT_ME_DETAILED_PHILOSOPHY_PRINCIPLES } from "../../../../data/aboutMeDetailedPhilosophyData";
import { calculatePrincipleGridPosition } from "../../utils/calculatePrincipleGridPosition";

const AboutMeDetailedPrinciplesListDesktop = (): React.ReactElement => {
   return (
      <div className="about-me-detailed__philosophy-principles-list about-me-detailed__philosophy-principles-list--desktop flex flex-col justify-center px-25">
         <ul className="about-me-detailed__philosophy-principles-list-header grid grid-cols-4 text-left font-hanken-grotesk text-heading">
            {ABOUT_ME_DETAILED_PHILOSOPHY_COLUMNS.map((column) => (
               <li key={column} className="about-me-detailed__philosophy-principles-list-header-item p-2.5">
                  {column}
               </li>
            ))}
         </ul>
         <ul className="about-me-detailed__philosophy-principles-list-items text-lg text-left font-hanken-grotesk grid grid-cols-4 grid-rows-4 w-fit border-t-[5px] border-b-[5px] text-heading border-heading">
            {ABOUT_ME_DETAILED_PHILOSOPHY_PRINCIPLES.map((text, index) => {
               const { row, col, borderBottom } = calculatePrincipleGridPosition(index);
               return (
                  <li key={index} className="about-me-detailed__philosophy-principles-list-item" style={{ gridRow: row, gridColumn: col, borderBottom, padding: "0.625rem" }}>
                     {text}
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default AboutMeDetailedPrinciplesListDesktop;
