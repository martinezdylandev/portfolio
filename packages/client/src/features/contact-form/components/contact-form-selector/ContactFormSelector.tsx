import React from "react";
import { ContactFormStateProps } from "../../data/contactFormData";
import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_DEFAULT_ARIA_LABEL, CONTACT_FORM_SELECTOR_DEFAULT_TEXT, CONTACT_FORM_SELECTOR_JOB_ARIA_LABEL, CONTACT_FORM_SELECTOR_JOB_TEXT } from "./data/contactFormSelectorData";
import "./styles/contact-form-selector-styles.css";

const ContactFormSelector = ({ activeForm, handleActiveFormUpdate }: ContactFormStateProps): React.ReactElement => {
   return (
      <div data-tabs-headline className="contact-form__selector relative grid grid-cols-2 z-1 cursor-pointer" role="tablist" aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <button className="contact-form__selector-first flex items-center justify-center md:items-start md:justify-start transition-all cursor-pointer duration-500 ease-in-out" id="contact_form__default-selector" role="tab" aria-selected={activeForm === "defaultForm" ? true : false} aria-label={CONTACT_FORM_SELECTOR_DEFAULT_ARIA_LABEL} aria-disabled={activeForm === "defaultForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("defaultForm")}>
            <h2 data-is-active={`${activeForm === "defaultForm"}`} className="contact-form__selector-first-text font-hanken-grotesk text-xl md:text-4xl px-3 py-6 md:p-12 text-left font-bold transition-all duration-500 ease-in-out text-heading">
               {CONTACT_FORM_SELECTOR_DEFAULT_TEXT}
            </h2>
         </button>
         <button className="contact-form__selector-second flex items-center justify-center md:items-start md:justify-start transition-all cursor-pointer duration-500 ease-in-out" id="contact_form__job-selector" role="tab" aria-selected={activeForm === "jobForm" ? true : false} aria-label={CONTACT_FORM_SELECTOR_JOB_ARIA_LABEL} aria-disabled={activeForm === "jobForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("jobForm")}>
            <h2 data-is-active={`${activeForm === "jobForm"}`} className="contact-form__selector-second-text font-hanken-grotesk text-xl md:text-4xl px-3 py-6 md:p-12 text-left font-bold transition-all duration-500 ease-in-out text-heading">
               {CONTACT_FORM_SELECTOR_JOB_TEXT}
            </h2>
         </button>
      </div>
   );
};

export default ContactFormSelector;
