import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import HeaderModeSwitcherCompact from "./components/header-mode-switcher-compact/HeaderModeSwitcherCompact";
import HeaderModeSwitcherDesktop from "./components/header-mode-switcher-desktop/HeaderModeSwitcherDesktop";

const HeaderModeSwitcher = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <HeaderModeSwitcherDesktop /> : <HeaderModeSwitcherCompact />;
};

export default HeaderModeSwitcher;
