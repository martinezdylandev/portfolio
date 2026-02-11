import React from "react";
import HeaderNavigationCompact from "./components/header-navigation-compact/HeaderNavigationCompact";
import HeaderNavigationDesktop from "./components/header-navigation-desktop/HeaderNavigationDesktop";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = (): React.ReactElement => {
   return (
      <div aria-label={NAV_ARIA_LABEL_TEXT} className="header-navigation md:order-2">
         <HeaderNavigationDesktop />
         <HeaderNavigationCompact />
      </div>
   );
};

export default HeaderNavigation;
