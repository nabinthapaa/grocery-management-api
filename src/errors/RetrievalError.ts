import { httpStatusCode } from "../utils/httpStatusCode";
import { BaseError } from "./BaseError";

export class RetrievalError extends BaseError {
  constructor(message = "Error retrieving data") {
    super(message);
    this.status = httpStatusCode.BAD_REQUEST;
  }
}
