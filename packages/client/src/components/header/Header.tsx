import React from "react";
import { useHeaderVisibility } from "../../utils/hooks/useHeaderVisibility/useHeaderVisibility";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderModeSwitcher from "./components/header-mode-switcher/HeaderModeSwitcher";
import HeaderNavigation from "./components/header-navigation/HeaderNavigation";

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
      >
         <div className="flex items-center justify-between p-6 px-auto">
            <HeaderLogo />
            <HeaderNavigation />
            <HeaderModeSwitcher />
         </div>
      </header>
   );
};

export default Header;
