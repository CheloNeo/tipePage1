import { userPOST, userGET } from "../../../handlers/userHandler";

import dbConnect from "../../../utils/db";

dbConnect();

const IniciarSesion = async (req, res) => {
  switch (req.method) {
    case "POST": // Inicia sesión con usuario
      return userPOST(req, res);

    case "GET":
      return userGET(req, res); // Retorna si está logueado el usuario
    default:
      return res
        .status(400)
        .json({ status: 400, descripcion: "Método incorrecto" });
  }
};

export default IniciarSesion;
