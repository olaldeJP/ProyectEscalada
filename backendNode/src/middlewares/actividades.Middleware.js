import { get_URL_Img, uploaderFunction } from "../config/cloudinary.Config.js";
import { actividadesModel } from "../models/actividades.Models.js";
import { v2 as cloudinary } from "cloudinary";
export async function checkCampos(req, res, next) {
  try {
    req.body.img_id = "";
    if (req.files && Object.keys(req.files).length > 0) {
      const imagen = req.files.imagen;
      req.body.img_id = await uploaderFunction(imagen.tempFilePath);
      if (req.body.nombre && req.body.descripcion) {
        return next();
      }
    }
    throw new Error("Campos Invalidos");
  } catch (error) {
    next(error);
  }
}

export async function crearAct(req, res, next) {
  try {
    res["actividad"] = await actividadesModel.crearActividad(req.body);
    res.status(200).json({ status: "success" });
  } catch (error) {
    next(error);
  }
}

export async function getCamposMiddleware(req, res, next) {
  try {
    res["actividades"] = await actividadesModel.getActividades();
    if (res.actividades) {
      return next();
    } else {
      throw new Error("No Hay Actividades");
    }
  } catch (error) {
    next(error);
  }
}

export async function devolerArregloConDatos(req, res, next) {
  const actividades = res.actividades.map((element) => {
    const img_path = get_URL_Img(element);
    return {
      ...element,
      img_path,
    };
  });
  res.resultado(actividades);
}

export async function borrarActividad(req, res, next) {
  try {
    const borrado = await actividadesModel.borrarActividades(
      req.params.idActividad
    );
    res.aceptado();
  } catch (error) {
    next(error);
  }
}
