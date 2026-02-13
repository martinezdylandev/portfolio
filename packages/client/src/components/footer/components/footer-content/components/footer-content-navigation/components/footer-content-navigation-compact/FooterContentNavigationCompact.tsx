import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useThemeContext } from "../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { BUTTON_ARIA_LABEL, FOOTER_COMPACT_NAVIGATION_LINKS, ICON_ALT_LABEL, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "./data/footerContentNavigationCompactData";
import { navMenuVariants } from "./utils/compactFooterNavigationAnimations";
import { useCompactFooterNavigationMenu } from "./utils/useCompactFooterNavigationMenu";

const FooterContentNavigationCompact = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const { isNavigationMenuOpen, handleClick, navRef, buttonRef } = useCompactFooterNavigationMenu();

   return (
      <div className="md:hidden relative">
         <button ref={buttonRef} className="footer-content__navigation-compact__menu-button w-10 h-10 flex items-center justify-center" onClick={handleClick} aria-label={BUTTON_ARIA_LABEL} aria-expanded={isNavigationMenuOpen} aria-controls="footer-navigation-menu">
            <img src={theme === "light" ? "/header/hamburguer_icon_light_mode.svg" : "/header/hamburguer_icon_dark_mode.svg"} className={`footer-content__navigation-compact__menu-icon cursor-pointer w-6 h-6 transition-transform duration-100 ease-in-out ${isNavigationMenuOpen ? "rotate-90" : "rotate-0"}`} alt={ICON_ALT_LABEL} />
         </button>
         <AnimatePresence>
            {isNavigationMenuOpen && (
               <motion.nav ref={navRef} id="footer-navigation-menu" tabIndex={-1} variants={navMenuVariants} initial="closed" animate="open" exit="closed" transition={{ duration: 0.2, ease: "easeInOut" }} className="footer-content__navigation-compact absolute bottom-full mb-2" aria-label={NAV_ARIA_LABEL_TEXT}>
                  <ul className="footer-content__navigation-compact__list flex flex-col items-center justify-center bg-accent gap-5 py-10 px-5 rounded-lg shadow-lg" aria-label={LIST_ARIA_LABEL_TEXT}>
                     {FOOTER_COMPACT_NAVIGATION_LINKS.map((link) => (
                        <li key={link.HREF} className="footer-content__navigation-compact__item">
                           <a href={link.HREF} aria-label={link.ARIA_LABEL} onClick={handleClick} className="footer-content__navigation-compact__link">
                              <span className="footer-content__navigation-compact__link-text text-heading font-bold text-2xl sm:text-3xl">{link.LABEL}</span>
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

export default FooterContentNavigationCompact;
