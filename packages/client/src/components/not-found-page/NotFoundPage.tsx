import React from "react";
import { useNavigate } from "react-router";
import { NOT_FOUND_PAGE_ARIA_LABEL, NOT_FOUND_PAGE_BUTTON, NOT_FOUND_PAGE_MESSAGE } from "./data/notFoundPageData";

const NotFoundPage = (): React.ReactElement => {
   const navigate = useNavigate();

   const handleGoHome = (): void => {
      navigate("/");
   };

   return (
      <div className="not-found-page flex flex-col items-center justify-center min-h-screen px-5 py-25" role="alert" aria-label={NOT_FOUND_PAGE_ARIA_LABEL}>
         <p className="not-found-page__message text-center text-xl font-semibold text-heading mb-5">{NOT_FOUND_PAGE_MESSAGE}</p>
         <button type="button" className="not-found-page__go-home font-hanken-grotesk font-bold text-section bg-heading hover:bg-accent px-5 py-2.5 rounded cursor-pointer transition-colors" onClick={handleGoHome}>
            {NOT_FOUND_PAGE_BUTTON}
         </button>
      </div>
   );
};

export default NotFoundPage;
