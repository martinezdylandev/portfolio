import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import FooterNavigationCompact from "./components/footer-navigation-compact/FooterNavigationCompact";
import FooterNavigationDesktop from "./components/footer-navigation-desktop/FooterNavigationDesktop";
import { NAV_ARIA_LABEL_TEXT } from "./data/footerNavigationData";

const FooterNavigation = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return (
      <div aria-label={NAV_ARIA_LABEL_TEXT} className={`footer__navigation ${isDesktop ? "order-2" : "order-1"}`}>
         {isDesktop ? <FooterNavigationDesktop /> : <FooterNavigationCompact />}
      </div>
   );
};

export default FooterNavigation;
