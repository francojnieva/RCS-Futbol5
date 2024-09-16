const { Router } = require("express");
const {actualizarUnUsuario, inicioDeSesionUsuario, crearUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario, registrarUsuario} = require("../controllers/users.controllers.js")
const { check } = require("express-validator");
// const auth = require("../middlewares/auth");
const router = Router();
router.get("/", obtenerTodosLosUsuarios);
router.get("/:idUsuario", obtenerUnUsuario);

router.post(
  "/",
  [
    check("nombreUsuario", "Campo NOMBREUSUARIO esta vacio").not().isEmpty(),
    check("contrasenia", "Campo CONTRSAENIA esta vacio").not().isEmpty(),
    check("contrasenia", "Min: 8 caracteres y Max: 30 caracteres").isLength({
      min: 8,
      max: 30,
    }),
  ],
  crearUsuario
);
router.post("/RegistrarUsuario", registrarUsuario);

router.post("/iniciarSesion", inicioDeSesionUsuario);
router.put("/:idUsuario", actualizarUnUsuario);

module.exports = router;