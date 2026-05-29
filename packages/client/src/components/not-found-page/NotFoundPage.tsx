import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif } from "@giphy/react-components";
import type { IGif } from "@giphy/js-types";
import { GIPHY_API_KEY, NOT_FOUND_PAGE_ARIA_LABEL, NOT_FOUND_PAGE_BUTTON, NOT_FOUND_PAGE_GIF_ID, NOT_FOUND_PAGE_GIF_WIDTH, NOT_FOUND_PAGE_MESSAGE } from "./data/notFoundPageData";

const giphyFetch = new GiphyFetch(GIPHY_API_KEY);

const NotFoundPage = (): React.ReactElement => {
   const navigate = useNavigate();
   const [gif, setGif] = useState<IGif | null>(null);

   useEffect(() => {
      let isMounted = true;

      giphyFetch
         .gif(NOT_FOUND_PAGE_GIF_ID)
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

   const handleGoHome = (): void => {
      navigate("/");
   };

   return (
      <div className="not-found-page flex flex-col items-center justify-center min-h-screen px-5 py-25" role="alert" aria-label={NOT_FOUND_PAGE_ARIA_LABEL}>
         {gif && (
            <div className="not-found-page__gif mb-5">
               <Gif gif={gif} width={NOT_FOUND_PAGE_GIF_WIDTH} noLink hideAttribution />
            </div>
         )}
         <p className="not-found-page__message text-center text-heading-xs font-semibold text-heading mb-5">{NOT_FOUND_PAGE_MESSAGE}</p>
         <button type="button" className="not-found-page__button font-hanken-grotesk font-bold text-page bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleGoHome}>
            {NOT_FOUND_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default NotFoundPage;
