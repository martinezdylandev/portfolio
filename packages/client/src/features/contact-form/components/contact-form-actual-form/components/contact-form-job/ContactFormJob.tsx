import React from "react";
import { ActiveFormProps } from "../../../../data/contactFormData";
import ContactFormJobCompact from "./components/contact-form-job-compact/ContactFormJobCompact";
import ContactFormJobDesktop from "./components/contact-form-job-desktop/ContactFormJobDesktop";

const ContactFormJob = ({ activeForm }: ActiveFormProps): React.ReactElement => {
   return (
      <div className="contact-form__actual-form-job">
         <ContactFormJobDesktop activeForm={activeForm} />
         <ContactFormJobCompact activeForm={activeForm} />
      </div>
   );
};

export default ContactFormJob;
