const { Schema, model } = require("mongoose");

const ReservaSchema = new Schema({
  FechaHora: {
    type: Date,
    required: true,
  },
  Precio: {
    type: Number,
    required: true,
  },
  Estado: {
    type: String,
    default: "pendiente",
    enum: ["pendiente", "finalizada", "en proceso"],
  },
  ID_Cancha: {
    type: String,
    required: true
  },
  ID_Usuario: {
    type: String,
    required: true
  }
});

const ReservaModel = model("Reserva", ReservaSchema);
module.exports = ReservaModel;
