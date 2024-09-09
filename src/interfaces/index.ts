export * from "./Authentication";

export type ReqError = {
  errro: string;
};

export type ValidationErrors<T> = {
  data: T | null;
  success: boolean;
  errors: Errors[] | null;
};

export interface Errors {
  error: string | number;
  message: string;
}

export type Result<T> = {
  error: string | null;
  [key: string]: T | string | null;
};
