import { httpStatusCode } from "../utils";
import { BaseError } from "./BaseError";

export class NotFoundError extends BaseError {
  constructor(message = "Not Found") {
    super(message);
    this.status = httpStatusCode.NOT_FOUND;
  }
}
