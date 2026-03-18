import React from "react";
import { isHttpError } from "../../utils/errors/HttpError";
import ClientErrorPage from "../client-error-page/ClientErrorPage";
import GenericErrorPage from "../generic-error-page/GenericErrorPage";
import ServerErrorPage from "../server-error-page/ServerErrorPage";

export interface HttpErrorFallbackProps {
   error: Error | null;
}

const HttpErrorFallback = ({ error }: HttpErrorFallbackProps): React.ReactElement => {
   if (!error) {
      return <GenericErrorPage />;
   }

   if (isHttpError(error)) {
      const { status } = error;
      if (status >= 400 && status < 500) {
         return <ClientErrorPage />;
      }
      if (status >= 500 && status < 600) {
         return <ServerErrorPage />;
      }
   }

   return <GenericErrorPage />;
};

export default HttpErrorFallback;
