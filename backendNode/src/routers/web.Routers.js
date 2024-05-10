import { Router } from "express";
import {
  checkCampos,
  crearAct,
} from "../middlewares/actividades.Middleware.js";

export const webRouter = new Router();

webRouter.get("/home", (req, res, next) => {
  res
    .status(200)
    .render("success.handlebars", { usuario: req.session.usuario });
});
