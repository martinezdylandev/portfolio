import React from "react";
import FooterLinksNavigation from "./components/footer-links-navigation/FooterLinksNavigation";
import FooterLinksSocial from "./components/footer-links-social/FooterLinksSocial";
import { FOOTER_LINKS_ARIA_LABEL } from "./data/footerLinksData";

const FooterLinks = (): React.ReactElement => {
   return (
      <div className="footer__links order-1 md:order-2 flex justify-around py-20" aria-label={FOOTER_LINKS_ARIA_LABEL}>
         <FooterLinksSocial />
         <FooterLinksNavigation />
      </div>
   );
};

export default FooterLinks;
