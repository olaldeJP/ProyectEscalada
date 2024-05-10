import md5 from "md5";
import { pool } from "../config/db.Config.js";

class usuarioModelClass {
  #dataBase;
  constructor(onePool) {
    this.#dataBase = onePool;
  }
  async mostrarTodos() {
    return this.#dataBase
      .query("select * from usuarios")
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  async crearUser(email, password, name) {
    return await this.#dataBase
      .query("insert into usuarios set ?", {
        email: email,
        password: md5(password),
        name: name,
      })
      .then(function (resultado) {
        return resultado;
      })

      .catch(function (error) {
        console.error(error);
      });
  }

  async buscarUser(email, password) {
    const usuario = await this.#dataBase
      .query("select * from usuarios where email=? and password =?", [
        email,
        md5(password),
      ])
      .then(function (resultado) {
        return resultado[0];
      });
    if (usuario) {
      return await this._toPojo(usuario);
    } else return undefined;
  }
  async borrarUser(email, password) {
    return this.#dataBase
      .query(`delete from usuarios where email=? and password=? `, [
        email,
        md5(password),
      ])
      .then(function (resultado) {
        return resultado;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  async cambiarNombre(email, name) {
    return this.#dataBase
      .query(`UPDATE usuarios SET name = ? WHERE email = ?`, [name, email])
      .then(function (result) {
        return result;
      })
      .catch(function (error) {
        return error;
      });
  }
  async _toPojo(data) {
    return {
      _id: data._id,
      email: data.email,
      name: data.name,
    };
  }
}

export const usuarioModel = new usuarioModelClass(pool);
