const { Schema, model } = require("mongoose");

const CanchaSchema = new Schema({
  ID: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  Nombre: {
    type: String,
    required: true,
    trim: true,
  },
  Capacidad: {
    type: Number,
    required: true,
  },
  PrecioPorHora: {
    type: Number,
    required: true,
  },
});

const CanchaModel = model("Cancha", CanchaSchema);
module.exports = CanchaModel;
