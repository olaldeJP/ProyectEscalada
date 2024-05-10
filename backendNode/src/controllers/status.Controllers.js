export async function statusCode(req, res, next) {
  res["creado"] = (payload) => {
    res.status(201).json({ status: "success", payload });
  };
  res["resultado"] = (payload) => {
    res.status(200).json({ status: "success", payload });
  };
  res["aceptado"] = () => {
    res.status(202).json({ status: "success" });
  };
  next();
}

export async function usuarioController(req, res) {
  res.resultado(res.session);
}
export async function returnAceptado(req, res) {
  res.aceptado();
}
