import React from "react";
import FooterLinksSocialGithub from "./components/footer-social-github/FooterLinksSocialGithub";
import FooterLinksSocialLinkedin from "./components/footer-social-linkedin/FooterLinksSocialLinkedin";
import { FOOTER_SOCIAL_ARIA_LABEL, FOOTER_SOCIAL_SPAN_TEXT } from "./data/footerSocialData";

const FooterLinksSocial = (): React.ReactElement => {
   return (
      <div className="footer__links-social flex flex-col gap-5 self-start justify-center items-center" aria-label={FOOTER_SOCIAL_ARIA_LABEL}>
         <span className="footer__links-social-span font-hanken-grotesk text-[clamp(var(--font-size-body-lg),1.5vw,var(--font-size-heading-xs))] font-bold decoration-1 text-heading">{FOOTER_SOCIAL_SPAN_TEXT}</span>
         <FooterLinksSocialLinkedin />
         <FooterLinksSocialGithub />
      </div>
   );
};

export default FooterLinksSocial;
