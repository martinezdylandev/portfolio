import React from "react";
import { CONTACT_FORM_TITLE } from "./data/contactFormTitleData";

const ContactFormTitle = (): React.ReactElement => {
   return <h2 className="text-8xl text-center md:text-[160px] md:text-left font-hanken-grotesk font-bold mb-12 text-heading contact-form__title">{CONTACT_FORM_TITLE}</h2>;
};

export default ContactFormTitle;
