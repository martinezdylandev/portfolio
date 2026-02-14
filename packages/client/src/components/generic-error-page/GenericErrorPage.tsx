import React from "react";
import { GENERIC_ERROR_PAGE_ARIA_LABEL, GENERIC_ERROR_PAGE_BUTTON, GENERIC_ERROR_PAGE_MESSAGE } from "./data/genericErrorPageData";

const GenericErrorPage = (): React.ReactElement => {
   const handleReload = (): void => {
      window.location.reload();
   };

   return (
      <div className="generic-error-page flex flex-col items-center justify-center min-h-[50vh] px-5 py-25" role="alert" aria-label={GENERIC_ERROR_PAGE_ARIA_LABEL}>
         <p className="generic-error-page__message text-center text-xl font-semibold text-heading mb-5">{GENERIC_ERROR_PAGE_MESSAGE}</p>
         <button type="button" className="generic-error-page__retry font-hanken-grotesk font-bold text-section bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleReload}>
            {GENERIC_ERROR_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default GenericErrorPage;
