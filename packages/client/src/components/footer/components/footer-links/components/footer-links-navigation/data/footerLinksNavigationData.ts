const FOOTER_LINKS_NAVIGATION_ARIA_LABEL: string = "Footer content links navigation";
const FOOTER_LINKS_NAVIGATION_SPAN_TEXT: string = "LINKS";

interface FooterLinksNavigationLinks {
   LABEL: string;
   HREF: string;
   ARIA_LABEL: string;
}

const FOOTER_LINKS_NAVIGATION_LINKS: FooterLinksNavigationLinks[] = [
   { LABEL: "HOME", HREF: "/", ARIA_LABEL: "Home link" },
   { LABEL: "ABOUT", HREF: "/about", ARIA_LABEL: "About link" },
   { LABEL: "PROJECTS", HREF: "/projects", ARIA_LABEL: "Projects link" },
   { LABEL: "CONTACT", HREF: "/contact", ARIA_LABEL: "Contact link" },
];

export { FOOTER_LINKS_NAVIGATION_ARIA_LABEL, FOOTER_LINKS_NAVIGATION_LINKS, FOOTER_LINKS_NAVIGATION_SPAN_TEXT };
