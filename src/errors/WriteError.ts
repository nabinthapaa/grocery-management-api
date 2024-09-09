import { httpStatusCode } from "../utils/httpStatusCode";
import { BaseError } from "./BaseError";

export class WriteError extends BaseError {
  constructor(message = "Error writing data") {
    super(message);
    this.status = httpStatusCode.BAD_REQUEST;
  }
}