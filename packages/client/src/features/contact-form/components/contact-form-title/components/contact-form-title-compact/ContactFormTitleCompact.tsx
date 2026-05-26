import React from "react";
import { CONTACT_FORM_TITLE } from "../../data/contactFormTitleData";

const ContactFormTitleCompact = (): React.ReactElement => {
   return <h2 className="contact-form__title font-hanken-grotesk font-bold mb-12 text-center text-heading text-[clamp(var(--font-size-display-sm),12vw,var(--font-size-display-xl))]">{CONTACT_FORM_TITLE}</h2>;
};

export default ContactFormTitleCompact;
