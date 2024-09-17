const ReservaModel = require("../models/reservaSchema.js");
const serviciosReservas = require("../services/reserva.services.js");


const obtenerTodasLasReservas = async (req, res) => {
    /* Request - esto es la solicitud que me manda el cliente (front) al server (back)*/
    /* Response - esto es la repuesta del servidor (back) al cliente (front)*/
    const result = await serviciosReservas.obtenerReservas();
  
    if (result.statusCode === 200) {
      res.status(200).json({ reservas: result.reservas });
    } else {
      res.status(500).json({ msg: "Error al traer las reservas" });
    }
  };

  const obtenerReserva = async (req, res) => {
    /* req: Request -> header - body - params - query */
    const result = await serviciosReservas.obtenerReserva(
      req.params.idReserva
    );
  
    if (result.statusCode === 200) {
      res.status(200).json({ reserva: result.reserva });
    } else {
      res.status(500).json({ msg: "Error al traer la reserva" });
    }
  };

  const crearReserva = async (req, res) => {

    
    const result = await serviciosReservas.crearReserva(req.body);
  
    if (result.statusCode === 201) {
      res.status(201).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al crear la Reserva" });
    }
  };
  
  const actualizarReserva = async (req, res) => {
    const result = await serviciosReservas.actualizarReserva(
      req.body,
      req.params.idReserva
    );
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg, reserva: result.reserva });
    } else {
      res.status(500).json({ msg: "Error al traer la cancha" });
    }
  };
  
  const borrarReserva = async (req, res) => {
    const result = await serviciosReservas.borrarReserva(req.params.idReserva);
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al eliminar la reserva" });
    }
  };

  module.exports = {
    actualizarReserva, borrarReserva, crearReserva, obtenerReserva, obtenerTodasLasReservas
  }