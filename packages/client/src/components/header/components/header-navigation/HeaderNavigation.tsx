import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import HeaderNavigationCompact from "./components/header-navigation-compact/HeaderNavigationCompact";
import HeaderNavigationDesktop from "./components/header-navigation-desktop/HeaderNavigationDesktop";
import { NAV_ARIA_LABEL_TEXT } from "./data/headerNavigationData";

const HeaderNavigation = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return (
      <div aria-label={NAV_ARIA_LABEL_TEXT} className="header-navigation order-2">
         {isDesktop ? <HeaderNavigationDesktop /> : <HeaderNavigationCompact />}
      </div>
   );
};

export default HeaderNavigation;
