const { validationResult } = require("express-validator");
const serviciosUsuarios = require("../services/user.services.js");

const obtenerTodosLosUsuarios = async (req, res) => {
    const result = await serviciosUsuarios.obtenerUsuarios();
  
    if (result.statusCode === 200) {
      res.status(200).json({ usuarios: result.usuarios });
    } else {
      res.status(500).json({ msg: "Error al traer los usuarios" });
    }
  };

  const obtenerUnUsuario = async (req, res) => {
    const result = await serviciosUsuarios.obtenerUsuario(req.params.idUsuario);
  
    if (result.statusCode === 200) {
      res.status(200).json({ usuario: result.usuario });
    } else {
      res.status(500).json({ msg: "Error al traer el usuarios" });
    }
  };

  const crearUsuario = async (body) => {
 
  
    // Busca si ya existe un usuario con el mismo correo electrónico
    const usuarioExistente = await UsersModel.findOne({ email: body.email });
    if (usuarioExistente) {
      return {
        msg: "Ya existe un usuario con ese correo electrónico.",
        statusCode: 400,
      };
    }
  
    // Asigna el rol 'user' al nuevo usuario
  
    const nuevoUsuario = new UsersModel(body);
  
    // Encripta la contraseña
    const salt = await bcrypt.genSalt(10);
    nuevoUsuario.contrasenia = await bcrypt.hash(nuevoUsuario.contrasenia, salt);
  
    // Guarda el nuevo usuario en la base de datos
    await nuevoUsuario.save();
  
    return {
      msg: "Usuario creado con éxito",
      statusCode: 201,
    };
  };

  const registrarUsuario = async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(422).json({ msg: errors.array() });
    }
  
    const result = await serviciosUsuarios.registrarUsuario(req.body);
  
    if (result.statusCode === 201) {
      res.status(201).json({ msg: result.msg });
    } else {
      res.status(500).json({ msg: "Error al crear el usuario: " + result.msg });
    }
  };
  
  const actualizarUnUsuario = async (req, res) => {
    const result = await serviciosUsuarios.actualizarUsuario(
      req.params.idUsuario,
      req.body
    );
  
    if (result.statusCode === 200) {
      res.status(200).json({ msg: result.msg, usuarios: result.usuarios });
    } else {
      res.status(500).json({ msg: "Error al actualizar al usuario" });
    }
  };

  const inicioDeSesionUsuario = async (req, res) => {
    const result = await serviciosUsuarios.iniciarSesion(req.body);
  
    if (result.statusCode === 200) {
      res
        .status(200)
        .json({ msg: result.msg, token: result.token, rol: result.rol });
    } else if (result.statusCode === 400) {
      res.status(400).json({ msg: result.msg, bloqueado: true });
    } else {
      res.status(500).json({ msg: "Error al iniciar sesion del usuario" });
    }
  };

  module.exports={
    actualizarUnUsuario, crearUsuario, inicioDeSesionUsuario, obtenerTodosLosUsuarios, obtenerUnUsuario, registrarUsuario
  }