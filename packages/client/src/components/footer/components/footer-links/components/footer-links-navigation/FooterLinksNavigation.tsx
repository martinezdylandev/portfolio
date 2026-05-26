import React from "react";
import { Link } from "react-router";
import { FOOTER_LINKS_NAVIGATION_ARIA_LABEL, FOOTER_LINKS_NAVIGATION_LINKS, FOOTER_LINKS_NAVIGATION_SPAN_TEXT } from "./data/footerLinksNavigationData";

const FooterLinksNavigation = (): React.ReactElement => {
   return (
      <nav className="footer__links-navigation flex flex-col gap-2.5 justify-center" aria-label={FOOTER_LINKS_NAVIGATION_ARIA_LABEL}>
         <span className="footer__links-navigation-span text-[clamp(var(--font-size-body-lg),1.5vw,var(--font-size-heading-xs))] font-bold text-heading">{FOOTER_LINKS_NAVIGATION_SPAN_TEXT}</span>
         <ul className="footer__links-navigation-list flex flex-col gap-2.5">
            {FOOTER_LINKS_NAVIGATION_LINKS.map((link) => (
               <li key={link.HREF} className="footer__links-navigation-list-item">
                  <Link to={link.HREF} aria-label={link.ARIA_LABEL} className="footer__links-navigation-link">
                     <span className="footer__links-navigation-link-text relative group text-[clamp(var(--font-size-body),1.5vw,var(--font-size-heading-xs))] font-semibold cursor-pointer text-heading">
                        {link.LABEL}
                        <span className="footer__links-navigation-link-underline absolute left-0 bottom-0 h-px bg-current w-0 group-hover:w-full transition-all duration-300"></span>
                     </span>
                  </Link>
               </li>
            ))}
         </ul>
      </nav>
   );
};
export default FooterLinksNavigation;
