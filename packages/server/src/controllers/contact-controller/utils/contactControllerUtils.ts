export const CONTACT_RESPONSE_CODES = {
   UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
   INVALID_BODY: "INVALID_BODY",
   BODY_EMPTY: "BODY_EMPTY",
   INVALID_FORM_TYPE: "INVALID_FORM_TYPE",
   NAME_REQUIRED: "NAME_REQUIRED",
   NAME_INVALID_FORMAT: "NAME_INVALID_FORMAT",
   EMAIL_REQUIRED: "EMAIL_REQUIRED",
   EMAIL_INVALID_FORMAT: "EMAIL_INVALID_FORMAT",
   PHONE_REQUIRED: "PHONE_REQUIRED",
   PHONE_INVALID_FORMAT: "PHONE_INVALID_FORMAT",
   INVALID_MESSAGE: "INVALID_MESSAGE",
   MESSAGE_TOO_LONG: "MESSAGE_TOO_LONG",
   TURNSTILE_TOKEN_REQUIRED: "TURNSTILE_TOKEN_REQUIRED",
   CONTACT_SUBMITTED: "CONTACT_SUBMITTED",
   INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
   TURNSTILE_SECRET_MISSING: "TURNSTILE_SECRET_MISSING",
   TURNSTILE_VERIFY_FAILED: "TURNSTILE_VERIFY_FAILED",
   TURNSTILE_INVALID: "TURNSTILE_INVALID",
   RESEND_API_KEY_MISSING: "RESEND_API_KEY_MISSING",
   EMAIL_SEND_FAILED: "EMAIL_SEND_FAILED",
   EMAIL_SENT: "EMAIL_SENT",
} as const;

export type ContactResponseCode = (typeof CONTACT_RESPONSE_CODES)[keyof typeof CONTACT_RESPONSE_CODES];

export interface ResponseShape {
   success: boolean;
   message: string;
   code: ContactResponseCode;
}

export const isNonEmptyString = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

export const isValidName = (name: string): boolean => /^[a-zA-Z\s'-]+$/.test(name) && name.length >= 2 && name.length <= 50;

export const isValidEmail = (email: string): boolean => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) && email.length <= 254;

export const isValidPhone = (phone: string): boolean => /^[+\d\s]+$/.test(phone) && phone.trim().length >= 6 && phone.length <= 25;

export const isValidMessage = (message: string): boolean => message.length <= 2000;
