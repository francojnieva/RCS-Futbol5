const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  contrasenia: {
    type: String,
    required: true,
    trim: true,
  },
  rol: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  email: {
    type: String,
    trim: true,
  },
  telefono: {
    type: String,
    trim: true,
  },
});

const UsuarioModel = model("Usuario", UsuarioSchema);
module.exports = UsuarioModel;
