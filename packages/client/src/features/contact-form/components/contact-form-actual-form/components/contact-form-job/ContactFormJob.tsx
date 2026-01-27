import React from "react";
import ContactFormJobCompact from "./components/contact-form-job-compact/ContactFormJobCompact";
import ContactFormJobDesktop from "./components/contact-form-job-desktop/ContactFormJobDesktop";
import type { ContactFormJobFormProps } from "./data/contactFormJobData";

const ContactFormJob = ({ activeForm }: ContactFormJobFormProps): React.ReactElement => {
   return (
      <div className="contact-form__actual-form-job">
         <ContactFormJobDesktop activeForm={activeForm} />
         <ContactFormJobCompact activeForm={activeForm} />
      </div>
   );
};

export default ContactFormJob;
