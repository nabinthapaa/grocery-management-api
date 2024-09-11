import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import { UnauthorizedError } from "../errors";

export function authorize(requiredRole: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return next(new UnauthorizedError("Authorization token is required."));
    }

    const decoded: any = jwt.verify(token, config.jwt.secret);

    if (decoded.account_type !== requiredRole) {
      return next(new UnauthorizedError("Insufficient permission"));
    }

    next();
  };
}
