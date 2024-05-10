import { Router } from "express";
import {
  borrarUsuario,
  mostrarUsuarios,
  crearUsuario,
  cambiarNombreUser,
  enviarConsulta,
  enviarMailUsuarioCreado,
  enviarMailUsuarioBorrado,
} from "../middlewares/usuarios.Middleware.js";
import { logout } from "../middlewares/sesion.Middleware.js";
import { checkUsuarioConectado } from "../middlewares/authorizathion.Middleware.js";
export const usuariosRouter = new Router();

usuariosRouter.get("/getUsers", mostrarUsuarios);
usuariosRouter.post("/", crearUsuario, enviarMailUsuarioCreado);
usuariosRouter.put("/", checkUsuarioConectado, cambiarNombreUser);
usuariosRouter.delete(
  "/",
  checkUsuarioConectado,
  borrarUsuario,
  enviarMailUsuarioBorrado,
  logout,
  (req, res, next) => {
    res.aceptado();
  }
);
usuariosRouter.post("/enviarConsulta", enviarConsulta);
