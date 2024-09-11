const express = require("express")
const { obtenerTodosLosUsuarios, registrarUsuario } = require("../controllers/users.controllers")

const router = express.Router()

//GET
router.post("/", obtenerTodosLosUsuarios)



//POST
router.post("/", registrarUsuario)



module.exports = router;