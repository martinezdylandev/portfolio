import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { BUTTON_ARIA_LABEL, FOOTER_COMPACT_NAVIGATION_LINKS, ICON_ALT_LABEL, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT } from "./data/footerNavigationCompactData";
import { navMenuVariants } from "./utils/compactFooterNavigationAnimations";
import { useCompactFooterNavigationMenu } from "./utils/useCompactFooterNavigationMenu";

const FooterNavigationCompact = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const { isNavigationMenuOpen, handleClick, navRef, buttonRef } = useCompactFooterNavigationMenu();

   return (
      <div className="">
         <button ref={buttonRef} className="footer__navigation-compact__menu-button w-10 h-10 flex items-center justify-center" onClick={handleClick} aria-label={BUTTON_ARIA_LABEL} aria-expanded={isNavigationMenuOpen} aria-controls="footer-navigation-menu">
            <img src={theme === "light" ? "/header/hamburguer_icon_light_mode.svg" : "/header/hamburguer_icon_dark_mode.svg"} className={`footer__navigation-compact__menu-icon w-6 h-6 transition-transform duration-300 ease-in-out ${isNavigationMenuOpen ? "rotate-90" : "rotate-0"}`} alt={ICON_ALT_LABEL} />
         </button>
         <AnimatePresence>
            {isNavigationMenuOpen && (
               <motion.nav ref={navRef} id="footer-navigation-menu" tabIndex={-1} variants={navMenuVariants} initial="closed" animate="open" exit="closed" transition={{ duration: 0.3, ease: "easeInOut" }} className="footer__navigation-compact absolute bottom-full left-0" aria-label={NAV_ARIA_LABEL_TEXT}>
                  <ul className="footer__navigation-compact__list flex flex-col bg-card gap-5 p-5 rounded-br-lg rounded-tr-lg shadow-lg" aria-label={LIST_ARIA_LABEL_TEXT}>
                     {FOOTER_COMPACT_NAVIGATION_LINKS.map((link) => (
                        <li key={link.HREF} className="footer__navigation-compact__item">
                           <Link to={link.HREF} aria-label={link.ARIA_LABEL} onClick={handleClick} className="footer__navigation-compact__link">
                              <span className="footer__navigation-compact__link-text text-heading font-bold text-[clamp(var(--font-size-heading-sm),5vw,var(--font-size-heading))]">{link.LABEL}</span>
                           </Link>
                        </li>
                     ))}
                  </ul>
               </motion.nav>
            )}
         </AnimatePresence>
      </div>
   );
};

export default FooterNavigationCompact;
