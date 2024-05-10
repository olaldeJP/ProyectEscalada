import express from "express";
import { sessionConfig } from "../src/config/sessions.Config.js";
import { apiRouter } from "../src/routers/api.Routers.js";
import cors from "cors";
import { cloudinaryConfig } from "../src/config/cloudinary.Config.js";
import { handlebarsConf } from "../src/config/handlebars.Config.js";
import { webRouter } from "../src/routers/web.Routers.js";
export class Server {
  #server;
  constructor(port) {
    try {
      this.#server = express();
      this.#server.use(express.json());
      this.#server.use(express.urlencoded({ extended: true }));
      handlebarsConf(this.#server);
      sessionConfig(this.#server);
      cloudinaryConfig(this.#server);
      this.#server.use(cors());
      this.#server.use("/api", apiRouter);
      this.#server.use("/", webRouter);
      this.#server.listen(port, () => {
        console.log(`Server Listening Port : ${port}`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
