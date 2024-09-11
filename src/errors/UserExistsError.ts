import { httpStatusCode } from "../utils";
import { BaseError } from "./BaseError";

export class UserExistsError extends BaseError {
  constructor(message = "User Already exists") {
    super(message);
    this.status = httpStatusCode.UNAUTHORIZED;
  }
}
