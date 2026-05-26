import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import FooterScrollUpCompact from "./components/footer-scroll-up-compact/FooterScrollUpCompact";
import FooterScrollUpDesktop from "./components/footer-scroll-up-desktop/FooterScrollUpDesktop";
import { FOOTER_SCROLL_UP_ARIA_LABEL } from "./data/footerScrollUpData";

const FooterScrollUp = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return (
      <div className={`footer__scroll-up order-3 flex items-center justify-center ${isDesktop ? "justify-self-center py-22" : "w-10 h-10"}`} aria-label={FOOTER_SCROLL_UP_ARIA_LABEL}>
         {isDesktop ? <FooterScrollUpDesktop /> : <FooterScrollUpCompact />}
      </div>
   );
};

export default FooterScrollUp;
