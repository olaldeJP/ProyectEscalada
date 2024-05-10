import session from "express-session";
import { SESSION_KEY } from "./config.js";
export const sessionConfig = async function (app) {
  try {
    app.use(
      session({
        secret: SESSION_KEY,
        resave: false,
        saveUninitialized: true,
      })
    );
    console.log("Session Config - Success");
  } catch (error) {
    console.log("Session Config - Error");
  }
};
