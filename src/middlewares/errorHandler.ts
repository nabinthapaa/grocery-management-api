import { NextFunction, Request, Response } from "express";
import { BaseError } from "../errors";
import { httpStatusCode, loggerWithNameSpace } from "../utils";

const logger = loggerWithNameSpace("Error Handler");

/**
 * Handles Not Found responses.
 *
 * @param {Request} req - The `Custom Request` inheriting express Request object.(unused)
 * @param {Response} res - The Express Response object to send the response.
 * @returns {Response<Record<string, string>>} - Response with a status code and Not found error message.
 */
export function routeNotFound(
  req: Request,
  res: Response,
): Response<Record<string, string>> {
  logger.warn(`${req.url} Not found`);
  return res.status(httpStatusCode.NOT_FOUND).json({
    message: "Not Found",
  });
}

/**
 * Handles generic errors and sends appropriate HTTP responses.
 *
 * @param {Error} error - The error object thrown or passed to the function.
 * @param {Request} req - The `Custom Request` inheriting express Request object.(unused)
 * @param {Response} res - The Express Response object to send the response.
 * @param {NextFunction} next - The Express NextFunction object (unused in this function).
 * @returns {Response<Record<string, string>>} - Response with an appropriate status code and error message.
 */
export function genericErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response<Record<string, string>> {
  if (error.stack) {
    logger.error(error.stack);
  }

  switch (true) {
    case error instanceof BaseError:
      return res.status(error.status).json({
        message: error.message,
      });
    default:
      return res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json({
        message: "Internal Server Errror",
      });
  }
}
