import React from "react";
import { Link } from "react-router";
import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_LOGO_DARK_MODE, FOOTER_LOGO_DESKTOP_ARIA_LABEL, FOOTER_LOGO_IMAGE_ALT, FOOTER_LOGO_LIGHT_MODE } from "../../data/footerLogoData";

const FooterLogoDesktop = (): React.ReactElement => {
   const { theme } = useThemeContext();

   return (
      <Link to="/" aria-label={FOOTER_LOGO_DESKTOP_ARIA_LABEL} className="footer__logo-link inline-block self-center">
         <img src={theme === "light" ? FOOTER_LOGO_LIGHT_MODE : FOOTER_LOGO_DARK_MODE} className="footer__logo-image w-[clamp(4.5rem,22vw,6.25rem)] h-[clamp(2.25rem,11vw,3.125rem)] cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" alt={FOOTER_LOGO_IMAGE_ALT} />
      </Link>
   );
};

export default FooterLogoDesktop;
