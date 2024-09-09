import { httpStatusCode } from "../utils/httpStatusCode";

export class BaseError extends Error {
  status: number;
  constructor(message: string = "Internal Server Error") {
    super(message);
    this.status = httpStatusCode.INTERNAL_SERVER_ERROR;
  }
}
