import type { Request, Response } from "express";
import type { ResponseShape } from "./utils/contactControllerUtils.js";
import { CONTACT_RESPONSE_CODES, isNonEmptyString, isValidEmail, isValidMessage, isValidName, isValidPhone } from "./utils/contactControllerUtils.js";
import type { ContactFormType } from "./utils/contactEmailService.js";
import { buildContactEmailPayload, sendContactEmail } from "./utils/contactEmailService.js";
import { verifyTurnstileToken } from "./utils/verifyTurnstileToken.js";

export const submitContact = async (req: Request, res: Response<ResponseShape>) => {
   if (!req.is("application/json")) {
      return res.status(415).json({ success: false, message: "Unsupported Media Type", code: CONTACT_RESPONSE_CODES.UNSUPPORTED_MEDIA_TYPE });
   }

   const contactData = req.body;

   if (contactData == null || typeof contactData !== "object" || Array.isArray(contactData)) {
      return res.status(400).json({ success: false, message: "Invalid body", code: CONTACT_RESPONSE_CODES.INVALID_BODY });
   }

   if (Object.keys(contactData).length === 0) {
      return res.status(400).json({ success: false, message: "Body is empty", code: CONTACT_RESPONSE_CODES.BODY_EMPTY });
   }

   const { formType, name, email, phone, message, turnstileToken } = contactData as Record<string, unknown>;

   if (formType !== "default" && formType !== "job") {
      return res.status(400).json({ success: false, message: "Invalid formType", code: CONTACT_RESPONSE_CODES.INVALID_FORM_TYPE });
   }

   if (!isNonEmptyString(name)) {
      return res.status(400).json({ success: false, message: "Name is required", code: CONTACT_RESPONSE_CODES.NAME_REQUIRED });
   }

   if (!isValidName(name)) {
      return res.status(400).json({ success: false, message: "Name must contain only letters, spaces, hyphens and apostrophes, and be between 2 and 50 characters", code: CONTACT_RESPONSE_CODES.NAME_INVALID_FORMAT });
   }

   if (!isNonEmptyString(email)) {
      return res.status(400).json({ success: false, message: "Email is required", code: CONTACT_RESPONSE_CODES.EMAIL_REQUIRED });
   }

   if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, message: "Enter a valid email address", code: CONTACT_RESPONSE_CODES.EMAIL_INVALID_FORMAT });
   }

   if (!isNonEmptyString(phone)) {
      return res.status(400).json({ success: false, message: "Phone is required", code: CONTACT_RESPONSE_CODES.PHONE_REQUIRED });
   }

   if (!isValidPhone(phone)) {
      return res.status(400).json({ success: false, message: `Phone must contain only numbers, spaces and "+", and be between 6 and 25 characters`, code: CONTACT_RESPONSE_CODES.PHONE_INVALID_FORMAT });
   }

   if (message != null && typeof message !== "string") {
      return res.status(400).json({ success: false, message: "Invalid message", code: CONTACT_RESPONSE_CODES.INVALID_MESSAGE });
   }

   if (typeof message === "string" && !isValidMessage(message)) {
      return res.status(400).json({ success: false, message: "Message must be 2000 characters or fewer", code: CONTACT_RESPONSE_CODES.MESSAGE_TOO_LONG });
   }

   if (!isNonEmptyString(turnstileToken)) {
      return res.status(400).json({ success: false, message: "Security token is required", code: CONTACT_RESPONSE_CODES.TURNSTILE_TOKEN_REQUIRED });
   }

   const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY;

   if (!isNonEmptyString(turnstileSecretKey)) {
      return res.status(500).json({ success: false, message: "Server security configuration is missing", code: CONTACT_RESPONSE_CODES.TURNSTILE_SECRET_MISSING });
   }

   try {
      const turnstileVerification = await verifyTurnstileToken(turnstileSecretKey, turnstileToken);

      if (!turnstileVerification.isServiceAvailable) {
         return res.status(502).json({
            success: false,
            message: "Security verification service unavailable",
            code: CONTACT_RESPONSE_CODES.TURNSTILE_VERIFY_FAILED,
         });
      }

      if (!turnstileVerification.isTokenValid) {
         return res.status(403).json({
            success: false,
            message: "Security verification failed. Please retry the captcha",
            code: CONTACT_RESPONSE_CODES.TURNSTILE_INVALID,
         });
      }

      const resendApiKey = process.env.RESEND_API_KEY;

      if (!isNonEmptyString(resendApiKey)) {
         return res.status(500).json({
            success: false,
            message: "Email service configuration is missing",
            code: CONTACT_RESPONSE_CODES.RESEND_API_KEY_MISSING,
         });
      }

      const recipientEmail = "portfolio@martinezdylan.dev";
      const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Dylan's Site <onboarding@resend.dev>";
      const emailPayload = buildContactEmailPayload(
         {
            formType: formType as ContactFormType,
            name,
            email,
            phone,
            message: typeof message === "string" ? message : undefined,
         },
         fromEmail,
         recipientEmail,
      );
      const emailSendResult = await sendContactEmail(resendApiKey, emailPayload);

      if (!emailSendResult.isSent) {
         console.error("Resend failed to send email:", emailSendResult.error);
         return res.status(502).json({
            success: false,
            message: "Email could not be sent. Please try again",
            code: CONTACT_RESPONSE_CODES.EMAIL_SEND_FAILED,
         });
      }

      return res.status(200).json({ success: true, message: "Contact submitted successfully", code: CONTACT_RESPONSE_CODES.CONTACT_SUBMITTED });
   } catch (error) {
      console.error("Error submitting contact:", error);
      return res.status(500).json({
         success: false,
         message: "Internal server error",
         code: CONTACT_RESPONSE_CODES.INTERNAL_SERVER_ERROR,
      });
   }
};
