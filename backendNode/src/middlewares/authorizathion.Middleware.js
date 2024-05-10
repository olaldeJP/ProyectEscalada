import { emailAdmin } from "../config/config.js";
export async function isAdmin(req, res, next) {
  try {
    if (req.session.usuario.email == emailAdmin) {
      return next();
    } else {
      throw new Error("No estas autorizado");
    }
  } catch (error) {
    next(error);
  }
}
export async function checkUsuarioConectado(req, res, next) {
  try {
    if (req.session.usuario) {
      return next();
    }
    throw new Error("No Estas Conectado");
  } catch (error) {
    next(error);
  }
}
