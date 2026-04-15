import React from "react";
import { ActiveFormProps } from "../../../../data/contactFormData";
import { useMediaQuery } from "../../../../../../utils/hooks/useMediaQuery/useMediaQuery";
import type { TurnstileFormProps } from "../../data/contactFormActualFormData";
import ContactFormDefaultCompact from "./components/contact-form-default-compact/ContactFormDefaultCompact";
import ContactFormDefaultDesktop from "./components/contact-form-default-desktop/ContactFormDefaultDesktop";

const ContactFormDefault = ({ activeForm, siteKey, turnstileToken, setTurnstileToken }: ActiveFormProps & TurnstileFormProps): React.ReactElement => {
   const isDesktop = useMediaQuery("(min-width: 768px)");

   return isDesktop ? <ContactFormDefaultDesktop activeForm={activeForm} siteKey={siteKey} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} /> : <ContactFormDefaultCompact activeForm={activeForm} siteKey={siteKey} turnstileToken={turnstileToken} setTurnstileToken={setTurnstileToken} />;
};

export default ContactFormDefault;
