import React from "react";
import { ActiveFormProps } from "../../../../data/contactFormData";
import ContactFormDefaultCompact from "./components/contact-form-default-compact/ContactFormDefaultCompact";
import ContactFormDefaultDesktop from "./components/contact-form-default-desktop/ContactFormDefaultDesktop";

const ContactFormDefault = ({ activeForm }: ActiveFormProps): React.ReactElement => {
   return (
      <div className="contact-form__actual-form-default">
         <ContactFormDefaultDesktop activeForm={activeForm} />
         <ContactFormDefaultCompact activeForm={activeForm} />
      </div>
   );
};

export default ContactFormDefault;
