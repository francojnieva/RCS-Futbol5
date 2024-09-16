const { Schema, model } = require("mongoose");

const ReservaSchema = new Schema({
  ID: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
 
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
    enum: ["pendiente", "confirmada", "cancelada"],
  },
});

const ReservaModel = model("Reserva", ReservaSchema);
module.exports = ReservaModel;
