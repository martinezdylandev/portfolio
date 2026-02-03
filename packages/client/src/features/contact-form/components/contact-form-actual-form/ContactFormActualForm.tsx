import React from "react";
import { ActiveFormProps } from "../../data/contactFormData";
import ContactFormDefault from "./components/contact-form-default/ContactFormDefault";
import ContactFormJob from "./components/contact-form-job/ContactFormJob";
import { CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL } from "./data/contactFormActualFormData";
import "./styles/contact-form-actual-form-styles.css";

const ContactFormActualForm = ({ activeForm }: ActiveFormProps): React.ReactElement => {
   return (
      <div className="contact-form__actual-form-wrapper px-6 md:px-12" aria-label={CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL}>
         {activeForm === "defaultForm" ? <ContactFormDefault activeForm={activeForm} /> : <ContactFormJob activeForm={activeForm} />}
      </div>
   );
};

export default ContactFormActualForm;
