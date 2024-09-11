import { glob } from "glob";
import path from "path";

const config = {
  server: {
    port: +(process.env.PORT || 3000),
  },
  routes: {
    router: glob.sync(path.resolve(__dirname, "routes") + "/**.*"),
    swaggerDocs: glob.sync(path.resolve(__dirname, "../swagger") + "/*.yaml"),
  },
  database: {
    client: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    accessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};

export default config;
