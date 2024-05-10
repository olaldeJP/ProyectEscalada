import { Router } from "express";
import { buscarUsuario } from "../middlewares/usuarios.Middleware.js";
import { logout } from "../middlewares/sesion.Middleware.js";
import { checkUsuarioConectado } from "../middlewares/authorizathion.Middleware.js";

export const sesionRouter = new Router();

sesionRouter.post("/login", buscarUsuario, (req, res, next) => {
  return res
    .status(200)
    .json({ status: "success", payload: req.session.usuario });
});

sesionRouter.get("/current", checkUsuarioConectado, (req, res, next) => {
  res.resultado(req.session.usuario);
});
sesionRouter.delete("/logout", logout, (req, res, next) => {
  res.aceptado();
});
