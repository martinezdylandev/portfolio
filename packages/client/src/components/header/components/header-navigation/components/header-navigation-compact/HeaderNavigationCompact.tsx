import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { HEADER_COMPACT_NAVIGATION_LINKS, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationCompactData";
import { navMenuVariants } from "./utils/compactNavigationAnimations";
import { useCompactNavigationMenu } from "./utils/useCompactNavigationMenu";

const HeaderNavigationCompact = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const { isNavigationMenuOpen, handleClick, navRef, buttonRef } = useCompactNavigationMenu();

   return (
      <div className="md:hidden relative">
         <button ref={buttonRef} className="header-navigation-compact__menu-button w-10 h-10 flex items-center justify-center" onClick={handleClick} aria-label="Open navigation menu" aria-expanded={isNavigationMenuOpen} aria-controls="header-navigation-menu">
            <img src={theme === "light" ? "/header/hamburguer_icon_light_mode.svg" : "/header/hamburguer_icon_dark_mode.svg"} className={`header-navigation-compact__menu-icon cursor-pointer w-6 h-6 transition-transform duration-100 ease-in-out ${isNavigationMenuOpen ? "rotate-90" : "rotate-0"}`} alt="Navigation menu icon" />
         </button>
         <AnimatePresence>
            {isNavigationMenuOpen && (
               <motion.nav ref={navRef} id="header-navigation-menu" tabIndex={-1} variants={navMenuVariants} initial="closed" animate="open" exit="closed" transition={{ duration: 0.2, ease: "easeInOut" }} className="header-navigation-compact absolute" aria-label={NAV_ARIA_LABEL_TEXT}>
                  <ul className="header-navigation-compact__list flex flex-col items-center justify-center bg-accent gap-5 py-10 px-5 rounded-lg shadow-lg" aria-label={LIST_ARIA_LABEL_TEXT}>
                     {HEADER_COMPACT_NAVIGATION_LINKS.map((link) => (
                        <li key={link.HREF} className="header-navigation-compact__item">
                           <a href={link.HREF} aria-label={link.ARIA_LABEL} onClick={handleClick} className="header-navigation-compact__link">
                              <span className="header-navigation-compact__link-text text-heading font-bold text-2xl sm:text-3xl">{link.LABEL}</span>
                           </a>
                        </li>
                     ))}
                  </ul>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
};

export default HeaderNavigationCompact;
