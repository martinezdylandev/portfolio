import React from "react";
import FooterContentLinksNavigation from "../../../footer-content-links/components/footer-links-navigation/FooterContentLinksNavigation";
import FooterContentLinksSocial from "../../../footer-content-links/components/footer-links-social/FooterContentLinksSocial";
import { FOOTER_CONTENT_NAVIGATION_DESKTOP_ARIA_LABEL } from "./data/footerContentNavigationDesktopData";

const FooterContentNavigationDesktop = (): React.ReactElement => {
   return (
      <div className="footer-content__navigation-desktop hidden md:flex md:justify-around md:py-20" aria-label={FOOTER_CONTENT_NAVIGATION_DESKTOP_ARIA_LABEL}>
         <FooterContentLinksSocial />
         <FooterContentLinksNavigation />
      </div>
   );
};

export default FooterContentNavigationDesktop;
