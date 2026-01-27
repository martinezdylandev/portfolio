import React from "react";
import ContactFormDefaultCompact from "./components/contact-form-default-compact/ContactFormDefaultCompact";
import ContactFormDefaultDesktop from "./components/contact-form-default-desktop/ContactFormDefaultDesktop";
import type { ContactFormDefaultFormProps } from "./data/contactFormDefaultData";

const ContactFormDefault = ({ activeForm }: ContactFormDefaultFormProps): React.ReactElement => {
   return (
      <div className="contact-form__actual-form-default">
         <ContactFormDefaultDesktop activeForm={activeForm} />
         <ContactFormDefaultCompact activeForm={activeForm} />
      </div>
   );
};

export default ContactFormDefault;
