import path from "node:path";
import winston, { format } from "winston";

const logFormat = format.printf((info) => {
  const formattedNamespace = info.metadata.namespace || "";

  return `${info.metadata.timestamp} [${info.level}] [${formattedNamespace}]: ${info.message}`;
});

const logger = winston.createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.metadata(),
    logFormat,
  ),
  transports: [
    new winston.transports.Console({
      format: format.colorize({
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

const loggerWithNameSpace = function (namespace: string) {
  return logger.child({ namespace });
};

export default loggerWithNameSpace;
