const UsersModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


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

      