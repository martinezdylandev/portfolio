export type HttpErrorDetails = unknown;

export class HttpError extends Error {
   public readonly status: number;
   public readonly details?: HttpErrorDetails;

   constructor({ status, message, details }: { status: number; message: string; details?: HttpErrorDetails }) {
      super(message);
      this.name = "HttpError";
      this.status = status;
      this.details = details;
   }
}

export function isHttpError(error: unknown): error is HttpError {
   return error instanceof HttpError;
}
