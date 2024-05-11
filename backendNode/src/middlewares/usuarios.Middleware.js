import { emailService } from "../config/nodemailer.Config.js";
import { usuarioModel } from "../models/usuarios.Model.js";
export async function buscarUsuario(req, res, next) {
  try {
    if (req.body.email && req.body.password) {
      req.session.usuario = await usuarioModel.buscarUser(
        req.body.email,
        req.body.password
      );
      if (req.session.usuario) {
        next();
      } else {
        throw new Error("Usuario No Encontrado");
      }
    } else {
      throw new Error("Error en enviar datos");
    }
  } catch (error) {
    return next(error);
  }
}

export async function mostrarUsuarios(req, res, next) {
  try {
    res["user"] = await usuarioModel.mostrarTodos();
    if (res.user) {
      res.resultado(res.user);
    } else {
      throw new Error("Error Mostrando Usuarios");
    }
  } catch (error) {
    next(error);
  }
}
export async function crearUsuario(req, res, next) {
  try {
    if (req.body.email && req.body.password && req.body.name) {
      req.session.usuario = await usuarioModel.crearUser(
        req.body.email,
        req.body.password,
        req.body.name
      );
      return next();
    } else {
      throw new Error("Datos Incorrectos");
    }
  } catch (error) {
    next(error);
  }
}
export async function chequearUsuario(req, res, next) {
  try {
    const existe = await usuarioModel.buscarUserSinPass(req.body.email);
    if (!existe) {
      return next();
    }
    throw new Error("Email Ya usado");
  } catch (err) {
    next(err);
  }
}
export async function enviarMailUsuarioCreado(req, res, next) {
  try {
    await emailService.sendWelcome(req.body);
    res.creado(req.body);
  } catch (error) {
    next(error);
  }
}
export async function enviarMailUsuarioBorrado(req, res, next) {
  try {
    await emailService.deleteUserEmail(req.session.usuario.email);
    next();
  } catch (error) {
    next(error);
  }
}
export async function borrarUsuario(req, res, next) {
  try {
    await usuarioModel.borrarUser(req.session.usuario.email, req.body.password);
    return next();
  } catch (error) {
    next(error);
  }
}

export async function cambiarNombreUser(req, res, next) {
  try {
    if (req.body.name) {
      res.user = await usuarioModel.cambiarNombre(
        req.session.usuario.email,
        req.body.name
      );
      return res.aceptado();
    }
    throw new Error("No Ingresaste ningun nombre");
  } catch (error) {
    next(error);
  }
}

export async function enviarConsulta(req, res, next) {
  try {
    if (req.body.mensaje && req.session.usuario.email) {
      await emailService.enviarConsulta(req.session.usuario, req.body);
      return res.aceptado();
    }
    throw new Error("Error en enviar la consulta");
  } catch (err) {
    next(err);
  }
}
