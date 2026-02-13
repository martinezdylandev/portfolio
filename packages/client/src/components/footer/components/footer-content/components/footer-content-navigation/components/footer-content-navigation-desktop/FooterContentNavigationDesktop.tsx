import React from "react";
import FooterContentLinksNavigation from "../../../footer-content-links/components/footer-links-navigation/FooterContentLinksNavigation";
import FooterContentLinksSocial from "../../../footer-content-links/components/footer-links-social/FooterContentLinksSocial";
import { NAV_DESKTOP_ARIA_LABEL_TEXT } from "../../data/footerContentNavigationData";

const FooterContentNavigationDesktop = (): React.ReactElement => {
   return (
      <div className="footer-content__navigation-desktop hidden md:flex md:justify-around md:py-20" aria-label={NAV_DESKTOP_ARIA_LABEL_TEXT}>
         <FooterContentLinksSocial />
         <FooterContentLinksNavigation />
      </div>
   );
};

export default FooterContentNavigationDesktop;
