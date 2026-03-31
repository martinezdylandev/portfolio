import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import ContactPageAccomplishmentsCompact from "./components/contact-page-accomplishments-compact/ContactPageAccomplishmentsCompact";
import ContactPageAccomplishmentsDesktop from "./components/contact-page-accomplishments-desktop/ContactPageAccomplishmentsDesktop";

const ContactPageAccomplishments = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <ContactPageAccomplishmentsDesktop /> : <ContactPageAccomplishmentsCompact />;
};

export default ContactPageAccomplishments;
