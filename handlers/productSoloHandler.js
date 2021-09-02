import Product from "../models/Product.js";

// DELETE
export const productSoloDELETE = async (req, res) => {
  try {
    const { id } = req.query;

    await Product.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ status: "200", descripcion: "Producto eliminado con éxito" });
  } catch (err) {
    res.status(400).json({ status: "400", descripcion: err.message });
  }
};

// GET
export const productSoloGET = async (req, res) => {
  try {
    const { id } = req.query;

    const producto = await Product.findById(id);

    return res.status(200).json(JSON.stringify(producto));
  } catch (err) {
    res.status(400).json({ status: "400", descripcion: err.message });
  }
};

// PUT
export const productSoloPUT = async (req, res) => {
  try {
    const { id } = req.query;
    const { nombre, descripcion, precio, stock, fotos } = req.body;

    await Product.findByIdAndUpdate(id, {
      nombre,
      descripcion,
      precio,
      stock,
      $set: {
        fotos: fotos,
      },
    });

    return res
      .status(200)
      .json({ status: "200", descripcion: "Producto actualizado con éxito" });
  } catch (err) {
    res.status(400).json({ status: "400", descripcion: err.message });
  }
};
