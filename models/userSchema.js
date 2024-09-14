const { Schema, model } = require("mongoose");

const UsuarioSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  correo: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  contraseña: {
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
