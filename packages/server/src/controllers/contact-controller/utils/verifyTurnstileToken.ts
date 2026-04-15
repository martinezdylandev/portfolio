interface TurnstileVerifyResponse {
   success?: boolean;
   "error-codes"?: string[];
}

export interface VerifyTurnstileTokenResult {
   isServiceAvailable: boolean;
   isTokenValid: boolean;
}

export const verifyTurnstileToken = async (secretKey: string, token: string): Promise<VerifyTurnstileTokenResult> => {
   const verifyResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
         secret: secretKey,
         response: token,
      }),
   });

   if (!verifyResponse.ok) {
      return { isServiceAvailable: false, isTokenValid: false };
   }

   const verifyData = (await verifyResponse.json()) as TurnstileVerifyResponse;

   return {
      isServiceAvailable: true,
      isTokenValid: Boolean(verifyData.success),
   };
};
