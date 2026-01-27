import FooterContentLogo from "./components/footer-content-logo/FooterContentLogo";
import FooterContentNavigation from "./components/footer-content-navigation/FooterContentNavigation";
import FooterContentScrollUp from "./components/footer-content-scroll-up/FooterContentScrollUp";
import { FOOTER_CONTENT_ARIA_LABEL } from "./data/footerContentData";

const FooterContent = () => {
   return (
      <div className="footer__content-container flex items-center justify-between px-6 py-12 md:px-auto md:grid md:grid-cols-3" aria-label={FOOTER_CONTENT_ARIA_LABEL}>
         <FooterContentLogo />
         <FooterContentNavigation />
         <FooterContentScrollUp />
      </div>
   );
};

export default FooterContent;
