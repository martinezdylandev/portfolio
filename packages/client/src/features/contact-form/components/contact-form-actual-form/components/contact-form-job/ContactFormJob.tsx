import React from "react";
import { ActiveFormProps } from "../../../../data/contactFormData";
import { useMediaQuery } from "../../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import type { TurnstileFormProps } from "../../data/contactFormActualFormData";
import ContactFormJobCompact from "./components/contact-form-job-compact/ContactFormJobCompact";
import ContactFormJobDesktop from "./components/contact-form-job-desktop/ContactFormJobDesktop";

const ContactFormJob = ({ activeForm, siteKey, turnstileToken, setTurnstileToken }: ActiveFormProps & TurnstileFormProps): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return isDesktop ? <ContactFormJobDesktop activeForm={activeForm} siteKey={siteKey} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} /> : <ContactFormJobCompact activeForm={activeForm} siteKey={siteKey} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} />;
};

export default ContactFormJob;
