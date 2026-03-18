import type { HttpError } from "../../../errors/HttpError";

export interface FetchResult<T> {
   data: T | null;
   loading: boolean;
   error: Error | HttpError | null;
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
