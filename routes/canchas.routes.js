// routes/canchas.routes.js
const express = require("express");
const { obtenerUnaCanchaPorIdOTodos, crearUnaCancha, editarUnaCancha, borrarUnaCancha } = require("../controllers/canchas.controllers");

const router = express.Router()

router.get("/", obtenerUnaCanchaPorIdOTodos);
router.post("/", crearUnaCancha);
router.put("/:idCancha", editarUnaCancha);
router.delete("/:idCancha", borrarUnaCancha);

module.exports = router;
