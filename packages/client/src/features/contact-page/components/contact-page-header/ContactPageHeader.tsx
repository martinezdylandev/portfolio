import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import ContactPageHeaderCompact from "./components/contact-page-header-compact/ContactPageHeaderCompact";
import ContactPageHeaderDesktop from "./components/contact-page-header-desktop/ContactPageHeaderDesktop";

const ContactPageHeader = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <ContactPageHeaderDesktop /> : <ContactPageHeaderCompact />;
};

export default ContactPageHeader;
