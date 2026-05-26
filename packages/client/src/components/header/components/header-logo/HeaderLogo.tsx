import React from "react";
import { Link } from "react-router";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import HeaderLogoCompact from "./components/header-logo-compact/HeaderLogoCompact";
import HeaderLogoDesktop from "./components/header-logo-desktop/HeaderLogoDesktop";

const HeaderLogo = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return (
      <div className="header__logo order-2 md:order-1">
         <Link to="/" className="header__logo-link">
            {isDesktop ? <HeaderLogoDesktop /> : <HeaderLogoCompact />}
         </Link>
      </div>
   );
};

export default HeaderLogo;
