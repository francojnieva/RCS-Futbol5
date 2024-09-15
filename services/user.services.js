const UsersModel = require("../models/userSchema.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const obtenerUsuarios = async () => {
    //const usuarios = await UsersModel.find({}, "-contrasenia");
    const usuarios = await UsersModel.find();
  
    return {
      usuarios,
      statusCode: 200,
    };
  };