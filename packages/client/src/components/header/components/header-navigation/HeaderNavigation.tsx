import React from "react";
import HeaderNavigationCompact from "./components/header-navigation-compact/HeaderNavigationCompact";
import HeaderNavigationDesktop from "./components/header-navigation-desktop/HeaderNavigationDesktop";

const HeaderNavigation = (): React.ReactElement => {
   return (
      <div className="header-navigation md:order-2">
         <HeaderNavigationDesktop />
         <HeaderNavigationCompact />
      </div>
   );
};

export default HeaderNavigation;
