import React from "react";
import FooterLogo from "./components/footer-logo/FooterLogo";
import FooterNavigation from "./components/footer-navigation/FooterNavigation";
import FooterScrollUp from "./components/footer-scroll-up/FooterScrollUp";
import { FOOTER_ARIA_LABEL, FOOTER_CONTENT_ARIA_LABEL } from "./data/footerData";

const Footer = (): React.ReactElement => {
   return (
      <footer id="footer" className="footer bg-page" aria-label={FOOTER_ARIA_LABEL}>
         <div className="footer__content flex items-center justify-between px-6 py-12 md:px-auto md:grid md:grid-cols-3" role="region" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
            <FooterLogo />
            <FooterNavigation />
            <FooterScrollUp />
         </div>
      </footer>
   );
};

export default Footer;
