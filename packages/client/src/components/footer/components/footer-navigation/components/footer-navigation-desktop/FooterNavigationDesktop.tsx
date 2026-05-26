import React from "react";
import FooterLinksNavigation from "../../../footer-links/components/footer-links-navigation/FooterLinksNavigation";
import FooterLinksSocial from "../../../footer-links/components/footer-links-social/FooterLinksSocial";
import { NAV_DESKTOP_ARIA_LABEL_TEXT } from "../../data/footerNavigationData";

const FooterNavigationDesktop = (): React.ReactElement => {
   return (
      <div className="footer__navigation-desktop flex justify-around py-5" aria-label={NAV_DESKTOP_ARIA_LABEL_TEXT}>
         <FooterLinksSocial />
         <FooterLinksNavigation />
      </div>
   );
};

export default FooterNavigationDesktop;
