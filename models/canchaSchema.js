const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const canchaSchema = new Schema({
  Nombre: {
    type: String,
    required: true
  },
  PrecioPorHora: {
    type: Number,
    required: true
  },
  Capacidad: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Cancha', canchaSchema);
