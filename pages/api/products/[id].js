import dbConnect from "../../../utils/db";
import {
  productSoloGET,
  productSoloDELETE,
  productSoloPUT,
} from "../../../handlers/productSoloHandler";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "GET":
      return productSoloGET(req, res);
    case "DELETE":
      return productSoloDELETE(req, res);
    case "PUT":
      return productSoloPUT(req, res);
    default:
      return res
        .status(400)
        .json({ status: "400", descripcion: "Método no encontrado" });
  }
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

export default handler;
