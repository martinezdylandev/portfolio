import { motion } from "framer-motion";
import React from "react";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { LOGO_IMAGE_ALT_TEXT } from "../../data/headerLogoData";

const HeaderLogoCompact = (): React.ReactElement => {
   const { theme } = useThemeContext();

   return <motion.img data-testid="header__logo-compact" src={theme === "light" ? "/header/dm_logo_light_mode.svg" : "/header/dm_logo_dark_mode.svg"} className="header__logo-image w-[clamp(4.5rem,22vw,6.25rem)] h-[clamp(2.25rem,11vw,3.125rem)]" alt={LOGO_IMAGE_ALT_TEXT} />;
};

export default HeaderLogoCompact;
