import { pool } from "../config/db.Config.js";

class actividadesModelClass {
  #dataBase;
  constructor(onePool) {
    this.#dataBase = onePool;
  }
  async getActividades() {
    return this.#dataBase
      .query("select * from actividades")
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  async crearActividad(data) {
    return await this.#dataBase
      .query("insert into actividades set ?", {
        nombre: data.nombre,
        descripcion: data.descripcion,
        img_id: data.img_id,
      })
      .then(function (resultado) {
        return resultado;
      })

      .catch(function (error) {
        console.error(error);
      });
  }

  async borrarActividades(idActividad) {
    return this.#dataBase
      .query(`delete from actividades where _id=? `, idActividad)
      .then(function (resultado) {
        return resultado;
      })
      .catch(function (error) {
        console.error(error);
        return null;
      });
  }

  async _toPojo(data) {
    return {
      _id: data._id,
      nombre: data.nombre,
      descripcion: data.descripcion,
      img_id: data.img_id,
    };
  }
}

export const actividadesModel = new actividadesModelClass(pool);
