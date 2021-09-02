import dbConnect from "../../../utils/db";
import { productsPOST, productsGET } from "../../../handlers/productHandler";

dbConnect();

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      return productsPOST(req, res);
    case "GET":
      return productsGET(req, res);
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
