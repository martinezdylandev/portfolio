import React from "react";
import { useHeaderVisibility } from "../../utils/hooks/useHeaderVisibility/useHeaderVisibility";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";
import { HEADER_ARIA_LABEL } from "./data/headerData";

const Header = (): React.ReactElement => {
   const isVisible = useHeaderVisibility();

   return (
      <header
         className={`
            header
            fixed
            w-full
            z-9999 
            bg-page
            transition-transform duration-600 ease-in-out
            ${isVisible ? "transform-none" : "-translate-y-full"}
         `}
         id="header"
         aria-label={HEADER_ARIA_LABEL}
      >
         <div className="header__content flex items-center justify-between p-6 px-auto relative">
            <HeaderNavigation />
            <HeaderLogo />
            <HeaderModeSwitcher />
         </div>
      </header>
   );
};

export default Header;
