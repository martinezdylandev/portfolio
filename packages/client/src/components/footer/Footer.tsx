import React from "react";
import FooterContent from "./components/footer-content/FooterContent";
import { FOOTER_ARIA_LABEL } from "./data/footerData";

const Footer = (): React.ReactElement => {
   return (
      <footer id="footer" className="footer bg-page" aria-label={FOOTER_ARIA_LABEL}>
         <FooterContent />
      </footer>
   );
};

export default Footer;
