import { useMediaQuery } from "@/utils/hooks/useMediaQuery/useMediaQuery";
import React from "react";
import { ContactFormStateProps } from "../../../../data/contactFormData";
import { CONTACT_FORM_SELECTOR_ARIA_LABEL, CONTACT_FORM_SELECTOR_DEFAULT_ARIA_LABEL, CONTACT_FORM_SELECTOR_DEFAULT_TEXT, CONTACT_FORM_SELECTOR_JOB_ARIA_LABEL, CONTACT_FORM_SELECTOR_JOB_TEXT } from "../../data/contactFormSelectorData";

const ContactFormSelectorCompact = ({ activeForm, handleActiveFormUpdate }: ContactFormStateProps): React.ReactElement => {
   const is640OrMore = useMediaQuery("(min-width: 640px)");

   return (
      <div data-tabs-headline className="contact-form__selector relative grid grid-cols-2 z-1 cursor-pointer" role="tablist" aria-label={CONTACT_FORM_SELECTOR_ARIA_LABEL}>
         <button className="contact-form__selector-first flex items-center justify-center transition-all cursor-pointer duration-300 ease-in-out" id="contact-form-default-selector" role="tab" aria-selected={activeForm === "defaultForm"} aria-label={CONTACT_FORM_SELECTOR_DEFAULT_ARIA_LABEL} aria-disabled={activeForm === "defaultForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("defaultForm")}>
               <h2 data-is-active={`${activeForm === "defaultForm"}`} className={`contact-form__selector-first-text font-hanken-grotesk  ${is640OrMore ? "text-[clamp(var(--font-size-heading-xs),1.75rem,var(--font-size-heading-lg))]" : "text-[clamp(var(--font-size-heading-xs),3vw,var(--font-size-heading-lg))]"} px-3 py-6 text-left font-bold transition-all duration-300 ease-in-out text-heading`}>
               {CONTACT_FORM_SELECTOR_DEFAULT_TEXT}
            </h2>
         </button>
         <button className="contact-form__selector-second flex items-center justify-center transition-all cursor-pointer duration-300 ease-in-out" id="contact-form-job-selector" role="tab" aria-selected={activeForm === "jobForm"} aria-label={CONTACT_FORM_SELECTOR_JOB_ARIA_LABEL} aria-disabled={activeForm === "jobForm" ? "false" : "true"} onClick={() => handleActiveFormUpdate("jobForm")}>
               <h2 data-is-active={`${activeForm === "jobForm"}`} className={`contact-form__selector-second-text font-hanken-grotesk ${is640OrMore ? "text-[clamp(var(--font-size-heading-xs),1.75rem,var(--font-size-heading-lg))]" : "text-[clamp(var(--font-size-heading-xs),3vw,var(--font-size-heading-lg))]"} px-3 py-6 text-left font-bold transition-all duration-300 ease-in-out text-heading`}>
               {CONTACT_FORM_SELECTOR_JOB_TEXT}
            </h2>
         </button>
      </div>
   );
};

export default ContactFormSelectorCompact;
