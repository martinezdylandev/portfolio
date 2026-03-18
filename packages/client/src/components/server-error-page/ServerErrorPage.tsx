import React from "react";
import { SERVER_ERROR_PAGE_ARIA_LABEL, SERVER_ERROR_PAGE_BUTTON, SERVER_ERROR_PAGE_MESSAGE } from "./data/serverErrorPageData";
import { handleReload } from "./utils/serverErrorPageUtils";

const ServerErrorPage = (): React.ReactElement => {
   return (
      <div className="server-error-page flex flex-col items-center justify-center min-h-[50vh] px-5 py-25" role="alert" aria-label={SERVER_ERROR_PAGE_ARIA_LABEL}>
         <p className="server-error-page__message text-center text-xl font-semibold text-heading mb-5">{SERVER_ERROR_PAGE_MESSAGE}</p>
         <button type="button" className="server-error-page__retry font-hanken-grotesk font-bold text-section bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleReload}>
            {SERVER_ERROR_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default ServerErrorPage;
