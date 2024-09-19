const { Router } = require("express");
const {actualizarUnUsuario, inicioDeSesionUsuario, crearUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario, registrarUsuario} = require("../controllers/users.controllers.js")
const auth = require("../middlewares/auth.js");
const { validateUserRegistration, validateLogin } = require("../middlewares/validations.js");

const router = Router();

router.get("/", auth("admin"), obtenerTodosLosUsuarios)
router.get("/:idUsuario", auth("admin"), obtenerUnUsuario)
router.post("/CrearUsuario", auth("admin"), crearUsuario)
router.post("/RegistrarUsuario", validateUserRegistration, registrarUsuario)
router.post("/IniciarSesion", validateLogin, inicioDeSesionUsuario)
router.put("/:idUsuario", validateUserRegistration, actualizarUnUsuario)

module.exports = router;