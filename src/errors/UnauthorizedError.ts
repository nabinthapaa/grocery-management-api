import { httpStatusCode } from "../utils";
import { BaseError } from "./BaseError";

export class UnauthorizedError extends BaseError {
  constructor(message = "Unauthorized") {
    super(message);
    this.status = httpStatusCode.UNAUTHORIZED;
  }
}
