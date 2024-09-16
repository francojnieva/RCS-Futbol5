const serviciosCanchas = require("../services/cancha.services.js");

const obtenerTodasLasCanchas = async (req, res) => {
    /* Request - esto es la solicitud que me manda el cliente (front) al server (back)*/
    /* Response - esto es la repuesta del servidor (back) al cliente (front)*/
    const result = await serviciosCanchas.obtenerCanchas();
  
    if (result.statusCode === 200) {
      res.status(200).json({ canchas: result.canchas });
    } else {
      res.status(500).json({ msg: "Error al traer las canchas" });
    }
  };

  const obtenerCancha = async (req, res) => {
    /* req: Request -> header - body - params - query */
    const result = await serviciosCanchas.obtenerCancha(
      req.params.idCancha
    );
  
    if (result.statusCode === 200) {
      res.status(200).json({ cancha: result.cancha });
    } else {
      res.status(500).json({ msg: "Error al traer la cancha" });
    }
  };

  const crearCancha = async (req, res) => {
    const result = await serviciosCanchas.crearCancha(req.body);
  
    if (result.statusCode === 201) {
      res.status(201).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al crear la cancha" });
    }
  };
  
  const actualizarCancha = async (req, res) => {
    const result = await serviciosCanchas.actualizarCancha(
      req.body,
      req.params.idCancha
    );
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg, canchas: result.canchas });
    } else {
      res.status(500).json({ msg: "Error al traer la cancha" });
    }
  };
  
  const borrarCancha = async (req, res) => {
    const result = await serviciosCanchas.borrarCancha(req.params.idCancha);
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al eliminar la cancha" });
    }
  };

  module.exports = {
    actualizarCancha, borrarCancha, crearCancha, obtenerCancha, obtenerTodasLasCanchas
  }