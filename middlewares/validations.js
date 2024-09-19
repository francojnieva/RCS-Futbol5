const { check } = require("express-validator");

const validateUserRegistration = [
    check("nombre", "Este campo es obligatorio").not().isEmpty(),
    check("nombre", "El nombre debe tener entre 3 y 20 caracteres").isLength({ min: 3, max: 20, }),
    check("email", "Este campo es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico inválido").isEmail(),
    check("contrasenia", "Este campo es obligatorio").not().isEmpty(),
    check("contrasenia", "La contraseña debe tener entre 8 y 30 caracteres").isLength({ min: 8, max: 30, })
]

const validateLogin = [
    check("email", "Este campo es obligatorio").not().isEmpty(),
    check("email", "Correo electrónico inválido").isEmail(),
    check("contrasenia", "Este campo es obligatorio").not().isEmpty(),
    check("contrasenia", "La contraseña debe tener entre 8 y 30 caracteres").isLength({ min: 8, max: 30, })
]


module.exports = {
    validateUserRegistration,
    validateLogin,
}