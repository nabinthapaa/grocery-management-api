import { glob } from "glob";
import path from "node:path";

const config = {
  server: {
    port: process.env.PORT,
  },
  routes: {
    router: glob.sync(path.resolve(__dirname, "routes") + "/**.ts"),
    swaggerDocs: glob.sync(path.resolve(__dirname, "../swagger") + "/*.yaml"),
  },
};

console.log(path.resolve(__dirname, "routes") + "/**.ts");

export default config;
