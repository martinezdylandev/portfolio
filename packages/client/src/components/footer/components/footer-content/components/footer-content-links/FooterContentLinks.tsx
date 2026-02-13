import React from "react";
import FooterContentLinksNavigation from "./components/footer-links-navigation/FooterContentLinksNavigation";
import FooterContentLinksSocial from "./components/footer-links-social/FooterContentLinksSocial";
import { FOOTER_CONTENT_LINKS_ARIA_LABEL } from "./data/footerContentLinksData";

const FooterContentLinks = (): React.ReactElement => {
   return (
      <div className="footer-content__links order-1 md:order-2 flex justify-around py-20" aria-label={FOOTER_CONTENT_LINKS_ARIA_LABEL}>
         <FooterContentLinksSocial />
         <FooterContentLinksNavigation />
      </div>
   );
};

export default FooterContentLinks;
