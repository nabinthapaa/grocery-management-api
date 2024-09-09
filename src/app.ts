import bodyParser from "body-parser";
import express from "express";
import path from "node:path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "./config";
import router from "./routes";
import swaggerAPISpecs from "./swaggerFile";
import { routeNotFound, genericErrorHandler } from "./middlewares/errorHandler";

const app = express();
const swaggerSpec = swaggerJSDoc(swaggerAPISpecs);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(express.static(path.join(__dirname, "../static")));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(router);
app.use(routeNotFound);
app.use(genericErrorHandler);

app.listen(config.server.port, () => {
  console.log(
    `${new Date().toLocaleTimeString()}\tListening on http://localhost:8000`,
  );
});
