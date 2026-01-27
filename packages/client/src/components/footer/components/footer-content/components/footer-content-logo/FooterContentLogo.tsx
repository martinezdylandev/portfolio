import { useThemeContext } from "../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { FOOTER_CONTENT_LOGO__ARIA_LABEL, FOOTER_CONTENT_LOGO__IMAGE_ALT, FOOTER_CONTENT_LOGO_DARK_MODE, FOOTER_CONTENT_LOGO_LIGHT_MODE } from "./data/footerContentLogoData";

const FooterContentLogo = () => {
   const { theme } = useThemeContext();

   return (
      <div className="footer-content__logo order-2 md:order-1 md:flex md:h-fit md:w-fit md:justify-self-center md:py-20" aria-label={FOOTER_CONTENT_LOGO__ARIA_LABEL}>
         <a href="/" className="footer-content__logo-link inline-block self-center">
            <img src={`${theme === "light" ? FOOTER_CONTENT_LOGO_LIGHT_MODE : FOOTER_CONTENT_LOGO_DARK_MODE}`} className={`footer-content__logo-image w-[clamp(4.5rem,22vw,6.25rem)] h-[clamp(2.25rem,11vw,3.125rem)] cursor-pointer transition-all duration-500 ease-in-out hover:scale-110`} alt={FOOTER_CONTENT_LOGO__IMAGE_ALT} />
         </a>
      </div>
   );
};

export default FooterContentLogo;
