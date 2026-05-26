import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import ContactFormTitleCompact from "./components/contact-form-title-compact/ContactFormTitleCompact";
import ContactFormTitleDesktop from "./components/contact-form-title-desktop/ContactFormTitleDesktop";

const ContactFormTitle = (): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return isDesktop ? <ContactFormTitleDesktop /> : <ContactFormTitleCompact />;
};

export default ContactFormTitle;
