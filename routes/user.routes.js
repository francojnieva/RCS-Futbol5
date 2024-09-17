const { Router } = require("express");
const {actualizarUnUsuario, inicioDeSesionUsuario, crearUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario, registrarUsuario} = require("../controllers/users.controllers.js")
const { check } = require("express-validator");
const auth = require("../middlewares/auth.js");
const router = Router();
router.get("/", auth("admin"), obtenerTodosLosUsuarios);
router.get("/:idUsuario", auth("admin"), obtenerUnUsuario);

router.post(
  "/CrearUsuario",
  [
    check("nombreUsuario", "Campo NOMBREUSUARIO esta vacio").not().isEmpty(),
    check("contrasenia", "Campo CONTRSAENIA esta vacio").not().isEmpty(),
    check("contrasenia", "Min: 8 caracteres y Max: 30 caracteres").isLength({
      min: 8,
      max: 30,
    }), auth("admin"),
  ],
  crearUsuario
);
router.post("/RegistrarUsuario", registrarUsuario);

router.post("/IniciarSesion", inicioDeSesionUsuario);
router.put("/:idUsuario", auth("user"), actualizarUnUsuario);

module.exports = router;