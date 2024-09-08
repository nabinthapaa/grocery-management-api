import bodyParser from "body-parser";
import express from "express";
import { glob } from "glob";
import path from "node:path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "./config";
import router from "./routes";

const app = express();
const routes = glob.sync("*/routes/**.ts");
const swagger = glob.sync("*/swagger/**.yaml");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Grocery Management API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [...swagger, ...routes],
};

const swaggerSpec = swaggerJSDoc(options);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.static(path.resolve(__dirname, "static")));
app.use((req, res, next) => {
  console.info(`${req.method} ${req.url}`);
  next();
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(router);

app.listen(config.server.port, () => {
  console.log(
    `${new Date().toLocaleTimeString()}\tListening on http://localhost:8000`,
  );
});
