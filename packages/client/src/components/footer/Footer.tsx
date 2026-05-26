import React from "react";
import FooterContentLogo from "./components/footer-content/components/footer-content-logo/FooterContentLogo";
import FooterContentNavigation from "./components/footer-content/components/footer-content-navigation/FooterContentNavigation";
import FooterContentScrollUp from "./components/footer-content/components/footer-content-scroll-up/FooterContentScrollUp";
import { FOOTER_CONTENT_ARIA_LABEL } from "./components/footer-content/data/footerContentData";
import { FOOTER_ARIA_LABEL } from "./data/footerData";

const Footer = (): React.ReactElement => {
   return (
      <footer id="footer" className="footer bg-page" aria-label={FOOTER_ARIA_LABEL}>
         <div className="footer__content flex items-center justify-between px-6 py-12 md:px-auto md:grid md:grid-cols-3" role="region" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
            <FooterContentLogo />
            <FooterContentNavigation />
            <FooterContentScrollUp />
         </div>
      </footer>
   );
};

export default Footer;
