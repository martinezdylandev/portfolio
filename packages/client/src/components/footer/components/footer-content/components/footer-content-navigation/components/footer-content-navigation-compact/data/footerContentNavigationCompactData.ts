const NAV_ARIA_LABEL_TEXT: string = "Footer navigation compact";
const BUTTON_ARIA_LABEL: string = "Open footer navigation menu";
const ICON_ALT_LABEL: string = "Footer navigation menu icon";

const LIST_ARIA_LABEL_TEXT: string = "Footer navigation list";

interface FooterCompactNavigationLinks {
   LABEL: string;
   HREF: string;
   ARIA_LABEL: string;
}

const FOOTER_COMPACT_NAVIGATION_LINKS: FooterCompactNavigationLinks[] = [
   { LABEL: "HOME", HREF: "/", ARIA_LABEL: "Home link" },
   { LABEL: "ABOUT", HREF: "/about", ARIA_LABEL: "About link" },
   { LABEL: "PROJECTS", HREF: "/projects", ARIA_LABEL: "Projects link" },
   { LABEL: "CONTACT", HREF: "/contact", ARIA_LABEL: "Contact link" },
];

export { BUTTON_ARIA_LABEL, FOOTER_COMPACT_NAVIGATION_LINKS, ICON_ALT_LABEL, LIST_ARIA_LABEL_TEXT, NAV_ARIA_LABEL_TEXT };
