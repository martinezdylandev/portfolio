import { useHeaderVisibility } from "@/utils/hooks/useHeaderVisibility/useHeaderVisibility";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { HEADER_NAVIGATION_LINKS, LIST_COMPACT_ARIA_LABEL_TEXT, NAV_COMPACT_ARIA_LABEL_TEXT } from "../../data/headerNavigationData";
import { navMenuVariants } from "./utils/compactNavigationAnimations";
import { useCompactNavigationMenu } from "./utils/useCompactNavigationMenu";

const HeaderNavigationCompact = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const isHeaderVisible = useHeaderVisibility();
   const { isNavigationMenuOpen, handleClick, navRef, buttonRef } = useCompactNavigationMenu({ isHeaderVisible });

   return (
      <>
         <div className="">
            <button ref={buttonRef} className="header-navigation-compact__menu-button w-10 h-10 flex items-center justify-center" onClick={handleClick} aria-label="Open navigation menu" aria-expanded={isNavigationMenuOpen} aria-controls="header-navigation-menu">
               <img src={theme === "light" ? "/header/hamburguer_icon_light_mode.svg" : "/header/hamburguer_icon_dark_mode.svg"} className={`header-navigation-compact__menu-icon w-6 h-6 transition-transform duration-300 ease-in-out ${isNavigationMenuOpen ? "rotate-90" : "rotate-0"}`} alt="Navigation menu icon" />
            </button>
            <AnimatePresence>
               {isNavigationMenuOpen && (
                  <motion.nav ref={navRef} id="header-navigation-menu" tabIndex={-1} variants={navMenuVariants} initial="closed" animate="open" exit="closed" transition={{ duration: 0.3, ease: "easeInOut" }} className="header-navigation-compact absolute left-0 top-full" aria-label={NAV_COMPACT_ARIA_LABEL_TEXT}>
                     <ul className="header-navigation-compact__list flex flex-col bg-card gap-5 p-5 rounded-br-lg rounded-tr-lg shadow-lg" aria-label={LIST_COMPACT_ARIA_LABEL_TEXT}>
                        {HEADER_NAVIGATION_LINKS.map((link) => (
                           <li key={link.HREF} className="header-navigation-compact__item">
                              <Link to={link.HREF} aria-label={link.ARIA_LABEL} onClick={handleClick} className="header-navigation-compact__link">
                                 <span className="header-navigation-compact__link-text text-heading font-bold text-[clamp(var(--font-size-heading-sm),5vw,var(--font-size-heading))]">{link.LABEL}</span>
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </motion.nav>
               )}
            </AnimatePresence>
         </div>
      </>
   );
};

export default HeaderNavigationCompact;
