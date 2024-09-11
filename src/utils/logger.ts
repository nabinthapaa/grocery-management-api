import path from "path";
import * as winston from "winston";

const logFormat = winston.format.printf((info) => {
  const formattedNamespace = info.metadata.namespace || "";

  return `${info.metadata.timestamp} [${info.level}] [${formattedNamespace}]: ${info.message}`;
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.metadata(),
    logFormat,
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.colorize({
        all: true,
      }),
    }),
    new winston.transports.File({
      filename: "combined.log",
      dirname: path.join(__dirname, "../../logs"),
    }),
    new winston.transports.File({
      filename: "info.log",
      dirname: path.join(__dirname, "../../logs"),
      level: "info",
    }),
    new winston.transports.File({
      filename: "errors.log",
      dirname: path.join(__dirname, "../../logs"),
      level: "error",
    }),
  ],
});

export const loggerWithNameSpace = function (namespace: string) {
  return logger.child({ namespace });
};
