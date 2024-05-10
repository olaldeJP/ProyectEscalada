import { Router } from "express";
import {
  checkCampos,
  crearAct,
  devolerArregloConDatos,
  getCamposMiddleware,
  borrarActividad,
} from "../middlewares/actividades.Middleware.js";
export const actividadesRouter = new Router();

actividadesRouter.post("/", checkCampos, crearAct);
actividadesRouter.get("/", getCamposMiddleware, devolerArregloConDatos);
actividadesRouter.delete("/:idActividad", borrarActividad);
