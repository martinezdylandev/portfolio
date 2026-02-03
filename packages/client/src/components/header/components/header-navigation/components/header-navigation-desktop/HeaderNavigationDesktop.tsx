import React from "react";
import "./styles/default-navigation-animations.css";

import { HEADER_DESKTOP_NAVIGATION_LINKS, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationDesktopData";

const HeaderNavigationDesktop = (): React.ReactElement => {
   return (
      <nav className="header-navigation-desktop hidden md:flex items-center" aria-label={NAV_ARIA_LABEL_TEXT}>
         <ul className="header-navigation-desktop__list flex justify-center gap-5" aria-label={LIST_ARIA_LABEL_TEXT}>
            {HEADER_DESKTOP_NAVIGATION_LINKS.map((link) => (
               <li key={link.HREF} className="header-navigation-desktop__item">
                  <a href={link.HREF} aria-label={link.ARIA_LABEL} className="header-navigation-desktop__link">
                     <span className="header-navigation-desktop__link-text text-heading hover:text-accent font-hanken-grotesk font-bold text-xl transition-colors duration-300 ease-in-out cursor-pointer">{link.LABEL}</span>
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

export default HeaderNavigationDesktop;
