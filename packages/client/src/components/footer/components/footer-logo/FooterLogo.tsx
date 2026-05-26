import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import FooterLogoCompact from "./components/footer-logo-compact/FooterLogoCompact";
import FooterLogoDesktop from "./components/footer-logo-desktop/FooterLogoDesktop";
import { FOOTER_LOGO_ARIA_LABEL } from "./data/footerLogoData";

const FooterLogo = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return (
      <div className={`footer__logo flex h-fit w-fit justify-self-center ${isDesktop ? "order-1 py-[4.688rem]" : "order-2"}`} aria-label={FOOTER_LOGO_ARIA_LABEL}>
         {isDesktop ? <FooterLogoDesktop /> : <FooterLogoCompact />}
      </div>
   );
};

export default FooterLogo;
