import React from "react";
import { useMediaQuery } from "../../../../utils/hooks/useMediaQuery/useMediaQuery";
import { ContactFormStateProps } from "../../data/contactFormData";
import ContactFormSelectorCompact from "./components/contact-form-selector-compact/ContactFormSelectorCompact";
import ContactFormSelectorDesktop from "./components/contact-form-selector-desktop/ContactFormSelectorDesktop";
import "./styles/contact-form-selector-styles.css";

const ContactFormSelector = ({ activeForm, handleActiveFormUpdate }: ContactFormStateProps): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 1024px)");

   return isDesktop ? <ContactFormSelectorDesktop activeForm={activeForm} handleActiveFormUpdate={handleActiveFormUpdate} /> : <ContactFormSelectorCompact activeForm={activeForm} handleActiveFormUpdate={handleActiveFormUpdate} />;
};

export default ContactFormSelector;
