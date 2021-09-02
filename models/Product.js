const { Schema, model, models } = require("mongoose");

const ProductSchema = new Schema(
  {
    nombre: { type: String, required: true },
    fotos: { type: Array, required: true },
    stock: { type: Number },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = models.Product || model("Product", ProductSchema);
