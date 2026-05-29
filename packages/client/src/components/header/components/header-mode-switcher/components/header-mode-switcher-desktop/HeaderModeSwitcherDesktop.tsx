import React from "react";
import { useAnimatedToggle } from "../../../../../../utils/hooks/useAnimatedToggle/useAnimatedToggle";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { BUTTON_ARIA_LABEL_TEXT, DARK_MODE_ALT_TEXT, LIGHT_MODE_ALT_TEXT } from "../../data/headerModeSwitcherData";
import "../../styles/toggle-mode-animation.css";

const HeaderModeSwitcherDesktop = (): React.ReactElement => {
   const { theme, toggleTheme } = useThemeContext();
   const { handlePress, isAnimating } = useAnimatedToggle(toggleTheme);

   return (
      <button className="header__mode-switcher-button h-12.5 w-12.5 flex items-center justify-center order-3" aria-label={BUTTON_ARIA_LABEL_TEXT} onClick={handlePress}>
         {theme === "light" ? <img src="/header/light_mode_icon.svg" className={`header__mode-switcher-image cursor-pointer ${isAnimating ? "toggle-mode-animation" : ""}`} alt={LIGHT_MODE_ALT_TEXT} /> : <img src="/header/dark_mode_icon.svg" className={`header__mode-switcher-image cursor-pointer ${isAnimating ? "toggle-mode-animation" : ""}`} alt={DARK_MODE_ALT_TEXT} />}
      </button>
   );
};

export default HeaderModeSwitcherDesktop;
