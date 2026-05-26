import React from "react";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_ARROW_ICON_DARK_MODE, FOOTER_ARROW_ICON_LIGHT_MODE, FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT, FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL, FOOTER_SCROLL_UP_TEXT } from "../../data/footerScrollUpData";
import { scrollToTop } from "../../utils/scrollToTop";

const FooterScrollUpDesktop = (): React.ReactElement => {
   const { theme } = useThemeContext();

   return (
      <a href="#top" aria-label={FOOTER_SCROLL_UP_DESKTOP_ARIA_LABEL} onClick={scrollToTop} className="footer__scroll-up-link flex gap-2 group">
         <span className="footer__scroll-up-text relative font-hanken-grotesk text-[clamp(var(--font-size-body),1.5vw,var(--font-size-heading-xs))] font-bold text-heading">
            {FOOTER_SCROLL_UP_TEXT}
            <span className="footer__scroll-up-text-underline absolute left-0 bottom-0 h-px bg-current w-0 group-hover:w-full transition-all duration-300"></span>
         </span>
         <img src={theme === "light" ? FOOTER_ARROW_ICON_LIGHT_MODE : FOOTER_ARROW_ICON_DARK_MODE} alt={FOOTER_SCROLL_UP_ARROW_ICON_ALT_TEXT} className="footer__scroll-up-image group-hover:animate-bounce transition-all duration-300" />
      </a>
   );
};

export default FooterScrollUpDesktop;
