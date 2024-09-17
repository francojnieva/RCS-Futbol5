const ReservaModels = require("../models/reservaSchema.js");
const UsuarioModel = require("../models/userSchema.js");
const reservationConfirmation = require("../templates/reservationConfirmation.js");

const obtenerReservas = async () => {
    const reservas = await ReservaModels.find();
    return {
        reservas,
      statusCode: 200,
    };
  };
  
  const obtenerReserva = async (idReserva) => {
    const reserva = await CanchaModel.findOne({ _id: idReserva });
    return {
        reserva,
      statusCode: 200,
    };
  };
  
  const crearReserva = async (body) => {
   
    
    try {
      const { email } = await UsuarioModel.findById(body.ID_Usuario)
      const reservaFechaExistente = await ReservaModels.findOne({ FechaHora: body.FechaHora });
      const reservaCanchaExistente = await ReservaModels.findOne({ ID_Cancha: body.ID_Cancha });

      if (reservaFechaExistente) {
        
              return {
                  msg: "La cancha ya esta reservada en ese horario",
                  statusCode: 400,
                };
          
        
        }
      const nuevaReserva = new ReservaModels(body);
      await nuevaReserva.save();
      await reservationConfirmation(email, body.FechaHora, body.ID_Cancha)
      return {
        msg: "Reserva creada con éxito",
        statusCode: 201,
      };
    } catch (error) {
      return {
        msg: "Error al crear la reserva",
        statusCode: 500,
        error: error.message,
      };
    }
  };
  
  
  const actualizarReserva = async (body, idReserva) => {
    await ReservaModels.findByIdAndUpdate({ _id: idReserva }, body);
    const reserva = await ReservaModels.find();
    return {
      msg: "Reserva actualizada",
      reserva,
      statusCode: 200,
    };
  };
  
  const borrarReserva = async (idReserva) => {
    await ReservaModels.findByIdAndDelete({ _id: idReserva });
  
    return {
      msg: "Reserva eliminada",
      statusCode: 200,
    };
  };
  
  module.exports={
    actualizarReserva, borrarReserva, crearReserva, obtenerReserva, obtenerReservas
  }