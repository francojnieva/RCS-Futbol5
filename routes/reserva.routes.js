const express = require("express");
const router = express.Router();
const {
actualizarReserva, crearReserva, borrarReserva, obtenerReserva, obtenerReservas
} = require("../services/reserva.services.js");

router.get("/", async (req, res) => {
  const result = await obtenerReservas();
  res.status(result.statusCode).json(result);
});

router.get("/:idReserva", async (req, res) => {
  const result = await obtenerReserva(req.params.idReserva);
  res.status(result.statusCode).json(result);
});

router.post("/", async (req, res) => {
  const result = await crearReserva(req.body);
  res.status(result.statusCode).json(result);
});

router.put("/:idReserva", async (req, res) => {
  const result = await actualizarReserva(req.body, req.params.idReserva);
  res.status(result.statusCode).json(result);
});

router.delete("/:idReserva", async (req, res) => {
  const result = await borrarReserva(req.params.idReserva);
  res.status(result.statusCode).json(result);
});

module.exports = router;