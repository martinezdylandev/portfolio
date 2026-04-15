import { Resend } from "resend";
import { escapeHtml } from "./escapeHtml.js";

export type ContactFormType = "default" | "job";

export interface ContactEmailData {
   formType: ContactFormType;
   name: string;
   email: string;
   phone: string;
   message?: string;
}

export interface ContactEmailPayload {
   from: string;
   to: string[];
   replyTo: string;
   subject: string;
   html: string;
}

export const buildContactEmailPayload = (contactData: ContactEmailData, fromEmail: string, recipientEmail: string): ContactEmailPayload => {
   const normalizedMessage = typeof contactData.message === "string" && contactData.message.trim().length > 0 ? contactData.message.trim() : "No message provided";
   const escapedName = escapeHtml(contactData.name.trim());
   const escapedEmail = escapeHtml(contactData.email.trim().toLowerCase());
   const escapedPhone = escapeHtml(contactData.phone.trim());
   const escapedMessage = escapeHtml(normalizedMessage);
   const formTypeLabel = contactData.formType === "job" ? "Job Form" : "General Form";
   const subject = `[Dylan's site] ${formTypeLabel} submission from ${contactData.name.trim()}`;

   return {
      from: fromEmail,
      to: [recipientEmail],
      replyTo: contactData.email.trim(),
      subject,
      html: `
         <h2>A new ${formTypeLabel} submission</h2>
         <p>You received this email because someone submitted your portfolio contact form.</p>
         <ul>
            <li><strong>Form type:</strong> ${escapeHtml(contactData.formType)}</li>
            <li><strong>Name:</strong> ${escapedName}</li>
            <li><strong>Email:</strong> ${escapedEmail}</li>
            <li><strong>Phone:</strong> ${escapedPhone}</li>
            <li><strong>Message:</strong> ${escapedMessage}</li>
         </ul>
      `,
   };
};

export const sendContactEmail = async (resendApiKey: string, emailPayload: ContactEmailPayload): Promise<{ isSent: boolean; error?: unknown }> => {
   const resend = new Resend(resendApiKey);
   const { error } = await resend.emails.send(emailPayload);

   if (error) {
      return { isSent: false, error };
   }

   return { isSent: true };
};
