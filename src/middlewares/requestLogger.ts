import { NextFunction, Request, Response } from "express";
import { loggerWithNameSpace } from "../utils";

const logger = loggerWithNameSpace("Request Logger");

/**
 * Logs incoming HTTP requests.
 */
export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  logger.info(`${req.hostname}: ${req.originalUrl}`);
  logger.info(`${req.method}: ${req.url}`);
  next();
}
