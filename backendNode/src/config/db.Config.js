import mysql from "mysql";
import util from "util";
import {
  MYSQL_DB_NAME,
  MYSQL_PASSWORD,
  MYSQL_HOST,
  MYSQL_USER,
} from "./config.js";
export const pool = mysql.createPool({
  connectionLimit: 10,
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DB_NAME,
});

pool.query = util.promisify(pool.query);
