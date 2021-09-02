import Product from "../models/Product.js";

// POST
export const productsPOST = async (req, res) => {
  try {
    const { nombre, precio, descripcion, stock, fotos } = req.body;

    const productoNuevo = await new Product({
      nombre,
      precio,
      descripcion,
      stock,
      fotos,
    });

    await productoNuevo.save();

    return res
      .status(200)
      .json({ status: "200", descripcion: "Producto añadido con éxito" });
  } catch (err) {
    res.status(400).json({
      status: "400",
      descripcion: err.message,
    });
  }
};

// GET
export const productsGET = async (req, res) => {
  try {
    const productos = await Product.find().sort({ createdAt: -1 });
    return res.status(200).json(JSON.stringify(productos));
  } catch (err) {
    res.status(400).json({
      status: "400",
      descripcion: err.message,
    });
  }
};
