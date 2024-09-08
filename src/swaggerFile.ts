import config from "./config";

const swaggerAPISpecs = {
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
  apis: [...config.routes.swaggerDocs, ...config.routes.router],
};

export default swaggerAPISpecs;
