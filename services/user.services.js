const UsersModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerConfirmation = require("../templates/registerConfirmation.js");


const obtenerUsuarios = async () => {
    const usuarios = await UsersModel.find();
  
    return {
      usuarios,
      statusCode: 200,
    };
  };

  const obtenerUsuario = async (idUsuario) => {
    const usuario = await UsersModel.findOne({ _id: idUsuario });
    return {
      usuario,
      statusCode: 200,
    };
  };

  const registrarUsuario = async (body) => {
    body.rol = "user";
    const usuarioExistente = await UsersModel.findOne({ email: body.email });
    if (usuarioExistente) {
      return {
        msg: "Ya existe un usuario con ese correo electrónico.",
        statusCode: 400,
      };
    }
    
    const usuario = new UsersModel(body);
   
    const salt = await bcrypt.genSalt(10);
    usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, salt);
    await registerConfirmation(usuario.email, usuario.nombre)
    await usuario.save();
    return {
      msg: "Usuario creado con exito",
      statusCode: 201,
    };
  };

  const actualizarUsuario = async (idUsuario, body) => {
    await UsersModel.findByIdAndUpdate({ _id: idUsuario }, body);
    const usuarios = await UsersModel.find();
    return {
      msg: "Usuario actualizado",
      usuarios,
      statusCode: 200,
    };
  };
  
  const borrarUsuario = async (idUsuario) => {
    await UsersModel.findByIdAndDelete({ _id: idUsuario });
  
    return {
      msg: "Usuario eliminado",
      statusCode: 200,
    };
  };

  const iniciarSesion = async (body) => {
    const usuarioExiste = await UsersModel.findOne({
      email: body.email,
    });
  
    // if (usuarioExiste.bloqueado) {
    //   return {
    //     msg: "Usuario bloqueado",
    //     statusCode: 400,
    //   };
    // }
  
    if (!usuarioExiste) {
      return {
        msg: "Usuario y/o contraseña incorrecto",
        statusCode: 400,
      };
    }
  
    const compararContrasenias = await bcrypt.compare(
      body.contrasenia,
      usuarioExiste.contrasenia
    );
  
    if (compararContrasenias) {
      const payload = {
        idUsuario: usuarioExiste._id,
        rol: usuarioExiste.rol,
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET);
  
      return {
        msg: "Usuario logueado",
        token,
        rol: usuarioExiste.rol,
        statusCode: 200,
      };
    }
  
    return {
      msg: "Usuario y/o contraseña incorrecto",
      statusCode: 400,
    };
  };

  const crearUsuario = async (body) => {
    // Verifica que el rol del usuario que está creando el nuevo usuario sea 'admin'
    // Busca si ya existe un usuario con el mismo correo electrónico
    const usuarioExistente = await UsersModel.findOne({ email: body.email });
    if (usuarioExistente) {
      return {
        msg: "Ya existe un usuario con ese correo electrónico.",
        statusCode: 400,
      };
    }
  
    if (
      (body?.rol && body?.rol !== "admin") ||
      (body?.rol && body?.rol !== "user")
    ) {
      return {
        msg: "Rol incorrecto. Solo se puede elegir entre USER/ADMIN",
        statusCode: 400,
      };
    }  
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

  module.exports = {
    actualizarUsuario, borrarUsuario, crearUsuario, iniciarSesion, obtenerUsuario, obtenerUsuarios, registrarUsuario
  };