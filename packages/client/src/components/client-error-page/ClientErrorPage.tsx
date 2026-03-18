import React from "react";
import { CLIENT_ERROR_PAGE_ARIA_LABEL, CLIENT_ERROR_PAGE_BUTTON, CLIENT_ERROR_PAGE_MESSAGE } from "./data/clientErrorPageData";
import { handleReload } from "./utils/clientErrorPageUtils";

const ClientErrorPage = (): React.ReactElement => {
   return (
      <div className="client-error-page flex flex-col items-center justify-center min-h-[50vh] px-5 py-25" role="alert" aria-label={CLIENT_ERROR_PAGE_ARIA_LABEL}>
         <p className="client-error-page__message text-center text-xl font-semibold text-heading mb-5">{CLIENT_ERROR_PAGE_MESSAGE}</p>
         <button type="button" className="client-error-page__retry font-hanken-grotesk font-bold text-section bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleReload}>
            {CLIENT_ERROR_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default ClientErrorPage;
