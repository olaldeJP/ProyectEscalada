import { Router } from "express";
import { actividadesRouter } from "./actividades.Routers.js";
import { usuariosRouter } from "./usuarios.Routers.js";
import { statusCode } from "../controllers/status.Controllers.js";
import { errorManager } from "../controllers/error.Controllers.js";
import { sesionRouter } from "./sesion.Router.js";

export const apiRouter = new Router();
apiRouter.use(statusCode);
apiRouter.use("/actividades", actividadesRouter);
apiRouter.use("/sesion", sesionRouter);
apiRouter.use("/usuarios", usuariosRouter);
apiRouter.use(errorManager);
