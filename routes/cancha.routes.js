const express = require("express");
const router = express.Router();
const {
  obtenerCanchas,
  obtenerCancha,
  crearCancha,
  actualizarCancha,
  borrarCancha
} = require("../services/cancha.services.js");
const upload = require("../middlewares/multer.js");

router.get("/", async (req, res) => {
  const result = await obtenerCanchas();
  res.status(result.statusCode).json(result);
});

router.get("/:idCancha", async (req, res) => {
  const result = await obtenerCancha(req.params.idCancha);
  res.status(result.statusCode).json(result);
});

router.post("/", upload.single('imagen'), async (req, res) => {
  const result = await crearCancha(req.body, req.file);
  res.status(result.statusCode).json(result);
});

router.put("/:idCancha", async (req, res) => {
  const result = await actualizarCancha(req.body, req.params.idCancha);
  res.status(result.statusCode).json(result);
});

router.delete("/:idCancha", async (req, res) => {
  const result = await borrarCancha(req.params.idCancha);
  res.status(result.statusCode).json(result);
});

module.exports = router;
