import { useThemeContext } from "@/utils/hooks/useThemeContext/useThemeContext";
import { Turnstile } from "@marsidev/react-turnstile";
import React from "react";

interface ContactFormTurnstileProps {
   siteKey: string;
   onTokenChange: (token: string) => void;
   onExpired: () => void;
}

const ContactFormTurnstile = ({ siteKey, onTokenChange, onExpired }: ContactFormTurnstileProps): React.ReactElement => {
   const { theme } = useThemeContext();

   return (
      <div className="contact-form__turnstile flex justify-center pb-4">
         <Turnstile siteKey={siteKey} onSuccess={(token) => onTokenChange(token)} onExpire={onExpired} onError={onExpired} options={{ theme: theme === "light" ? "light" : "dark" }} />
      </div>
   );
};

export default ContactFormTurnstile;
