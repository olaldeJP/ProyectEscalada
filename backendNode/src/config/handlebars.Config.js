import { engine } from "express-handlebars";
import express from "express";
export const handlebarsConf = (app) => {
  try {
    app.engine(
      "handlebars",
      engine({
        helpers: {
          eq: (v1, v2) => v1 === v2,
          neq: (v1, v2) => v1 !== v2,
        },
      })
    );
    app.set("view engine", "handlebars");
    app.set("views", "./public/views");
    app.use(express.static("./public"));
    console.log("Engine HandleBars - Success");
  } catch (error) {
    console.log("Engine HandleBars - Error");
  }
};
