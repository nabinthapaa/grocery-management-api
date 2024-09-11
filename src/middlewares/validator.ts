import { NextFunction, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { z } from "zod";
import { validate } from "../utils";

export function validateRequestBody<T>(schema: z.ZodSchema) {
  return function (req: Request, _: Response, next: NextFunction) {
    const { success, errors, data } = validate<T>(schema, req.body);
    if (!success && errors) {
      return next(new Error(errors[0].message));
    } else if (success) {
      req.body = data;
      return next();
    }
    return next(new Error("Error parsing data"));
  };
}

export function validateRequestParams<T extends ParamsDictionary>(
  schema: z.ZodSchema,
) {
  return function (req: Request, _: Response, next: NextFunction) {
    const { success, errors, data } = validate<T>(schema, req.params);
    if (!success && errors) {
      return next(new Error(errors[0].message));
    } else if (success && data) {
      req.params = data;
      return next();
    }

    next(new Error("Error parsing data"));
  };
}

export function validateRequestQuery<T extends ParsedQs>(schema: z.ZodSchema) {
  return function (req: Request, _: Response, next: NextFunction) {
    const { success, errors, data } = validate<T>(schema, req.query);
    if (!success && errors) {
      return next(new Error(errors[0].message));
    } else if (success && data) {
      req.query = data;
      return next();
    }
    return next(new Error("Error parsing data"));
  };
}
