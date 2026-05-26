import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useThemeContext } from "../../../../../../../../utils/hooks/useThemeContext/useThemeContext";
import { ActiveFormProps } from "../../../../../../data/contactFormData";
import type { ContactFormFormFields, TurnstileFormProps } from "../../../../data/contactFormActualFormData";
import { CONTACT_FORM_DEFAULT_FORM_EMAIL_ARIA_LABEL, CONTACT_FORM_DEFAULT_FORM_EMAIL_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_H3_TEXT, CONTACT_FORM_DEFAULT_FORM_MESSAGE_ARIA_LABEL, CONTACT_FORM_DEFAULT_FORM_MESSAGE_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_NAME_ARIA_LABEL, CONTACT_FORM_DEFAULT_FORM_NAME_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_PHONE_ARIA_LABEL, CONTACT_FORM_DEFAULT_FORM_PHONE_PLACEHOLDER, CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_ERROR_HOVER_TEXT, CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_ERROR_TEXT, CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_SUCCESS_TEXT, CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_TEXT } from "../../../../data/contactFormActualFormData";
import ContactFormTurnstile from "../../../turnstile/ContactFormTurnstile";

const ContactFormDefaultDesktop = ({ activeForm, siteKey, turnstileToken, setTurnstileToken }: ActiveFormProps & TurnstileFormProps): React.ReactElement => {
   const { theme } = useThemeContext();

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitError, setSubmitError] = useState<string | null>(null);
   const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
   const [isHoveringButton, setIsHoveringButton] = useState(false);

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors, touchedFields },
   } = useForm<ContactFormFormFields>({
      mode: "onTouched",
   });

   const onSubmit: SubmitHandler<ContactFormFormFields> = async (data) => {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(null);

      try {
         const payload = {
            formType: "default",
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message ?? "",
            turnstileToken,
         };

         if (!turnstileToken) {
            setSubmitError("Please complete the security check");
            setIsSubmitting(false);
            return;
         }

         const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
         });

         if (!response.ok) {
            setSubmitError("Unable to submit form. Please try again");
            return;
         }

         setSubmitSuccess("The form was submitted successfully");
         reset();
      } catch {
         setSubmitError("There was a network error. Please try again");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <div className={`contact-form__actual-form-default contact-form__actual-form-default--${activeForm === "defaultForm" ? "active" : "inactive"} hidden md:block`} aria-hidden={activeForm === "defaultForm" ? "false" : "true"} aria-labelledby="contact-form-default-selector">
         <h3 className="contact-form__actual-form-default-title pt-12 text-[clamp(var(--font-size-body),2vw,var(--font-size-heading-sm))] text-justify font-hanken-grotesk font-bold whitespace-pre-line text-muted">{CONTACT_FORM_DEFAULT_FORM_H3_TEXT}</h3>
         <form className="contact-form__actual-form-default-form" data-testid="form" noValidate action="/form-sent" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__actual-form-default-fields my-12 flex flex-col gap-12 md:my-24 md:grid md:grid-cols-2 md:gap-24">
               <div className="contact-form__actual-form-default-input-field relative">
                  <label htmlFor="name-desktop" className="contact-form__actual-form-default-label"></label>
                  <input
                     className={`contact-form__actual-form-default-input text-[clamp(var(--font-size-heading-xs),2vw,var(--font-size-heading-sm))] w-9/10 md:w-full font-hanken-grotesk transition-all duration-300 font-bold ${errors.name ? "contact-form__actual-form-default-input--error" : "contact-form__actual-form-default-input--valid"}`}
                     {...register("name", {
                        required: "Name is required",
                        validate: {
                           onlyValidNameChars: (value) => /^[a-zA-Z\s'-]+$/.test(value) || "Name must contain only letters, spaces, hyphens and apostrophes",
                           minLength: (value) => value.length >= 2 || "Name must be at least 2 characters long",
                           maxLength: (value) => value.length <= 50 || "Name has a maximum of 50 characters",
                        },
                     })}
                     type="text"
                     placeholder={CONTACT_FORM_DEFAULT_FORM_NAME_PLACEHOLDER}
                     aria-describedby="name-desktop-error-message"
                     aria-invalid={`${errors.name ? "true" : "false"}`}
                     aria-label={CONTACT_FORM_DEFAULT_FORM_NAME_ARIA_LABEL}
                     id="name-desktop"
                  />
                  {errors.name && (
                     <>
                        <span id="name-desktop-error-message" className="contact-form__actual-form-default-error-message absolute top-10 left-0 text-status-error">
                           {errors.name.message}
                        </span>
                        <img src={theme === "light" ? "/form/error_icon_light_mode.svg" : "/form/error_icon_dark_mode.svg"} alt="Name error icon" className="contact-form__actual-form-default-error-icon absolute bottom-1/2 left-9/10  md:left-full"></img>
                     </>
                  )}
                  {!errors.name && touchedFields.name && (
                     <>
                        <img src={theme === "light" ? "/form/success_icon_light_mode.svg" : "/form/success_icon_dark_mode.svg"} className="contact-form__actual-form-default-success-icon absolute bottom-1/2 left-9/10 md:left-full" alt="Name success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-default-input-field relative">
                  <label htmlFor="phone-desktop" className="contact-form__actual-form-default-label"></label>
                  <input
                     className={`contact-form__actual-form-default-input text-[clamp(var(--font-size-heading-xs),2vw,var(--font-size-heading-sm))] font-hanken-grotesk w-9/10 md:w-full transition-all duration-300 font-bold ${errors.phone ? "contact-form__actual-form-default-input--error" : "contact-form__actual-form-default-input--valid"}`}
                     {...register("phone", {
                        required: "Phone number is required",
                        validate: {
                           format: (value) => /^[+\d\s]*$/.test(value) || `Phone number must contain only numbers, spaces, and "+" characters. Example: +23 3846 3823`,
                           /*TODO: ADD INTERNATIONAL VALID PHONE VALIDATION */
                           minLength: (value) => value.length >= 6 || "Phone number must be at least 6 characters long",
                           maxLength: (value) => value.length <= 25 || "Phone number has a maximum of 25 characters",
                        },
                     })}
                     type="tel"
                     placeholder={CONTACT_FORM_DEFAULT_FORM_PHONE_PLACEHOLDER}
                     aria-describedby="phone-desktop-error-message"
                     aria-invalid={`${errors.phone ? "true" : "false"}`}
                     aria-label={CONTACT_FORM_DEFAULT_FORM_PHONE_ARIA_LABEL}
                     id="phone-desktop"
                  />
                  {errors.phone && (
                     <>
                        <span id="phone-desktop-error-message" className="contact-form__actual-form-default-error-message absolute top-10 left-0 text-status-error">
                           {errors.phone.message}
                        </span>
                        <img src={theme === "light" ? "/form/error_icon_light_mode.svg" : "/form/error_icon_dark_mode.svg"} alt="Phone error icon" className="contact-form__actual-form-default-error-icon absolute bottom-1/2 left-9/10  md:left-full"></img>
                     </>
                  )}
                  {!errors.phone && touchedFields.phone && (
                     <>
                        <img src={theme === "light" ? "/form/success_icon_light_mode.svg" : "/form/success_icon_dark_mode.svg"} className="contact-form__actual-form-default-success-icon absolute bottom-1/2 left-9/10 md:left-full" alt="Phone success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-default-input-field relative">
                  <label htmlFor="email-desktop" className="contact-form__actual-form-default-label"></label>
                  <input
                     className={`contact-form__actual-form-default-input text-[clamp(var(--font-size-heading-xs),2vw,var(--font-size-heading-sm))] font-hanken-grotesk w-9/10 md:w-full transition-all duration-300 font-bold ${errors.email ? "contact-form__actual-form-default-input--error" : "contact-form__actual-form-default-input--valid"}`}
                     {...register("email", {
                        required: "Email is required",
                        validate: {
                           format: (value) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || `Enter a valid email address format. Example: user@example.es`,
                        },
                     })}
                     type="email"
                     placeholder={CONTACT_FORM_DEFAULT_FORM_EMAIL_PLACEHOLDER}
                     aria-describedby="email-desktop-error-message"
                     aria-invalid={`${errors.email ? "true" : "false"}`}
                     aria-label={CONTACT_FORM_DEFAULT_FORM_EMAIL_ARIA_LABEL}
                     id="email-desktop"
                  />
                  {errors.email && (
                     <>
                        <span id="email-desktop-error-message" className="contact-form__actual-form-default-error-message absolute top-10 left-0 text-status-error">
                           {errors.email.message}
                        </span>
                        <img src={theme === "light" ? "/form/error_icon_light_mode.svg" : "/form/error_icon_dark_mode.svg"} alt="Email error icon" className="contact-form__actual-form-default-error-icon absolute bottom-1/2 left-9/10  md:left-full"></img>
                     </>
                  )}
                  {!errors.email && touchedFields.email && (
                     <>
                        <img src={theme === "light" ? "/form/success_icon_light_mode.svg" : "/form/success_icon_dark_mode.svg"} className="contact-form__actual-form-default-success-icon absolute bottom-1/2 left-9/10 md:left-full" alt="Email success icon" />
                     </>
                  )}
               </div>
               <div className="contact-form__actual-form-default-input-field relative">
                  <label htmlFor="message-desktop" className="contact-form__actual-form-default-label"></label>
                  <textarea
                     className={`contact-form__actual-form-default-textarea text-[clamp(var(--font-size-heading-xs),2vw,var(--font-size-heading-sm))] font-hanken-grotesk w-9/10 md:w-full transition-all duration-300 resize-none max-h-9 font-bold ${errors.message ? "contact-form__actual-form-default-input--error" : ""}`}
                     placeholder={CONTACT_FORM_DEFAULT_FORM_MESSAGE_PLACEHOLDER}
                     aria-label={CONTACT_FORM_DEFAULT_FORM_MESSAGE_ARIA_LABEL}
                     id="message-desktop"
                     aria-describedby="message-desktop-error-message"
                     aria-invalid={`${errors.message ? "true" : "false"}`}
                     {...register("message", {
                        maxLength: {
                           value: 2000,
                           message: "Message has a maximum of 2000 characters",
                        },
                     })}
                  />
                  {errors.message && (
                     <span id="message-desktop-error-message" className="contact-form__actual-form-default-error-message absolute top-10 left-0 text-status-error">
                        {errors.message.message}
                     </span>
                  )}
               </div>
            </div>
            <ContactFormTurnstile siteKey={siteKey} onTokenChange={setTurnstileToken} onExpired={() => setTurnstileToken("")} />
            <div className="contact-form__actual-form-default-send-button flex flex-col items-center gap-4 pb-12">
               <button className={`contact-form__actual-form-default-submit-button text-heading-sm font-hanken-grotesk font-bold p-2.5 border-0 cursor-pointer rounded-full w-1/5 disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden ${submitError || submitSuccess || isSubmitting ? "" : "hover:w-1/4"} ${submitError ? "contact-form__actual-form-default-submit-button--error" : submitSuccess ? "contact-form__actual-form-default-submit-button--success" : ""}`} type="submit" disabled={isSubmitting || !!submitSuccess} aria-busy={isSubmitting ? "true" : "false"} onMouseEnter={() => setIsHoveringButton(true)} onMouseLeave={() => setIsHoveringButton(false)}>
                  <AnimatePresence mode="wait" initial={false}>
                     <motion.span className={` ${submitError ? (isHoveringButton ? "error-is-hovering" : "error") : ""} `} key={isSubmitting ? "sending" : submitError ? (isHoveringButton ? "error-hover" : "error") : submitSuccess ? "success" : "idle"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                        {isSubmitting ? "SENDING..." : submitError ? (isHoveringButton ? CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_ERROR_HOVER_TEXT : CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_ERROR_TEXT) : submitSuccess ? CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_SUCCESS_TEXT : CONTACT_FORM_DEFAULT_FORM_SEND_BUTTON_TEXT}
                     </motion.span>
                  </AnimatePresence>
               </button>
               {submitError && (
                  <p role="alert" className="contact-form__actual-form-default-error-message text-status-error text-center">
                     {submitError}
                  </p>
               )}
               {submitSuccess && (
                  <p role="status" className="contact-form__actual-form-default-success-message text-muted text-center">
                     {submitSuccess}
                  </p>
               )}
            </div>
         </form>
      </div>
   );
};

export default ContactFormDefaultDesktop;
