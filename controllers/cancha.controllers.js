const serviciosCanchas = require("../services/cancha.services");

const obtenerTodasLasCanchas = async (req, res) => {
    /* Request - esto es la solicitud que me manda el cliente (front) al server (back)*/
    /* Response - esto es la repuesta del servidor (back) al cliente (front)*/
    const result = await serviciosCanchas.obtenerCanchas();
  
    if (result.statusCode === 200) {
      res.status(200).json({ productos: result.productos });
    } else {
      res.status(500).json({ msg: "Error al traer los productos" });
    }
  };