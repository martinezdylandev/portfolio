import React, { useState } from "react";
import { ActiveFormProps } from "../../data/contactFormData";
import ContactFormDefault from "./components/contact-form-default/ContactFormDefault";
import ContactFormJob from "./components/contact-form-job/ContactFormJob";
import { CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL } from "./data/contactFormActualFormData";
import "./styles/contact-form-actual-form-styles.css";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string;

const ContactFormActualForm = ({ activeForm }: ActiveFormProps): React.ReactElement => {
   const [turnstileToken, setTurnstileToken] = useState<string>("");

   return (
      <div className="contact-form__actual-form-wrapper px-6 md:px-12" aria-label={CONTACT_FORM_ACTUAL_FORM_WRAPPER_ARIA_LABEL}>
         {activeForm === "defaultForm" ? <ContactFormDefault activeForm={activeForm} siteKey={TURNSTILE_SITE_KEY} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} /> : <ContactFormJob activeForm={activeForm} siteKey={TURNSTILE_SITE_KEY} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} />}
      </div>
   );
};

export default ContactFormActualForm;
