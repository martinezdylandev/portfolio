import React from "react";
import FooterContentNavigationCompact from "./components/footer-content-navigation-compact/FooterContentNavigationCompact";
import FooterContentNavigationDesktop from "./components/footer-content-navigation-desktop/FooterContentNavigationDesktop";
import { NAV_ARIA_LABEL_TEXT } from "./data/footerContentNavigationData";

const FooterContentNavigation = (): React.ReactElement => {
   return (
      <div aria-label={NAV_ARIA_LABEL_TEXT} className="footer-content__navigation order-1 md:order-2">
         <FooterContentNavigationDesktop />
         <FooterContentNavigationCompact />
      </div>
   );
};

export default FooterContentNavigation;
