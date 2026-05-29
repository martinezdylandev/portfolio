import { GiphyFetch } from "@giphy/js-fetch-api";
import type { IGif } from "@giphy/js-types";
import { Gif } from "@giphy/react-components";
import React, { useEffect, useState } from "react";
import { CLIENT_ERROR_PAGE_ARIA_LABEL, CLIENT_ERROR_PAGE_BUTTON, CLIENT_ERROR_PAGE_GIF_ID, CLIENT_ERROR_PAGE_GIF_WIDTH, CLIENT_ERROR_PAGE_MESSAGE, GIPHY_API_KEY } from "./data/clientErrorPageData";
import { handleReload } from "./utils/clientErrorPageUtils";

const giphyFetch = new GiphyFetch(GIPHY_API_KEY);

const ClientErrorPage = (): React.ReactElement => {
   const [gif, setGif] = useState<IGif | null>(null);

   useEffect(() => {
      let isMounted = true;

      giphyFetch
         .gif(CLIENT_ERROR_PAGE_GIF_ID)
         .then(({ data }) => {
            if (isMounted) setGif(data);
         })
         .catch((error: unknown) => {
            console.error("Failed to load Giphy GIF:", error);
         });

      return () => {
         isMounted = false;
      };
   }, []);

   return (
      <div className="client-error-page flex flex-col items-center justify-center min-h-screen px-5 py-25" role="alert" aria-label={CLIENT_ERROR_PAGE_ARIA_LABEL}>
         {gif && (
            <div className="client-error-page__gif mb-5">
               <Gif gif={gif} width={CLIENT_ERROR_PAGE_GIF_WIDTH} noLink hideAttribution />
            </div>
         )}
         <p className="client-error-page__message text-center text-xl font-semibold text-heading mb-5">{CLIENT_ERROR_PAGE_MESSAGE}</p>
         <button type="button" className="client-error-page__retry font-hanken-grotesk font-bold text-section bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleReload}>
            {CLIENT_ERROR_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default ClientErrorPage;
