import { motion } from "framer-motion";
import React from "react";
import { useThemeContext } from "../../../../utils/hooks/useThemeContext/useThemeContext";
import { LOGO_IMAGE_ALT_TEXT, LOGO_TITLE_TEXT } from "./data/headerLogoData";
import { useHeaderLogoAnimations } from "./utils/useHeaderLogoAnimations";

const HeaderLogo = (): React.ReactElement => {
   const { theme } = useThemeContext();
   const { handleMouseEnter, handleMouseLeave, imageAnimation, imageTransition, titleAnimation, titleTransition } = useHeaderLogoAnimations();

   return (
      <div className={`header__logo order-2 md:order-1`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         <a href="/" className="header__logo-link">
            <div className="header__logo-wrapper relative w-[clamp(4.5rem,22vw,6.25rem)] h-[clamp(2.25rem,11vw,3.125rem)] hidden lg:block">
               <motion.img src={theme === "light" ? "/header/dm_logo_light_mode.svg" : "/header/dm_logo_dark_mode.svg"} className="header__logo-image absolute top-0 left-0 w-full border-b-0 border-solid border-b-heading" alt={LOGO_IMAGE_ALT_TEXT} animate={imageAnimation} transition={imageTransition} />
               <motion.span className="header__logo-title absolute left-0 w-full text-center text-xs font-bold text-heading" initial={{ top: "1%", opacity: 0 }} animate={titleAnimation} transition={titleTransition}>
                  {LOGO_TITLE_TEXT}
               </motion.span>
            </div>

            <motion.img src={theme === "light" ? "/header/dm_logo_light_mode.svg" : "/header/dm_logo_dark_mode.svg"} className="header__logo-image w-[clamp(4.5rem,22vw,6.25rem)] h-[clamp(2.25rem,11vw,3.125rem)] lg:hidden" alt={LOGO_IMAGE_ALT_TEXT} />
         </a>
      </div>
   );
};

export default HeaderLogo;
